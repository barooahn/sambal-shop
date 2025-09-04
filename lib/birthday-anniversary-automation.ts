// Birthday and Anniversary Email Automation
// Celebrates customer milestones with personalized offers and Indonesian cultural elements

interface CustomerMilestoneData {
  email: string;
  firstName?: string;
  lastName?: string;
  birthday?: Date;
  customerSince?: Date;
  totalPurchases?: number;
  totalSpent?: number;
  favoriteProduct?: string;
  yearsSince?: number;
  monthsSince?: number;
}

interface MilestoneResult {
  success: boolean;
  data?: any;
  error?: any;
}

export class BirthdayAnniversaryManager {
  private customerData: CustomerMilestoneData;
  
  constructor(customerData: CustomerMilestoneData) {
    this.customerData = customerData;
  }

  /**
   * Send birthday email with Indonesian birthday traditions
   */
  async sendBirthdayEmail(): Promise<void> {
    console.log(`🎂 Sending birthday email to ${this.customerData.email}`);
    
    try {
      const result = await sendBirthdayEmail({
        email: this.customerData.email,
        firstName: this.customerData.firstName,
        favoriteProduct: this.customerData.favoriteProduct,
        totalPurchases: this.customerData.totalPurchases
      });

      if (result.success) {
        console.log(`✅ Birthday email sent successfully to ${this.customerData.email}`);
      } else {
        console.error(`❌ Failed to send birthday email to ${this.customerData.email}:`, result.error);
      }
    } catch (error) {
      console.error(`💥 Error sending birthday email to ${this.customerData.email}:`, error);
      throw error;
    }
  }

  /**
   * Send customer anniversary email celebrating their journey
   */
  async sendCustomerAnniversaryEmail(): Promise<void> {
    const yearsSince = this.customerData.yearsSince || this.calculateYearsSince();
    console.log(`🎉 Sending ${yearsSince}-year anniversary email to ${this.customerData.email}`);
    
    try {
      const result = await sendCustomerAnniversaryEmail({
        email: this.customerData.email,
        firstName: this.customerData.firstName,
        yearsSince: yearsSince,
        totalPurchases: this.customerData.totalPurchases,
        totalSpent: this.customerData.totalSpent,
        favoriteProduct: this.customerData.favoriteProduct,
        customerSince: this.customerData.customerSince
      });

      if (result.success) {
        console.log(`✅ Anniversary email sent successfully to ${this.customerData.email}`);
      } else {
        console.error(`❌ Failed to send anniversary email to ${this.customerData.email}:`, result.error);
      }
    } catch (error) {
      console.error(`💥 Error sending anniversary email to ${this.customerData.email}:`, error);
      throw error;
    }
  }

  /**
   * Calculate years since customer first joined
   */
  private calculateYearsSince(): number {
    if (!this.customerData.customerSince) return 1;
    
    const now = new Date();
    const yearsDiff = now.getFullYear() - this.customerData.customerSince.getFullYear();
    const monthsDiff = now.getMonth() - this.customerData.customerSince.getMonth();
    
    return monthsDiff >= 0 ? yearsDiff : yearsDiff - 1;
  }

  /**
   * Check if today is customer's birthday
   */
  static isBirthdayToday(customer: CustomerMilestoneData): boolean {
    if (!customer.birthday) return false;
    
    const today = new Date();
    const birthday = customer.birthday;
    
    return today.getMonth() === birthday.getMonth() && 
           today.getDate() === birthday.getDate();
  }

  /**
   * Check if today is customer's anniversary
   */
  static isAnniversaryToday(customer: CustomerMilestoneData): boolean {
    if (!customer.customerSince) return false;
    
    const today = new Date();
    const anniversary = customer.customerSince;
    
    return today.getMonth() === anniversary.getMonth() && 
           today.getDate() === anniversary.getDate() &&
           today.getFullYear() > anniversary.getFullYear();
  }

