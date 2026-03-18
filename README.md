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

## Projects

Tools and servers currently featured on the site.

### Civic Data Access
| Project | Description | Repo |
|---------|-------------|------|
| [Philadelphia Open Data MCP Server](https://github.com/Fels-Public-AI-Lab/MCP/tree/main/philadelphia-open-data) | Connects AI assistants to six live Philadelphia city databases (311, crime, permits, violations, parking, OPA property assessments) and the OpenDataPhilly catalog. | [MCP repo](https://github.com/Fels-Public-AI-Lab/MCP) |
| [Philadelphia Property Tax MCP Server](https://github.com/Fels-Public-AI-Lab/MCP/tree/main/philadelphia-property-tax-MCP) | AI interface to Philadelphia's property assessment and tax balance data via the city's public CARTO API. | [MCP repo](https://github.com/Fels-Public-AI-Lab/MCP) |
| [Philadelphia Budget Simulator](tools/philadelphia-budget-simulator.html) | Interactive tool for adjusting Philadelphia's ~$6B General Fund and seeing the trade-offs in real-world service impacts. | This repo (`tools/`) |

### Public Finance Education
Interactive browser-based exercises used in the Fels MPA curriculum. Hosted at [Fels-Public-AI-Lab/public-finance-exercises](https://github.com/Fels-Public-AI-Lab/public-finance-exercises).

| Exercise | Topic |
|----------|-------|
| Sales Tax Revenue Forecasting | Municipal revenue projection |
| Budget Trend Analysis | Multi-year spending analysis |
| Personnel Budget | Position costing and benefits |
| Nonprofit Cash Flow & Liquidity | Grant-dependent cash management |
| Capital Fund Planning | 5-year CIP and bond amortization |
| Procurement & NPV Analysis | Present value contractor selection |

### AI Tools for Government
| Project | Description |
|---------|-------------|
| [FPAL Prompt Library](https://fels-public-ai-lab.github.io/prompts.html) | Curated, filterable library of prompts for government and nonprofit contexts. Data in `data/prompts.json`. |

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

© 2026 Fels Public AI Lab
