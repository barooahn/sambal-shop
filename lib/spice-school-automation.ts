// Spice School Educational Email Series
// Bi-weekly educational content about Indonesian spices, cooking techniques, and culinary culture

import { sendMonthlyRecipeNewsletter } from './email';

interface SpiceSchoolLesson {
  lessonNumber: number;
  title: string;
  subject: string;
  topics: string[];
  practicalTips: string[];
  culturalContext?: string;
  recommendedProducts?: string[];
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
}

interface EducationalEmailData {
  email: string;
  firstName?: string;
  lessonNumber: number;
  enrollmentDate?: Date;
}

// 12-lesson curriculum covering Indonesian spice education
export const spiceSchoolCurriculum: SpiceSchoolLesson[] = [
  {
    lessonNumber: 1,
    title: 'Welcome to Indonesian Spice Families',
    subject: '🌶️ Spice School Lesson 1: Meet the Indonesian Spice Families',
    topics: [
      'The 5 fundamental Indonesian spice groups',
      'Fresh vs dried spices - when to use each',
      'Understanding spice terminology (lombok, cabai, etc.)',
      'Basic Indonesian spice pantry essentials'
    ],
    practicalTips: [
      'How to identify authentic Indonesian chilies',
      'Storage methods to preserve spice potency',
      'Simple spice grinding technique with mortar and pestle'
    ],
    culturalContext: 'Indonesia\'s position as the original "Spice Islands" and how geography shaped flavor profiles',
    recommendedProducts: ['Sambal Oelek', 'Sambal Bali'],
    difficulty: 'Beginner'
  },
  {
    lessonNumber: 2,
    title: 'Chili Varieties and Heat Levels Mastery',
    subject: '🔥 Spice School Lesson 2: Master Indonesian Chili Heat Levels',
    topics: [
      'Cabai rawit vs cabai merah vs cabai hijau differences',
      'Understanding Scoville scale in Indonesian context',
      'How to build heat tolerance safely and enjoyably',
      'Pairing heat levels with different dishes'
    ],
    practicalTips: [
      'Emergency heat cooling techniques (dairy, sugar, bread)',
      'How to adjust sambal heat for UK palates',
      'Testing heat levels before adding to family meals'
    ],
    culturalContext: 'Regional Indonesian heat preferences and how climate affects chili cultivation',
    recommendedProducts: ['Sambal Oelek', 'All varieties for comparison'],
    difficulty: 'Beginner'
  },
  {
    lessonNumber: 3,
    title: 'Traditional Stone Grinding Techniques',
    subject: '🪨 Spice School Lesson 3: Ancient Stone Grinding Secrets',
    topics: [
      'Cobek and ulekan (mortar and pestle) selection',
      'Proper grinding techniques for different textures',
      'Why stone grinding creates superior flavor',
      'Maintaining and seasoning your grinding tools'
    ],
    practicalTips: [
      'UK alternatives to traditional Indonesian cobek',
      'Hand positions and grinding rhythm for efficiency',
      'Creating smooth vs chunky textures intentionally'
    ],
    culturalContext: 'The spiritual and cultural significance of stone grinding in Indonesian kitchens',
    recommendedProducts: ['Sample Pack', 'Sambal Bali'],
    difficulty: 'Intermediate'
  },
  {
    lessonNumber: 4,
    title: 'Spice Pairing and Flavor Harmony',
    subject: '🎵 Spice School Lesson 4: Creating Perfect Spice Harmonies',
    topics: [
      'Complementary spice combinations (galangal + lemongrass)',
      'Balancing sweet, sour, salty, spicy, and umami',
      'Sequential spice addition for layered complexity',
      'Common Indonesian spice pairing mistakes to avoid'
    ],
    practicalTips: [
      'Testing spice combinations in small batches',
      'Adjusting ratios for UK ingredient availability',
      'Building spice profiles that complement British ingredients'
    ],
    culturalContext: 'How Indonesian cooks traditionally learn spice pairing through family apprenticeship',
    recommendedProducts: ['Sambal Bali', 'Sambal Goreng'],
    difficulty: 'Intermediate'
  },
  {
    lessonNumber: 5,
    title: 'Regional Indonesian Spice Differences',
    subject: '🗺️ Spice School Lesson 5: Journey Through Indonesia\'s Spice Regions',
    topics: [
      'Java vs Sumatra vs Bali spice preferences',
      'How geography influences local spice availability',
      'Regional sambal variations and their origins',
      'Understanding authentic vs fusion Indonesian flavors'
    ],
    practicalTips: [
      'Identifying regional influences in restaurant dishes',
      'Adapting regional recipes for home cooking',
      'Sourcing regional-specific ingredients in the UK'
    ],
    culturalContext: 'The role of local ingredients in preserving cultural identity across Indonesian islands',
    recommendedProducts: ['Complete Sambal Collection'],
    difficulty: 'Intermediate'
  },
  {
    lessonNumber: 6,
    title: 'Building Heat Tolerance Safely',
    subject: '📈 Spice School Lesson 6: Master Your Heat Tolerance Journey',
    topics: [
      'Progressive heat training methods',
      'Understanding capsaicin tolerance development',
      'Signs of healthy vs unhealthy spice consumption',
      'Maintaining enjoyment while building tolerance'
    ],
    practicalTips: [
      'Weekly heat level progression schedule',
      'Pairing spicy foods with cooling accompaniments',
      'Recovery techniques if you go too far too fast'
    ],
    culturalContext: 'How Indonesian children are gradually introduced to spicy foods',
    recommendedProducts: ['Sample Pack for progression'],
    difficulty: 'Beginner'
  },
  {
    lessonNumber: 7,
    title: 'Professional Storage and Preservation',
    subject: '🏺 Spice School Lesson 7: Keep Your Spices Restaurant-Quality',
    topics: [
      'Optimal storage conditions for different spice types',
      'Preventing flavor degradation and contamination',
      'Signs of spice spoilage and when to replace',
      'Professional organization systems for home use'
    ],
    practicalTips: [
      'UK climate considerations for spice storage',
      'DIY airtight storage solutions',
      'Labeling systems for spice inventory management'
    ],
    culturalContext: 'Traditional Indonesian methods for preserving spices in tropical climates',
    recommendedProducts: ['All sambals for storage practice'],
    difficulty: 'Beginner'
  },
  {
    lessonNumber: 8,
    title: 'UK Ingredient Substitutions Mastery',
    subject: '🇬🇧 Spice School Lesson 8: Perfect UK Ingredient Substitutions',
    topics: [
      'UK supermarket alternatives for Indonesian ingredients',
      'Flavor adjustments when substituting ingredients',
      'Online sources for authentic Indonesian ingredients',
      'Creating authentic flavors with available ingredients'
    ],
    practicalTips: [
      'Tesco, Sainsbury\'s, and ASDA Indonesian ingredient guides',
      'Online Indonesian grocery stores in the UK',
      'Growing Indonesian herbs in British gardens'
    ],
    culturalContext: 'How Indonesian immigrants to the UK maintain authentic cooking traditions',
    recommendedProducts: ['Sambal Collection as flavor base'],
    difficulty: 'Intermediate'
  },
  {
    lessonNumber: 9,
    title: 'Traditional Cooking Vessels and Tools',
    subject: '🍳 Spice School Lesson 9: Essential Indonesian Cooking Tools',
    topics: [
      'Cobek (stone mortar) selection and use',
      'Wok vs traditional pan considerations',
      'Bamboo tools and their applications',
      'Modern UK kitchen adaptations'
    ],
    practicalTips: [
      'Where to buy Indonesian cooking tools in the UK',
      'Maintaining and seasoning traditional cookware',
      'UK kitchen adaptations that preserve authenticity'
    ],
    culturalContext: 'The spiritual and practical significance of cooking tools in Indonesian culture',
    recommendedProducts: ['All sambals to practice with tools'],
    difficulty: 'Advanced'
  },
  {
    lessonNumber: 10,
    title: 'Seasonal Spice Usage Patterns',
    subject: '🌸 Spice School Lesson 10: Seasonal Indonesian Spice Wisdom',
    topics: [
      'Wet season vs dry season spice preferences',
      'Festival and celebration spice traditions',
      'Adapting tropical spice patterns to UK seasons',
      'Seasonal ingredient availability and substitutions'
    ],
    practicalTips: [
      'UK seasonal menu planning with Indonesian flavors',
      'Winter warming vs summer cooling spice combinations',
      'Holiday feast planning with authentic Indonesian elements'
    ],
    culturalContext: 'How Indonesian calendar celebrations influence cooking throughout the year',
    recommendedProducts: ['Seasonal sambal selections'],
    difficulty: 'Intermediate'
  },
  {
    lessonNumber: 11,
    title: 'Medicinal Properties and Health Benefits',
    subject: '💊 Spice School Lesson 11: Indonesian Spice Medicine Wisdom',
    topics: [
      'Traditional Indonesian medicinal uses of common spices',
      'Scientific backing for spice health benefits',
      'Digestive, anti-inflammatory, and antimicrobial properties',
      'Safe therapeutic usage guidelines'
    ],
    practicalTips: [
      'Daily spice consumption for health benefits',
      'Combining spices for maximum therapeutic effect',
      'Avoiding contraindications and allergic reactions'
    ],
    culturalContext: 'Jamu (Indonesian traditional medicine) and its relationship to cooking spices',
    recommendedProducts: ['Sambal Bali for galangal benefits'],
    difficulty: 'Advanced'
  },
  {
    lessonNumber: 12,
    title: 'Advanced Flavor Layering Techniques',
    subject: '🎓 Spice School Graduation: Master Advanced Flavor Layering',
    topics: [
      'Professional-level spice timing and sequencing',
      'Creating signature spice blends and sambals',
      'Understanding umami development in Indonesian cooking',
      'Teaching others and passing on knowledge'
    ],
    practicalTips: [
      'Developing your personal spice signature',
      'Documenting and refining your spice recipes',
      'Sharing Indonesian cooking knowledge with friends and family'
    ],
    culturalContext: 'Becoming a bridge between Indonesian and British culinary cultures',
    recommendedProducts: ['Complete collection for mastery'],
    difficulty: 'Advanced'
  }
];

