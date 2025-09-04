// Win-back Campaign System
// Automated email sequence to re-engage customers who haven't purchased in 6+ months

interface WinBackCustomerData {
  email: string;
  firstName?: string;
  lastName?: string;
  lastPurchaseDate: Date;
  totalPurchases?: number;
  favoriteProduct?: string;
  totalSpent?: number;
  monthsInactive: number;
  customerSince?: Date;
}

interface WinBackResult {
  success: boolean;
  data?: any;
  error?: any;
}

export class WinBackCampaignManager {
  private customerData: WinBackCustomerData;
  
  // Email timing delays in milliseconds
  private delays = {
    email1: 0,                          // Immediate
    email2: 7 * 24 * 60 * 60 * 1000,    // 7 days later
    email3: 14 * 24 * 60 * 60 * 1000    // 14 days after first email
  };

  constructor(customerData: WinBackCustomerData) {
    this.customerData = customerData;
  }

  /**
   * Start the complete 3-email win-back sequence
   */
  async startWinBackSequence(): Promise<void> {
    console.log(`💔 Starting win-back campaign for ${this.customerData.email}`);
    console.log(`📊 Customer inactive for ${this.customerData.monthsInactive} months`);
    console.log(`🛒 Last purchase: ${this.customerData.lastPurchaseDate.toLocaleDateString()}`);

    try {
      // Send Email 1 immediately - "We miss you" with what's new
      setTimeout(async () => {
        console.log(`📧 Sending win-back email 1 to ${this.customerData.email}`);
        await this.sendWinBackEmail1();
      }, this.delays.email1);

      // Schedule Email 2 - Exclusive comeback discount
      setTimeout(async () => {
        console.log(`📧 Sending win-back email 2 to ${this.customerData.email}`);
        await this.sendWinBackEmail2();
      }, this.delays.email2);

      // Schedule Email 3 - Final feedback request
      setTimeout(async () => {
        console.log(`📧 Sending win-back email 3 to ${this.customerData.email}`);
        await this.sendWinBackEmail3();
      }, this.delays.email3);

      const email2Date = new Date(Date.now() + this.delays.email2);
      const email3Date = new Date(Date.now() + this.delays.email3);

      console.log(`⏰ Email 1: Immediate`);
      console.log(`⏰ Email 2: ${email2Date.toLocaleDateString()}`);
      console.log(`⏰ Email 3: ${email3Date.toLocaleDateString()}`);

      console.log('✅ Win-back campaign sequence scheduled successfully');

    } catch (error) {
      console.error('❌ Error scheduling win-back campaign:', error);
      throw error;
    }
  }

  /**
   * Email 1: "We miss you" + what's new since they left
   */
  private async sendWinBackEmail1(): Promise<void> {
    try {
      const result = await sendWinBackEmail1({
        email: this.customerData.email,
        firstName: this.customerData.firstName,
        monthsInactive: this.customerData.monthsInactive,
        lastPurchaseDate: this.customerData.lastPurchaseDate,
        favoriteProduct: this.customerData.favoriteProduct,
        customerSince: this.customerData.customerSince
      });

      if (result.success) {
        console.log(`✅ Win-back email 1 sent successfully to ${this.customerData.email}`);
      } else {
        console.error(`❌ Failed to send win-back email 1 to ${this.customerData.email}:`, result.error);
      }
    } catch (error) {
      console.error(`💥 Error sending win-back email 1 to ${this.customerData.email}:`, error);
    }
  }

  /**
   * Email 2: Exclusive "welcome back" discount
   */
  private async sendWinBackEmail2(): Promise<void> {
    try {
      const result = await sendWinBackEmail2({
        email: this.customerData.email,
        firstName: this.customerData.firstName,
        totalPurchases: this.customerData.totalPurchases,
        totalSpent: this.customerData.totalSpent,
        favoriteProduct: this.customerData.favoriteProduct
      });

      if (result.success) {
        console.log(`✅ Win-back email 2 sent successfully to ${this.customerData.email}`);
      } else {
        console.error(`❌ Failed to send win-back email 2 to ${this.customerData.email}:`, result.error);
      }
    } catch (error) {
      console.error(`💥 Error sending win-back email 2 to ${this.customerData.email}:`, error);
    }
  }

  /**
   * Email 3: Feedback request + final incentive
   */
  private async sendWinBackEmail3(): Promise<void> {
    try {
      const result = await sendWinBackEmail3({
        email: this.customerData.email,
        firstName: this.customerData.firstName,
        monthsInactive: this.customerData.monthsInactive
      });

      if (result.success) {
        console.log(`✅ Win-back email 3 sent successfully to ${this.customerData.email}`);
      } else {
        console.error(`❌ Failed to send win-back email 3 to ${this.customerData.email}:`, result.error);
      }
    } catch (error) {
      console.error(`💥 Error sending win-back email 3 to ${this.customerData.email}:`, error);
    }
  }

