// Email Campaign Management System
// Handles automated sequences, scheduling, and campaign management

import nodemailer from "nodemailer";
import { 
  getWelcomeEmail2Html, 
  getWelcomeEmail3Html, 
  getWelcomeEmail4Html, 
  getWelcomeEmail5Html,
  getFlashSaleEmailHtml,
  getNewProductEmailHtml
} from "./email-templates";

const transport = nodemailer.createTransport({
  host: process.env.ZEPTOMAIL_SMTP_HOST!,
  port: parseInt(process.env.ZEPTOMAIL_SMTP_PORT!),
  auth: {
    user: process.env.ZEPTOMAIL_SMTP_USER!,
    pass: process.env.ZEPTOMAIL_SMTP_PASS!,
  },
});

interface EmailData {
  email: string;
  firstName?: string;
  lastName?: string;
  discountCode?: string;
  productName?: string;
  productImage?: string;
  [key: string]: any;
}

interface CampaignResult {
  success: boolean;
  data?: any;
  error?: any;
}

// Welcome Email Series Functions
export async function sendWelcomeEmail2(data: EmailData): Promise<CampaignResult> {
  try {
    const mailOptions = {
      from: `"Spice Island Indonesia" <${process.env.ZEPTOMAIL_FROM_EMAIL!}>`,
      to: data.email,
      subject: "Your Indonesian Culinary Journey Begins 🍛",
      html: getWelcomeEmail2Html(data),
    };

    const result = await transport.sendMail(mailOptions);
    return { success: true, data: result };
  } catch (error) {
    console.error("Error sending welcome email 2:", error);
    return { success: false, error };
  }
}

export async function sendWelcomeEmail3(data: EmailData): Promise<CampaignResult> {
  try {
    const mailOptions = {
      from: `"Spice Island Indonesia" <${process.env.ZEPTOMAIL_FROM_EMAIL!}>`,
      to: data.email,
      subject: "Meet Our Signature Sambal Collection 🌶️",
      html: getWelcomeEmail3Html(data),
    };

    const result = await transport.sendMail(mailOptions);
    return { success: true, data: result };
  } catch (error) {
    console.error("Error sending welcome email 3:", error);
    return { success: false, error };
  }
}

export async function sendWelcomeEmail4(data: EmailData): Promise<CampaignResult> {
  try {
    const mailOptions = {
      from: `"Chef Yossie" <${process.env.ZEPTOMAIL_FROM_EMAIL!}>`,
      to: data.email,
      subject: "The Story Behind Every Jar 👩‍🍳",
      html: getWelcomeEmail4Html(data),
    };

    const result = await transport.sendMail(mailOptions);
    return { success: true, data: result };
  } catch (error) {
    console.error("Error sending welcome email 4:", error);
    return { success: false, error };
  }
}

export async function sendWelcomeEmail5(data: EmailData): Promise<CampaignResult> {
  try {
    const mailOptions = {
      from: `"Spice Island Indonesia" <${process.env.ZEPTOMAIL_FROM_EMAIL!}>`,
      to: data.email,
      subject: "Welcome to Your VIP Sambal Community! 🎖️",
      html: getWelcomeEmail5Html(data),
    };

    const result = await transport.sendMail(mailOptions);
    return { success: true, data: result };
  } catch (error) {
    console.error("Error sending welcome email 5:", error);
    return { success: false, error };
  }
}

// Promotional Campaign Functions
export async function sendFlashSaleEmail(data: EmailData): Promise<CampaignResult> {
  try {
    const mailOptions = {
      from: `"Spice Island Indonesia" <${process.env.ZEPTOMAIL_FROM_EMAIL!}>`,
      to: data.email,
      subject: "⚡ FLASH SALE: 25% Off Everything - 24 Hours Only!",
      html: getFlashSaleEmailHtml(data),
    };

    const result = await transport.sendMail(mailOptions);
    return { success: true, data: result };
  } catch (error) {
    console.error("Error sending flash sale email:", error);
    return { success: false, error };
  }
}

export async function sendNewProductEmail(data: EmailData): Promise<CampaignResult> {
  try {
    const productName = data.productName || "New Sambal";
    const mailOptions = {
      from: `"Spice Island Indonesia" <${process.env.ZEPTOMAIL_FROM_EMAIL!}>`,
      to: data.email,
      subject: `🎉 New Arrival: ${productName} - VIP Early Access`,
      html: getNewProductEmailHtml(data),
    };

    const result = await transport.sendMail(mailOptions);
    return { success: true, data: result };
  } catch (error) {
    console.error("Error sending new product email:", error);
    return { success: false, error };
  }
}

// Welcome Series Automation (5-email drip campaign)
export class WelcomeEmailSequence {
  private email: string;
  private userData: EmailData;
  private delays = [2, 4, 7, 10]; // Days after signup for emails 2-5

  constructor(email: string, userData: Partial<EmailData> = {}) {
    this.email = email;
    this.userData = { email, ...userData };
  }

