// Abandoned Cart Recovery System
// Manages cart abandonment tracking and recovery email sequences

import { sendAbandonedCartEmail1, sendAbandonedCartEmail2, sendAbandonedCartEmail3 } from './email';

interface CartItem {
  name: string;
  quantity: number;
  price: string;
  image: string;
}

interface AbandonedCartData {
  email: string;
  firstName?: string;
  cartItems: CartItem[];
  cartTotal: string;
  cartId?: string;
  abandonedAt: Date;
}

export class AbandonedCartManager {
  private email: string;
  private cartData: AbandonedCartData;
  
  // Email timing delays in milliseconds
  private delays = {
    email1: 1 * 60 * 60 * 1000,      // 1 hour
    email2: 24 * 60 * 60 * 1000,     // 24 hours (1 day)
    email3: 72 * 60 * 60 * 1000      // 72 hours (3 days)
  };

  constructor(cartData: AbandonedCartData) {
    this.email = cartData.email;
    this.cartData = cartData;
  }

  /**
   * Start the abandoned cart recovery sequence
   * This schedules all 3 emails with progressive delays
   */
  async startRecoverySequence(): Promise<void> {
    console.log(`🛒 Starting abandoned cart recovery sequence for ${this.email}`);
    console.log(`📦 Cart contains ${this.cartData.cartItems.length} items worth ${this.cartData.cartTotal}`);

    try {
      // Schedule Email 1 - Gentle reminder (1 hour)
      setTimeout(async () => {
        console.log(`📧 Sending abandoned cart email 1 to ${this.email}`);
        await this.sendEmail1();
      }, this.delays.email1);

      // Schedule Email 2 - Social proof and urgency (24 hours)
      setTimeout(async () => {
        console.log(`📧 Sending abandoned cart email 2 to ${this.email}`);
        await this.sendEmail2();
      }, this.delays.email2);

      // Schedule Email 3 - Final chance with discount (72 hours)
      setTimeout(async () => {
        console.log(`📧 Sending abandoned cart email 3 to ${this.email}`);
        await this.sendEmail3();
      }, this.delays.email3);

      const email1Date = new Date(Date.now() + this.delays.email1);
      const email2Date = new Date(Date.now() + this.delays.email2);
      const email3Date = new Date(Date.now() + this.delays.email3);

      console.log(`⏰ Email 1 scheduled for ${email1Date.toLocaleString()}`);
      console.log(`⏰ Email 2 scheduled for ${email2Date.toLocaleString()}`);
      console.log(`⏰ Email 3 scheduled for ${email3Date.toLocaleString()}`);

      console.log('✅ Abandoned cart recovery sequence scheduled successfully');

    } catch (error) {
      console.error('❌ Error scheduling abandoned cart recovery sequence:', error);
      throw error;
    }
  }

  /**
   * Send the first abandoned cart email - gentle reminder
   */
  private async sendEmail1(): Promise<void> {
    try {
      const result = await sendAbandonedCartEmail1({
        email: this.cartData.email,
        firstName: this.cartData.firstName,
        cartItems: this.cartData.cartItems,
        cartTotal: this.cartData.cartTotal
      });

      if (result.success) {
        console.log(`✅ Abandoned cart email 1 sent successfully to ${this.email}`);
      } else {
        console.error(`❌ Failed to send abandoned cart email 1 to ${this.email}:`, result.error);
      }
    } catch (error) {
      console.error(`💥 Error sending abandoned cart email 1 to ${this.email}:`, error);
    }
  }

  /**
   * Send the second abandoned cart email - social proof and urgency
   */
  private async sendEmail2(): Promise<void> {
    try {
      const result = await sendAbandonedCartEmail2({
        email: this.cartData.email,
        firstName: this.cartData.firstName,
        cartItems: this.cartData.cartItems,
        cartTotal: this.cartData.cartTotal
      });

      if (result.success) {
        console.log(`✅ Abandoned cart email 2 sent successfully to ${this.email}`);
      } else {
        console.error(`❌ Failed to send abandoned cart email 2 to ${this.email}:`, result.error);
      }
    } catch (error) {
      console.error(`💥 Error sending abandoned cart email 2 to ${this.email}:`, error);
    }
  }

