// Email Template System for Spice Island Indonesia
// Reusable components and templates for email marketing campaigns

interface EmailTemplateData {
  email: string;
  firstName?: string;
  lastName?: string;
  discountCode?: string;
  productName?: string;
  productImage?: string;
  orderNumber?: string;
  [key: string]: any;
}

// Base email styles - shared across all templates
const baseEmailStyles = `
  /* Import brand fonts */
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Inter:wght@400;500;600&display=swap');
  
  /* Reset and base styles */
  body {
    margin: 0;
    padding: 0;
    font-family: 'Inter', Arial, sans-serif;
    line-height: 1.6;
    color: #1c1917;
    background-color: #fefdfb;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
  }
  
  table {
    border-collapse: collapse;
    mso-table-lspace: 0pt;
    mso-table-rspace: 0pt;
  }
  
  /* Container */
  .email-container {
    max-width: 600px;
    margin: 0 auto;
    background-color: #ffffff;
    box-shadow: 0 4px 6px -1px rgba(127, 29, 43, 0.1);
  }
  
  /* Header with dark gradient */
  .header {
    background: linear-gradient(180deg, #000106 0%, #000106 30%, #7f1d2b 60%, #962838 85%, #b52d3c 100%);
    position: relative;
    overflow: hidden;
    padding: 40px 30px;
    text-align: center;
  }
  
  .header::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
      linear-gradient(135deg, transparent 30%, rgba(139, 69, 19, 0.03) 35%, rgba(139, 69, 19, 0.06) 40%, rgba(139, 69, 19, 0.03) 45%, transparent 50%),
      radial-gradient(ellipse 40px 80px at 20% 30%, transparent 60%, rgba(184, 134, 11, 0.015) 70%, rgba(184, 134, 11, 0.03) 80%, rgba(184, 134, 11, 0.015) 90%, transparent 100%);
    background-size: 200px 200px, 300px 400px;
  }
  
  .header-content {
    position: relative;
    z-index: 2;
  }
  
  .brand-logo {
    margin-bottom: 20px;
  }
  
  .brand-name {
    font-family: 'Cormorant Garamond', serif;
    font-size: 28px;
    font-weight: 700;
    color: #d4af37;
    margin: 0 0 5px 0;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
  
  .brand-tagline {
    font-family: 'Inter', sans-serif;
    font-size: 11px;
    color: #fef9f1;
    margin: 0 0 20px 0;
    text-transform: uppercase;
    letter-spacing: 3px;
  }
  
  .email-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: 32px;
    font-weight: 600;
    color: #fef9f1;
    margin: 20px 0 10px 0;
    line-height: 1.2;
  }
  
  .email-subtitle {
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    color: #fdf2e1;
    margin: 0;
    opacity: 0.9;
  }
  
  /* Main content */
  .content {
    padding: 40px 30px;
    background-color: #fefdfb;
    background-image: radial-gradient(circle at center, rgba(212, 175, 55, 0.02) 0%, transparent 50%);
  }
  
  .content-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: 24px;
    font-weight: 600;
    color: #7f1d2b;
    margin: 0 0 20px 0;
  }
  
  .content-text {
    font-size: 16px;
    color: #44403c;
    margin: 0 0 20px 0;
    line-height: 1.6;
  }
  
  /* CTA Button */
  .cta-button {
    display: inline-block;
    background: linear-gradient(135deg, #7f1d2b 0%, #962838 100%);
    color: #fef9f1 !important;
    text-decoration: none;
    padding: 16px 32px;
    border-radius: 4px;
    font-family: 'Cormorant Garamond', serif;
    font-size: 18px;
    font-weight: 600;
    text-align: center;
    border: 1px solid #b52d3c;
    box-shadow: 0 4px 6px -1px rgba(127, 29, 43, 0.2);
    transition: all 0.3s ease;
  }
  
  .cta-button:hover {
    background: linear-gradient(135deg, #962838 0%, #b52d3c 100%);
    transform: translateY(-1px);
    box-shadow: 0 6px 8px -1px rgba(127, 29, 43, 0.3);
  }
  
  /* Footer */
  .footer {
    background-color: #44403c;
    padding: 30px;
    text-align: center;
    color: #d6d3d1;
  }
  
  .footer-brand {
    font-family: 'Cormorant Garamond', serif;
    font-size: 18px;
    font-weight: 600;
    color: #d4af37;
    margin: 0 0 10px 0;
  }
  
  .footer-tagline {
    font-size: 14px;
    margin: 0 0 20px 0;
    opacity: 0.8;
  }
  
  .footer-links {
    font-size: 14px;
    margin: 0;
  }
  
  .footer-links a {
    color: #d4af37;
    text-decoration: none;
  }
  
  .footer-links a:hover {
    color: #f59e0b;
  }
  
  /* Responsive */
  @media only screen and (max-width: 600px) {
    .email-container {
      width: 100% !important;
      max-width: 100% !important;
    }
    
    .header, .content, .footer {
      padding: 20px !important;
    }
    
    .brand-name {
      font-size: 24px !important;
    }
    
    .email-title {
      font-size: 26px !important;
    }
  }
`;

// Base email structure
const getBaseEmailTemplate = (data: EmailTemplateData, headerTitle: string, headerSubtitle: string, contentHtml: string) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${headerTitle} - Spice Island Indonesia</title>
  <style>${baseEmailStyles}</style>
</head>
<body>
  <div class="email-container">
    <!-- Header -->
    <div class="header">
      <div class="header-content">
        <div class="brand-logo">
          <img src="https://www.spiceislandindonesia.com/images/logo.webp" alt="Spice Island Indonesia Logo" width="60" height="58" style="margin: 0 auto 15px auto; display: block;">
          <div class="brand-name">Spice Island</div>
          <div class="brand-tagline">Indonesia</div>
        </div>
        <h1 class="email-title">${headerTitle}</h1>
        <p class="email-subtitle">${headerSubtitle}</p>
      </div>
    </div>
    
    <!-- Main Content -->
    <div class="content">
      ${contentHtml}
    </div>
    
    <!-- Footer -->
    <div class="footer">
      <div class="footer-brand">Spice Island Indonesia</div>
      <p class="footer-tagline">Authentic Indonesian Flavors for the UK</p>
      <p class="footer-links">
        <a href="https://www.spiceislandindonesia.com">Visit our website</a> | 
        <a href="https://www.spiceislandindonesia.com/unsubscribe?email=${encodeURIComponent(data.email)}">Unsubscribe</a>
      </p>
    </div>
  </div>