export class SpiceSchoolManager {
  private email: string;
  private enrollmentDate: Date;
  private currentLesson: number;

  // Bi-weekly schedule (every 14 days)
  private lessonInterval = 14 * 24 * 60 * 60 * 1000; // 14 days in milliseconds

  constructor(email: string, enrollmentDate: Date = new Date(), startingLesson: number = 1) {
    this.email = email;
    this.enrollmentDate = enrollmentDate;
    this.currentLesson = startingLesson;
  }

  /**
   * Enroll a subscriber in the complete 24-week Spice School program
   */
  async enrollInSpiceSchool(): Promise<void> {
    console.log(`📚 Enrolling ${this.email} in Spice School (24-week program)`);
    console.log(`🗓️ Bi-weekly lessons starting ${this.enrollmentDate.toLocaleDateString()}`);

    // Schedule all 12 lessons with bi-weekly intervals
    for (let lessonNumber = 1; lessonNumber <= 12; lessonNumber++) {
      const delay = (lessonNumber - 1) * this.lessonInterval;
      const sendDate = new Date(this.enrollmentDate.getTime() + delay);

      setTimeout(async () => {
        console.log(`📧 Sending Spice School Lesson ${lessonNumber} to ${this.email}`);
        await this.sendLesson(lessonNumber);
      }, delay);

      console.log(`📅 Lesson ${lessonNumber} scheduled for ${sendDate.toLocaleDateString()}`);
    }

    console.log(`✅ Complete Spice School curriculum scheduled for ${this.email}`);
  }

