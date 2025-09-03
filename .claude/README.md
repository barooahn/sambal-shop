# Claude Configuration Files

This folder contains all Claude Code configuration files and subagent specifications for the Spice Island Indonesia project.

## Files Overview

### Core Configuration
- `CLAUDE.md` - Main Claude Code instructions and project guidelines
- `CLAUDE.local.md` - User's private project instructions (not version controlled)
- `settings.local.json` - Local Claude settings and preferences

### Generic Subagent Specifications (Reusable)
- `visual_designer_subagent.md` - Generic Visual Designer with universal design principles
- `full_stack_developer_subagent.md` - Generic Full-Stack Developer with universal engineering practices
- `content_seo_strategist_subagent.md` - Generic Content & SEO Strategist with universal content principles
- `data_analytics_bi_subagent.md` - Generic Data Analytics & BI Specialist with universal analytics practices
- `customer_success_support_subagent.md` - Generic Customer Success & Support Specialist with universal CX principles
- `email_marketing_specialist_subagent.md` - Generic Email Marketing Specialist with universal email best practices
- `facebook_instagram_marketing_subagent_spec.md` - Meta Marketing Strategist (project-specific)

### Project-Specific Specifications (Spice Island Indonesia)
- `spice_island_design_specs.md` - Brand colors, typography, cultural elements, UI components
- `spice_island_engineering_specs.md` - Tech stack, architecture, performance requirements, deployment
- `spice_island_content_specs.md` - Content strategy, SEO keywords, brand voice, target topics
- `spice_island_analytics_specs.md` - KPIs, customer journey, performance targets, reporting needs
- `spice_island_customer_support_specs.md` - Customer personas, support operations, cultural education requirements
- `spice_island_email_marketing_specs.md` - Email strategy, segmentation, cultural content, automation sequences
- `design-principles.md` - Comprehensive brand design system (referenced by design specs)

## Purpose

This organized structure keeps all Claude-related configurations separate from the main project files, making it easier to:

- Manage AI agent configurations
- Version control subagent specifications
- Maintain clean project root directory
- Share subagent specs across projects

## Modular Subagent Architecture

### Generic Subagents (Reusable Across Projects)
**Visual Designer:**
- Universal design principles and methodologies
- Reads project-specific design specs for brand details
- Focuses on visual systems, UX, and conversion optimization

**Full-Stack Developer:**  
- Universal engineering best practices
- Reads project-specific engineering specs for tech stack
- Focuses on implementation, performance, and deployment

### Project-Specific Documents
**Design Specifications:**
- Brand colors, typography, and visual identity
- Cultural elements and market context
- Component specifications and usage guidelines

**Engineering Specifications:**
- Technology stack and architecture decisions
- Performance requirements and quality standards
- Third-party integrations and deployment configuration

## Benefits of This Architecture
1. **Reusability:** Same subagents work across different projects
2. **Consistency:** Universal best practices applied to all projects  
3. **Flexibility:** Easy to swap project contexts without rewriting agents
4. **Maintainability:** Clear separation between universal principles and project specifics
5. **Scalability:** Add new projects by creating new specification documents

## Usage

Claude Code automatically reads configuration files from this directory. The `.gitignore` file excludes this entire folder to keep private settings and local configurations secure.