</body>
</html>
`;

// Welcome Email Series Templates

// Email 2: Indonesian Cuisine Introduction & Recipe
export const getWelcomeEmail2Html = (data: EmailTemplateData) => {
  const contentHtml = `
    <h2 class="content-title">Discover the Soul of Indonesian Cuisine</h2>
    
    <p class="content-text">
      ${data.firstName ? `Hello ${data.firstName},` : 'Hello,'}<br><br>
      Yesterday you joined our sambal family, and today we're excited to take you on a culinary journey through the vibrant flavors of Indonesia.
    </p>
    
    <p class="content-text">
      Indonesian cuisine is built on the foundation of <strong>sambal</strong> – the fiery, aromatic condiment that brings dishes to life. Each region has its own signature sambal, from the tomato-rich sambal of West Java to the coconut-infused versions of Sumatra.
    </p>
    
    <div style="background: linear-gradient(135deg, #fef9f1 0%, #fdf2e1 100%); border-left: 4px solid #d4af37; padding: 30px; margin: 30px 0; border-radius: 8px;">
      <h3 style="font-family: 'Cormorant Garamond', serif; font-size: 20px; font-weight: 600; color: #7f1d2b; margin: 0 0 15px 0;">
        🍛 Traditional Nasi Goreng with Sambal
      </h3>
      <p style="font-size: 16px; color: #57534e; margin: 0 0 15px 0;">
        <strong>Ingredients:</strong> Day-old jasmine rice, 2 eggs, 3 cloves garlic, 2 shallots, 2 tbsp soy sauce, 2 tbsp Spice Island Sambal Oelek
      </p>
      <p style="font-size: 16px; color: #57534e; margin: 0;">
        <strong>Method:</strong> Heat oil in wok, scramble eggs, add minced garlic and shallots, then rice. Stir in sambal and soy sauce. The sambal provides both heat and depth that makes this dish unforgettable.
      </p>
    </div>
    
    <p class="content-text">
      This recipe showcases how sambal transforms simple ingredients into something extraordinary. The complex layers of chili, garlic, and traditional spices create a flavor profile that's both familiar and exotic.
    </p>
    
    <div style="text-align: center; margin: 40px 0;">
      <a href="https://www.spiceislandindonesia.com/recipes" class="cta-button">
        Explore More Recipes
      </a>
    </div>
    
    <p class="content-text" style="margin-top: 30px;">
      Tomorrow, we'll introduce you to our bestselling sambals and share the stories behind each unique blend.
    </p>
    
    <p class="content-text">
      Selamat memasak (happy cooking!),<br>
      The Spice Island Indonesia Team
    </p>
  `;
  
  return getBaseEmailTemplate(
    data,
    "Your Indonesian Culinary Journey Begins",
    "Discover authentic flavors and traditional recipes",
    contentHtml
  );
};

// Email 3: Product Showcase & Usage Tips
export const getWelcomeEmail3Html = (data: EmailTemplateData) => {
  const contentHtml = `
    <h2 class="content-title">Meet Our Signature Sambal Collection</h2>
    
    <p class="content-text">
      ${data.firstName ? `Dear ${data.firstName},` : 'Hello,'}<br><br>
      Today we're excited to introduce you to our carefully curated sambal collection – each one crafted using traditional Indonesian techniques and premium ingredients.
    </p>
    
    <div style="background: #ffffff; border: 2px solid #d4af37; border-radius: 8px; padding: 30px; margin: 30px 0;">
      <h3 style="font-family: 'Cormorant Garamond', serif; font-size: 20px; color: #7f1d2b; margin: 0 0 20px 0;">
        🌶️ Our Bestselling Trio
      </h3>
      
      <div style="margin-bottom: 25px;">
        <h4 style="font-family: 'Cormorant Garamond', serif; font-size: 18px; color: #c1272d; margin: 0 0 8px 0;">Sambal Oelek - The Foundation</h4>
        <p style="font-size: 16px; color: #44403c; margin: 0; line-height: 1.6;">
          Pure chili perfection. Use as a cooking base for stir-fries, marinades, or mix with soy sauce for an instant dipping sauce.
        </p>
      </div>
      
      <div style="margin-bottom: 25px;">
        <h4 style="font-family: 'Cormorant Garamond', serif; font-size: 18px; color: #c1272d; margin: 0 0 8px 0;">Sambal Goreng - The Complex</h4>
        <p style="font-size: 16px; color: #44403c; margin: 0; line-height: 1.6;">
          Sweet, savory, and spicy. Perfect with grilled meats, roasted vegetables, or stirred into coconut rice.
        </p>
      </div>
      
      <div>
        <h4 style="font-family: 'Cormorant Garamond', serif; font-size: 18px; color: #c1272d; margin: 0 0 8px 0;">Sambal Bali - The Aromatic</h4>
        <p style="font-size: 16px; color: #44403c; margin: 0; line-height: 1.6;">
          Fragrant with lemongrass and galangal. Elevates seafood dishes and adds complexity to simple soups.
        </p>
      </div>
    </div>
    
    <h3 style="font-family: 'Cormorant Garamond', serif; font-size: 20px; font-weight: 600; color: #7f1d2b; margin: 30px 0 15px 0;">
      💡 Pro Tips for Using Sambal
    </h3>
    
    <ul style="list-style: none; padding: 0; margin: 0 0 30px 0;">
      <li style="font-size: 16px; color: #44403c; padding: 8px 0; position: relative; padding-left: 30px;">
        <span style="color: #d4af37; font-size: 20px; font-weight: bold; position: absolute; left: 0; top: 5px;">•</span>
        <strong>Start small:</strong> A little goes a long way – begin with 1/2 teaspoon per serving
      </li>
      <li style="font-size: 16px; color: #44403c; padding: 8px 0; position: relative; padding-left: 30px;">
        <span style="color: #d4af37; font-size: 20px; font-weight: bold; position: absolute; left: 0; top: 5px;">•</span>
        <strong>Layer flavors:</strong> Add sambal at different stages of cooking for depth
      </li>
      <li style="font-size: 16px; color: #44403c; padding: 8px 0; position: relative; padding-left: 30px;">
        <span style="color: #d4af37; font-size: 20px; font-weight: bold; position: absolute; left: 0; top: 5px;">•</span>
        <strong>Store properly:</strong> Keep refrigerated and use a clean spoon to maintain freshness
      </li>
    </ul>
    
    <div style="text-align: center; margin: 40px 0;">
      <a href="https://www.spiceislandindonesia.com/products" class="cta-button">
        Shop Our Collection
      </a>
    </div>
    
    <p class="content-text">
      Tomorrow, you'll meet Chef Yossie and discover the authentic story behind our traditional recipes.
    </p>
    
    <p class="content-text">
      Salam hangat (warm regards),<br>
      The Spice Island Indonesia Team
    </p>
  `;
  
  return getBaseEmailTemplate(
    data,
    "Your Sambal Guide",
    "Discover our signature collection and expert tips",
    contentHtml
  );
};

// Email 4: Chef Yossie's Story & Authenticity
export const getWelcomeEmail4Html = (data: EmailTemplateData) => {
  const contentHtml = `
    <h2 class="content-title">Meet Chef Yossie: Guardian of Authentic Flavors</h2>
    
    <p class="content-text">
      ${data.firstName ? `Dear ${data.firstName},` : 'Hello,'}<br><br>
      Today, I want to personally share the story behind Spice Island Indonesia and why authenticity means everything to us.
    </p>
    
    <div style="background: linear-gradient(135deg, #fef9f1 0%, #fdf2e1 100%); border-radius: 8px; padding: 30px; margin: 30px 0; text-align: center;">
      <img src="https://www.spiceislandindonesia.com/images/chef-yossie.webp" alt="Chef Yossie" style="width: 120px; height: 120px; border-radius: 50%; margin: 0 auto 20px auto; display: block; border: 3px solid #d4af37;">
      <h3 style="font-family: 'Cormorant Garamond', serif; font-size: 22px; font-weight: 600; color: #7f1d2b; margin: 0 0 15px 0;">
        Chef Yossie Arefi
      </h3>
      <p style="font-size: 16px; color: #57534e; font-style: italic; margin: 0;">
        "Every jar carries the soul of Indonesian tradition"
      </p>
    </div>
    
    <p class="content-text">
      Growing up in Jakarta, I learned sambal-making from my grandmother, who learned from hers. Each family had their secret techniques – the precise grind of the chilies, the balance of sweet and heat, the moment when garlic becomes golden perfection.
    </p>
    
    <p class="content-text">
      When I moved to the UK, I was heartbroken by the "Indonesian" sauces available in stores. They were nothing like the complex, layered sambals from my childhood. That's when I decided to bring authentic Indonesian flavors to British kitchens.
    </p>
    
    <div style="border-left: 4px solid #c1272d; background: #fdf2e1; padding: 20px; margin: 30px 0;">
      <h4 style="font-family: 'Cormorant Garamond', serif; font-size: 18px; color: #7f1d2b; margin: 0 0 10px 0;">
        Our Authenticity Promise
      </h4>
      <ul style="list-style: none; padding: 0; margin: 0;">
        <li style="font-size: 16px; color: #44403c; margin: 8px 0;">✓ Traditional stone grinding methods</li>
        <li style="font-size: 16px; color: #44403c; margin: 8px 0;">✓ Imported Indonesian chilies and spices</li>
        <li style="font-size: 16px; color: #44403c; margin: 8px 0;">✓ No artificial preservatives or shortcuts</li>
        <li style="font-size: 16px; color: #44403c; margin: 8px 0;">✓ Recipes passed down through generations</li>
      </ul>
    </div>
    
    <p class="content-text">
      Every batch is made in small quantities to ensure quality. When you taste our sambal, you're experiencing the same flavors that have graced Indonesian tables for centuries.
    </p>
    
    <div style="text-align: center; margin: 40px 0;">
      <a href="https://www.spiceislandindonesia.com/our-story" class="cta-button">
        Read Our Full Story
      </a>
    </div>
    
    <p class="content-text">
      Tomorrow, we'll share the exclusive benefits of being part of our sambal family and how to make the most of your membership.
    </p>
    
    <p class="content-text">
      Dengan cinta (with love),<br>
      Chef Yossie & The Spice Island Indonesia Team
    </p>
  `;
  
  return getBaseEmailTemplate(
    data,
    "The Story Behind Every Jar",
    "Meet the chef preserving Indonesian culinary heritage",
    contentHtml
  );
};

// Email 5: VIP Membership Benefits & Community
export const getWelcomeEmail5Html = (data: EmailTemplateData) => {
  const contentHtml = `
    <h2 class="content-title">Welcome to Our VIP Sambal Community!</h2>
    
    <p class="content-text">
      ${data.firstName ? `Dear ${data.firstName},` : 'Hello,'}<br><br>
      Congratulations! You've completed your introduction to the world of authentic Indonesian sambal. Now, let's unlock the exclusive benefits waiting for you as a valued member of our community.
    </p>
    
    <div style="background: linear-gradient(135deg, #7f1d2b 0%, #962838 100%); color: white; padding: 30px; border-radius: 8px; margin: 30px 0; text-align: center;">
      <h3 style="font-family: 'Cormorant Garamond', serif; font-size: 24px; font-weight: 600; color: #d4af37; margin: 0 0 20px 0;">
        🎖️ Your VIP Benefits
      </h3>
      <div style="text-align: left; max-width: 400px; margin: 0 auto;">
        <div style="margin-bottom: 15px;">
          <strong style="color: #d4af37;">Early Access:</strong> First to try new sambal varieties
        </div>
        <div style="margin-bottom: 15px;">
          <strong style="color: #d4af37;">Exclusive Discounts:</strong> Members-only pricing on all products
        </div>
        <div style="margin-bottom: 15px;">
          <strong style="color: #d4af37;">Free Shipping:</strong> On orders over £20 (always!)
        </div>
        <div style="margin-bottom: 15px;">
          <strong style="color: #d4af37;">Monthly Recipes:</strong> Authentic dishes from Chef Yossie
        </div>
        <div>
          <strong style="color: #d4af37;">Cultural Stories:</strong> Behind-the-scenes Indonesian food culture
        </div>
      </div>
    </div>
    
    <h3 style="font-family: 'Cormorant Garamond', serif; font-size: 20px; font-weight: 600; color: #7f1d2b; margin: 30px 0 15px 0;">
      🎁 Your Next Steps
    </h3>
    
    <div style="background: #fef9f1; border: 2px solid #d4af37; border-radius: 8px; padding: 25px; margin: 20px 0;">
      <h4 style="color: #7f1d2b; margin: 0 0 15px 0;">Don't Forget Your Welcome Gift!</h4>
      <div style="text-align: center; margin: 20px 0;">
        <div style="font-family: 'Cormorant Garamond', serif; font-size: 28px; font-weight: 700; color: #c1272d; letter-spacing: 2px; padding: 15px; background: rgba(255,255,255,0.8); border: 1px dashed #d4af37; border-radius: 4px; display: inline-block;">
          WELCOME10
        </div>
        <p style="font-size: 14px; color: #78716c; font-style: italic; margin: 10px 0 0 0;">
          Valid for 30 days • 10% off your first order
        </p>
      </div>
    </div>
    
    <div style="text-align: center; margin: 30px 0;">
      <a href="https://www.spiceislandindonesia.com/products" class="cta-button" style="margin-right: 10px;">
        Shop Now
      </a>
      <a href="https://www.spiceislandindonesia.com/account" style="display: inline-block; background: transparent; color: #7f1d2b !important; text-decoration: none; padding: 16px 32px; border: 2px solid #7f1d2b; border-radius: 4px; font-family: 'Cormorant Garamond', serif; font-size: 18px; font-weight: 600;">
        Manage Preferences
      </a>
    </div>
    
    <h3 style="font-family: 'Cormorant Garamond', serif; font-size: 20px; font-weight: 600; color: #7f1d2b; margin: 30px 0 15px 0;">
      📱 Join Our Community
    </h3>
    
    <p class="content-text">
      Connect with fellow sambal enthusiasts, share your culinary creations, and get inspired by authentic Indonesian recipes:
    </p>
    
    <div style="text-align: center; margin: 30px 0;">
      <a href="https://www.instagram.com/spiceislandindonesia" style="display: inline-block; margin: 0 10px; color: #7f1d2b; text-decoration: none; font-weight: 600;">📸 Instagram</a>
      <a href="https://www.facebook.com/spiceislandindonesia" style="display: inline-block; margin: 0 10px; color: #7f1d2b; text-decoration: none; font-weight: 600;">👥 Facebook</a>
      <a href="https://www.spiceislandindonesia.com/recipes" style="display: inline-block; margin: 0 10px; color: #7f1d2b; text-decoration: none; font-weight: 600;">📚 Recipe Library</a>
    </div>
    
    <p class="content-text">
      Thank you for joining our mission to bring authentic Indonesian flavors to every British kitchen. We can't wait to be part of your culinary adventures!
    </p>
    
    <p class="content-text">
      Terima kasih banyak (thank you very much),<br>
      Chef Yossie & The Entire Spice Island Indonesia Family
    </p>
    
    <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 30px 0; text-align: center; border: 1px solid #e5e7eb;">
      <p style="font-size: 14px; color: #6b7280; margin: 0;">
        Questions? Simply reply to this email – we read and respond to every message personally.
      </p>
    </div>
  `;
  
  return getBaseEmailTemplate(
    data,
    "Your VIP Journey Starts Here",
    "Unlock exclusive benefits and join our community",
    contentHtml
  );
};

// Order Confirmation Email Template
export const getOrderConfirmationEmailHtml = (data: EmailTemplateData) => {
  const orderNumber = data.orderNumber || '#ORDER-' + Date.now();
  const customerName = data.firstName || 'Valued Customer';
  const orderItems = data.orderItems || [];
  const orderTotal = data.orderTotal || '£0.00';
  const shippingAddress = data.shippingAddress || {};
  
  // Generate items HTML
  const itemsHtml = orderItems.map((item: any) => `
    <tr>
      <td style="padding: 15px; border-bottom: 1px solid #e5e7eb;">
        <div style="display: flex; align-items: center;">
          <img src="${item.image}" alt="${item.name}" style="width: 60px; height: 60px; object-fit: cover; border-radius: 4px; margin-right: 15px;">
          <div>
            <h4 style="margin: 0 0 5px 0; font-size: 16px; color: #7f1d2b;">${item.name}</h4>
            <p style="margin: 0; font-size: 14px; color: #6b7280;">Qty: ${item.quantity}</p>
          </div>
        </div>
      </td>
      <td style="padding: 15px; border-bottom: 1px solid #e5e7eb; text-align: right;">
        <span style="font-size: 16px; font-weight: 600; color: #1f2937;">£${item.price}</span>
      </td>
    </tr>
  `).join('');

  const contentHtml = `
    <h2 class="content-title">Order Confirmation: ${orderNumber}</h2>
    
    <p class="content-text">
      Dear ${customerName},<br><br>
      Thank you for your order! Your authentic Indonesian sambals are being prepared with care and will be shipped soon.
    </p>
    
    <div style="background: linear-gradient(135deg, #065f46 0%, #047857 100%); color: white; padding: 25px; border-radius: 8px; margin: 30px 0; text-align: center;">
      <h3 style="font-family: 'Cormorant Garamond', serif; font-size: 20px; font-weight: 600; color: #d4af37; margin: 0 0 10px 0;">
        ✅ Order Confirmed
      </h3>
      <p style="margin: 0; opacity: 0.9;">
        Expected delivery: 3-5 business days
      </p>
    </div>
    
    <!-- Order Details -->
    <div style="background: #ffffff; border: 2px solid #e5e7eb; border-radius: 8px; margin: 30px 0;">
      <div style="background: #f9fafb; padding: 20px; border-bottom: 2px solid #e5e7eb;">
        <h3 style="font-family: 'Cormorant Garamond', serif; font-size: 20px; font-weight: 600; color: #7f1d2b; margin: 0;">
          Your Order Details
        </h3>
      </div>
      
      <table style="width: 100%; border-collapse: collapse;">
        ${itemsHtml}
        <tr style="background: #f9fafb;">
          <td style="padding: 20px; font-weight: 600; color: #7f1d2b; font-size: 18px;">
            Total:
          </td>
          <td style="padding: 20px; text-align: right; font-weight: 700; color: #7f1d2b; font-size: 18px;">
            ${orderTotal}
          </td>
        </tr>
      </table>
    </div>
    
    <!-- Shipping Address -->
    ${shippingAddress.name ? `
    <div style="background: #fef9f1; border: 1px solid #d4af37; border-radius: 8px; padding: 25px; margin: 30px 0;">
      <h4 style="color: #7f1d2b; margin: 0 0 15px 0;">📦 Shipping Address</h4>
      <div style="color: #44403c; line-height: 1.6;">
        ${shippingAddress.name}<br>
        ${shippingAddress.line1}<br>
        ${shippingAddress.line2 ? shippingAddress.line2 + '<br>' : ''}
        ${shippingAddress.city}, ${shippingAddress.postal_code}<br>
        ${shippingAddress.country}
      </div>
    </div>
    ` : ''}
    
    <!-- First Recipe Suggestion -->
    <div style="background: linear-gradient(135deg, #fef9f1 0%, #fdf2e1 100%); border-left: 4px solid #d4af37; padding: 30px; margin: 30px 0; border-radius: 8px;">
      <h3 style="font-family: 'Cormorant Garamond', serif; font-size: 20px; font-weight: 600; color: #7f1d2b; margin: 0 0 15px 0;">
        🍛 Try This First: Sambal Nasi Goreng
      </h3>
      <p style="font-size: 16px; color: #57534e; margin: 0 0 15px 0;">
        Perfect for your first taste of authentic Indonesian flavor using your new sambal:
      </p>
      <p style="font-size: 16px; color: #57534e; margin: 0;">
        <strong>Quick method:</strong> Heat day-old rice in a wok, add 2 tablespoons of your sambal, scrambled eggs, and soy sauce. The sambal provides all the complex flavors you need!
      </p>
    </div>
    
    <!-- What to Expect -->
    <h3 style="font-family: 'Cormorant Garamond', serif; font-size: 20px; font-weight: 600; color: #7f1d2b; margin: 30px 0 15px 0;">
      📋 What Happens Next
    </h3>
    
    <ul style="list-style: none; padding: 0; margin: 0 0 30px 0;">
      <li style="font-size: 16px; color: #44403c; padding: 8px 0; position: relative; padding-left: 30px;">
        <span style="color: #d4af37; font-size: 20px; font-weight: bold; position: absolute; left: 0; top: 5px;">•</span>
        <strong>Today:</strong> Your order is being carefully prepared
      </li>
      <li style="font-size: 16px; color: #44403c; padding: 8px 0; position: relative; padding-left: 30px;">
        <span style="color: #d4af37; font-size: 20px; font-weight: bold; position: absolute; left: 0; top: 5px;">•</span>
        <strong>Tomorrow:</strong> Your sambals will be shipped with tracking information
      </li>
      <li style="font-size: 16px; color: #44403c; padding: 8px 0; position: relative; padding-left: 30px;">
        <span style="color: #d4af37; font-size: 20px; font-weight: bold; position: absolute; left: 0; top: 5px;">•</span>
        <strong>3-5 days:</strong> Authentic Indonesian flavors arrive at your door
      </li>
    </ul>
    
    <div style="text-align: center; margin: 30px 0;">
      <a href="https://www.spiceislandindonesia.com/recipes" class="cta-button" style="margin-right: 10px;">
        Get Recipe Ideas
      </a>
      <a href="https://www.spiceislandindonesia.com/contact" style="display: inline-block; background: transparent; color: #7f1d2b !important; text-decoration: none; padding: 16px 32px; border: 2px solid #7f1d2b; border-radius: 4px; font-family: 'Cormorant Garamond', serif; font-size: 18px; font-weight: 600;">
        Contact Support
      </a>
    </div>
    
    <!-- Storage Tips -->
    <div style="background: #f0fdf4; border: 1px solid #22c55e; border-radius: 8px; padding: 20px; margin: 30px 0;">
      <h4 style="color: #15803d; margin: 0 0 10px 0;">💡 Storage Tip</h4>
      <p style="color: #166534; margin: 0; font-size: 15px;">
        Keep your sambals refrigerated and always use a clean spoon. They'll stay fresh for up to 6 months and maintain their authentic flavor.
      </p>
    </div>
    
    <p class="content-text">
      We're excited for you to experience the authentic taste of Indonesia. If you have any questions, simply reply to this email – we read every message personally.
    </p>
    
    <p class="content-text">
      Terima kasih (thank you),<br>
      Chef Yossie & The Spice Island Indonesia Team
    </p>
  `;
  
  return getBaseEmailTemplate(
    data,
    "Your Order is Confirmed!",
    `Order ${orderNumber} • Authentic sambals on the way`,
    contentHtml
  );
};

// Abandoned Cart Recovery Email Templates

// Abandoned Cart Email 1 - Gentle Reminder (1 hour)
export const getAbandonedCartEmail1Html = (data: EmailTemplateData) => {
  const cartItems = data.cartItems || [];
  const cartTotal = data.cartTotal || '£0.00';
  
  // Generate cart items HTML
  const itemsHtml = cartItems.map((item: any) => `
    <div style="display: flex; align-items: center; padding: 15px; border-bottom: 1px solid #f3f4f6;">
      <img src="${item.image}" alt="${item.name}" style="width: 60px; height: 60px; object-fit: cover; border-radius: 4px; margin-right: 15px;">
      <div style="flex: 1;">
        <h4 style="margin: 0 0 5px 0; font-size: 16px; color: #7f1d2b; font-family: 'Cormorant Garamond', serif;">${item.name}</h4>
        <p style="margin: 0; font-size: 14px; color: #6b7280;">Qty: ${item.quantity}</p>
      </div>
      <div style="text-align: right;">
        <span style="font-size: 16px; font-weight: 600; color: #1f2937;">£${item.price}</span>
      </div>
    </div>
  `).join('');

  const contentHtml = `
    <h2 class="content-title">Your Sambals Are Waiting! 🌶️</h2>
    
    <p class="content-text">
      ${data.firstName ? `Hello ${data.firstName},` : 'Hello,'}<br><br>
      We noticed you were browsing our authentic Indonesian sambal collection and added some items to your cart. Don't let these amazing flavors slip away!
    </p>
    
    <!-- Cart Items -->
    <div style="background: #ffffff; border: 2px solid #e5e7eb; border-radius: 8px; margin: 30px 0;">
      <div style="background: #f9fafb; padding: 20px; border-bottom: 2px solid #e5e7eb;">
        <h3 style="font-family: 'Cormorant Garamond', serif; font-size: 20px; font-weight: 600; color: #7f1d2b; margin: 0;">
          Your Cart Items
        </h3>
      </div>
      
      <div>
        ${itemsHtml}
        <div style="background: #f9fafb; padding: 20px; display: flex; justify-content: space-between; align-items: center;">
          <span style="font-weight: 600; color: #7f1d2b; font-size: 18px;">Total:</span>
          <span style="font-weight: 700; color: #7f1d2b; font-size: 18px;">${cartTotal}</span>
        </div>
      </div>
    </div>
    
    <div style="text-align: center; margin: 40px 0;">
      <a href="https://www.spiceislandindonesia.com/cart" class="cta-button">
        Complete Your Order
      </a>
    </div>
    
    <!-- Why Choose Us -->
    <div style="background: linear-gradient(135deg, #fef9f1 0%, #fdf2e1 100%); border-left: 4px solid #d4af37; padding: 30px; margin: 30px 0; border-radius: 8px;">
      <h3 style="font-family: 'Cormorant Garamond', serif; font-size: 20px; font-weight: 600; color: #7f1d2b; margin: 0 0 15px 0;">
        ✨ Why Our Customers Love Our Sambals
      </h3>
      <ul style="list-style: none; padding: 0; margin: 0;">
        <li style="font-size: 16px; color: #57534e; padding: 5px 0; position: relative; padding-left: 25px;">
          <span style="color: #d4af37; font-size: 18px; font-weight: bold; position: absolute; left: 0; top: 2px;">✓</span>
          Authentic Indonesian recipes passed down through generations
        </li>
        <li style="font-size: 16px; color: #57534e; padding: 5px 0; position: relative; padding-left: 25px;">
          <span style="color: #d4af37; font-size: 18px; font-weight: bold; position: absolute; left: 0; top: 2px;">✓</span>
          Made with premium imported chilies and traditional techniques
        </li>
        <li style="font-size: 16px; color: #57534e; padding: 5px 0; position: relative; padding-left: 25px;">
          <span style="color: #d4af37; font-size: 18px; font-weight: bold; position: absolute; left: 0; top: 2px;">✓</span>
          Small-batch production ensures freshness and quality
        </li>
        <li style="font-size: 16px; color: #57534e; padding: 5px 0; position: relative; padding-left: 25px;">
          <span style="color: #d4af37; font-size: 18px; font-weight: bold; position: absolute; left: 0; top: 2px;">✓</span>
          Free UK delivery on orders over £20
        </li>
      </ul>
    </div>
    
    <p class="content-text">
      These authentic flavors won't wait forever. Complete your order now and start your Indonesian culinary journey today!
    </p>
    
    <p class="content-text">
      Salam hangat (warm regards),<br>
      The Spice Island Indonesia Team
    </p>
  `;
  
  return getBaseEmailTemplate(
    data,
    "Don't Miss Out on Authentic Indonesian Flavors",
    "Your sambal collection is waiting for you",
    contentHtml
  );
};

// Abandoned Cart Email 2 - Social Proof & Urgency (24 hours)
export const getAbandonedCartEmail2Html = (data: EmailTemplateData) => {
  const cartItems = data.cartItems || [];
  const cartTotal = data.cartTotal || '£0.00';

  const contentHtml = `
    <h2 class="content-title">Still Thinking It Over? 🤔</h2>
    
    <p class="content-text">
      ${data.firstName ? `Hi ${data.firstName},` : 'Hello,'}<br><br>
      We understand – choosing the perfect sambal can be overwhelming! But don't worry, you've made excellent choices that thousands of customers absolutely love.
    </p>
    
    <!-- Customer Reviews -->
    <div style="background: #ffffff; border: 2px solid #d4af37; border-radius: 8px; margin: 30px 0; padding: 30px;">
      <h3 style="font-family: 'Cormorant Garamond', serif; font-size: 20px; font-weight: 600; color: #7f1d2b; margin: 0 0 20px 0; text-align: center;">
        ⭐ What Our Customers Say About These Sambals
      </h3>
      
      <div style="display: grid; gap: 20px;">
        <div style="background: #fef9f1; padding: 20px; border-radius: 8px; border-left: 4px solid #d4af37;">
          <div style="display: flex; margin-bottom: 10px;">
            ${[...Array(5)].map(() => '<span style="color: #d4af37; font-size: 16px;">★</span>').join('')}
          </div>
          <blockquote style="font-style: italic; color: #7f1d2b; margin: 0 0 10px 0;">
            "Finally found authentic Indonesian sambal in the UK! This tastes exactly like my grandmother's recipe from Jakarta."
          </blockquote>
          <cite style="font-size: 14px; color: #6b7280;">— Sarah M., London</cite>
        </div>
        
        <div style="background: #fef9f1; padding: 20px; border-radius: 8px; border-left: 4px solid #d4af37;">
          <div style="display: flex; margin-bottom: 10px;">
            ${[...Array(5)].map(() => '<span style="color: #d4af37; font-size: 16px;">★</span>').join('')}
          </div>
          <blockquote style="font-style: italic; color: #7f1d2b; margin: 0 0 10px 0;">
            "The quality is outstanding. I've been using these sambals for months and they never disappoint. Worth every penny!"
          </blockquote>
          <cite style="font-size: 14px; color: #6b7280;">— Michael K., Edinburgh</cite>
        </div>
      </div>
    </div>
    
    <!-- Limited Stock Alert -->
    <div style="background: linear-gradient(135deg, #dc2626 0%, #ef4444 100%); color: white; padding: 25px; border-radius: 8px; margin: 30px 0; text-align: center;">
      <h3 style="font-family: 'Cormorant Garamond', serif; font-size: 20px; font-weight: 600; color: #fef9f1; margin: 0 0 15px 0;">
        ⚠️ Limited Stock Alert
      </h3>
      <p style="margin: 0 0 15px 0; opacity: 0.9; font-size: 16px;">
        Our most popular sambals are selling fast! Don't miss out on these authentic flavors.
      </p>
      <p style="margin: 0; font-size: 14px; opacity: 0.8;">
        Only a few jars left in stock for some varieties
      </p>
    </div>
    
    <div style="text-align: center; margin: 40px 0;">
      <a href="https://www.spiceislandindonesia.com/cart" class="cta-button" style="font-size: 20px; padding: 18px 36px;">
        Secure My Sambals Now
      </a>
    </div>
    
    <!-- Your Cart Reminder -->
    <div style="background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px; padding: 20px; margin: 30px 0;">
      <h4 style="color: #7f1d2b; margin: 0 0 15px 0;">🛒 Quick Reminder: Your Cart (${cartTotal})</h4>
      <p style="color: #6b7280; margin: 0; font-size: 14px;">
        ${cartItems.length} authentic sambal${cartItems.length !== 1 ? 's' : ''} ready to transform your cooking
      </p>
    </div>
    
    <p class="content-text">
      Join thousands of satisfied customers who have discovered the authentic taste of Indonesia. Your taste buds will thank you!
    </p>
    
    <p class="content-text">
      Dengan penuh harapan (with full hope),<br>
      Chef Yossie & The Spice Island Indonesia Team
    </p>
  `;
  
  return getBaseEmailTemplate(
    data,
    "Your Sambals Are Almost Gone!",
    "Join thousands of happy customers - limited stock remaining",
    contentHtml
  );
};

// Abandoned Cart Email 3 - Last Chance with Small Discount (3 days)
export const getAbandonedCartEmail3Html = (data: EmailTemplateData) => {
  const cartTotal = data.cartTotal || '£0.00';
  
  const contentHtml = `
    <h2 class="content-title">Last Chance: Special Offer Inside! 🎁</h2>
    
    <p class="content-text">
      ${data.firstName ? `Dear ${data.firstName},` : 'Hello,'}<br><br>
      We hate to see you go! Before we say goodbye, we'd like to offer you something special to complete your sambal journey with us.
    </p>
    
    <!-- Special Discount -->
    <div style="background: linear-gradient(135deg, #059669 0%, #10b981 100%); color: white; padding: 40px 30px; border-radius: 8px; margin: 30px 0; text-align: center; position: relative; overflow: hidden;">
      <div style="position: absolute; top: -10px; right: -10px; background: #dc2626; color: white; padding: 5px 15px; transform: rotate(45deg); font-size: 12px; font-weight: bold;">
        LAST CHANCE
      </div>
      <h3 style="font-family: 'Cormorant Garamond', serif; font-size: 28px; font-weight: 700; color: #fef9f1; margin: 0 0 15px 0;">
        Exclusive 10% Off
      </h3>
      <p style="font-size: 18px; margin: 0 0 20px 0; opacity: 0.9;">
        Just for you – complete your order today!
      </p>
      <div style="font-family: 'Cormorant Garamond', serif; font-size: 24px; font-weight: 700; color: #d4af37; letter-spacing: 2px; padding: 15px; background: rgba(0,0,0,0.2); border: 1px dashed #d4af37; border-radius: 4px; display: inline-block;">
        COMEBACK10
      </div>
      <p style="font-size: 14px; margin: 15px 0 0 0; opacity: 0.8;">
        Valid for 48 hours only • Minimum order £15
      </p>
    </div>
    
    <div style="text-align: center; margin: 30px 0;">
      <a href="https://www.spiceislandindonesia.com/cart?discount=COMEBACK10" class="cta-button" style="font-size: 20px; padding: 20px 40px;">
        Claim My Discount Now
      </a>
    </div>
    
    <!-- What You're Missing -->
    <div style="background: linear-gradient(135deg, #fef9f1 0%, #fdf2e1 100%); border: 2px solid #d4af37; border-radius: 8px; padding: 30px; margin: 30px 0;">
      <h3 style="font-family: 'Cormorant Garamond', serif; font-size: 20px; font-weight: 600; color: #7f1d2b; margin: 0 0 20px 0; text-align: center;">
        🌶️ What You'll Miss Without Authentic Sambal
      </h3>
      
      <div style="display: grid; gap: 15px;">
        <div style="display: flex; align-items: center;">
          <div style="background: #dc2626; color: white; border-radius: 50%; width: 30px; height: 30px; display: flex; align-items: center; justify-content: center; font-weight: bold; margin-right: 15px;">✗</div>
          <span style="color: #7f1d2b;">Bland, uninspiring meals that lack authentic Indonesian depth</span>
        </div>
        <div style="display: flex; align-items: center;">
          <div style="background: #dc2626; color: white; border-radius: 50%; width: 30px; height: 30px; display: flex; align-items: center; justify-content: center; font-weight: bold; margin-right: 15px;">✗</div>
          <span style="color: #7f1d2b;">Missing out on centuries-old culinary traditions</span>
        </div>
        <div style="display: flex; align-items: center;">
          <div style="background: #dc2626; color: white; border-radius: 50%; width: 30px; height: 30px; display: flex; align-items: center; justify-content: center; font-weight: bold; margin-right: 15px;">✗</div>
          <span style="color: #7f1d2b;">Never experiencing the true taste of Indonesian spice islands</span>
        </div>
      </div>
    </div>
    
    <!-- Final Push -->
    <div style="border-left: 4px solid #c1272d; background: #fdf2e1; padding: 25px; margin: 30px 0;">
      <h4 style="color: #7f1d2b; margin: 0 0 15px 0; font-family: 'Cormorant Garamond', serif;">This is our final email about your cart</h4>
      <p style="color: #57534e; margin: 0; line-height: 1.6;">
        We won't email you about these items again. If you change your mind later, you'll need to rebuild your cart from scratch. 
        Use code <strong>COMEBACK10</strong> and save both time and money today.
      </p>
    </div>
    
    <p class="content-text">
      Your authentic Indonesian culinary adventure is just one click away. Don't let this opportunity slip through your fingers.
    </p>
    
    <p class="content-text">
      Terakhir kali (one last time),<br>
      Chef Yossie & The Spice Island Indonesia Team
    </p>
    
    <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 30px 0; text-align: center; border: 1px solid #e5e7eb;">
      <p style="font-size: 14px; color: #6b7280; margin: 0;">
        Not interested? <a href="https://www.spiceislandindonesia.com/unsubscribe?email=${encodeURIComponent(data.email)}&type=cart" style="color: #7f1d2b;">Unsubscribe from cart reminders</a>
      </p>
    </div>
  `;
  
  return getBaseEmailTemplate(
    data,
    "Final Call: 10% Off Your Sambal Collection",
    "Your last chance for authentic Indonesian flavors + exclusive discount",
    contentHtml
  );
};

// Monthly Recipe Newsletter Template
export const getMonthlyRecipeNewsletterHtml = (data: EmailTemplateData) => {
  const recipeName = data.recipeName || 'Indonesian Sambal Fried Rice';
  const recipeImage = data.recipeImage || 'https://www.spiceislandindonesia.com/images/nasi-goreng-sambal.webp';
  const featuredSambal = data.featuredSambal || 'Sambal Oelek';
  const monthYear = data.monthYear || new Date().toLocaleDateString('en-GB', { month: 'long', year: 'numeric' });
  const culturalStory = data.culturalStory || 'Fried rice, or "nasi goreng," is Indonesia\'s national dish and a perfect canvas for sambal\'s complex flavors.';

  const contentHtml = `
    <div style="background: linear-gradient(135deg, #7f1d2b 0%, #962838 100%); color: white; padding: 25px; border-radius: 8px; margin: 0 0 30px 0; text-align: center;">
      <h2 style="font-family: 'Cormorant Garamond', serif; font-size: 24px; font-weight: 600; color: #d4af37; margin: 0 0 10px 0;">
        🍛 Recipe of the Month
      </h2>
      <p style="margin: 0; opacity: 0.9; font-size: 16px;">
        ${monthYear} • Authentic Indonesian Cooking
      </p>
    </div>
    
    <h2 class="content-title">${recipeName}</h2>
    
    <p class="content-text">
      ${data.firstName ? `Hello ${data.firstName},` : 'Selamat pagi (Good morning),'}<br><br>
      This month, we're sharing one of Indonesia's most beloved comfort foods – a dish that transforms simple ingredients into something extraordinary with the magic of authentic sambal.
    </p>
    
    <!-- Recipe Image -->
    <div style="text-align: center; margin: 30px 0;">
      <img src="${recipeImage}" alt="${recipeName}" style="width: 100%; max-width: 500px; height: 300px; object-fit: cover; border-radius: 8px; border: 3px solid #d4af37;">
    </div>
    
    <!-- Cultural Story -->
    <div style="background: linear-gradient(135deg, #fef9f1 0%, #fdf2e1 100%); border-left: 4px solid #d4af37; padding: 30px; margin: 30px 0; border-radius: 8px;">
      <h3 style="font-family: 'Cormorant Garamond', serif; font-size: 20px; font-weight: 600; color: #7f1d2b; margin: 0 0 15px 0;">
        🇮🇩 The Story Behind the Dish
      </h3>
      <p style="font-size: 16px; color: #57534e; margin: 0; line-height: 1.6; font-style: italic;">
        ${culturalStory}
      </p>
    </div>
    
    <!-- Recipe Card -->
    <div style="background: #ffffff; border: 2px solid #e5e7eb; border-radius: 8px; margin: 30px 0; overflow: hidden;">
      <div style="background: #f9fafb; padding: 20px; border-bottom: 2px solid #e5e7eb;">
        <h3 style="font-family: 'Cormorant Garamond', serif; font-size: 22px; font-weight: 600; color: #7f1d2b; margin: 0;">
          📝 Authentic Recipe
        </h3>
      </div>
      
      <div style="padding: 30px;">
        <!-- Ingredients -->
        <h4 style="color: #7f1d2b; font-family: 'Cormorant Garamond', serif; font-size: 18px; margin: 0 0 15px 0;">Ingredients (Serves 4):</h4>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 25px;">
          <div>
            <ul style="list-style: none; padding: 0; margin: 0;">
              <li style="color: #44403c; margin: 8px 0; position: relative; padding-left: 20px;">
                <span style="color: #d4af37; position: absolute; left: 0;">•</span>
                400g day-old jasmine rice
              </li>
              <li style="color: #44403c; margin: 8px 0; position: relative; padding-left: 20px;">
                <span style="color: #d4af37; position: absolute; left: 0;">•</span>
                3 eggs, beaten
              </li>
              <li style="color: #44403c; margin: 8px 0; position: relative; padding-left: 20px;">
                <span style="color: #d4af37; position: absolute; left: 0;">•</span>
                3 cloves garlic, minced
              </li>
              <li style="color: #44403c; margin: 8px 0; position: relative; padding-left: 20px;">
                <span style="color: #d4af37; position: absolute; left: 0;">•</span>
                2 shallots, finely sliced
              </li>
            </ul>
          </div>
          <div>
            <ul style="list-style: none; padding: 0; margin: 0;">
              <li style="color: #44403c; margin: 8px 0; position: relative; padding-left: 20px;">
                <span style="color: #d4af37; position: absolute; left: 0;">•</span>
                3 tbsp <strong>${featuredSambal}</strong>
              </li>
              <li style="color: #44403c; margin: 8px 0; position: relative; padding-left: 20px;">
                <span style="color: #d4af37; position: absolute; left: 0;">•</span>
                2 tbsp kecap manis (sweet soy)
              </li>
              <li style="color: #44403c; margin: 8px 0; position: relative; padding-left: 20px;">
                <span style="color: #d4af37; position: absolute; left: 0;">•</span>
                200g chicken or prawns
              </li>
              <li style="color: #44403c; margin: 8px 0; position: relative; padding-left: 20px;">
                <span style="color: #d4af37; position: absolute; left: 0;">•</span>
                Spring onions & cucumber
              </li>
            </ul>
          </div>
        </div>
        
        <!-- Method -->
        <h4 style="color: #7f1d2b; font-family: 'Cormorant Garamond', serif; font-size: 18px; margin: 25px 0 15px 0;">Chef Yossie's Method:</h4>
        <ol style="padding-left: 20px; margin: 0;">
          <li style="color: #44403c; margin: 12px 0; line-height: 1.6;">
            <strong>Prep the wok:</strong> Heat oil over high heat until smoking. This is crucial for the "wok hei" (breath of wok) flavor.
          </li>
          <li style="color: #44403c; margin: 12px 0; line-height: 1.6;">
            <strong>Eggs first:</strong> Scramble eggs until just set, then remove. Don't overcook – they'll finish cooking later.
          </li>
          <li style="color: #44403c; margin: 12px 0; line-height: 1.6;">
            <strong>Build flavor:</strong> Fry garlic and shallots until fragrant, add ${featuredSambal} and cook for 30 seconds.
          </li>
          <li style="color: #44403c; margin: 12px 0; line-height: 1.6;">
            <strong>Rice magic:</strong> Add rice, breaking up clumps. Toss constantly for 2-3 minutes until heated through.
          </li>
          <li style="color: #44403c; margin: 12px 0; line-height: 1.6;">
            <strong>Finish strong:</strong> Return eggs, add kecap manis, protein. Toss everything together. Taste and adjust seasoning.
          </li>
        </ol>
      </div>
    </div>
    
    <!-- Chef's Secret Tips -->
    <div style="background: #7f1d2b; color: white; padding: 25px; border-radius: 8px; margin: 30px 0;">
      <h3 style="font-family: 'Cormorant Garamond', serif; font-size: 20px; font-weight: 600; color: #d4af37; margin: 0 0 15px 0;">
        👩‍🍳 Chef Yossie's Secret Tips
      </h3>
      <ul style="list-style: none; padding: 0; margin: 0;">
        <li style="margin: 10px 0; position: relative; padding-left: 25px;">
          <span style="color: #d4af37; position: absolute; left: 0; top: 2px;">🔥</span>
          <strong>Day-old rice is essential</strong> – fresh rice becomes mushy. Cook rice the day before and refrigerate.
        </li>
        <li style="margin: 10px 0; position: relative; padding-left: 25px;">
          <span style="color: #d4af37; position: absolute; left: 0; top: 2px;">🌶️</span>
          <strong>Sambal quality matters</strong> – Our ${featuredSambal} has the perfect balance for this dish.
        </li>
        <li style="margin: 10px 0; position: relative; padding-left: 25px;">
          <span style="color: #d4af37; position: absolute; left: 0; top: 2px;">⚡</span>
          <strong>Keep the heat high</strong> – This prevents the rice from steaming and creates that signature smoky flavor.
        </li>
      </ul>
    </div>
    
    <!-- UK Ingredient Substitutions -->
    <div style="background: #f0fdf4; border: 1px solid #22c55e; border-radius: 8px; padding: 25px; margin: 30px 0;">
      <h4 style="color: #15803d; margin: 0 0 15px 0; font-family: 'Cormorant Garamond', serif;">🇬🇧 UK Ingredient Adaptations</h4>
      <div style="display: grid; gap: 10px;">
        <div style="display: flex; justify-content: space-between; align-items: center; padding: 8px; background: white; border-radius: 4px;">
          <span style="color: #166534; font-weight: 500;">Kecap Manis:</span>
          <span style="color: #15803d; font-size: 14px;">Available at Tesco World Foods or mix dark soy + brown sugar</span>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center; padding: 8px; background: white; border-radius: 4px;">
          <span style="color: #166534; font-weight: 500;">Shallots:</span>
          <span style="color: #15803d; font-size: 14px;">Banana shallots work perfectly, available in most UK supermarkets</span>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center; padding: 8px; background: white; border-radius: 4px;">
          <span style="color: #166534; font-weight: 500;">Day-old rice:</span>
          <span style="color: #15803d; font-size: 14px;">Cook basmati or jasmine rice the night before, refrigerate</span>
        </div>
      </div>
    </div>
    
    <!-- Shop Featured Sambal -->
    <div style="text-align: center; margin: 40px 0;">
      <h3 style="color: #7f1d2b; margin-bottom: 15px;">Don't have ${featuredSambal} yet?</h3>
      <a href="https://www.spiceislandindonesia.com/products/${featuredSambal.toLowerCase().replace(/\s+/g, '-')}" class="cta-button" style="margin-right: 10px;">
        Shop ${featuredSambal}
      </a>
      <a href="https://www.spiceislandindonesia.com/products" style="display: inline-block; background: transparent; color: #7f1d2b !important; text-decoration: none; padding: 16px 32px; border: 2px solid #7f1d2b; border-radius: 4px; font-family: 'Cormorant Garamond', serif; font-size: 18px; font-weight: 600;">
        View All Sambals
      </a>
    </div>
    
    <!-- Community Section -->
    <div style="background: linear-gradient(135deg, #fef9f1 0%, #fdf2e1 100%); border-radius: 8px; padding: 30px; margin: 30px 0; text-align: center;">
      <h3 style="font-family: 'Cormorant Garamond', serif; font-size: 22px; font-weight: 600; color: #7f1d2b; margin: 0 0 15px 0;">
        📸 Share Your Creation!
      </h3>
      <p style="color: #57534e; margin: 0 0 20px 0; line-height: 1.6;">
        Made this recipe? We'd love to see your version! Tag us on social media with <strong>#SpiceIslandCooking</strong> for a chance to be featured in next month's newsletter.
      </p>
      <div style="display: flex; justify-content: center; gap: 20px; margin: 20px 0;">
        <a href="https://www.instagram.com/spiceislandindonesia" style="color: #7f1d2b; text-decoration: none; font-weight: 600;">📸 Instagram</a>
        <a href="https://www.facebook.com/spiceislandindonesia" style="color: #7f1d2b; text-decoration: none; font-weight: 600;">👥 Facebook</a>
      </div>
    </div>
    
    <!-- Next Month Preview -->
    <div style="border-left: 4px solid #d4af37; background: #fdf2e1; padding: 25px; margin: 30px 0;">
      <h4 style="color: #7f1d2b; margin: 0 0 10px 0; font-family: 'Cormorant Garamond', serif;">🔮 Coming Next Month</h4>
      <p style="color: #57534e; margin: 0; font-size: 15px; line-height: 1.6;">
        We'll be sharing our authentic <strong>Rendang recipe</strong> – the slow-cooked beef curry that's considered Indonesia's national treasure. Learn the traditional techniques passed down through generations.
      </p>
    </div>
    
    <p class="content-text">
      Thank you for being part of our culinary community. Your passion for authentic Indonesian flavors inspires us to share these treasured family recipes.
    </p>
    
    <p class="content-text">
      Selamat memasak dan selamat makan (Happy cooking and happy eating!),<br>
      Chef Yossie & The Spice Island Indonesia Team
    </p>
  `;
  
  return getBaseEmailTemplate(
    data,
    `${monthYear} Recipe: ${recipeName}`,
    "Authentic Indonesian cooking with Chef Yossie",
    contentHtml
  );
};

// Review Request Email Template
export const getReviewRequestEmailHtml = (data: EmailTemplateData) => {
  const orderNumber = data.orderNumber || '#ORDER-123';
  const reviewIncentive = data.reviewIncentive || 'REVIEW5';
  const customerName = data.firstName || 'Valued Customer';
  
  const contentHtml = `
    <h2 class="content-title">How Are You Enjoying Your Authentic Sambals? ⭐</h2>
    
    <p class="content-text">
      Hi ${customerName},<br><br>
      A week ago, you received your order of authentic Indonesian sambals from us (${orderNumber}). We hope you've had the chance to experience these incredible flavors!
    </p>
    
    <!-- Review Invitation -->
    <div style="background: linear-gradient(135deg, #059669 0%, #10b981 100%); color: white; padding: 30px; border-radius: 8px; margin: 30px 0; text-align: center;">
      <h3 style="font-family: 'Cormorant Garamond', serif; font-size: 24px; font-weight: 600; color: #fef9f1; margin: 0 0 15px 0;">
        🌟 Share Your Experience
      </h3>
      <p style="margin: 0 0 20px 0; opacity: 0.9; font-size: 16px;">
        Your honest review helps other food lovers discover authentic Indonesian flavors
      </p>
      <p style="margin: 0; font-size: 14px; opacity: 0.8;">
        Plus, get £5 off your next order as a thank you!
      </p>
    </div>
    
    <!-- Review Platform Options -->
    <div style="background: #ffffff; border: 2px solid #e5e7eb; border-radius: 8px; margin: 30px 0; overflow: hidden;">
      <div style="background: #f9fafb; padding: 20px; border-bottom: 2px solid #e5e7eb;">
        <h3 style="font-family: 'Cormorant Garamond', serif; font-size: 20px; font-weight: 600; color: #7f1d2b; margin: 0; text-align: center;">
          Choose Your Preferred Platform
        </h3>
      </div>
      
      <div style="padding: 30px;">
        <div style="display: grid; gap: 15px;">
          <!-- Google Reviews -->
          <div style="background: #fef9f1; border: 2px solid #d4af37; border-radius: 8px; padding: 20px;">
            <div style="display: flex; align-items: center; justify-content: space-between;">
              <div>
                <h4 style="color: #7f1d2b; margin: 0 0 5px 0; font-family: 'Cormorant Garamond', serif;">Google Reviews</h4>
                <p style="color: #57534e; margin: 0; font-size: 14px;">Help others find us in search results</p>
              </div>
              <a href="https://g.page/r/your-google-business-id/review" style="background: #4285f4; color: white !important; text-decoration: none; padding: 10px 20px; border-radius: 4px; font-weight: 600;">
                Review on Google
              </a>
            </div>
          </div>
          
          <!-- Trustpilot -->
          <div style="background: #fef9f1; border: 1px solid #e5e7eb; border-radius: 8px; padding: 20px;">
            <div style="display: flex; align-items: center; justify-content: space-between;">
              <div>
                <h4 style="color: #7f1d2b; margin: 0 0 5px 0; font-family: 'Cormorant Garamond', serif;">Trustpilot</h4>
                <p style="color: #57534e; margin: 0; font-size: 14px;">Join our community of verified buyers</p>
              </div>
              <a href="https://uk.trustpilot.com/evaluate/spiceislandindonesia.com" style="background: #00b67a; color: white !important; text-decoration: none; padding: 10px 20px; border-radius: 4px; font-weight: 600;">
                Review on Trustpilot
              </a>
            </div>
          </div>
          
          <!-- Facebook -->
          <div style="background: #fef9f1; border: 1px solid #e5e7eb; border-radius: 8px; padding: 20px;">
            <div style="display: flex; align-items: center; justify-content: space-between;">
              <div>
                <h4 style="color: #7f1d2b; margin: 0 0 5px 0; font-family: 'Cormorant Garamond', serif;">Facebook</h4>
                <p style="color: #57534e; margin: 0; font-size: 14px;">Share with your foodie friends</p>
              </div>
              <a href="https://www.facebook.com/spiceislandindonesia/reviews" style="background: #1877f2; color: white !important; text-decoration: none; padding: 10px 20px; border-radius: 4px; font-weight: 600;">
                Review on Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Photo Upload Encouragement -->
    <div style="background: linear-gradient(135deg, #fef9f1 0%, #fdf2e1 100%); border-left: 4px solid #d4af37; padding: 30px; margin: 30px 0; border-radius: 8px;">
      <h3 style="font-family: 'Cormorant Garamond', serif; font-size: 20px; font-weight: 600; color: #7f1d2b; margin: 0 0 15px 0;">
        📸 Share Your Culinary Creations!
      </h3>
      <p style="font-size: 16px; color: #57534e; margin: 0 0 15px 0; line-height: 1.6;">
        We'd love to see how you're using our sambals! Photos of your dishes help other customers understand the authentic flavors and inspire their own cooking adventures.
      </p>
      <ul style="list-style: none; padding: 0; margin: 0;">
        <li style="color: #57534e; margin: 5px 0; position: relative; padding-left: 25px;">
          <span style="color: #d4af37; position: absolute; left: 0; top: 2px;">📱</span>
          Upload photos when leaving your review
        </li>
        <li style="color: #57534e; margin: 5px 0; position: relative; padding-left: 25px;">
          <span style="color: #d4af37; position: absolute; left: 0; top: 2px;">🍽️</span>
          Show off your Indonesian cooking skills
        </li>
        <li style="color: #57534e; margin: 5px 0; position: relative; padding-left: 25px;">
          <span style="color: #d4af37; position: absolute; left: 0; top: 2px;">⭐</span>
          Help build our community of authentic food lovers
        </li>
      </ul>
    </div>
    
    <!-- Discount Code -->
    <div style="background: #7f1d2b; color: white; padding: 25px; border-radius: 8px; margin: 30px 0; text-align: center;">
      <h3 style="font-family: 'Cormorant Garamond', serif; font-size: 20px; font-weight: 600; color: #d4af37; margin: 0 0 15px 0;">
        🎁 Thank You Gift
      </h3>
      <p style="margin: 0 0 15px 0; opacity: 0.9;">
        Leave a review and get £5 off your next authentic sambal order
      </p>
      <div style="font-family: 'Cormorant Garamond', serif; font-size: 24px; font-weight: 700; color: #d4af37; letter-spacing: 2px; padding: 15px; background: rgba(0,0,0,0.2); border: 1px dashed #d4af37; border-radius: 4px; display: inline-block; margin: 10px 0;">
        ${reviewIncentive}
      </div>
      <p style="margin: 10px 0 0 0; font-size: 14px; opacity: 0.8;">
        Use this code after leaving your review • Valid for 30 days
      </p>
    </div>
    
    <!-- What Makes Reviews Valuable -->
    <div style="background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px; padding: 25px; margin: 30px 0;">
      <h4 style="color: #7f1d2b; margin: 0 0 15px 0; text-align: center;">Why Your Review Matters</h4>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
        <div style="text-align: center;">
          <div style="font-size: 24px; margin-bottom: 10px;">🌍</div>
          <h5 style="color: #7f1d2b; margin: 0 0 8px 0;">Help Food Lovers Discover</h5>
          <p style="color: #6b7280; margin: 0; font-size: 14px;">Your experience guides others to authentic Indonesian flavors</p>
        </div>
        <div style="text-align: center;">
          <div style="font-size: 24px; margin-bottom: 10px;">👩‍🍳</div>
          <h5 style="color: #7f1d2b; margin: 0 0 8px 0;">Support Chef Yossie</h5>
          <p style="color: #6b7280; margin: 0; font-size: 14px;">Reviews help us continue bringing authentic recipes to the UK</p>
        </div>
      </div>
    </div>
    
    <!-- Easy Review Process -->
    <h3 style="font-family: 'Cormorant Garamond', serif; font-size: 20px; font-weight: 600; color: #7f1d2b; margin: 30px 0 15px 0; text-align: center;">
      📝 Quick & Easy Process
    </h3>
    
    <ol style="padding-left: 20px; margin: 0 0 30px 0;">
      <li style="color: #44403c; margin: 10px 0; line-height: 1.6;">
        <strong>Click your preferred platform</strong> above (takes 30 seconds)
      </li>
      <li style="color: #44403c; margin: 10px 0; line-height: 1.6;">
        <strong>Rate your experience</strong> with stars (1-5)
      </li>
      <li style="color: #44403c; margin: 10px 0; line-height: 1.6;">
        <strong>Share what you loved</strong> about the authentic flavors
      </li>
      <li style="color: #44403c; margin: 10px 0; line-height: 1.6;">
        <strong>Upload a photo</strong> of your sambal creation (optional)
      </li>
      <li style="color: #44403c; margin: 10px 0; line-height: 1.6;">
        <strong>Use code ${reviewIncentive}</strong> on your next order
      </li>
    </ol>
    
    <div style="text-align: center; margin: 30px 0;">
      <a href="https://g.page/r/your-google-business-id/review" class="cta-button" style="margin-right: 10px;">
        Leave Google Review
      </a>
      <a href="https://www.spiceislandindonesia.com/contact" style="display: inline-block; background: transparent; color: #7f1d2b !important; text-decoration: none; padding: 16px 32px; border: 2px solid #7f1d2b; border-radius: 4px; font-family: 'Cormorant Garamond', serif; font-size: 18px; font-weight: 600;">
        Contact Us
      </a>
    </div>
    
    <p class="content-text">
      Your authentic Indonesian culinary journey means the world to us. Thank you for choosing Spice Island Indonesia and for taking the time to share your experience.
    </p>
    
    <p class="content-text">
      Terima kasih banyak (Thank you very much),<br>
      Chef Yossie & The Spice Island Indonesia Family
    </p>
  `;
  
  return getBaseEmailTemplate(
    data,
    "How Are Your Sambals? Share Your Experience! ⭐",
    "Help other food lovers discover authentic Indonesian flavors + get £5 off",
    contentHtml
  );
};

// Follow-up Review Email Template (for non-responders)
export const getReviewFollowUpEmailHtml = (data: EmailTemplateData) => {
  const customerName = data.firstName || 'Valued Customer';
  
  const contentHtml = `
    <h2 class="content-title">Last Chance: Share Your Sambal Experience ⭐</h2>
    
    <p class="content-text">
      Hi ${customerName},<br><br>
      We reached out recently about your authentic Indonesian sambal order, but haven't heard from you yet. We'd still love to know how you're enjoying these traditional flavors!
    </p>
    
    <!-- Quick Review Reminder -->
    <div style="background: linear-gradient(135deg, #7f1d2b 0%, #962838 100%); color: white; padding: 25px; border-radius: 8px; margin: 30px 0; text-align: center;">
      <h3 style="font-family: 'Cormorant Garamond', serif; font-size: 22px; font-weight: 600; color: #d4af37; margin: 0 0 15px 0;">
        2 Minutes = £5 Off Your Next Order
      </h3>
      <p style="margin: 0; opacity: 0.9; font-size: 16px;">
        Quick review • Big impact for other food lovers • Immediate reward
      </p>
    </div>
    
    <!-- Simple One-Click Options -->
    <h3 style="color: #7f1d2b; text-align: center; margin: 30px 0 20px 0;">Choose Your Experience:</h3>
    
    <div style="display: grid; gap: 15px; margin: 30px 0;">
      <!-- Positive Experience -->
      <div style="background: #f0fdf4; border: 2px solid #22c55e; border-radius: 8px; padding: 20px; text-align: center;">
        <h4 style="color: #15803d; margin: 0 0 10px 0;">😍 I Love My Sambals!</h4>
        <p style="color: #166534; margin: 0 0 15px 0; font-size: 14px;">Share the love with other Indonesian food enthusiasts</p>
        <a href="https://g.page/r/your-google-business-id/review" style="background: #22c55e; color: white !important; text-decoration: none; padding: 12px 24px; border-radius: 4px; font-weight: 600; display: inline-block;">
          Leave 5-Star Review
        </a>
      </div>
      
      <!-- Neutral Experience -->
      <div style="background: #fefce8; border: 2px solid #eab308; border-radius: 8px; padding: 20px; text-align: center;">
        <h4 style="color: #a16207; margin: 0 0 10px 0;">🤔 It's Good, But...</h4>
        <p style="color: #a16207; margin: 0 0 15px 0; font-size: 14px;">Let us know how we can make it even better</p>
        <a href="https://www.spiceislandindonesia.com/contact" style="background: #eab308; color: white !important; text-decoration: none; padding: 12px 24px; border-radius: 4px; font-weight: 600; display: inline-block;">
          Share Feedback
        </a>
      </div>
      
      <!-- Negative Experience -->
      <div style="background: #fef2f2; border: 2px solid #ef4444; border-radius: 8px; padding: 20px; text-align: center;">
        <h4 style="color: #dc2626; margin: 0 0 10px 0;">😞 Not What I Expected</h4>
        <p style="color: #dc2626; margin: 0 0 15px 0; font-size: 14px;">Let's make this right - we stand behind our products</p>
        <a href="https://www.spiceislandindonesia.com/contact?issue=quality" style="background: #ef4444; color: white !important; text-decoration: none; padding: 12px 24px; border-radius: 4px; font-weight: 600; display: inline-block;">
          Contact Support
        </a>
      </div>
    </div>
    
    <!-- Why Reviews Matter -->
    <div style="border-left: 4px solid #d4af37; background: #fdf2e1; padding: 25px; margin: 30px 0;">
      <h4 style="color: #7f1d2b; margin: 0 0 10px 0;">Your Voice Matters</h4>
      <p style="color: #57534e; margin: 0; font-size: 15px; line-height: 1.6;">
        As a small business bringing authentic Indonesian flavors to the UK, every review helps us reach more food lovers who are searching for genuine traditional tastes. Your honest experience guides others on their culinary journey.
      </p>
    </div>
    
    <!-- Final Incentive -->
    <div style="text-align: center; margin: 40px 0;">
      <p style="color: #7f1d2b; font-size: 16px; margin: 0 0 15px 0;"><strong>Still get £5 off with code: REVIEW5</strong></p>
      <a href="https://g.page/r/your-google-business-id/review" class="cta-button">
        Quick 2-Minute Review
      </a>
    </div>
    
    <p class="content-text">
      This will be our final email about reviews. Thank you for considering sharing your experience with our authentic Indonesian sambals.
    </p>
    
    <p class="content-text">
      Salam hormat (With respect),<br>
      Chef Yossie & The Spice Island Indonesia Team
    </p>
  `;
  
  return getBaseEmailTemplate(
    data,
    "Final Call: 2-Minute Review = £5 Off Your Next Order",
    "Last chance to share your sambal experience and help other food lovers",
    contentHtml
  );
};

// Promotional Email Templates

// Flash Sale Email
export const getFlashSaleEmailHtml = (data: EmailTemplateData) => {
  const contentHtml = `
    <h2 class="content-title">🔥 Flash Sale: 24 Hours Only!</h2>
    
    <p class="content-text">
      ${data.firstName ? `Dear ${data.firstName},` : 'Hello,'}<br><br>
      We're starting the weekend with something special – an exclusive flash sale for our valued customers!
    </p>
    
    <div style="background: linear-gradient(135deg, #c1272d 0%, #dc2626 100%); color: white; padding: 40px 30px; border-radius: 8px; margin: 30px 0; text-align: center;">
      <h3 style="font-family: 'Cormorant Garamond', serif; font-size: 36px; font-weight: 700; color: #fef9f1; margin: 0 0 10px 0;">
        25% OFF
      </h3>
      <p style="font-size: 20px; margin: 0 0 20px 0; opacity: 0.9;">
        Everything in Stock
      </p>
      <div style="font-family: 'Cormorant Garamond', serif; font-size: 24px; font-weight: 700; color: #d4af37; letter-spacing: 2px; padding: 15px; background: rgba(0,0,0,0.2); border: 1px dashed #d4af37; border-radius: 4px; display: inline-block;">
        FLASH25
      </div>
      <p style="font-size: 16px; margin: 15px 0 0 0; opacity: 0.8;">
        Valid until Sunday 11:59 PM
      </p>
    </div>
    
    <p class="content-text">
      Stock up on your favorite sambals or try something new – this discount applies to our entire collection, including our premium gift sets.
    </p>
    
    <div style="text-align: center; margin: 40px 0;">
      <a href="https://www.spiceislandindonesia.com/products?utm_source=email&utm_campaign=flash_sale" class="cta-button">
        Shop Flash Sale
      </a>
    </div>
    
    <div style="background: #fef9f1; padding: 20px; border-radius: 8px; margin: 30px 0;">
      <h4 style="color: #7f1d2b; margin: 0 0 10px 0;">⏰ Limited Time Highlights:</h4>
      <ul style="list-style: none; padding: 0; margin: 0;">
        <li style="color: #44403c; margin: 5px 0;">• Sambal Trio Pack: £18.75 (was £25)</li>
        <li style="color: #44403c; margin: 5px 0;">• Gift Box Collection: £22.50 (was £30)</li>
        <li style="color: #44403c; margin: 5px 0;">• Individual jars: From £5.25 each</li>
      </ul>
    </div>
    
    <p class="content-text">
      Don't wait – this offer expires in 24 hours and won't be repeated anytime soon!
    </p>
    
    <p class="content-text">
      Happy shopping!<br>
      The Spice Island Indonesia Team
    </p>
  `;
  
  return getBaseEmailTemplate(
    data,
    "⚡ 24-Hour Flash Sale",
    "25% off everything - limited time only",
    contentHtml
  );
};

// New Product Launch Email
export const getNewProductEmailHtml = (data: EmailTemplateData) => {
  const productName = data.productName || "Sambal Matah";
  const productImage = data.productImage || "https://www.spiceislandindonesia.com/images/sambal-bali.webp";
  
  const contentHtml = `
    <h2 class="content-title">🎉 Introducing: ${productName}</h2>
    
    <p class="content-text">
      ${data.firstName ? `Dear ${data.firstName},` : 'Hello,'}<br><br>
      We're thrilled to introduce our newest addition to the Spice Island Indonesia family – and you're getting the first taste!
    </p>
    
    <div style="text-align: center; margin: 30px 0;">
      <img src="${productImage}" alt="${productName}" style="width: 200px; height: 200px; object-fit: cover; border-radius: 8px; border: 3px solid #d4af37;">
    </div>
    
    <div style="background: linear-gradient(135deg, #fef9f1 0%, #fdf2e1 100%); border: 2px solid #d4af37; border-radius: 8px; padding: 30px; margin: 30px 0;">
      <h3 style="font-family: 'Cormorant Garamond', serif; font-size: 24px; font-weight: 600; color: #7f1d2b; margin: 0 0 15px 0;">
        ${productName}: Fresh & Fragrant
      </h3>
      <p style="font-size: 16px; color: #44403c; margin: 0 0 20px 0; line-height: 1.6;">
        This raw sambal from Bali combines fresh chilies, shallots, lemongrass, and kaffir lime leaves. Unlike cooked sambals, Sambal Matah offers a bright, fresh heat that awakens your palate.
      </p>
      <div style="text-align: center; margin: 20px 0;">
        <span style="font-size: 20px; font-weight: bold; color: #c1272d;">Limited First Batch</span>
      </div>
    </div>
    
    <h3 style="font-family: 'Cormorant Garamond', serif; font-size: 20px; font-weight: 600; color: #7f1d2b; margin: 30px 0 15px 0;">
      Perfect Pairings:
    </h3>
    
    <ul style="list-style: none; padding: 0; margin: 0 0 30px 0;">
      <li style="font-size: 16px; color: #44403c; padding: 8px 0; position: relative; padding-left: 30px;">
        <span style="color: #d4af37; font-size: 20px; font-weight: bold; position: absolute; left: 0; top: 5px;">•</span>
        Grilled fish and seafood
      </li>
      <li style="font-size: 16px; color: #44403c; padding: 8px 0; position: relative; padding-left: 30px;">
        <span style="color: #d4af37; font-size: 20px; font-weight: bold; position: absolute; left: 0; top: 5px;">•</span>
        Fresh salads and raw vegetables
      </li>
      <li style="font-size: 16px; color: #44403c; padding: 8px 0; position: relative; padding-left: 30px;">
        <span style="color: #d4af37; font-size: 20px; font-weight: bold; position: absolute; left: 0; top: 5px;">•</span>
        Coconut rice and tropical dishes
      </li>
    </ul>
    
    <div style="background: #7f1d2b; color: white; padding: 25px; border-radius: 8px; margin: 30px 0; text-align: center;">
      <h4 style="color: #d4af37; margin: 0 0 15px 0;">VIP Early Access</h4>
      <p style="margin: 0 0 20px 0; opacity: 0.9;">
        Get 15% off as one of the first to try ${productName}
      </p>
      <div style="font-family: 'Cormorant Garamond', serif; font-size: 20px; font-weight: 700; color: #d4af37; letter-spacing: 2px; padding: 12px; background: rgba(0,0,0,0.2); border: 1px dashed #d4af37; border-radius: 4px; display: inline-block;">
        NEWSAMBAL15
      </div>
    </div>
    
    <div style="text-align: center; margin: 40px 0;">
      <a href="https://www.spiceislandindonesia.com/products/${productName.toLowerCase().replace(/\s+/g, '-')}" class="cta-button">
        Try ${productName} Now
      </a>
    </div>
    
    <p class="content-text">
      This is a limited first batch, so don't wait too long. We can't wait to hear what you think of this fresh, vibrant addition to our collection!
    </p>
    
    <p class="content-text">
      Selamat mencoba (enjoy trying it!),<br>
      Chef Yossie & The Spice Island Indonesia Team
    </p>
  `;
  
  return getBaseEmailTemplate(
    data,
    `New Arrival: ${productName}`,
    "Fresh, authentic flavors from Bali - now available",
    contentHtml
  );
};