  /**
   * Send a specific lesson immediately
   */
  async sendLesson(lessonNumber: number): Promise<void> {
    const lesson = spiceSchoolCurriculum.find(l => l.lessonNumber === lessonNumber);
    
    if (!lesson) {
      throw new Error(`Lesson ${lessonNumber} not found in curriculum`);
    }

    try {
      // Use the existing newsletter template structure but adapt for educational content
      const result = await sendSpiceSchoolLesson({
        email: this.email,
        lesson: lesson,
        firstName: '', // Can be enhanced to track user names
        progressPercentage: Math.round((lessonNumber / 12) * 100)
      });

      if (result.success) {
        console.log(`✅ Spice School Lesson ${lessonNumber} sent successfully to ${this.email}`);
      } else {
        console.error(`❌ Failed to send Lesson ${lessonNumber} to ${this.email}:`, result.error);
      }
    } catch (error) {
      console.error(`💥 Error sending Spice School Lesson ${lessonNumber}:`, error);
      throw error;
    }
  }

  /**
   * Start quick test sequence for demonstration (1-minute intervals)
   */
  async startQuickTestSequence(): Promise<void> {
    console.log(`🧪 Starting QUICK TEST Spice School sequence for ${this.email}`);
    
    const quickInterval = 60 * 1000; // 1 minute intervals for testing

    // Send first 3 lessons for testing
    for (let lessonNumber = 1; lessonNumber <= 3; lessonNumber++) {
      const delay = (lessonNumber - 1) * quickInterval;

      setTimeout(async () => {
        console.log(`📧 [TEST] Sending Spice School Lesson ${lessonNumber} to ${this.email}`);
        await this.sendLesson(lessonNumber);
      }, delay);

      console.log(`⏰ [TEST] Lesson ${lessonNumber} in ${delay / 1000} seconds`);
    }
  }