  /**
   * Quick test sequence for demonstration (30-second intervals)
   */
  async startQuickTestSequence(): Promise<void> {
    console.log(`🧪 Starting QUICK TEST win-back sequence for ${this.customerData.email}`);
    
    const quickDelays = {
      email1: 0,           // Immediate
      email2: 30 * 1000,   // 30 seconds
      email3: 60 * 1000    // 60 seconds
    };

    try {
      setTimeout(async () => {
        console.log(`📧 [TEST] Sending win-back email 1 to ${this.customerData.email}`);
        await this.sendWinBackEmail1();
      }, quickDelays.email1);

      setTimeout(async () => {
        console.log(`📧 [TEST] Sending win-back email 2 to ${this.customerData.email}`);
        await this.sendWinBackEmail2();
      }, quickDelays.email2);

      setTimeout(async () => {
        console.log(`📧 [TEST] Sending win-back email 3 to ${this.customerData.email}`);
        await this.sendWinBackEmail3();
      }, quickDelays.email3);

      console.log(`⏰ [TEST] Email 1: Immediate`);
      console.log(`⏰ [TEST] Email 2: 30 seconds`);
      console.log(`⏰ [TEST] Email 3: 60 seconds`);

    } catch (error) {
      console.error('❌ Error in quick test sequence:', error);
      throw error;
    }
  }

  /**
   * Get customer reactivation potential score
   */
  getReactivationScore(): { score: number; category: string; likelihood: string } {
    let score = 0;

    // Base score from purchase history
    if (this.customerData.totalPurchases && this.customerData.totalPurchases > 1) {
      score += 30; // Repeat customer
    }
    
    // Spending level
    if (this.customerData.totalSpent && this.customerData.totalSpent > 50) {
      score += 25; // High value customer
    } else if (this.customerData.totalSpent && this.customerData.totalSpent > 20) {
      score += 15; // Medium value
    }

    // Time since last purchase (less inactive = higher score)
    if (this.customerData.monthsInactive <= 8) {
      score += 25; // Recently inactive
    } else if (this.customerData.monthsInactive <= 12) {
      score += 15; // Moderately inactive
    } else {
      score += 5;  // Long inactive
    }

    // Customer tenure
    if (this.customerData.customerSince) {
      const monthsAsCustomer = Math.floor(
        (Date.now() - this.customerData.customerSince.getTime()) / (1000 * 60 * 60 * 24 * 30)
      );
      if (monthsAsCustomer > 12) {
        score += 20; // Long-term customer
      } else if (monthsAsCustomer > 6) {
        score += 10; // Medium-term
      }
    }

    let category: string;
    let likelihood: string;

    if (score >= 80) {
      category = 'High Priority';
      likelihood = 'Very Likely to Return';
    } else if (score >= 60) {
      category = 'Medium Priority';
      likelihood = 'Likely to Return';
    } else if (score >= 40) {
      category = 'Low Priority';
      likelihood = 'Possibly Will Return';
    } else {
      category = 'Monitor Only';
      likelihood = 'Unlikely to Return';
    }

    return { score, category, likelihood };
  }
}

/**
 * Send Win-back Email 1: "We miss you" + what's new
 */
async function sendWinBackEmail1(data: {
  email: string;
  firstName?: string;
  monthsInactive: number;
  lastPurchaseDate: Date;
  favoriteProduct?: string;
  customerSince?: Date;
}): Promise<WinBackResult> {
  try {
    const { getWinBackEmail1Html } = await import('./email-templates');
    
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
      from: `"Chef Yossie - Spice Island Indonesia" <${process.env.ZEPTOMAIL_FROM_EMAIL!}>`,
      to: data.email,
      subject: "We Miss You! See What's New at Spice Island Indonesia 🌶️",
      html: getWinBackEmail1Html(data),
    };

    const result = await transport.sendMail(mailOptions);
    console.log(`✅ Win-back email 1 sent to ${data.email}`);
    return { success: true, data: result };
  } catch (error) {
    console.error('Error sending win-back email 1:', error);
    return { success: false, error };
  }
}

/**
 * Send Win-back Email 2: Exclusive comeback discount
 */
async function sendWinBackEmail2(data: {
  email: string;
  firstName?: string;
  totalPurchases?: number;
  totalSpent?: number;
  favoriteProduct?: string;
}): Promise<WinBackResult> {
  try {
    const { getWinBackEmail2Html } = await import('./email-templates');
    
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
      from: `"Chef Yossie - Spice Island Indonesia" <${process.env.ZEPTOMAIL_FROM_EMAIL!}>`,
      to: data.email,
      subject: "Your Exclusive Welcome Back Gift: 20% Off Everything! 🎁",
      html: getWinBackEmail2Html(data),
    };

    const result = await transport.sendMail(mailOptions);
    console.log(`✅ Win-back email 2 sent to ${data.email}`);
    return { success: true, data: result };
  } catch (error) {
    console.error('Error sending win-back email 2:', error);
    return { success: false, error };
  }
}

