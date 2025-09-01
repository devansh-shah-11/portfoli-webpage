#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read and validate data.json
function validatePortfolioData() {
  try {
    const dataPath = path.join(__dirname, '..', 'data.json');
    const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
    
    console.log('✅ Portfolio Data Validation');
    console.log('='.repeat(50));
    
    // Check required sections
    const requiredSections = ['personal', 'socialLinks', 'about', 'experiences', 'education', 'technologies', 'projects'];
    requiredSections.forEach(section => {
      if (data[section]) {
        console.log(`✅ ${section}: ${Array.isArray(data[section]) ? data[section].length + ' items' : 'present'}`);
      } else {
        console.log(`❌ ${section}: missing`);
      }
    });
    
    // Validate personal info
    if (data.personal) {
      const requiredPersonalFields = ['name', 'title', 'role', 'description', 'image', 'email'];
      requiredPersonalFields.forEach(field => {
        if (data.personal[field]) {
          console.log(`  ✅ personal.${field}: present`);
        } else {
          console.log(`  ❌ personal.${field}: missing`);
        }
      });
    }
    
    // Validate projects
    if (data.projects && Array.isArray(data.projects)) {
      console.log(`\n📦 Projects (${data.projects.length}):`);
      data.projects.forEach((project, index) => {
        console.log(`  ${index + 1}. ${project.title || 'Untitled'}`);
        if (!project.description) console.log(`     ⚠️  Missing description`);
        if (!project.tags || project.tags.length === 0) console.log(`     ⚠️  No tags specified`);
        if (!project.github && !project.link) console.log(`     ⚠️  No GitHub or live link`);
      });
    }
    
    // Validate technologies
    if (data.technologies) {
      console.log(`\n🛠️  Technologies (${Object.keys(data.technologies).length}):`);
      Object.entries(data.technologies).forEach(([key, tech]) => {
        console.log(`  ${key}: ${tech.name}`);
        if (!tech.icon) console.log(`     ⚠️  Missing icon component`);
        if (!tech.class) console.log(`     ⚠️  Missing CSS class`);
      });
    }
    
    console.log('\n🎉 Validation complete!');
    
  } catch (error) {
    console.error('❌ Error validating portfolio data:', error.message);
    process.exit(1);
  }
}

validatePortfolioData();