  /**
   * Get lesson progress for a subscriber
   */
  getLessonProgress(): { current: number; total: number; percentage: number; nextLesson?: SpiceSchoolLesson } {
    const total = spiceSchoolCurriculum.length;
    const percentage = Math.round((this.currentLesson / total) * 100);
    const nextLesson = spiceSchoolCurriculum.find(l => l.lessonNumber === this.currentLesson + 1);

    return {
      current: this.currentLesson,
      total,
      percentage,
      nextLesson
    };
  }
}

/**
 * Send a Spice School educational email
 */
async function sendSpiceSchoolLesson(data: {
  email: string;
  lesson: SpiceSchoolLesson;
  firstName?: string;
  progressPercentage: number;
}): Promise<{ success: boolean; data?: any; error?: any }> {
  try {
    // Import the Spice School email template function
    const { getSpiceSchoolEmailHtml } = await import('./email-templates');
    
    // Use nodemailer directly like other email functions
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
      from: `"Chef Yossie - Indonesian Spice School" <${process.env.ZEPTOMAIL_FROM_EMAIL!}>`,
      to: data.email,
      subject: data.lesson.subject,
      html: getSpiceSchoolEmailHtml(data),
    };

    const result = await transport.sendMail(mailOptions);
    console.log(`✅ Spice School Lesson ${data.lesson.lessonNumber} sent to ${data.email}`);
    return { success: true, data: result };
  } catch (error) {
    console.error(`Error sending Spice School lesson:`, error);
    return { success: false, error };
  }
}

/**
 * Enroll a new subscriber in Spice School
 */
export async function enrollInSpiceSchool(email: string, startDate?: Date): Promise<void> {
  const manager = new SpiceSchoolManager(email, startDate);
  await manager.enrollInSpiceSchool();
}

/**
 * Start a quick test of the Spice School system
 */
export async function startSpiceSchoolQuickTest(email: string): Promise<void> {
  const manager = new SpiceSchoolManager(email);
  await manager.startQuickTestSequence();
}

/**
 * Send a specific lesson immediately
 */
export async function sendSpiceSchoolLessonNow(email: string, lessonNumber: number): Promise<void> {
  const manager = new SpiceSchoolManager(email);
  await manager.sendLesson(lessonNumber);
}

// Example data for testing
export const exampleSpiceSchoolData = {
  email: 'barooahn@gmail.com',
  firstName: 'John',
  enrollmentDate: new Date(),
  currentLesson: 1
};

// Curriculum summary for documentation
export const curriculumSummary = {
  totalLessons: 12,
  duration: '24 weeks (bi-weekly)',
  difficulty: 'Beginner to Advanced progression',
  topics: [
    'Indonesian spice families and identification',
    'Heat tolerance building and chili varieties',
    'Traditional grinding and preparation techniques',
    'Spice pairing and flavor harmony principles',
    'Regional Indonesian spice variations',
    'UK adaptation and ingredient substitution',
    'Traditional tools and modern alternatives',
    'Seasonal usage and medicinal properties',
    'Advanced layering and signature development'
  ],
  benefits: [
    'Authentic Indonesian cooking knowledge',
    'Cultural understanding of spice traditions',
    'Practical UK kitchen adaptation skills',
    'Progressive heat tolerance development',
    'Professional-level flavor development',
    'Health and medicinal spice usage'
  ]
};