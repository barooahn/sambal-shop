-- Supabase Stripe Integration Tables
-- Run this script in your Supabase SQL Editor

-- Create custom enum types for status fields
CREATE TYPE subscription_status AS ENUM (
  'not_started',
  'active',
  'past_due',
  'canceled',
  'unpaid',
  'incomplete',
  'incomplete_expired',
  'trialing',
  'paused'
);

CREATE TYPE order_status AS ENUM (
  'pending',
  'processing',
  'completed',
  'canceled',
  'refunded'
);

-- Create stripe_customers table
CREATE TABLE stripe_customers (
  id BIGSERIAL PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  customer_id TEXT UNIQUE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  deleted_at TIMESTAMPTZ
);

-- Create stripe_subscriptions table
CREATE TABLE stripe_subscriptions (
  id BIGSERIAL PRIMARY KEY,
  customer_id TEXT NOT NULL,
  subscription_id TEXT,
  price_id TEXT,
  status subscription_status DEFAULT 'not_started',
  current_period_start BIGINT,
  current_period_end BIGINT,
  cancel_at_period_end BOOLEAN DEFAULT FALSE,
  payment_method_brand TEXT,
  payment_method_last4 TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  deleted_at TIMESTAMPTZ,
  FOREIGN KEY (customer_id) REFERENCES stripe_customers(customer_id) ON DELETE CASCADE
);

-- Create stripe_orders table
CREATE TABLE stripe_orders (
  id BIGSERIAL PRIMARY KEY,
  checkout_session_id TEXT UNIQUE NOT NULL,
  payment_intent_id TEXT,
  customer_id TEXT NOT NULL,
  amount_subtotal BIGINT NOT NULL,
  amount_total BIGINT NOT NULL,
  currency TEXT DEFAULT 'gbp',
  payment_status TEXT,
  status order_status DEFAULT 'pending',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  deleted_at TIMESTAMPTZ,
  FOREIGN KEY (customer_id) REFERENCES stripe_customers(customer_id) ON DELETE CASCADE
);

-- Create indexes for better performance
CREATE INDEX idx_stripe_customers_user_id ON stripe_customers(user_id);
CREATE INDEX idx_stripe_customers_customer_id ON stripe_customers(customer_id);
CREATE INDEX idx_stripe_subscriptions_customer_id ON stripe_subscriptions(customer_id);
CREATE INDEX idx_stripe_subscriptions_subscription_id ON stripe_subscriptions(subscription_id);
CREATE INDEX idx_stripe_orders_customer_id ON stripe_orders(customer_id);
CREATE INDEX idx_stripe_orders_checkout_session_id ON stripe_orders(checkout_session_id);

-- Enable Row Level Security (RLS)
ALTER TABLE stripe_customers ENABLE ROW LEVEL SECURITY;
ALTER TABLE stripe_subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE stripe_orders ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for stripe_customers
CREATE POLICY "Users can view their own customer records" ON stripe_customers
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own customer records" ON stripe_customers
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own customer records" ON stripe_customers
  FOR UPDATE USING (auth.uid() = user_id);

-- Create RLS policies for stripe_subscriptions
CREATE POLICY "Users can view their own subscriptions" ON stripe_subscriptions
  FOR SELECT USING (
    customer_id IN (
      SELECT customer_id FROM stripe_customers WHERE user_id = auth.uid()
    )
  );

CREATE POLICY "Service role can manage subscriptions" ON stripe_subscriptions
  FOR ALL USING (auth.role() = 'service_role');

-- Create RLS policies for stripe_orders
CREATE POLICY "Users can view their own orders" ON stripe_orders
  FOR SELECT USING (
    customer_id IN (
      SELECT customer_id FROM stripe_customers WHERE user_id = auth.uid()
    )
  );

CREATE POLICY "Service role can manage orders" ON stripe_orders
  FOR ALL USING (auth.role() = 'service_role');

-- Create secure views for user data access
CREATE VIEW stripe_user_subscriptions AS
SELECT
  s.*,
  c.user_id
FROM stripe_subscriptions s
JOIN stripe_customers c ON s.customer_id = c.customer_id
WHERE c.user_id = auth.uid() AND s.deleted_at IS NULL;

CREATE VIEW stripe_user_orders AS
SELECT
  o.*,
  c.user_id
FROM stripe_orders o
JOIN stripe_customers c ON o.customer_id = c.customer_id
WHERE c.user_id = auth.uid() AND o.deleted_at IS NULL;

-- Create functions for updating timestamps
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for automatic timestamp updates
CREATE TRIGGER update_stripe_customers_updated_at
  BEFORE UPDATE ON stripe_customers
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_stripe_subscriptions_updated_at
  BEFORE UPDATE ON stripe_subscriptions
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_stripe_orders_updated_at
  BEFORE UPDATE ON stripe_orders
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Grant necessary permissions
GRANT SELECT ON stripe_user_subscriptions TO authenticated;
GRANT SELECT ON stripe_user_orders TO authenticated;

-- Comments for documentation
COMMENT ON TABLE stripe_customers IS 'Links Supabase users to Stripe customers';
COMMENT ON TABLE stripe_subscriptions IS 'Manages subscription data for Stripe integration';
COMMENT ON TABLE stripe_orders IS 'Stores order/purchase information for one-time payments';
COMMENT ON VIEW stripe_user_subscriptions IS 'Secure view for user subscriptions';
COMMENT ON VIEW stripe_user_orders IS 'Secure view for user orders';
