/**
 * Automated Subagent Detection and Routing System
 * Analyzes user requests and automatically suggests appropriate subagents
 */

class SubagentDetector {
    constructor() {
        this.subagents = {
            'visual_design': {
                name: 'Visual Design Specialist',
                methodology: 'visual_designer_subagent.md',
                specs: 'spice_island_design_specs.md',
                keywords: ['design', 'ui', 'ux', 'visual', 'brand', 'color', 'typography', 'layout', 'component design', 'mockup', 'style', 'styling', 'theme', 'aesthetic', 'branding', 'button styling', 'improve styling', 'visual design', 'colors', 'fonts', 'appearance'],
                filePatterns: [/\.css$/, /\.scss$/, /\.design$/, /tailwind/, /style/i, /button/i, /ui\/.*\.tsx$/],
                focusAreas: ['Brand identity and visual systems', 'Color palettes and typography', 'Cultural authenticity in design', 'Conversion-optimized patterns']
            },
            'development': {
                name: 'Full Stack Developer',
                methodology: 'full_stack_developer_subagent.md',
                specs: 'spice_island_engineering_specs.md',
                keywords: ['code', 'develop', 'implement', 'bug', 'error', 'build', 'deploy', 'api', 'database', 'performance', 'debug', 'fix', 'technical', 'programming', 'function', 'component'],
                filePatterns: [/\.ts$/, /\.tsx$/, /\.js$/, /\.jsx$/, /\.json$/, /\.sql$/, /\.config\./],
                focusAreas: ['Technical implementation', 'Next.js/React development', 'Performance optimization', 'Backend integration']
            },
            'content_seo': {
                name: 'Content & SEO Strategist',
                methodology: 'content_seo_strategist_subagent.md',
                specs: 'spice_island_content_specs.md',
                keywords: ['content', 'blog', 'seo', 'meta', 'keywords', 'article', 'copy', 'description', 'recipe', 'write', 'writing', 'text', 'content creation'],
                filePatterns: [/\.md$/, /\/blog\//, /\/recipes\//, /sitemap/i, /meta/i],
                focusAreas: ['Educational content creation', 'SEO optimization', 'Cultural authenticity in content', 'Organic search growth']
            },
            'analytics': {
                name: 'Data Analytics & BI Specialist',
                methodology: 'data_analytics_bi_subagent.md',
                specs: 'spice_island_analytics_specs.md',
                keywords: ['analytics', 'metrics', 'data', 'tracking', 'conversion', 'performance', 'kpi', 'insights', 'measurement', 'statistics', 'report'],
                filePatterns: [/analytics/i, /tracking/i, /metrics/i, /dashboard/i],
                focusAreas: ['Performance measurement', 'Conversion optimization', 'User behavior analysis', 'Business intelligence']
            },
            'social_media': {
                name: 'Social Media Marketing Specialist',
                methodology: 'facebook_instagram_marketing_subagent_spec.md',
                specs: null,
                keywords: ['social', 'facebook', 'instagram', 'marketing', 'campaign', 'ads', 'social media', 'post', 'engagement'],
                filePatterns: [/social/i, /marketing/i],
                focusAreas: ['Social media strategy', 'Campaign creation', 'Platform-specific content', 'Community engagement']
            },
            'customer_support': {
                name: 'Customer Success & Support Specialist',
                methodology: 'customer_success_support_subagent.md',
                specs: 'spice_island_customer_support_specs.md',
                keywords: ['customer', 'support', 'help', 'service', 'feedback', 'contact', 'faq', 'troubleshooting', 'assistance', 'experience'],
                filePatterns: [/contact/i, /support/i, /help/i, /faq/i],
                focusAreas: ['Customer experience optimization', 'Support operations', 'Customer education', 'Retention strategies']
            },
            'email_marketing': {
                name: 'Email Marketing Specialist',
                methodology: 'email_marketing_specialist_subagent.md',
                specs: 'spice_island_email_marketing_specs.md',
                keywords: ['email', 'newsletter', 'campaign', 'automation', 'template', 'smtp', 'marketing email', 'mailing', 'subscription'],
                filePatterns: [/email/i, /newsletter/i, /smtp/i, /mail/i],
                focusAreas: ['Email campaigns', 'Customer lifecycle automation', 'Educational email content', 'Performance optimization']
            }
        };
    }

    /**
     * Analyze user request and detect appropriate subagent
     */
    detectSubagent(userRequest, filePaths = [], recentCommands = []) {
        const scores = {};
        
        // Initialize scores
        Object.keys(this.subagents).forEach(key => {
            scores[key] = 0;
        });

        // Analyze keywords in user request
        const requestLower = userRequest.toLowerCase();
        Object.entries(this.subagents).forEach(([key, subagent]) => {
            subagent.keywords.forEach(keyword => {
                if (requestLower.includes(keyword.toLowerCase())) {
                    scores[key] += 2; // Keyword matches get high score
                }
            });
        });

        // Analyze file paths
        filePaths.forEach(filePath => {
            Object.entries(this.subagents).forEach(([key, subagent]) => {
                subagent.filePatterns.forEach(pattern => {
                    if (pattern.test(filePath)) {
                        scores[key] += 3; // File pattern matches get highest score
                    }
                });
            });
        });

        // Analyze recent commands
        recentCommands.forEach(command => {
            if (command.includes('build') || command.includes('dev') || command.includes('test')) {
                scores['development'] += 1;
            }
            if (command.includes('lint')) {
                scores['development'] += 1;
            }
        });

        // Find highest scoring subagent
        const sortedScores = Object.entries(scores)
            .sort(([,a], [,b]) => b - a)
            .filter(([,score]) => score > 0);

        return sortedScores;
    }

    /**
     * Generate suggestion message for detected subagent
     */
    generateSuggestion(subagentKey, confidence = 'high') {
        const subagent = this.subagents[subagentKey];
        
        const suggestion = {
            detected: true,
            subagentKey,
            name: subagent.name,
            confidence,
            message: `🤖 **Subagent Detected**: ${subagent.name}\n` +
                    `📋 **Recommended Approach**: Use specialized ${subagent.name.toLowerCase()} methodology\n` +
                    `📚 **Key Resources**:\n` +
                    `- Methodology: \`${subagent.methodology}\`\n` +
                    (subagent.specs ? `- Project Specs: \`${subagent.specs}\`\n` : '') +
                    `- Focus Areas: ${subagent.focusAreas.join(', ')}\n\n` +
                    `**Continue with specialized approach?** This will ensure brand consistency, cultural authenticity, and optimal results.`,
            methodology: subagent.methodology,
            specs: subagent.specs,
            focusAreas: subagent.focusAreas
        };

        return suggestion;
    }

    /**
     * Main detection function
     */
    analyze(userRequest, context = {}) {
        const {
            filePaths = [],
            recentCommands = [],
            currentFiles = [],
            taskComplexity = 'medium'
        } = context;

        // Get detection scores
        const detectionResults = this.detectSubagent(userRequest, [...filePaths, ...currentFiles], recentCommands);
        
        if (detectionResults.length === 0) {
            return {
                detected: false,
                message: "No specialized subagent detected. Proceeding with general approach."
            };
        }

        // Get top result
        const [topSubagent, topScore] = detectionResults[0];
        
        // Determine confidence based on score
        let confidence = 'low';
        if (topScore >= 4) confidence = 'high';
        else if (topScore >= 2) confidence = 'medium';

        // Generate suggestion
        return this.generateSuggestion(topSubagent, confidence);
    }

    /**
     * Get all available subagents
     */
    getAvailableSubagents() {
        return Object.entries(this.subagents).map(([key, subagent]) => ({
            key,
            name: subagent.name,
            methodology: subagent.methodology,
            specs: subagent.specs,
            focusAreas: subagent.focusAreas
        }));
    }
}

// Example usage and testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SubagentDetector;
} else {
    // Browser/Claude Code usage
    window.SubagentDetector = SubagentDetector;
}