  /**
   * Get milestone significance and appropriate celebration level
   */
  getMilestoneSignificance(): {
    birthdayTier: 'standard' | 'vip';
    anniversaryTier: 'first' | 'milestone' | 'longterm';
    recommendedDiscount: number;
    specialGift?: string;
  } {
    const years = this.calculateYearsSince();
    const totalSpent = this.customerData.totalSpent || 0;
    const totalPurchases = this.customerData.totalPurchases || 0;
    
    let birthdayTier: 'standard' | 'vip' = 'standard';
    let anniversaryTier: 'first' | 'milestone' | 'longterm' = 'first';
    let recommendedDiscount = 15; // Base 15% birthday discount
    let specialGift: string | undefined;

    // VIP birthday treatment for high-value customers
    if (totalSpent > 100 || totalPurchases > 5) {
      birthdayTier = 'vip';
      recommendedDiscount = 25;
      specialGift = 'Limited Edition Sambal';
    }

    // Anniversary tier determination
    if (years === 1) {
      anniversaryTier = 'first';
      recommendedDiscount = 20;
    } else if (years === 2 || years === 5 || years === 10) {
      anniversaryTier = 'milestone';
      recommendedDiscount = 30;
      specialGift = 'Exclusive Anniversary Gift Box';
    } else if (years >= 3) {
      anniversaryTier = 'longterm';
      recommendedDiscount = 25;
    }

    return {
      birthdayTier,
      anniversaryTier,
      recommendedDiscount,
      specialGift
    };
  }
}

/**
 * Send birthday email with Indonesian birthday food traditions
 */
async function sendBirthdayEmail(data: {
  email: string;
  firstName?: string;
  favoriteProduct?: string;
  totalPurchases?: number;
}): Promise<MilestoneResult> {
  try {
    const { getBirthdayEmailHtml } = await import('./email-templates');
    
    const nodemailer = await import('nodemailer');
    
    const transport = nodemailer.default.createTransport({
      host: process.env.ZEPTOMAIL_SMTP_HOST!,
      port: parseInt(process.env.ZEPTOMAIL_SMTP_PORT!),
      auth: {
        user: process.env.ZEPTOMAIL_SMTP_USER!,
        pass: process.env.ZEPTOMAIL_SMTP_PASS!,
      },
    });
    
    const mailOptions = {
      from: `"Chef Yossie & Team - Spice Island Indonesia" <${process.env.ZEPTOMAIL_FROM_EMAIL!}>`,
      to: data.email,
      subject: "Selamat Ulang Tahun! 🎂 Your Special Birthday Gift Awaits",
      html: getBirthdayEmailHtml(data),
    };

    const result = await transport.sendMail(mailOptions);
    console.log(`✅ Birthday email sent to ${data.email}`);
    return { success: true, data: result };
  } catch (error) {
    console.error('Error sending birthday email:', error);
    return { success: false, error };
  }
}

/**
 * Send customer anniversary email
 */
async function sendCustomerAnniversaryEmail(data: {
  email: string;
  firstName?: string;
  yearsSince: number;
  totalPurchases?: number;
  totalSpent?: number;
  favoriteProduct?: string;
  customerSince?: Date;
}): Promise<MilestoneResult> {
  try {
    const { getCustomerAnniversaryEmailHtml } = await import('./email-templates');
    
    const nodemailer = await import('nodemailer');
    
    const transport = nodemailer.default.createTransport({
      host: process.env.ZEPTOMAIL_SMTP_HOST!,
      port: parseInt(process.env.ZEPTOMAIL_SMTP_PORT!),
      auth: {
        user: process.env.ZEPTOMAIL_SMTP_USER!,
        pass: process.env.ZEPTOMAIL_SMTP_PASS!,
      },
    });
    
    const mailOptions = {
      from: `"Chef Yossie & Team - Spice Island Indonesia" <${process.env.ZEPTOMAIL_FROM_EMAIL!}>`,
      to: data.email,
      subject: `🎉 ${data.yearsSince} Year${data.yearsSince > 1 ? 's' : ''} of Authentic Indonesian Flavors Together!`,
      html: getCustomerAnniversaryEmailHtml({ ...data, anniversaryYear: data.yearsSince }),
    };

    const result = await transport.sendMail(mailOptions);
    console.log(`✅ Anniversary email sent to ${data.email}`);
    return { success: true, data: result };
  } catch (error) {
    console.error('Error sending anniversary email:', error);
    return { success: false, error };
  }
}

