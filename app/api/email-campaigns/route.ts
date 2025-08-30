import { NextRequest, NextResponse } from "next/server";
import { 
  sendWelcomeEmail2, 
  sendWelcomeEmail3, 
  sendWelcomeEmail4, 
  sendWelcomeEmail5,
  sendFlashSaleEmail,
  sendNewProductEmail,
  EmailCampaignManager,
  WelcomeEmailSequence
} from "@/lib/email-campaigns";

export async function POST(request: NextRequest) {
  try {
    const { 
      action, 
      email, 
      campaignType, 
      emailNumber, 
      userData = {},
      campaignData = {},
      subscribers = []
    } = await request.json();

    // Validate required parameters
    if (!action) {
      return NextResponse.json(
        { success: false, message: "Action is required" },
        { status: 400 }
      );
    }

    switch (action) {
      case 'send_welcome_email':
        if (!email || !emailNumber) {
          return NextResponse.json(
            { success: false, message: "Email and emailNumber are required" },
            { status: 400 }
          );
        }

        const sequence = new WelcomeEmailSequence(email, { email, ...userData });
        const result = await sequence.sendEmailNow(emailNumber);

        if (result.success) {
          return NextResponse.json({
            success: true,
            message: `Welcome email ${emailNumber} sent successfully`,
            messageId: result.data?.messageId
          });
        } else {
          return NextResponse.json(
            { success: false, message: "Failed to send email", error: result.error },
            { status: 500 }
          );
        }

      case 'send_promotional_email':
        if (!email || !campaignType) {
          return NextResponse.json(
            { success: false, message: "Email and campaignType are required" },
            { status: 400 }
          );
        }

        const data = { email, ...userData, ...campaignData };
        let promoResult;

        switch (campaignType) {
          case 'flash_sale':
            promoResult = await sendFlashSaleEmail(data);
            break;
          case 'new_product':
            promoResult = await sendNewProductEmail(data);
            break;
          default:
            return NextResponse.json(
              { success: false, message: `Unknown campaign type: ${campaignType}` },
              { status: 400 }
            );
        }

        if (promoResult.success) {
          return NextResponse.json({
            success: true,
            message: `${campaignType} email sent successfully`,
            messageId: promoResult.data?.messageId
          });
        } else {
          return NextResponse.json(
            { success: false, message: "Failed to send promotional email", error: promoResult.error },
            { status: 500 }
          );
        }

      case 'start_welcome_sequence':
        if (!email) {
          return NextResponse.json(
            { success: false, message: "Email is required" },
            { status: 400 }
          );
        }

        const welcomeSequence = new WelcomeEmailSequence(email, { email, ...userData });
        await welcomeSequence.scheduleSequence();

        return NextResponse.json({
          success: true,
          message: "Welcome email sequence started successfully"
        });

      case 'send_bulk_campaign':        
        if (!campaignType || !subscribers || !Array.isArray(subscribers)) {
          return NextResponse.json(
            { success: false, message: "CampaignType and subscribers array are required" },
            { status: 400 }
          );
        }

        const campaignManager = new EmailCampaignManager();
        const bulkResult = await campaignManager.sendCampaign(
          campaignType as 'flash_sale' | 'new_product' | 'newsletter',
          subscribers,
          campaignData
        );

        return NextResponse.json({
          success: true,
          message: `Bulk campaign completed`,
          sent: bulkResult.sent,
          failed: bulkResult.failed
        });

      default:
        return NextResponse.json(
          { success: false, message: `Unknown action: ${action}` },
          { status: 400 }
        );
    }

  } catch (error) {
    console.error("Email campaign API error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error", error: error },
      { status: 500 }
    );
  }
}