  /**
   * Send the third abandoned cart email - final chance with discount
   */
  private async sendEmail3(): Promise<void> {
    try {
      const result = await sendAbandonedCartEmail3({
        email: this.cartData.email,
        firstName: this.cartData.firstName,
        cartTotal: this.cartData.cartTotal
      });

      if (result.success) {
        console.log(`✅ Abandoned cart email 3 sent successfully to ${this.email}`);
      } else {
        console.error(`❌ Failed to send abandoned cart email 3 to ${this.email}:`, result.error);
      }
    } catch (error) {
      console.error(`💥 Error sending abandoned cart email 3 to ${this.email}:`, error);
    }
  }

  /**
   * Start a quick test sequence with shorter delays (for demo purposes)
   */
  async startQuickTestSequence(): Promise<void> {
    console.log(`🧪 Starting QUICK TEST abandoned cart recovery sequence for ${this.email}`);
    
    const quickDelays = {
      email1: 10 * 1000,   // 10 seconds
      email2: 20 * 1000,   // 20 seconds
      email3: 30 * 1000    // 30 seconds
    };

    try {
      setTimeout(async () => {
        console.log(`📧 [TEST] Sending abandoned cart email 1 to ${this.email}`);
        await this.sendEmail1();
      }, quickDelays.email1);

      setTimeout(async () => {
        console.log(`📧 [TEST] Sending abandoned cart email 2 to ${this.email}`);
        await this.sendEmail2();
      }, quickDelays.email2);

      setTimeout(async () => {
        console.log(`📧 [TEST] Sending abandoned cart email 3 to ${this.email}`);
        await this.sendEmail3();
      }, quickDelays.email3);

      console.log(`⏰ [TEST] Email 1 in 10 seconds`);
      console.log(`⏰ [TEST] Email 2 in 20 seconds`);
      console.log(`⏰ [TEST] Email 3 in 30 seconds`);

    } catch (error) {
      console.error('❌ Error in quick test sequence:', error);
      throw error;
    }
  }
}

/**
 * Track cart abandonment and start recovery sequence
 * Call this when a user adds items to cart but doesn't complete purchase
 */
export async function trackAbandonedCart(cartData: AbandonedCartData): Promise<void> {
  try {
    const manager = new AbandonedCartManager(cartData);
    await manager.startRecoverySequence();
  } catch (error) {
    console.error('❌ Failed to track abandoned cart:', error);
    throw error;
  }
}

/**
 * Start quick test sequence for abandoned cart emails (demo purposes)
 */
export async function startQuickAbandonedCartTest(cartData: AbandonedCartData): Promise<void> {
  try {
    const manager = new AbandonedCartManager(cartData);
    await manager.startQuickTestSequence();
  } catch (error) {
    console.error('❌ Failed to start quick abandoned cart test:', error);
    throw error;
  }
}

/**
 * Check if cart abandonment should trigger recovery emails
 * Call this periodically or when cart is updated
 */
export function shouldTriggerAbandonedCartRecovery(
  lastCartUpdate: Date,
  thresholdMinutes: number = 60
): boolean {
  const now = new Date();
  const timeDiff = now.getTime() - lastCartUpdate.getTime();
  const minutesDiff = timeDiff / (1000 * 60);
  
  return minutesDiff >= thresholdMinutes;
}

// Example usage data structure for testing
export const exampleAbandonedCartData: AbandonedCartData = {
  email: 'barooahn@gmail.com',
  firstName: 'John',
  cartItems: [
    {
      name: 'Sambal Oelek - Authentic Indonesian Chili Paste',
      quantity: 2,
      price: '14.00',
      image: 'https://www.spiceislandindonesia.com/images/sambal-oelek.webp'
    },
    {
      name: 'Sambal Goreng - Premium Sweet & Spicy',
      quantity: 1,
      price: '8.50',
      image: 'https://www.spiceislandindonesia.com/images/sambal-goreng.webp'
    }
  ],
  cartTotal: '£22.50',
  cartId: 'cart_12345',
  abandonedAt: new Date()
};