document.addEventListener('DOMContentLoaded', () => {
    // Dynamic Year
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            e.preventDefault();
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Page Specific Logic
    const path = window.location.pathname;
    const page = path.split("/").pop();

    if (page === 'projects.html' || path.endsWith('/projects')) {
        initProjects();
    } else if (page === 'prompts.html' || path.endsWith('/prompts')) {
        initPrompts();
    }
});

// --- Projects Logic ---
async function initProjects() {
    const projectGrid = document.getElementById('project-grid');
    if (!projectGrid) return;

    try {
        const response = await fetch('https://api.github.com/orgs/fels-public-ai-lab/repos');
        if (!response.ok) throw new Error('API failed');

        const repos = await response.json();
        renderProjects(repos, true);
    } catch (error) {
        console.warn('GitHub API failed, falling back to static data', error);
        // Fallback is already in the HTML or we can render placeholders here
    }
}

function renderProjects(repos, isDynamic) {
    const projectGrid = document.getElementById('project-grid');
    // If we have dynamic repos, we might want to clear or prepend
    // For now, let's just append them to the existing grid
    repos.forEach(repo => {
        const card = document.createElement('div');
        card.className = 'card fade-in';
        card.innerHTML = `
            <span class="card-tag">${repo.language || 'Project'}</span>
            <h3>${repo.name.replace(/-/g, ' ')}</h3>
            <p>${repo.description || 'No description provided.'}</p>
            <a href="${repo.html_url}" class="btn btn-outline" style="margin-top: 20px;">View on GitHub</a>
        `;
        projectGrid.appendChild(card);
    });
}

// --- Prompts Logic ---
async function initPrompts() {
    const promptGrid = document.getElementById('prompt-grid');
    if (!promptGrid) return;

    try {
        const response = await fetch('data/prompts.json');
        const data = await response.json();

        // Normalize data if necessary
        const prompts = data.prompts.map(p => ({
            title: p.title,
            category: p.category,
            description: p.description,
            text: p.prompt_text || p.prompt,
            author: `${p.submitted_by_first || ''} ${p.submitted_by_last || ''}`.trim() || 'Fels Lab',
            tools: p.tools_tested ? p.tools_tested.join(', ') : 'N/A'
        }));

        renderPrompts(prompts);
        setupFilters(prompts);
    } catch (error) {
        console.error('Failed to load prompts', error);
    }
}

function renderPrompts(prompts) {
    const promptGrid = document.getElementById('prompt-grid');
    promptGrid.innerHTML = '';

    prompts.forEach((prompt, index) => {
        const card = document.createElement('div');
        card.className = 'card prompt-card fade-in';
        card.dataset.category = prompt.category.toLowerCase();
        card.innerHTML = `
            <span class="card-tag">${prompt.category}</span>
            <h3>${prompt.title}</h3>
            <p>${prompt.description}</p>
            <div style="margin-top: 15px; font-size: 0.9rem; color: var(--text-muted);">
                <strong>Created by:</strong> ${prompt.author}<br>
                <strong>Tools tested:</strong> ${prompt.tools}
            </div>
            <button class="btn btn-outline toggle-prompt" style="margin-top: 20px;" data-index="${index}">View Prompt</button>
            <div class="prompt-content" id="prompt-${index}" style="display: none; margin-top: 20px; padding: 15px; background: #f9f9f9; border-left: 4px solid var(--penn-red); overflow-x: auto;">
                <pre style="white-space: pre-wrap; font-family: monospace; font-size: 0.9rem;">${prompt.text}</pre>
            </div>
        `;
        promptGrid.appendChild(card);
    });

    // Toggle logic
    document.querySelectorAll('.toggle-prompt').forEach(btn => {
        btn.addEventListener('click', () => {
            const index = btn.dataset.index;
            const content = document.getElementById(`prompt-${index}`);
            const isVisible = content.style.display === 'block';
            content.style.display = isVisible ? 'none' : 'block';
            btn.textContent = isVisible ? 'View Prompt' : 'Hide Prompt';
        });
    });
}

function setupFilters(prompts) {
    const filters = document.querySelectorAll('.filter-btn');
    filters.forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.dataset.filter.toLowerCase();

            // Update UI
            filters.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Filter cards
            const cards = document.querySelectorAll('.prompt-card');
            cards.forEach(card => {
                if (category === 'all' || card.dataset.category === category) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}
