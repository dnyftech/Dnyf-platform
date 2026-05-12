// Main App Script
class App {
    constructor() {
        this.init();
    }

    init() {
<<<<<<< HEAD
=======
        // Initialize components
>>>>>>> 53a7e44195d2b8194b9b5e13c655f67da0bc4038
        this.initMobileMenu();
        this.initThemeToggle();
        this.initSmoothScroll();
        this.initContactForm();
        this.initTerminal();
        this.initPWA();
        this.updateCurrentYear();
        
<<<<<<< HEAD
        console.log('Dnyf tech App initialized');
=======
        console.log('DNYF TETCH App initialized');
>>>>>>> 53a7e44195d2b8194b9b5e13c655f67da0bc4038
    }

    initMobileMenu() {
        const toggle = document.querySelector('.menu-toggle');
        const menu = document.querySelector('.nav-menu');
        
        if (toggle && menu) {
            toggle.addEventListener('click', () => {
                menu.classList.toggle('show');
                toggle.innerHTML = menu.classList.contains('show') 
                    ? '<i class="fas fa-times"></i>' 
                    : '<i class="fas fa-bars"></i>';
            });
            
<<<<<<< HEAD
=======
            // Close menu when clicking a link
>>>>>>> 53a7e44195d2b8194b9b5e13c655f67da0bc4038
            document.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', () => {
                    menu.classList.remove('show');
                    toggle.innerHTML = '<i class="fas fa-bars"></i>';
                });
            });
        }
    }

    initThemeToggle() {
        const toggle = document.getElementById('themeToggle');
        
        if (toggle) {
            toggle.addEventListener('click', () => {
                const currentTheme = document.documentElement.getAttribute('data-theme');
                const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
                
                this.setTheme(newTheme);
            });
            
<<<<<<< HEAD
=======
            // Set initial icon
>>>>>>> 53a7e44195d2b8194b9b5e13c655f67da0bc4038
            const savedTheme = localStorage.getItem('theme') || 'dark';
            this.setTheme(savedTheme);
        }
    }

    setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        const toggle = document.getElementById('themeToggle');
        if (toggle) {
            toggle.innerHTML = `<i class="fas fa-${theme === 'dark' ? 'moon' : 'sun'}"></i>`;
        }
        localStorage.setItem('theme', theme);
    }

    initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    initContactForm() {
        const form = document.getElementById('contactForm');
        
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                
<<<<<<< HEAD
                const formData = new FormData(form);
                const data = Object.fromEntries(formData.entries());
                
                this.showNotification('Thank you! Your message has been sent.');
                
                form.reset();
                
=======
                // Get form data
                const formData = new FormData(form);
                const data = Object.fromEntries(formData.entries());
                
                // Show success message
                this.showNotification('Thank you! Your message has been sent.');
                
                // Reset form
                form.reset();
                
                // Log data (in real app, send to server)
>>>>>>> 53a7e44195d2b8194b9b5e13c655f67da0bc4038
                console.log('Contact form data:', data);
            });
        }
    }

    initTerminal() {
        const terminal = document.getElementById('terminalBody');
        if (!terminal) return;
        
        const commands = [
<<<<<<< HEAD
            { cmd: 'whoami', out: 'dnyf_tech' },
=======
            { cmd: 'whoami', out: 'dnyf_tetch' },
>>>>>>> 53a7e44195d2b8194b9b5e13c655f67da0bc4038
            { cmd: 'pwd', out: '/home/dnyf/research' },
            { cmd: 'ls -la', out: 'total 24\ndrwxr-xr-x  8 dnyf  staff   256B  ...  .git\ndrwxr-xr-x  4 dnyf  staff   128B  ...  ai-research\ndrwxr-xr-x  5 dnyf  staff   160B  ...  android-projects\ndrwxr-xr-x  3 dnyf  staff    96B  ...  termux-tools' },
            { cmd: 'cd ai-research', out: '' },
            { cmd: 'git status', out: 'On branch main\nYour branch is up to date with \'origin/main\'.\nnothing to commit, working tree clean' },
<<<<<<< HEAD
            { cmd: 'echo "Welcome to DNYF tech"', out: 'Welcome to DNYF tech' }
=======
            { cmd: 'echo "Welcome to DNYF TETCH"', out: 'Welcome to DNYF TETCH' }
>>>>>>> 53a7e44195d2b8194b9b5e13c655f67da0bc4038
        ];
        
        let output = '';
        let delay = 100;
        
        commands.forEach((item) => {
            setTimeout(() => {
                output += `<div class="terminal-line"><span class="prompt">$</span> <span class="command">${item.cmd}</span></div>`;
                if (item.out) {
                    output += `<div class="terminal-line output">${item.out}</div>`;
                }
                terminal.innerHTML = output;
                terminal.scrollTop = terminal.scrollHeight;
            }, delay);
            
            delay += 300;
        });
        
<<<<<<< HEAD
=======
        // Add blinking cursor
>>>>>>> 53a7e44195d2b8194b9b5e13c655f67da0bc4038
        setTimeout(() => {
            output += `<div class="terminal-line"><span class="prompt">$</span> <span class="command"></span><span class="blinking-cursor">█</span></div>`;
            terminal.innerHTML = output;
        }, delay);
    }

    initPWA() {
        const installBtn = document.getElementById('installBtn');
        let deferredPrompt;
        
        window.addEventListener('beforeinstallprompt', (e) => {
            e.preventDefault();
            deferredPrompt = e;
            
            if (installBtn) {
                installBtn.style.display = 'flex';
                
                installBtn.addEventListener('click', () => {
                    installBtn.style.display = 'none';
                    deferredPrompt.prompt();
                    
                    deferredPrompt.userChoice.then((choiceResult) => {
                        if (choiceResult.outcome === 'accepted') {
                            console.log('User installed PWA');
                        }
                        deferredPrompt = null;
                    });
                });
            }
        });
        
        window.addEventListener('appinstalled', () => {
            if (installBtn) {
                installBtn.style.display = 'none';
            }
            console.log('PWA installed');
        });
    }

    showNotification(message, type = 'success') {
<<<<<<< HEAD
=======
        // Create notification element
>>>>>>> 53a7e44195d2b8194b9b5e13c655f67da0bc4038
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
            <span>${message}</span>
        `;
        
<<<<<<< HEAD
=======
        // Add styles
>>>>>>> 53a7e44195d2b8194b9b5e13c655f67da0bc4038
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? '#3ddc84' : '#ff5f56'};
            color: #000;
            padding: 15px 20px;
            border-radius: 6px;
            display: flex;
            align-items: center;
            gap: 10px;
            z-index: 9999;
            animation: slideIn 0.3s ease;
<<<<<<< HEAD
            font-weight: 600;
=======
>>>>>>> 53a7e44195d2b8194b9b5e13c655f67da0bc4038
        `;
        
        document.body.appendChild(notification);
        
<<<<<<< HEAD
=======
        // Remove after 3 seconds
>>>>>>> 53a7e44195d2b8194b9b5e13c655f67da0bc4038
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 3000);
    }

    updateCurrentYear() {
        const yearElement = document.getElementById('currentYear');
        if (yearElement) {
            yearElement.textContent = new Date().getFullYear();
        }
    }