/**
 * Process daily milestone check and send appropriate emails
 */
export async function processDailyMilestones(customers: CustomerMilestoneData[]): Promise<{
  birthdaysSent: number;
  anniversariesSent: number;
  errors: any[];
}> {
  const results = {
    birthdaysSent: 0,
    anniversariesSent: 0,
    errors: [] as any[]
  };

  console.log(`🎯 Processing daily milestones for ${customers.length} customers...`);

  for (const customer of customers) {
    try {
      const manager = new BirthdayAnniversaryManager(customer);
      
      // Check and send birthday email
      if (BirthdayAnniversaryManager.isBirthdayToday(customer)) {
        await manager.sendBirthdayEmail();
        results.birthdaysSent++;
        console.log(`🎂 Birthday email sent to ${customer.email}`);
      }
      
      // Check and send anniversary email  
      if (BirthdayAnniversaryManager.isAnniversaryToday(customer)) {
        await manager.sendCustomerAnniversaryEmail();
        results.anniversariesSent++;
        console.log(`🎉 Anniversary email sent to ${customer.email}`);
      }
      
      // Small delay between emails
      await new Promise(resolve => setTimeout(resolve, 500));
      
    } catch (error) {
      results.errors.push({
        email: customer.email,
        error: error instanceof Error ? error.message : 'Unknown error'
      });
      console.error(`❌ Failed to process milestones for ${customer.email}:`, error);
    }
  }

  console.log(`✅ Daily milestone processing complete: ${results.birthdaysSent} birthdays, ${results.anniversariesSent} anniversaries`);
  return results;
}

/**
 * Schedule milestone emails for upcoming dates
 */
export function scheduleUpcomingMilestones(customers: CustomerMilestoneData[], daysAhead: number = 1): {
  scheduledBirthdays: number;
  scheduledAnniversaries: number;
} {
  const results = {
    scheduledBirthdays: 0,
    scheduledAnniversaries: 0
  };

  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + daysAhead);

  for (const customer of customers) {
    // Schedule birthday if upcoming
    if (customer.birthday) {
      const birthdayThisYear = new Date(targetDate.getFullYear(), customer.birthday.getMonth(), customer.birthday.getDate());
      
      if (birthdayThisYear.toDateString() === targetDate.toDateString()) {
        const delay = targetDate.getTime() - Date.now();
        
        setTimeout(async () => {
          const manager = new BirthdayAnniversaryManager(customer);
          await manager.sendBirthdayEmail();
        }, delay);
        
        results.scheduledBirthdays++;
        console.log(`📅 Birthday email scheduled for ${customer.email} on ${targetDate.toLocaleDateString()}`);
      }
    }

    // Schedule anniversary if upcoming
    if (customer.customerSince) {
      const anniversaryThisYear = new Date(targetDate.getFullYear(), customer.customerSince.getMonth(), customer.customerSince.getDate());
      
      if (anniversaryThisYear.toDateString() === targetDate.toDateString() && 
          anniversaryThisYear.getTime() > customer.customerSince.getTime()) {
        const delay = targetDate.getTime() - Date.now();
        
        setTimeout(async () => {
          const manager = new BirthdayAnniversaryManager(customer);
          await manager.sendCustomerAnniversaryEmail();
        }, delay);
        
        results.scheduledAnniversaries++;
        console.log(`📅 Anniversary email scheduled for ${customer.email} on ${targetDate.toLocaleDateString()}`);
      }
    }
  }

  return results;
}

/**
 * Get customers with upcoming milestones
 */
