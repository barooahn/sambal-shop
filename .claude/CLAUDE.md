# Claude Agent Configuration for Spice Island Indonesia

## Specialized Task Handling Architecture

This project uses specialized documentation and workflows for different types of tasks. While Claude Code doesn't support custom subagents, we use the general-purpose agent with specialized instructions referencing domain-specific documentation:

### Visual Design Tasks
**Approach:** Use general-purpose agent with explicit reference to:
- `visual_designer_subagent.md` (methodology and principles)
- `spice_island_design_specs.md` (project specifications)

**Focus Areas:**
- Brand identity and visual systems
- Color palettes, typography, and layouts  
- Cultural authenticity and user experience
- Conversion-optimized design patterns

### Development & Engineering Tasks  
**Approach:** Use general-purpose agent with explicit reference to:
- `full_stack_developer_subagent.md` (development methodology)
- `spice_island_engineering_specs.md` (technical specifications)

**Focus Areas:**
- Technical implementation and optimization
- Next.js/React/TypeScript development
- Performance, security, and deployment
- Backend integration and database management

### Content & SEO Tasks
**Approach:** Use general-purpose agent with explicit reference to:
- `content_seo_strategist_subagent.md` (content strategy methodology)
- `spice_island_content_specs.md` (content specifications)

**Focus Areas:**
- Educational content and SEO optimization
- Organic search growth and keyword strategy
- Cultural education and authenticity in content
- Blog articles, recipes, and product descriptions

### Data Analytics & Business Intelligence Tasks  
**Approach:** Use general-purpose agent with explicit reference to:
- `data_analytics_bi_subagent.md` (analytics methodology)
- `spice_island_analytics_specs.md` (analytics specifications)

**Focus Areas:**
- Performance measurement and KPI tracking
- Conversion optimization and funnel analysis
- User behavior insights and segmentation
- Business intelligence and growth recommendations

### Social Media Marketing Tasks
**Approach:** Use general-purpose agent with explicit reference to:
- `facebook_instagram_marketing_subagent_spec.md` (social media strategy)

### Customer Success & Support Tasks
**Approach:** Use general-purpose agent with explicit reference to:
- `customer_success_support_subagent.md` (support methodology)
- `spice_island_customer_support_specs.md` (support specifications)

**Focus Areas:**
- Customer experience optimization and support operations
- Customer education about Indonesian cuisine and sambal usage
- Retention strategies and loyalty building
- Multi-channel support and satisfaction management

### Email Marketing Tasks
**Approach:** Use general-purpose agent with explicit reference to:
- `email_marketing_specialist_subagent.md` (email marketing methodology)
- `spice_island_email_marketing_specs.md` (email marketing specifications)

**Focus Areas:**
- Customer lifecycle email campaigns and automation
- Educational email content and cultural storytelling
- Retention and re-engagement email strategies
- Performance optimization and revenue attribution

## How It Works

### 🤖 Automated Subagent Detection (NEW)
The system now **automatically detects** task types and suggests appropriate subagents based on:
- **Keywords** in user requests (design, code, content, etc.)
- **File patterns** being worked on (.tsx, .md, .css, etc.)
- **Command patterns** recently executed (yarn build, yarn lint, etc.)
- **Task complexity** and context clues

**See**: `subagent_router.md` and `subagent_detector.js` for full automation details.

### Manual Subagent Selection (Fallback)
When requesting specialized assistance manually:
1. **Specify the domain** (e.g., "design task", "development task", "content task")
2. **Reference documentation explicitly** in the task prompt
3. **Use general-purpose agent** with clear instructions to follow the methodology files
4. **Include project specifications** as context for brand-specific requirements

## Project Context

**Brand:** Spice Island Indonesia - Authentic Indonesian sambal for the UK market
**Tech Stack:** Next.js 15, React 18, TypeScript, Tailwind CSS, Supabase, Stripe
**Package Manager:** Yarn (always use `yarn` commands, never `npm`)
**Focus:** Cultural authenticity, premium quality, educational content, conversion optimization

## Technical Requirements

### Package Management
- **Always use Yarn** for all package management operations
- Use `yarn install` instead of `npm install`
- Use `yarn build` instead of `npm run build`  
- Use `yarn dev` instead of `npm run dev`
- Use `yarn add <package>` instead of `npm install <package>`
- Use `yarn remove <package>` instead of `npm uninstall <package>`

### Build Commands
- Development: `yarn dev`
- Build: `yarn build`
- Test: `yarn test` (when available)
- Lint: `yarn lint` (when available)
- Type check: `yarn typecheck` (when available)