import { NextRequest, NextResponse } from 'next/server';
import { 
  startSpiceSchoolQuickTest, 
  enrollInSpiceSchool, 
  sendSpiceSchoolLessonNow,
  exampleSpiceSchoolData,
  curriculumSummary,
  spiceSchoolCurriculum
} from '@/lib/spice-school-automation';

export async function POST(request: NextRequest) {
  try {
    const { mode, email, lessonNumber } = await request.json();
    
    console.log('🧪 Testing Spice School Educational Series...');

    if (mode === 'quick' || !mode) {
      // Quick test mode - sends first 3 lessons with 1-minute intervals
      const testEmail = email || exampleSpiceSchoolData.email;
      console.log('🚀 Starting QUICK test sequence (1-minute intervals)...');
      
      await startSpiceSchoolQuickTest(testEmail);
      
      return NextResponse.json({
        success: true,
        message: 'Quick Spice School test started!',
        mode: 'quick_test',
        schedule: {
          lesson1: '0 seconds (immediate)',
          lesson2: '60 seconds',
          lesson3: '120 seconds'
        },
        testData: {
          email: testEmail,
          curriculum: 'First 3 lessons for demo',
          lessonTitles: spiceSchoolCurriculum.slice(0, 3).map(lesson => lesson.title)
        },
        curriculum_overview: curriculumSummary
      });
    }
    
    if (mode === 'production') {
      // Production mode - enrolls in full 24-week program
      const enrollmentEmail = email || exampleSpiceSchoolData.email;
      console.log('📊 Starting PRODUCTION Spice School enrollment...');
      
      await enrollInSpiceSchool(enrollmentEmail);
      
      return NextResponse.json({
        success: true,
        message: 'Production Spice School enrollment started!',
        mode: 'production',
        enrollment: {
          email: enrollmentEmail,
          program: '24-week Indonesian Spice School',
          schedule: 'Bi-weekly lessons (every 14 days)',
          totalLessons: 12
        },
        timeline: {
          lesson1: 'Immediate',
          lesson2: '14 days',
          lesson6: '10 weeks', 
          lesson12: '22 weeks (graduation)'
        },
        curriculum_summary: curriculumSummary
      });
    }

    if (mode === 'single_lesson') {
      // Send a specific lesson immediately
      const testEmail = email || exampleSpiceSchoolData.email;
      const lesson = lessonNumber || 1;
      
      await sendSpiceSchoolLessonNow(testEmail, lesson);
      
      const selectedLesson = spiceSchoolCurriculum.find(l => l.lessonNumber === lesson);
      
      return NextResponse.json({
        success: true,
        message: `Spice School Lesson ${lesson} sent immediately!`,
        mode: 'single_lesson',
        lessonDetails: {
          number: lesson,
          title: selectedLesson?.title,
          difficulty: selectedLesson?.difficulty,
          topics: selectedLesson?.topics
        },
        recipient: testEmail
      });
    }

  } catch (error) {
    console.error('💥 Error in Spice School test:', error);
    
    return NextResponse.json({
      success: false,
      message: 'Spice School test failed',
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'Spice School Educational Email Series Test Endpoint',
    description: '24-week bi-weekly Indonesian spice education program',
    usage: {
      quick_test: 'POST with {"mode": "quick"} - sends first 3 lessons with 1-minute intervals',
      production_enrollment: 'POST with {"mode": "production"} - enrolls in full 24-week program',
      single_lesson: 'POST with {"mode": "single_lesson", "lessonNumber": 1} - sends specific lesson immediately'
    },
    curriculum_overview: curriculumSummary,
    lesson_progression: {
      beginner: 'Lessons 1-4: Spice families, heat levels, basic techniques',
      intermediate: 'Lessons 5-9: Regional differences, pairing, UK adaptations', 
      advanced: 'Lessons 10-12: Medicinal uses, advanced techniques, mastery'
    },
    educational_features: {
      structured_curriculum: '12 comprehensive lessons over 24 weeks',
      cultural_context: 'Each lesson includes Indonesian cultural background',
      practical_application: 'Hands-on techniques and UK-specific adaptations',
      progressive_difficulty: 'Beginner to advanced skill development',
      product_integration: 'Sambal recommendations for practice',
      homework_assignments: 'Engagement activities between lessons',
      chef_personality: 'Personal instruction from Chef Yossie'
    },
    integration_points: {
      newsletter_signup: 'Offer Spice School enrollment to newsletter subscribers',
      first_purchase: 'Automatic enrollment with first sambal purchase',
      advanced_customers: 'Invite experienced customers to advanced lessons',
      social_sharing: 'Encourage students to share their homework results'
    },
    expected_results: {
      completion_rate: '60-70% for full 24-week program',
      engagement_increase: '40-50% higher email open rates',
      customer_education: 'Positions brand as Indonesian cuisine authority',
      loyalty_building: 'Creates deeper connection through shared learning',
      word_of_mouth: 'Students become brand ambassadors and teachers'
    }
  });
}