# Fels Public AI Lab — Website

Public website for the Fels Public AI Lab (FPAL) at the Fels Institute of 
Government, University of Pennsylvania.

🌐 **Live site:** [fels-public-ai-lab.github.io](https://fels-public-ai-lab.github.io)

## About

The Fels Public AI Lab applies artificial intelligence to strengthen public 
institutions and civic life. This repository contains the source code for 
the lab's public website, including the project directory, prompt library, 
team page, and contact information.

## Structure
```
/
├── data/
│   └── prompts.json        # Prompt library data
├── Photos/                 # Site imagery and logos
├── index.html              # Homepage
├── projects.html           # Lab projects
├── prompts.html            # Public sector prompt library
├── team.html               # Team and affiliates
├── contact.html            # Contact and intake
├── styles.css              # Global styles
└── main.js                 # Site scripts
```

## Contributing

### Submitting a Prompt
To contribute a prompt to the public library, add an entry to `data/prompts.json` 
following this schema:
```json
{
  "title": "Prompt title",
  "category": "Policy Analysis | Data | Communication | Education | Other",
  "description": "One-sentence description of what this prompt does.",
  "prompt": "Full prompt text here."
}
```

Open a pull request with your addition. Submissions are reviewed by lab staff 
before merging.

## Deployment

This site is deployed via GitHub Pages from the `main` branch. Changes pushed 
to `main` are live within a few minutes.

## Contact

📧 [publicailab@sas.upenn.edu](mailto:publicailab@sas.upenn.edu)  
🏛️ Fels Institute of Government, University of Pennsylvania  
3814 Walnut Street, Philadelphia, PA 19104

---

© 2025 Fels Public AI Lab