/**
 * Send Win-back Email 3: Feedback request + final incentive
 */
async function sendWinBackEmail3(data: {
  email: string;
  firstName?: string;
  monthsInactive: number;
}): Promise<WinBackResult> {
  try {
    const { getWinBackEmail3Html } = await import('./email-templates');
    
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
      from: `"Chef Yossie - Spice Island Indonesia" <${process.env.ZEPTOMAIL_FROM_EMAIL!}>`,
      to: data.email,
      subject: "Before You Go... Help Us Improve (+ Final 25% Off) 💝",
      html: getWinBackEmail3Html(data),
    };

    const result = await transport.sendMail(mailOptions);
    console.log(`✅ Win-back email 3 sent to ${data.email}`);
    return { success: true, data: result };
  } catch (error) {
    console.error('Error sending win-back email 3:', error);
    return { success: false, error };
  }
}

/**
 * Identify customers who need win-back campaigns
 */
export function identifyInactiveCustomers(
  customers: Array<{
    email: string;
    firstName?: string;
    lastPurchaseDate: Date;
    totalPurchases?: number;
    totalSpent?: number;
    favoriteProduct?: string;
    customerSince?: Date;
  }>,
  inactiveThresholdMonths: number = 6
): WinBackCustomerData[] {
  
  const cutoffDate = new Date();
  cutoffDate.setMonth(cutoffDate.getMonth() - inactiveThresholdMonths);

  return customers
    .filter(customer => customer.lastPurchaseDate < cutoffDate)
    .map(customer => {
      const monthsInactive = Math.floor(
        (Date.now() - customer.lastPurchaseDate.getTime()) / (1000 * 60 * 60 * 24 * 30)
      );

      return {
        ...customer,
        monthsInactive
      };
    })
    .sort((a, b) => a.monthsInactive - b.monthsInactive); // Most recently inactive first
}

/**
 * Start win-back campaign for a customer
 */
export async function startWinBackCampaign(customerData: WinBackCustomerData): Promise<void> {
  const manager = new WinBackCampaignManager(customerData);
  await manager.startWinBackSequence();
}

/**
 * Start quick test sequence for demonstration
 */
export async function startWinBackQuickTest(customerData: WinBackCustomerData): Promise<void> {
  const manager = new WinBackCampaignManager(customerData);
  await manager.startQuickTestSequence();
}

/**
 * Bulk win-back campaign for multiple inactive customers
 */
export async function runBulkWinBackCampaign(
  inactiveCustomers: WinBackCustomerData[]
): Promise<{
  started: number;
  failed: number;
  errors: any[];
}> {
  const results = {
    started: 0,
    failed: 0,
    errors: [] as any[]
  };

  console.log(`📧 Starting bulk win-back campaign for ${inactiveCustomers.length} inactive customers...`);

  for (const customer of inactiveCustomers) {
    try {
      await startWinBackCampaign(customer);
      results.started++;
      
      // Small delay between campaigns to respect rate limits
      await new Promise(resolve => setTimeout(resolve, 1000));
      
    } catch (error) {
      results.failed++;
      results.errors.push({
        email: customer.email,
        error: error instanceof Error ? error.message : 'Unknown error'
      });
      console.error(`❌ Failed to start win-back campaign for ${customer.email}:`, error);
    }
  }

  console.log(`✅ Bulk win-back campaign complete: ${results.started} started, ${results.failed} failed`);
  return results;
}

// Example data for testing
export const exampleInactiveCustomerData: WinBackCustomerData = {
  email: 'barooahn@gmail.com',
  firstName: 'John',
  lastName: 'Smith',
  lastPurchaseDate: new Date('2024-03-15'), // 6+ months ago
  totalPurchases: 3,
  favoriteProduct: 'Sambal Oelek',
  totalSpent: 45.50,
  monthsInactive: 7,
  customerSince: new Date('2023-12-01')
};

// Campaign statistics and configuration
export const winBackCampaignConfig = {
  inactiveThreshold: 6, // months
  emailSequence: {
    email1: {
      timing: 'Immediate',
      focus: 'Reconnection & What\'s New',
      tone: 'Warm and welcoming'
    },
    email2: {
      timing: '7 days after email 1',
      focus: 'Exclusive Comeback Discount',
      tone: 'Generous and appreciative'
    },
    email3: {
      timing: '14 days after email 1',
      focus: 'Feedback Request & Final Offer',
      tone: 'Understanding and helpful'
    }
  },
  expectedResults: {
    openRate: '25-35%',
    clickThroughRate: '8-12%',
    reactivationRate: '5-10%',
    averageOrderValue: '£30-40',
    roi: '300-500%'
  },
  bestPractices: {
    timing: 'Send during customer\'s historically active times',
    personalization: 'Reference past purchases and preferences',
    incentives: 'Progressive discount increases (0%, 20%, 25%)',
    feedback: 'Genuinely request input for product improvement',
    respectful_exit: 'Make unsubscribing easy and graceful'
  }
};