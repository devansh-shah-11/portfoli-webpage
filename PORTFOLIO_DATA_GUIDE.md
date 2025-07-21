# Portfolio Data Configuration

This portfolio project uses a modular data structure where all content is centralized in a single `data.json` file. This makes it easy for users to customize and maintain the portfolio content without touching the code.

## Structure Overview

All portfolio content is stored in `/data.json` with the following main sections:

### Personal Information
```json
"personal": {
  "name": "Your Name",
  "title": "Your Professional Title",
  "role": "Your Role Description",
  "description": "Brief description of what you do",
  "image": "/path-to-your-main-photo.jpg",
  "imageAlt": "Alt text for your photo",
  "aboutImage": "/path-to-your-about-photo.jpg",
  "email": "your.email@example.com"
}
```

### Social Links
```json
"socialLinks": [
  {
    "name": "Display Name",
    "url": "https://your-social-url.com",
    "icon": "IconName" // Available: Mail, LinkedIn, GitHub
  }
]
```

### About Section
```json
"about": [
  "First paragraph of your about section...",
  "Second paragraph...",
  "Third paragraph..."
]
```
**Note**: Use `**text**` for bold formatting in about paragraphs.

### Work Experience
```json
"experiences": [
  {
    "date": "Start Date - End Date",
    "title": "Job Title",
    "company": "Company Name",
    "link": "https://company-website.com", // Optional
    "description": "Description of your role and achievements..."
  }
]
```

### Education
```json
"education": [
  {
    "date": "Start Year - End Year",
    "degree": "Your Degree",
    "institution": "Institution Name",
    "description": "Description of your studies and achievements..."
  }
]
```

### Technologies
```json
"technologies": {
  "TECH_KEY": {
    "name": "Technology Name",
    "class": "bg-color text-color", // Tailwind CSS classes
    "icon": "IconComponentName"
  }
}
```

Available icon components:
- `NextJS`
- `Tailwind` 
- `Streamlit`
- `Tensorflow`
- `Firebase`
- `Python`
- `HEIC`
- `Node`

### Projects
```json
"projects": [
  {
    "title": "Project Name",
    "description": "Detailed project description...",
    "github": "https://github.com/username/repo", // Optional
    "link": "https://project-demo-url.com", // Optional
    "image": "/projects/project-image.jpg", // Optional
    "video": "YouTubeVideoID", // Optional - just the ID, not full URL
    "tags": ["TECH_KEY1", "TECH_KEY2"] // Reference to technology keys
  }
]
```

## How to Customize

1. **Update Personal Information**: Modify the `personal` section with your details
2. **Add/Remove Social Links**: Update the `socialLinks` array
3. **Update About Text**: Modify the `about` array with your story
4. **Add Work Experience**: Add entries to the `experiences` array
5. **Add Education**: Add entries to the `education` array
6. **Add New Technologies**: 
   - Add new entries to the `technologies` object
   - Make sure the icon component exists in `/src/components/icons/`
7. **Add Projects**:
   - Add new entries to the `projects` array
   - Reference technology keys in the `tags` array
   - Add project images to `/public/projects/`

## Adding New Technology Icons

If you need a new technology icon:

1. Create the icon component in `/src/components/icons/YourIcon.astro`
2. Add it to the icon mapping in `/src/components/Projects.astro`
3. Add the technology to the `technologies` section in `data.json`

## File Structure

```
├── data.json                 # Main data configuration
├── src/
│   ├── components/          # Astro components (auto-update from data.json)
│   ├── utils/
│   │   └── data.ts         # Data utilities and type definitions
│   └── ...
└── public/
    ├── projects/           # Project images
    └── ...                # Other static assets
```

## Benefits of This Structure

- ✅ **Easy Maintenance**: All content in one place
- ✅ **Type Safety**: TypeScript definitions provided
- ✅ **Reusable**: Easy to fork and customize
- ✅ **Scalable**: Easy to add new sections or content
- ✅ **Clean Separation**: Content separate from presentation logic

## Usage in Components

Components automatically read from `data.json`. If you need to access the data in custom components:

```typescript
import { portfolioData, getPersonalInfo, getProjects } from '@/utils/data'

// Use the data
const personal = getPersonalInfo()
const projects = getProjects()
```

This modular approach makes the portfolio extremely easy to customize and maintain!
