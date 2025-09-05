# Google Merchant Center Product Sync

This script automatically syncs your Stripe products to Google Merchant Center using the Google Merchant API.

## Setup Instructions

### 1. Install Dependencies

```bash
yarn add googleapis
```

### 2. Get Google Merchant Center ID

1. Go to [Google Merchant Center](https://merchants.google.com)
2. Find your Merchant ID in the top-right corner (format: `123456789`)
3. Add it to your `.env` file:

```bash
GOOGLE_MERCHANT_ID=123456789
```

### 3. Create Google Service Account

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project or select existing project
3. Enable the **Content API for Shopping**
4. Go to **IAM & Admin > Service Accounts**
5. Click **Create Service Account**
6. Fill in details and click **Create and Continue**
7. Skip role assignment (click **Continue**)
8. Click **Done**
9. Click on your new service account
10. Go to **Keys** tab
11. Click **Add Key > Create New Key**
12. Choose **JSON** format
13. Download the key file as `google-service-account-key.json`
14. Place it in your project root directory

### 4. Link Service Account to Merchant Center

1. In Google Merchant Center, go to **Settings > Account access**
2. Click **Add user**
3. Enter your service account email (from the JSON key file)
4. Give it **Admin** permissions
5. Click **Send invitation**

### 5. Configure Environment Variables

Add to your `.env` file:

```bash
GOOGLE_MERCHANT_ID=your_merchant_center_id
GOOGLE_SERVICE_ACCOUNT_KEY_PATH=./google-service-account-key.json
```

## Usage

### Sync Products
```bash
# Sync all Stripe products to Google Merchant Center
yarn tsx scripts/sync-products-to-google-merchant.ts sync
```

### List Current Products
```bash
# List products currently in Google Merchant Center
yarn tsx scripts/sync-products-to-google-merchant.ts list
```

## Product Mapping

The script maps your Stripe products as follows:

| Stripe Product | Google Merchant Product |
|----------------|-------------------------|
| `id` | `offerId` |
| `name` | `title` |
| `description` | `description` |
| `price` | `price.value` (removes £ symbol) |
| Auto-generated | `link` (product URL) |
| Auto-generated | `imageLink` (product image) |
| Auto-generated | `mpn` (manufacturer part number) |

## Product URLs

The script uses the actual product URLs from your website:
- **Sambal Oelek 185g** → `https://www.spiceislandindonesia.com/sambal-oelek-uk`
- **Sambal Bali 200g** → `https://www.spiceislandindonesia.com/sambal-bali-aromatic-spicy`
- **Sambal Goreng 185g** → `https://www.spiceislandindonesia.com/sambal-goreng-uk`

The URLs are mapped by Stripe product ID in the script for accuracy.

## Image URLs

The script expects product images at:
- **Sambal Oelek** → `/images/sambal-oelek-185g-main.jpg`
- **Sambal Bali** → `/images/sambal-bali-200g-main.jpg`
- **Sambal Goreng** → `/images/sambal-goreng-185g-main.jpg`

Make sure these images exist, or update the image URL generation in the script.

## Updating Products

### Automatic Updates

The sync script automatically detects whether products exist in Google Merchant Center and handles updates intelligently:

- **New products** → Creates them automatically
- **Existing products** → Updates them with latest Stripe data
- **No manual intervention** required

### When Products Are Updated

The script will update Google Merchant Center products when:

1. **Stripe product details change** (name, description)
2. **Pricing changes** in Stripe
3. **Product availability changes**
4. **You run the sync script** manually

### Update Process

```bash
# Updates all products with latest Stripe data
yarn tsx scripts/sync-products-to-google-merchant.ts sync
```

**What gets updated:**
- ✅ Product title and description
- ✅ Pricing information  
- ✅ Availability status
- ✅ Brand and manufacturer info
- ✅ Product URLs and images

### Update Scenarios

#### Scenario 1: Price Change in Stripe
```bash
# 1. Update price in stripe-config.ts
# 2. Run sync script
yarn tsx scripts/sync-products-to-google-merchant.ts sync
# ✅ Google Merchant Center will show updated price
```

#### Scenario 2: Product Description Change
```bash
# 1. Update description in stripe-config.ts  
# 2. Run sync script
yarn tsx scripts/sync-products-to-google-merchant.ts sync
# ✅ Google Merchant Center will show updated description
```

#### Scenario 3: New Product Added to Stripe
```bash
# 1. Add new product to products array in stripe-config.ts
# 2. Run sync script
yarn tsx scripts/sync-products-to-google-merchant.ts sync
# ✅ New product will be created in Google Merchant Center
```

### Update Frequency Recommendations

**Manual Updates:**
- ✅ **After price changes** (run immediately)
- ✅ **After product launches** (run immediately)  
- ✅ **Weekly maintenance** (check for any drift)

**Automated Updates:**
- ✅ **Daily sync** (recommended for active stores)
- ✅ **After deployments** (integrate into CI/CD)
- ✅ **Webhook-triggered** (when Stripe products change)

### Monitoring Updates

**Check sync results:**
```bash
# View current products in Google Merchant Center
yarn tsx scripts/sync-products-to-google-merchant.ts list
```

**Success indicators:**
- ✅ All products show "Successful: X" in sync results
- ✅ No "Failed: X" errors in output
- ✅ Products visible in Google Merchant Center dashboard

**Update verification:**
1. Run the sync script
2. Check Google Merchant Center dashboard
3. Verify updated information appears correctly
4. Monitor Google Shopping ads performance

### Advanced Update Configuration

**Modify update behavior** by editing the script:

```typescript
// Skip updates for specific products
if (stripeProduct.id === 'prod_skip_this') {
  continue;
}

// Only update pricing
const updates = {
  price: product.price,
  // Remove other fields to update only price
};
```

**Batch updates** for performance:
```bash
# Update products one at a time (current default)
# 1 second delay between products prevents rate limiting
```

## Troubleshooting

### Common Errors

**"Service account key file not found"**
- Make sure `google-service-account-key.json` is in your project root
- Check the `GOOGLE_SERVICE_ACCOUNT_KEY_PATH` environment variable

**"Access denied"**
- Make sure you've added the service account to your Merchant Center
- Ensure the service account has Admin permissions

**"Product approval errors"**
- Check that your product URLs are live and accessible
- Ensure product images are available and meet Google's requirements
- Verify all required product attributes are provided

### Google Product Requirements

Products must include:
- ✅ **title** (from Stripe product name)
- ✅ **description** (from Stripe product description)
- ✅ **price** (from Stripe price)
- ✅ **availability** (set to "in stock")
- ✅ **condition** (set to "new")
- ✅ **brand** ("Spice Island Indonesia")
- ✅ **link** (product page URL)
- ✅ **image_link** (product image URL)

## Automation

You can run this script:
- **Manually** when you update products
- **On a schedule** using cron jobs
- **Automatically** as part of your deployment process
- **Via webhook** when Stripe products change

Example cron job (daily at 2 AM):
```bash
0 2 * * * cd /path/to/project && yarn tsx scripts/sync-products-to-google-merchant.ts sync
```