  // Schedule the entire welcome sequence
  async scheduleSequence(): Promise<void> {
    console.log(`🔄 Scheduling welcome sequence for ${this.email}`);
    console.log(`📅 Email schedule: Day 2, 4, 7, and 10`);
    
    // Email 1 (welcome) should already be sent
    
    // Schedule emails 2-5
    for (let i = 0; i < this.delays.length; i++) {
      const delay = this.delays[i] * 24 * 60 * 60 * 1000; // Convert days to milliseconds
      const emailNumber = i + 2;
      const sendDate = new Date(Date.now() + delay);
      
      console.log(`⏰ Email ${emailNumber} scheduled for ${sendDate.toLocaleDateString()} at ${sendDate.toLocaleTimeString()}`);
      
      setTimeout(async () => {
        console.log(`📧 Sending scheduled welcome email ${emailNumber} to ${this.email}`);
        await this.sendSequenceEmail(emailNumber);
      }, delay);
    }
    
    console.log(`✅ Welcome sequence scheduled successfully for ${this.email}`);
  }

  private async sendSequenceEmail(emailNumber: number): Promise<void> {
    try {
      let result: CampaignResult;
      
      switch (emailNumber) {
        case 2:
          result = await sendWelcomeEmail2(this.userData);
          break;
        case 3:
          result = await sendWelcomeEmail3(this.userData);
          break;
        case 4:
          result = await sendWelcomeEmail4(this.userData);
          break;
        case 5:
          result = await sendWelcomeEmail5(this.userData);
          break;
        default:
          throw new Error(`Invalid email number: ${emailNumber}`);
      }

      if (result.success) {
        console.log(`Welcome email ${emailNumber} sent successfully to ${this.email}`);
      } else {
        console.error(`Failed to send welcome email ${emailNumber} to ${this.email}:`, result.error);
      }
    } catch (error) {
      console.error(`Error in welcome sequence email ${emailNumber}:`, error);
    }
  }

  // Send a specific email in the sequence immediately (for testing)
  async sendEmailNow(emailNumber: number): Promise<CampaignResult> {
    switch (emailNumber) {
      case 2:
        return await sendWelcomeEmail2(this.userData);
      case 3:
        return await sendWelcomeEmail3(this.userData);
      case 4:
        return await sendWelcomeEmail4(this.userData);
      case 5:
        return await sendWelcomeEmail5(this.userData);
      default:
        throw new Error(`Invalid email number: ${emailNumber}`);
    }
  }
}

// Campaign Management Class
export class EmailCampaignManager {
  // Send campaign to a list of subscribers
  async sendCampaign(
    campaignType: 'flash_sale' | 'new_product' | 'newsletter',
    subscribers: EmailData[],
    campaignData: Partial<EmailData> = {}
  ): Promise<{ sent: number; failed: number; results: CampaignResult[] }> {
    const results: CampaignResult[] = [];
    let sent = 0;
    let failed = 0;

    for (const subscriber of subscribers) {
      const data = { ...subscriber, ...campaignData };
      let result: CampaignResult;

      try {
        switch (campaignType) {
          case 'flash_sale':
            result = await sendFlashSaleEmail(data);
            break;
          case 'new_product':
            result = await sendNewProductEmail(data);
            break;
          default:
            result = { success: false, error: `Unknown campaign type: ${campaignType}` };
        }

        results.push(result);
        
        if (result.success) {
          sent++;
        } else {
          failed++;
        }

        // Add delay between sends to avoid rate limiting
        await new Promise(resolve => setTimeout(resolve, 100));
        
      } catch (error) {
        results.push({ success: false, error });
        failed++;
      }
    }

    console.log(`Campaign ${campaignType} completed: ${sent} sent, ${failed} failed`);
    
    return { sent, failed, results };
  }

  // Schedule a campaign for later
  scheduleCampaign(
    campaignType: string,
    subscribers: EmailData[],
    sendDate: Date,
    campaignData: Partial<EmailData> = {}
  ): void {
    const delay = sendDate.getTime() - Date.now();
    
    if (delay <= 0) {
      throw new Error("Send date must be in the future");
    }

    setTimeout(async () => {
      console.log(`Executing scheduled campaign: ${campaignType}`);
      await this.sendCampaign(campaignType as any, subscribers, campaignData);
    }, delay);

    console.log(`Campaign ${campaignType} scheduled for ${sendDate.toISOString()}`);
  }
}

// Utility functions for subscriber management
export async function addToWelcomeSequence(email: string, userData: Partial<EmailData> = {}): Promise<void> {
  const sequence = new WelcomeEmailSequence(email, userData);
  await sequence.scheduleSequence();
}

// Test functions
export async function testWelcomeSequence(email: string, userData: Partial<EmailData> = {}): Promise<void> {
  const sequence = new WelcomeEmailSequence(email, userData);
  
  console.log("Testing welcome sequence emails...");
  
  for (let i = 2; i <= 5; i++) {
    console.log(`Sending welcome email ${i}...`);
    const result = await sequence.sendEmailNow(i);
    
    if (result.success) {
      console.log(`✅ Welcome email ${i} sent successfully`);
    } else {
      console.log(`❌ Welcome email ${i} failed:`, result.error);
    }
    
    // Small delay between test emails
    await new Promise(resolve => setTimeout(resolve, 2000));
  }
}