// Test examples
const detector = new SubagentDetector();

// Example test cases
const testCases = [
    {
        request: "Can you improve the button styling on the product pages?",
        context: { filePaths: ['components/ui/button.tsx'], currentFiles: ['app/products/page.tsx'] }
    },
    {
        request: "There's a bug in the API endpoint for newsletter signup",
        context: { filePaths: ['app/api/newsletter/route.ts'], recentCommands: ['yarn build'] }
    },
    {
        request: "Write a new blog post about Indonesian cooking techniques",
        context: { filePaths: ['app/blog/cooking-techniques/page.tsx'], currentFiles: ['app/blog/posts.ts'] }
    },
    {
        request: "How can we track conversion rates better?",
        context: { filePaths: ['components/analytics/GoogleAnalytics.tsx'] }
    },
    {
        request: "Create a Facebook campaign for our sambal products",
        context: {}
    },
    {
        request: "Customers are having trouble with the checkout process",
        context: { filePaths: ['app/contact/page.tsx', 'components/support/ContactForm.tsx'] }
    },
    {
        request: "Set up automated welcome emails for new subscribers",
        context: { filePaths: ['lib/email-templates.ts', 'app/api/newsletter/route.ts'] }
    }
];

// Log test results (for debugging)
console.log('=== Subagent Detection Test Results ===\n');
testCases.forEach((testCase, index) => {
    const result = detector.analyze(testCase.request, testCase.context);
    console.log(`Test ${index + 1}: "${testCase.request}"`);
    console.log(`Result: ${result.detected ? result.name : 'No subagent'}`);
    console.log('---\n');
});