<<<<<<< HEAD
=======
    // GitHub integration helper methods
>>>>>>> 53a7e44195d2b8194b9b5e13c655f67da0bc4038
    updateStats(repos) {
        if (!repos || !repos.length) return;
        
        const totalRepos = repos.length;
        const totalStars = repos.reduce((sum, repo) => sum + repo.stargazers_count, 0);
        const totalForks = repos.reduce((sum, repo) => sum + repo.forks_count, 0);
        
<<<<<<< HEAD
=======
        // Update UI elements
>>>>>>> 53a7e44195d2b8194b9b5e13c655f67da0bc4038
        const updateElement = (id, value) => {
            const el = document.getElementById(id);
            if (el) el.textContent = value;
        };
        
        updateElement('totalRepos', totalRepos);
        updateElement('totalStars', totalStars);
        updateElement('totalForks', totalForks);
        updateElement('repoCount', totalRepos);
        updateElement('footerRepos', totalRepos);
        updateElement('footerStars', totalStars);
        
<<<<<<< HEAD
=======
        // Update latest project
>>>>>>> 53a7e44195d2b8194b9b5e13c655f67da0bc4038
        if (repos.length > 0) {
            const latestRepo = repos[0];
            updateElement('latestProject', latestRepo.name);
            const latestLink = document.getElementById('latestProjectLink');
            if (latestLink) {
                latestLink.href = latestRepo.html_url;
            }
        }
    }

    renderProjects(repos) {
        const container = document.getElementById('projectsGrid');
        if (!container) return;
        
<<<<<<< HEAD
=======
        // Clear loading state
>>>>>>> 53a7e44195d2b8194b9b5e13c655f67da0bc4038
        const loading = container.querySelector('.loading');
        if (loading) {
            loading.style.display = 'none';
        }
        
        if (!repos || !repos.length) {
            container.innerHTML = '<div class="no-projects">No projects found</div>';
            return;
        }
        
<<<<<<< HEAD
        container.innerHTML = '';
        
=======
        // Clear container
        container.innerHTML = '';
        
        // Render each project
>>>>>>> 53a7e44195d2b8194b9b5e13c655f67da0bc4038
        repos.forEach(repo => {
            const project = document.createElement('div');
            project.className = 'project-card';
            project.innerHTML = `
                <h3><i class="fas fa-code-branch"></i> ${repo.name}</h3>
                <p>${repo.description || 'No description available'}</p>
                <div class="project-meta">
                    <span><i class="fas fa-code"></i> ${repo.language || 'Various'}</span>
                    <span><i class="fas fa-star"></i> ${repo.stargazers_count}</span>
                    <span><i class="fas fa-code-branch"></i> ${repo.forks_count}</span>
                </div>
                <div class="tech-tags">
                    <span class="tech-tag">${repo.language || 'Other'}</span>
                    ${repo.topics && repo.topics.length > 0 ? 
                        repo.topics.slice(0, 3).map(topic => `<span class="tech-tag">${topic}</span>`).join('') : 
                        ''}
                </div>
                <a href="${repo.html_url}" class="project-link" target="_blank">
                    View on GitHub <i class="fas fa-external-link-alt"></i>
                </a>
            `;
            container.appendChild(project);
        });
    }

    renderSkills(languages) {
        const container = document.getElementById('skillsGrid');
        const footerContainer = document.getElementById('footerTechTags');
        
        if (!container || !languages) return;
        
<<<<<<< HEAD
=======
        // Clear containers
>>>>>>> 53a7e44195d2b8194b9b5e13c655f67da0bc4038
        container.innerHTML = '';
        if (footerContainer) {
            footerContainer.innerHTML = '';
        }
        
<<<<<<< HEAD
=======
        // Get top languages
>>>>>>> 53a7e44195d2b8194b9b5e13c655f67da0bc4038
        const topLanguages = Object.entries(languages)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 8);
        
