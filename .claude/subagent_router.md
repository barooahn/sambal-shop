# Automated Subagent Detection and Routing System

## Overview
This system automatically detects task types and routes requests to the appropriate specialized subagent based on context clues, file patterns, keywords, and user intent.

## Detection Triggers

### 🎨 Visual Design Tasks
**Auto-trigger when:**
- Keywords: "design", "UI", "UX", "visual", "brand", "color", "typography", "layout", "component design", "mockup"
- File patterns: `*.css`, `*.scss`, `*.design`, design-related files
- Requests about: brand guidelines, visual identity, user interface, design systems
- Commands: Creating/modifying visual components, styling, branding

**Auto-reference:**
- `visual_designer_subagent.md`
- `spice_island_design_specs.md`

### 💻 Development & Engineering Tasks  
**Auto-trigger when:**
- Keywords: "code", "develop", "implement", "bug", "error", "build", "deploy", "API", "database", "performance"
- File patterns: `*.ts`, `*.tsx`, `*.js`, `*.jsx`, `*.json`, `*.sql`, `*.config.*`
- Requests about: technical implementation, coding, debugging, architecture
- Commands: `yarn build`, `yarn dev`, `yarn test`, coding tasks

**Auto-reference:**
- `full_stack_developer_subagent.md`
- `spice_island_engineering_specs.md`

### 📝 Content & SEO Tasks
**Auto-trigger when:**
- Keywords: "content", "blog", "SEO", "meta", "keywords", "article", "copy", "description", "recipe"
- File patterns: `*.md` (blog posts), `/blog/`, `/recipes/`, `sitemap.ts`
- Requests about: writing content, SEO optimization, meta tags, blog posts
- Working on: Blog articles, product descriptions, recipe content

**Auto-reference:**
- `content_seo_strategist_subagent.md`
- `spice_island_content_specs.md`

### 📊 Data Analytics & Business Intelligence Tasks
**Auto-trigger when:**
- Keywords: "analytics", "metrics", "data", "tracking", "conversion", "performance", "KPI", "insights"
- File patterns: Analytics components, tracking files, dashboard files
- Requests about: Data analysis, user behavior, conversion tracking
- Working on: Google Analytics, performance metrics, business intelligence

**Auto-reference:**
- `data_analytics_bi_subagent.md`
- `spice_island_analytics_specs.md`

### 📱 Social Media Marketing Tasks
**Auto-trigger when:**
- Keywords: "social", "Facebook", "Instagram", "marketing", "campaign", "ads", "social media"
- Requests about: Social media strategy, campaign creation, content for social platforms
- Working on: Social media campaigns, platform-specific content

**Auto-reference:**
- `facebook_instagram_marketing_subagent_spec.md`

### 🎧 Customer Success & Support Tasks
**Auto-trigger when:**
- Keywords: "customer", "support", "help", "service", "feedback", "contact", "FAQ", "troubleshooting"
- File patterns: Contact forms, support pages, customer-related components
- Requests about: Customer experience, support processes, user assistance
- Working on: Customer support features, help documentation

**Auto-reference:**
- `customer_success_support_subagent.md`
- `spice_island_customer_support_specs.md`

### 📧 Email Marketing Tasks
**Auto-trigger when:**
- Keywords: "email", "newsletter", "campaign", "automation", "template", "SMTP", "marketing email"
- File patterns: Email templates, email-related API routes, email components
- Requests about: Email campaigns, automated emails, email templates
- Working on: Email marketing features, newsletter systems

**Auto-reference:**
- `email_marketing_specialist_subagent.md`
- `spice_island_email_marketing_specs.md`

## Automated Detection Algorithm

### Context Analysis
1. **Scan user request** for trigger keywords
2. **Analyze file paths** being worked on
3. **Check command patterns** being executed
4. **Evaluate task complexity** (multi-step tasks get subagent routing)

### Priority System
If multiple subagents match:
1. **Primary focus** (most keywords matched)
2. **File context** (currently open/modified files)  
3. **Task complexity** (complex tasks need specialized approach)
4. **Recent context** (previous subagent used in session)

### Auto-Suggestion Format
When a subagent is detected, automatically suggest:

```
🤖 **Subagent Detected**: [Task Type] Task
📋 **Recommended Approach**: Use [subagent_name] with [specs_file]
📚 **Key Resources**:
- Methodology: [methodology_file]
- Project Specs: [project_specs_file]
- Focus Areas: [relevant_focus_areas]

**Continue with specialized approach? This will ensure [specific_benefits]**
```

## Implementation Triggers

### Proactive Suggestions
- **Before starting complex tasks**: "This looks like a [type] task. Should I use the [subagent] approach?"
- **When editing relevant files**: "Working with [file_type] files. Activating [subagent] methodology."
- **On specific commands**: Commands like `yarn build` → Development subagent

### Manual Override
- User can always specify: "Use [subagent_name] approach"
- User can disable: "Skip subagent routing"
- User can switch: "Switch to [other_subagent] approach"

## Benefits

### ✅ **Automatic Expertise**
- Always applies relevant specialized knowledge
- Ensures brand consistency across all work types
- No manual memory required from user

### ✅ **Consistent Quality**  
- Each task type gets appropriate methodology
- Project specifications always referenced
- Cultural authenticity maintained

### ✅ **Improved Efficiency**
- Faster task completion with specialized approaches
- Reduced context switching
- Better results through domain expertise

## Usage Examples

### Example 1: Design Task Detection
```
User: "Can you improve the button styling on the product pages?"

🤖 Auto-detected: Visual Design Task
📋 Activating: visual_designer_subagent.md + spice_island_design_specs.md
🎨 Applying: Brand color palette, component design standards, cultural authenticity guidelines
```

### Example 2: Development Task Detection  
```
User: "There's a bug in the API endpoint for newsletter signup"

🤖 Auto-detected: Development & Engineering Task
📋 Activating: full_stack_developer_subagent.md + spice_island_engineering_specs.md  
💻 Applying: Technical debugging methodology, Next.js best practices, error handling standards
```

### Example 3: Content Task Detection
```
User: "Write a new blog post about Indonesian cooking techniques"

🤖 Auto-detected: Content & SEO Task
📋 Activating: content_seo_strategist_subagent.md + spice_island_content_specs.md
📝 Applying: Cultural authenticity guidelines, SEO optimization, educational content strategy
```