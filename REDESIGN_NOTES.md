# Redesign implementation notes

## Included
- Reworked the homepage hierarchy around Projects, Experience, Technical Skills, Education, and Contact.
- Featured SRMD, Wisdom, drone obstacle avoidance, and CUDA kernel prediction in that order.
- Kept face recognition, Prompt Invariant Training, and crowd-risk detection in a compact list directly below featured projects.
- Removed LitmusAI from Projects and retained it under Experience.
- Made project technical descriptions, primary metrics, implementation details, and system-flow diagrams visible inline.
- Reframed Experience entries as larger vertical cards with summary, bullets, and technology tags.
- Added a dedicated Education section and verified NYU coursework.
- Updated sticky section navigation and footer anchors.
- Removed the old case-study route and case-study click-throughs.
- Left the resume URL empty because the PDF will be supplied later.

## Coursework note
Coursework entries for both NYU and Nirma University are now verified and included in `data.json`.

## Validation
- `npm run validate-data` passes.
- A full Astro production build could not be run in this environment because dependencies were not available from the npm registry. After extracting the ZIP, run `npm install` followed by `npm run build`.