<<<<<<< HEAD
=======
        // Render skills grid
>>>>>>> 53a7e44195d2b8194b9b5e13c655f67da0bc4038
        topLanguages.forEach(([lang, count]) => {
            const skill = document.createElement('div');
            skill.className = 'skill-item';
            skill.innerHTML = `
                <div class="skill-icon">
                    <i class="fas fa-code"></i>
                </div>
                <div class="skill-name">${lang}</div>
                <div class="skill-level">${count} repos</div>
            `;
            container.appendChild(skill);
            
<<<<<<< HEAD
=======
            // Add to footer
>>>>>>> 53a7e44195d2b8194b9b5e13c655f67da0bc4038
            if (footerContainer) {
                const tag = document.createElement('span');
                tag.textContent = lang;
                footerContainer.appendChild(tag);
            }
        });
    }

    renderLanguageChart(languages) {
        const ctx = document.getElementById('languageChart');
        if (!ctx || !languages) return;
        
<<<<<<< HEAD
=======
        // Get top 5 languages
>>>>>>> 53a7e44195d2b8194b9b5e13c655f67da0bc4038
        const topLanguages = Object.entries(languages)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 5);
        
        if (topLanguages.length === 0) return;
        
        const labels = topLanguages.map(([lang]) => lang);
        const data = topLanguages.map(([, count]) => count);
        const colors = ['#3ddc84', '#00d9ff', '#b967ff', '#ffbd2e', '#ff5f56'];
        
<<<<<<< HEAD
=======
        // Destroy existing chart if it exists
>>>>>>> 53a7e44195d2b8194b9b5e13c655f67da0bc4038
        if (this.languageChart) {
            this.languageChart.destroy();
        }
        
        this.languageChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: labels,
                datasets: [{
                    data: data,
                    backgroundColor: colors,
                    borderColor: 'transparent',
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'right',
                        labels: {
                            color: 'var(--light)',
                            font: {
                                family: "'Inter', sans-serif"
                            }
                        }
                    }
                }
            }
        });
    }
}

<<<<<<< HEAD
=======
// Initialize app when DOM is loaded
>>>>>>> 53a7e44195d2b8194b9b5e13c655f67da0bc4038
document.addEventListener('DOMContentLoaded', () => {
    window.app = new App();
});

<<<<<<< HEAD
=======
// Add animation keyframes
>>>>>>> 53a7e44195d2b8194b9b5e13c655f67da0bc4038
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .blinking-cursor {
        display: inline-block;
        width: 8px;
        height: 18px;
        background-color: var(--primary);
        margin-left: 5px;
        animation: blink 1s infinite;
        vertical-align: middle;
    }
    
    @keyframes blink {
        0%, 50% { opacity: 1; }
        51%, 100% { opacity: 0; }
    }
`;
document.head.appendChild(style);

<<<<<<< HEAD
=======
// Search functionality
>>>>>>> 53a7e44195d2b8194b9b5e13c655f67da0bc4038
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const sortSelect = document.getElementById('sortSelect');
    const refreshBtn = document.getElementById('refreshBtn');
    
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            if (window.github && window.app) {
                const filtered = window.github.searchProjects(query);
                window.app.renderProjects(filtered);
            }
        });
    }
    
    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            if (window.github && window.app) {
                const sorted = window.github.sortProjects(e.target.value);
                window.app.renderProjects(sorted);
            }
        });
    }
    
    if (refreshBtn) {
        refreshBtn.addEventListener('click', async () => {
            if (window.github && window.github.refreshData) {
                refreshBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Refreshing...';
                await window.github.refreshData();
                refreshBtn.innerHTML = '<i class="fas fa-sync-alt"></i> Refresh';
                
                if (window.app && window.app.showNotification) {
                    window.app.showNotification('Data refreshed successfully!');
                }
            }
        });
    }
<<<<<<< HEAD
});
=======
});
>>>>>>> 53a7e44195d2b8194b9b5e13c655f67da0bc4038
