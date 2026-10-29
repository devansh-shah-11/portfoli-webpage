# Editing your portfolio

Portfolio content lives in `data.json`.

## Projects

The homepage displays four featured projects in the order marked by `"featured": true`:
1. SRMD Multilingual Speech Translation
2. Wisdom Multimodal Search and RAG
3. Drone Obstacle Avoidance with Selective VLM Reasoning
4. LLM-Assisted CUDA Kernel Performance Prediction

Other projects appear in a compact list below the featured cards. All project summaries, technical details, metrics, and technology tags are visible on the homepage; the cards do not require a case-study click-through.

Project content fields:
- `summary`: concise description of the project
- `stat`: primary metric and its label
- `approach`: technical approach paragraph
- `built`: list of implementation details
- `evaluation`: evaluation method or context, when useful
- `result`: supporting result or interpretation
- `flow`: optional sequence of stages for the small system-flow diagram
- `tech`: technology and method tags

Set `"featured": true` to show a project as an expanded card. Keep the featured project order in `data.json`.

## Experience

Each entry in `experiences` supports:
- `date`, `title`, and `company`
- `summary`: short overview of the work
- `bullets`: technical implementation and outcomes, written as complete, scannable bullets
- `tech`: compact technology tags

LitmusAI belongs in Experience, not Projects.

## Resume

When the PDF is ready, place it in `public/` (for example `public/resume.pdf`) and set `personal.resume` to `"/resume.pdf"`. The resume link is hidden while this field is empty.

## Education

Education entries support an optional `coursework` array. Only add course names that you have verified.

## Local development

```bash
npm install
npm run validate-data
npm run dev
npm run build
```