export function getUpcomingMilestones(customers: CustomerMilestoneData[], daysAhead: number = 30): {
  upcomingBirthdays: Array<CustomerMilestoneData & { daysUntil: number }>;
  upcomingAnniversaries: Array<CustomerMilestoneData & { daysUntil: number; yearsCompleting: number }>;
} {
  const now = new Date();
  const upcomingBirthdays: Array<CustomerMilestoneData & { daysUntil: number }> = [];
  const upcomingAnniversaries: Array<CustomerMilestoneData & { daysUntil: number; yearsCompleting: number }> = [];

  for (const customer of customers) {
    // Check upcoming birthdays
    if (customer.birthday) {
      const thisYearBirthday = new Date(now.getFullYear(), customer.birthday.getMonth(), customer.birthday.getDate());
      const nextYearBirthday = new Date(now.getFullYear() + 1, customer.birthday.getMonth(), customer.birthday.getDate());
      
      const relevantBirthday = thisYearBirthday >= now ? thisYearBirthday : nextYearBirthday;
      const daysUntil = Math.ceil((relevantBirthday.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
      
      if (daysUntil <= daysAhead) {
        upcomingBirthdays.push({ ...customer, daysUntil });
      }
    }

    // Check upcoming anniversaries
    if (customer.customerSince) {
      const thisYearAnniversary = new Date(now.getFullYear(), customer.customerSince.getMonth(), customer.customerSince.getDate());
      const nextYearAnniversary = new Date(now.getFullYear() + 1, customer.customerSince.getMonth(), customer.customerSince.getDate());
      
      const relevantAnniversary = thisYearAnniversary >= now ? thisYearAnniversary : nextYearAnniversary;
      const daysUntil = Math.ceil((relevantAnniversary.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
      const yearsCompleting = relevantAnniversary.getFullYear() - customer.customerSince.getFullYear();
      
      if (daysUntil <= daysAhead && yearsCompleting > 0) {
        upcomingAnniversaries.push({ ...customer, daysUntil, yearsCompleting });
      }
    }
  }

  // Sort by days until milestone
  upcomingBirthdays.sort((a, b) => a.daysUntil - b.daysUntil);
  upcomingAnniversaries.sort((a, b) => a.daysUntil - b.daysUntil);

  return { upcomingBirthdays, upcomingAnniversaries };
}

/**
 * Test milestone emails immediately
 */
export async function testMilestoneEmails(customerData: CustomerMilestoneData): Promise<void> {
  const manager = new BirthdayAnniversaryManager(customerData);
  
  console.log(`🧪 Testing milestone emails for ${customerData.email}...`);
  
  // Send birthday email
  await manager.sendBirthdayEmail();
  
  // Small delay
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  // Send anniversary email
  await manager.sendCustomerAnniversaryEmail();
  
  console.log(`✅ Test milestone emails sent to ${customerData.email}`);
}

// Example data for testing
export const exampleMilestoneCustomerData: CustomerMilestoneData = {
  email: 'barooahn@gmail.com',
  firstName: 'John',
  lastName: 'Smith',
  birthday: new Date('1985-06-15'),
  customerSince: new Date('2023-09-15'), // Over 1 year ago
  totalPurchases: 4,
  totalSpent: 78.50,
  favoriteProduct: 'Sambal Oelek',
  yearsSince: 1
};

// Configuration for milestone campaigns
export const milestoneConfig = {
  birthdayDiscounts: {
    standard: 15, // Standard 15% birthday discount
    vip: 25      // VIP 25% for high-value customers
  },
  anniversaryDiscounts: {
    first: 20,     // 20% for 1-year anniversary
    milestone: 30, // 30% for 2, 5, 10+ years
    longterm: 25   // 25% for 3+ years
  },
  specialGifts: {
    vipBirthday: 'Limited Edition Sambal + Recipe Book',
    milestoneAnniversary: 'Exclusive Anniversary Gift Box + Chef Yossie Video Message',
    longtermLoyalty: 'Premium Sambal Set + Indonesian Cookbook'
  },
  culturalElements: {
    birthdayTradition: 'Indonesian birthday foods and customs',
    anniversaryStory: 'Customer journey celebration',
    personalTouch: 'Chef Yossie personal messages',
    gratitudeFocus: 'Appreciation for loyalty and support'
  },
  expectedResults: {
    birthdayOpenRate: '45-55%',
    anniversaryOpenRate: '40-50%',
    clickThroughRate: '12-18%',
    redemptionRate: '25-35%',
    customerSatisfaction: 'Very high emotional connection',
    loyaltyIncrease: '20-30% longer retention'
  }
};