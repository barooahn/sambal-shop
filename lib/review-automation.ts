// Review Request Automation System
// Manages automated review requests after order delivery

import { sendReviewRequestEmail, sendReviewFollowUpEmail } from './email';

interface ReviewRequestData {
  email: string;
  firstName?: string;
  orderNumber?: string;
  reviewIncentive?: string;
  deliveryDate?: Date;
}

export class ReviewRequestManager {
  private email: string;
  private reviewData: ReviewRequestData;
  
  // Email timing delays in milliseconds
  private delays = {
    initialRequest: 7 * 24 * 60 * 60 * 1000,    // 7 days after delivery
    followUp: 14 * 24 * 60 * 60 * 1000          // 14 days after delivery (7 days after initial)
  };

  constructor(reviewData: ReviewRequestData) {
    this.email = reviewData.email;
    this.reviewData = reviewData;
  }

  /**
   * Start the review request sequence
   * This schedules the initial review request and follow-up
   */
  async startReviewSequence(): Promise<void> {
    console.log(`⭐ Starting review request sequence for ${this.email}`);
    console.log(`📦 Order: ${this.reviewData.orderNumber}`);

    try {
      // Schedule initial review request (7 days after delivery)
      setTimeout(async () => {
        console.log(`📧 Sending review request email to ${this.email}`);
        await this.sendInitialReviewRequest();
      }, this.delays.initialRequest);

      // Schedule follow-up email (14 days after delivery)
      setTimeout(async () => {
        console.log(`📧 Sending review follow-up email to ${this.email}`);
        await this.sendFollowUpReviewRequest();
      }, this.delays.followUp);

      const initialDate = new Date(Date.now() + this.delays.initialRequest);
      const followUpDate = new Date(Date.now() + this.delays.followUp);

      console.log(`⏰ Initial review request scheduled for ${initialDate.toLocaleString()}`);
      console.log(`⏰ Follow-up review request scheduled for ${followUpDate.toLocaleString()}`);

      console.log('✅ Review request sequence scheduled successfully');

    } catch (error) {
      console.error('❌ Error scheduling review request sequence:', error);
      throw error;
    }
  }

  /**
   * Send the initial review request email
   */
  private async sendInitialReviewRequest(): Promise<void> {
    try {
      const result = await sendReviewRequestEmail({
        email: this.reviewData.email,
        firstName: this.reviewData.firstName,
        orderNumber: this.reviewData.orderNumber,
        reviewIncentive: this.reviewData.reviewIncentive || 'REVIEW5'
      });

      if (result.success) {
        console.log(`✅ Review request email sent successfully to ${this.email}`);
      } else {
        console.error(`❌ Failed to send review request email to ${this.email}:`, result.error);
      }
    } catch (error) {
      console.error(`💥 Error sending review request email to ${this.email}:`, error);
    }
  }

  /**
   * Send the follow-up review request email
   */
  private async sendFollowUpReviewRequest(): Promise<void> {
    try {
      const result = await sendReviewFollowUpEmail({
        email: this.reviewData.email,
        firstName: this.reviewData.firstName
      });

      if (result.success) {
        console.log(`✅ Review follow-up email sent successfully to ${this.email}`);
      } else {
        console.error(`❌ Failed to send review follow-up email to ${this.email}:`, result.error);
      }
    } catch (error) {
      console.error(`💥 Error sending review follow-up email to ${this.email}:`, error);
    }
  }

  /**
   * Start a quick test sequence with shorter delays (for demo purposes)
   */
  async startQuickTestSequence(): Promise<void> {
    console.log(`🧪 Starting QUICK TEST review request sequence for ${this.email}`);
    
    const quickDelays = {
      initialRequest: 5 * 1000,   // 5 seconds
      followUp: 15 * 1000         // 15 seconds
    };

    try {
      setTimeout(async () => {
        console.log(`📧 [TEST] Sending review request email to ${this.email}`);
        await this.sendInitialReviewRequest();
      }, quickDelays.initialRequest);

      setTimeout(async () => {
        console.log(`📧 [TEST] Sending review follow-up email to ${this.email}`);
        await this.sendFollowUpReviewRequest();
      }, quickDelays.followUp);

      console.log(`⏰ [TEST] Initial review request in 5 seconds`);
      console.log(`⏰ [TEST] Follow-up review request in 15 seconds`);

    } catch (error) {
      console.error('❌ Error in quick test sequence:', error);
      throw error;
    }
  }
}

/**
 * Trigger review request sequence based on order delivery
 * Call this when an order is marked as delivered
 */
export async function triggerReviewRequest(reviewData: ReviewRequestData): Promise<void> {
  try {
    const manager = new ReviewRequestManager(reviewData);
    await manager.startReviewSequence();
  } catch (error) {
    console.error('❌ Failed to trigger review request:', error);
    throw error;
  }
}

/**
 * Start quick test sequence for review requests (demo purposes)
 */
export async function startQuickReviewTest(reviewData: ReviewRequestData): Promise<void> {
  try {
    const manager = new ReviewRequestManager(reviewData);
    await manager.startQuickTestSequence();
  } catch (error) {
    console.error('❌ Failed to start quick review test:', error);
    throw error;
  }
}

/**
 * Check if enough time has passed since delivery to trigger review request
 * Call this to determine when to start the review sequence
 */
export function shouldTriggerReviewRequest(
  deliveryDate: Date,
  daysAfterDelivery: number = 7
): boolean {
  const now = new Date();
  const timeDiff = now.getTime() - deliveryDate.getTime();
  const daysDiff = timeDiff / (1000 * 60 * 60 * 24);
  
  return daysDiff >= daysAfterDelivery;
}

/**
 * Integration with Stripe webhook for automatic review request triggering
 * Add this to your order confirmation webhook to automatically schedule reviews
 */
export async function scheduleReviewRequestFromOrder(orderData: {
  customerEmail: string;
  customerName?: string;
  orderNumber: string;
  estimatedDeliveryDays?: number;
}): Promise<void> {
  try {
    // Calculate estimated delivery date
    const deliveryDate = new Date();
    deliveryDate.setDate(deliveryDate.getDate() + (orderData.estimatedDeliveryDays || 3));

    // Calculate review request date (7 days after estimated delivery)
    const reviewRequestDate = new Date(deliveryDate);
    reviewRequestDate.setDate(reviewRequestDate.getDate() + 7);

    const reviewData: ReviewRequestData = {
      email: orderData.customerEmail,
      firstName: orderData.customerName?.split(' ')[0],
      orderNumber: orderData.orderNumber,
      reviewIncentive: 'REVIEW5',
      deliveryDate: deliveryDate
    };

    // Schedule the review request sequence
    await triggerReviewRequest(reviewData);

    console.log(`📅 Review requests scheduled for ${orderData.customerEmail}:`);
    console.log(`   Estimated delivery: ${deliveryDate.toLocaleDateString()}`);
    console.log(`   Review request: ${reviewRequestDate.toLocaleDateString()}`);

  } catch (error) {
    console.error('❌ Failed to schedule review request from order:', error);
    throw error;
  }
}

// Example usage data structure for testing
export const exampleReviewRequestData: ReviewRequestData = {
  email: 'barooahn@gmail.com',
  firstName: 'John',
  orderNumber: '#ORD-2025-0001',
  reviewIncentive: 'REVIEW5',
  deliveryDate: new Date()
};