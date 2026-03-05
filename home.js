

    
    const defaultConfig = {
      // Informações Pessoais
      name: "Victor José de Souza Ledo",
      title: "Analista de Suporte e Desenvolvedor",
      bio: "Meu objetivo é desenvolver aplicações web proporcionando melhorias para o usuário final, seguindo os conceitos de boas práticas. Tenho um enorme prazer em ajudar as pessoas e aprender com elas. Sou proativo e estou sempre pronto para aprender e trabalhar com coisas novas, desafios e resolver problemas é o que me motiva. .",
      email: "victorsouza.ledo@gmail.com",
      phone: "+5561984595417",
      location: "Brasilia, Distrito Federal",
      
      // Redes Sociais
      github_username: "victorsouza2382",
      linkedin_url: "https://linkedin.com/in/victorsouza-developer",
      telegram_username: "victorsouzadeveloper",
      
    
      profile_photo_url: "./img/Victor.png",
      
      // Cores do tema
      primary_color: "#818cf8",
      secondary_color: "#c084fc",
      accent_color: "#f472b6",
      background_color: "#0f0f23",
      text_color: "#f3f4f6"
    };

    // Skills
    const skills = [
  { name: "Java", level: 50, icon: "☕", category: "Backend" },
  { name: "Angular", level: 45, icon: "🅰️", category: "Frontend" },
  { name: "JavaScript", level: 70, icon: "🟨", category: "Frontend" },
  { name: "React", level: 35, icon: "⚛️", category: "Frontend" },
  { name: "Node.js, React.js & React Native", level: 40, icon: "🟢", category: "Backend" },
  { name: "MySQL & Oracle", level: 80, icon: "🗄️", category: "Database" },
  { name: "Git", level: 85, icon: "🔧", category: "Tools" },
  { name: "HTML", level: 100, icon: "🌐", category: "Frontend" },
  { name: "CSS", level: 86, icon: "🎨", category: "Frontend" },
  { name: "PHP & Laravel", level: 70, icon: "🐘", category: "Backend" },
  { name: "Adobe Photoshop", level: 80, icon: "🖌️", category: "Frontend" },
  { name: "Telecomunicação", level: 60, icon: "📡", category: "Tools" },
  { name: "Fibra Óptica", level: 70, icon: "🔌", category: "Tools" }
 
];

    // Projetos 
    const projects = [
      {
        title: "Sistema de Controle Financeiro",
        description: "Sistema criado para o controle financeiro de casa.",
        thumbnail: "./img/VictoreThayna.png",
        technologies: ["HTML", "CSS", "Javascript"],
        liveUrl: "https://victorsouza2382.github.io/VictoreThayna",
        githubUrl: "https://github.com/Victorsouza2382/VictoreThayna"
      }
    ];

    // Experiências
const experiences = [ {
    title: "Analista Tecnico",
    company: "CLARO Brasil - World Telecomunicações",
    period: "2026 - Atual",
    description: "Identificação e resolução de problemas na rede, equipamento ou instalação",
    technologies: ["FibraOptica","CaboCoaxial","Equipamento 4k","Equipamento Wifi 5 e 6"]
  },
  {
    title: "Analista de Sistemas",
    company: "TRIX Tecnologia Inteligente",
    period: "2020 - 2025",
    description: "Identificação e resolução de bugs sistêmicos. Geração de relatórios via banco de dados Oracle SQL. Verificação de erros em XML e testes via SOAP e Postman. Atendimento às solicitações da equipe de suporte após identificação de pequenos bugs. Ajustes em relatórios via iReport. Correções em aplicações Java e JavaScript.",
    technologies: ["Java", "JavaScript", "Oracle SQL", "XML", "SOAP", "Postman", "iReport"]
  },
  {
    title: "Atendente de Suporte",
    company: "TRIX Tecnologia Inteligente",
    period: "2019 - 2020",
    description: "Suporte aos usuários do sistema. Verificação e correção de falhas em arquivos XML. Utilização de Linux para configuração de integradores. Consultas e correções em banco de dados SQL. Treinamentos via TeamViewer e AnyDesk. Utilização de sistema de chamados Help Desk.",
    technologies: ["Linux", "SQL", "XML", "TeamViewer", "AnyDesk", "Help Desk"]
  },
  {
    title: "Pós Graduação em Engenharia de Software",
    company: "PUC Minas",
    period: "2021 - 2023",
    description: "Formação voltada para arquitetura de software, engenharia de requisitos, qualidade de software e metodologias ágeis.",
    technologies: ["Engenharia de Software", "Arquitetura de Sistemas", "Metodologias Ágeis"]
  },  
  {
    title: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
    company: "Centro Universitário IESB",
    period: "2018 - 2020",
    description: "Formação focada em desenvolvimento de software, banco de dados, lógica de programação e engenharia de requisitos.",
    technologies: ["Java", "Banco de Dados", "Lógica de Programação"]
  },
  
];


    let config = { ...defaultConfig };

  
    function showToast(message, type = 'success') {
      const container = document.getElementById('toast-container');
      const toast = document.createElement('div');
      const bgColor = type === 'success' ? 'bg-green-500' : type === 'error' ? 'bg-red-500' : 'bg-indigo-500';
      toast.className = `toast ${bgColor} text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2`;
      toast.innerHTML = `
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          ${type === 'success' 
            ? '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>'
            : '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>'}
        </svg>
        <span>${message}</span>
      `;
      container.appendChild(toast);
      setTimeout(() => toast.remove(), 4000);
    }

    // Render Skills
    function renderSkills() {
      const container = document.getElementById('skills-container');
      container.innerHTML = skills.map((skill, index) => `
        <div class="glass rounded-xl p-5 sm:p-6 card-hover skill-item shine-effect" style="animation-delay: ${index * 0.1}s;">
          <div class="flex items-center gap-3 mb-4">
            <span class="text-2xl sm:text-3xl">${skill.icon}</span>
            <div>
              <h3 class="font-semibold text-white text-sm sm:text-base">${skill.name}</h3>
              <span class="text-xs text-gray-400">${skill.category}</span>
            </div>
          </div>
          <div class="h-2 bg-white/10 rounded-full overflow-hidden">
            <div class="skill-bar h-full rounded-full" style="width: 0%; animation: slideRight ${0.8 + skill.level / 100}s ease-out forwards;" data-target="${skill.level}"></div>
          </div>
          <span class="text-xs text-gray-400 mt-2 block">${skill.level}%</span>
        </div>
      `).join('');

      setTimeout(() => {
        container.querySelectorAll('.skill-bar').forEach(bar => {
          const target = parseInt(bar.getAttribute('data-target'));
          bar.style.width = target + '%';
        });
      }, 100);
    }

    // Render Projects
    function renderProjects() {
      const container = document.getElementById('projects-container');
      container.innerHTML = projects.map((project, index) => `
        <div class="project-card glass rounded-xl overflow-hidden card-hover project-item shine-effect" style="animation-delay: ${index * 0.15}s;">
          <div class="thumbnail-container">
            <img src="${project.thumbnail}" alt="${project.title}" loading="lazy" 
              onerror="this.style.background='linear-gradient(135deg, #818cf8, #c084fc)'; this.alt='Imagem não disponível'; this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22/>';">
          </div>
          <div class="p-4 sm:p-6">
            <h3 class="text-lg sm:text-xl font-bold text-white mb-2">${project.title}</h3>
            <p class="text-gray-400 text-xs sm:text-sm mb-4">${project.description}</p>
            <div class="flex flex-wrap gap-2 mb-4">
              ${project.technologies.map((tech, i) => `
                <span class="px-2 sm:px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-xs">${tech}</span>
              `).join('')}
            </div>
            <div class="flex gap-2">
              <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="flex-1 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg text-center text-xs sm:text-sm font-medium hover:opacity-90 transition-opacity">
                Demo
              </a>
              <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="px-3 py-2 glass rounded-lg hover:bg-white/10 transition-colors">
                <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      `).join('');
    }

    // Render Experience
    function renderExperience() {
      const container = document.getElementById('experience-container');
      container.innerHTML = experiences.map((exp, index) => `
        <div class="relative pl-8 sm:pl-12 md:pl-0 mb-8 sm:mb-12 experience-item" style="animation-delay: ${index * 0.2}s;">
          <div class="absolute left-0 md:left-1/2 top-0 w-6 h-6 sm:w-8 sm:h-8 -ml-3 sm:-ml-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
            <div class="w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full"></div>
          </div>
          <div class="glass rounded-xl p-4 sm:p-6 card-hover shine-effect ${index % 2 === 0 ? 'md:mr-1/2 md:text-right' : 'md:ml-1/2'}">
            <span class="text-indigo-400 text-xs mono font-medium">${exp.period}</span>
            <h3 class="text-lg sm:text-xl font-bold text-white mt-1">${exp.title}</h3>
            <p class="text-purple-400 font-medium text-sm sm:text-base">${exp.company}</p>
            <p class="text-gray-400 mt-2 sm:mt-3 text-sm">${exp.description}</p>
            <div class="flex flex-wrap gap-2 mt-3 ${index % 2 === 0 ? 'md:justify-end' : ''}">
              ${exp.technologies.map((tech) => `
                <span class="px-2 sm:px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs">${tech}</span>
              `).join('')}
            </div>
          </div>
        </div>
      `).join('');
    }

    // Fetch GitHub Stats com animação de contador
   async function fetchGitHubStats() {
  const username = "victorsouza2382"; 

  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    if (!response.ok) throw new Error('GitHub API error');

    const data = await response.json();

    const reposResponse = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=10&sort=updated`
    );

    if (!reposResponse.ok) throw new Error('Erro ao buscar repositórios');

    const repos = await reposResponse.json();
    const languageCounts = {};

    repos.forEach(repo => {
      if (repo.language) {
        languageCounts[repo.language] =
          (languageCounts[repo.language] || 0) + 1;
      }
    });

    const sortedLanguages = Object.entries(languageCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5);

    const total = sortedLanguages.length
      ? sortedLanguages.reduce((sum, [, count]) => sum + count, 0)
      : 1;

    const languageColors = {
      JavaScript: '#f7df1e',
      TypeScript: '#3178c6',
      Python: '#3776ab',
      Java: '#b07219',
      'C#': '#178600',
      PHP: '#4F5D95',
      Ruby: '#cc342d',
      Go: '#00ADD8',
      Rust: '#dea584',
      HTML: '#e34c26',
      CSS: '#563d7c',
      Vue: '#4fc08d',
      Swift: '#ffac45'
    };

    const languagesChart = document.getElementById('languages-chart');
    if (!languagesChart) return;

    languagesChart.innerHTML = sortedLanguages.map(([lang, count]) => {
      const percentage = Math.round((count / total) * 100);
      const color = languageColors[lang] || '#818cf8';

      return `
        <div>
          <div class="flex justify-between mb-1">
            <span class="text-gray-300 text-sm">${lang}</span>
            <span class="text-gray-400 text-xs">${percentage}%</span>
          </div>
          <div class="h-2 bg-white/10 rounded-full overflow-hidden">
            <div class="h-full rounded-full transition-all duration-1000"
                 style="width: ${percentage}%; background-color: ${color};">
            </div>
          </div>
        </div>
      `;
    }).join('');

  } catch (error) {
    console.error('Erro ao buscar dados do GitHub:', error);
  }
}

    // Update UI with config
    function updateUI() {
      
      // Hero section
      document.getElementById('nav-name').textContent = config.name;
      document.getElementById('hero-name').textContent = config.name;
      document.getElementById('hero-title').textContent = config.title;
      document.getElementById('hero-bio').textContent = config.bio;
      
      // Social links
    document.getElementById('social-github').href =
  `https://github.com/victorsouza2382`;

document.getElementById('social-linkedin').href =
  config.linkedin_url;

document.getElementById('social-whatsapp').href =
  `https://wa.me/5561984595417`;

document.getElementById('social-telegram').href =
  `https://t.me/victorsouzadeveloper`;
      
      // About section
     // document.getElementById('about-bio').textContent = config.bio;
      document.getElementById('about-location').textContent = config.location;
      document.getElementById('about-email').textContent = config.email;
      
      // Footer
      document.getElementById('footer-year').textContent = new Date().getFullYear();
      document.getElementById('footer-name').textContent = config.name;
      
      // Profile photo
      if (config.profile_photo_url) {
        const photoContainer = document.querySelector('#profile-photo > div');
        photoContainer.innerHTML = `<img src="${config.profile_photo_url}" alt="${config.name}" class="w-full h-full object-cover" loading="lazy" onerror="this.parentElement.innerHTML='<svg class=\\'w-32 h-32 text-gray-600\\' fill=\\'currentColor\\' viewBox=\\'0 0 24 24\\'><path d=\\'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z\\'/></svg>';">`;
      }
    }

    // Contact form handler
    function setupContactForm() {
  const form = document.getElementById('contact-form');
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('form-name').value;
    const email = document.getElementById('form-email').value;
    const subject = document.getElementById('form-subject').value;
    const message = document.getElementById('form-message').value;
    
    // Create mailto link
    const mailtoLink = `mailto:victorsouza.ledo@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Nome: ${name}\nEmail: ${email}\n\n${message}`)}`;
    
    window.open(mailtoLink, '_blank');
    
    showToast('Abrindo seu cliente de email...', 'success');
    form.reset();
  });
}

    // Mobile menu toggle
    function setupMobileMenu() {
      const btn = document.getElementById('mobile-menu-btn');
      const menu = document.getElementById('mobile-menu');
      
      btn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
      });
      
      // Close menu when clicking on a link
      menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          menu.classList.add('hidden');
        });
      });
    }

    // Scroll animations com parallax
    function setupScrollAnimations() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
            
            // Animar elementos filhos com stagger
            const children = entry.target.querySelectorAll('[class*="item"]');
            children.forEach((child, childIndex) => {
              child.style.animation = `fadeInUp 0.6s ease-out ${childIndex * 0.1}s forwards`;
            });
          }
        });
      }, { threshold: 0.1 });
      
      document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
      });

      // Parallax effect on mouse move
      document.addEventListener('mousemove', (e) => {
        const parallaxElements = document.querySelectorAll('.parallax');
        parallaxElements.forEach(element => {
          const speed = element.dataset.speed || 5;
          const x = (window.innerWidth - e.clientX * speed) / 100;
          const y = (window.innerHeight - e.clientY * speed) / 100;
          element.style.transform = `translateX(${x}px) translateY(${y}px)`;
        });
      });
    }

    // Smooth scroll for navigation
    function setupSmoothScroll() {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        });
      });
    }

    // Efeito de digitação para títulos
    function typeWriter(element, text, speed = 50) {
      element.textContent = '';
      let i = 0;
      const type = () => {
        if (i < text.length) {
          element.textContent += text.charAt(i);
          i++;
          setTimeout(type, speed);
        }
      };
      type();
    }

    // Adicionar efeitos de interatividade ao scroll
    function setupScrollEffects() {
      let lastScrollY = window.scrollY;
      window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const scrollDelta = scrollY - lastScrollY;
        
        // Efeito de fade na navbar quando scrollando
        const navbar = document.querySelector('nav');
        if (scrollY > 50) {
          navbar.style.backdropFilter = 'blur(15px)';
          navbar.style.backgroundColor = 'rgba(15, 15, 35, 0.5)';
        } else {
          navbar.style.backdropFilter = 'blur(10px)';
          navbar.style.backgroundColor = 'transparent';
        }
        
        lastScrollY = scrollY;
      });
    }

    // Initialize Element SDK
    async function initElementSDK() {
      if (window.elementSdk) {
        await window.elementSdk.init({
          defaultConfig,
          onConfigChange: async (newConfig) => {
            config = { ...defaultConfig, ...newConfig };
            updateUI();
            fetchGitHubStats();
          },
          mapToCapabilities: (cfg) => ({
            recolorables: [
              {
                get: () => cfg.primary_color || defaultConfig.primary_color,
                set: (value) => { cfg.primary_color = value; window.elementSdk.setConfig({ primary_color: value }); }
              },
              {
                get: () => cfg.secondary_color || defaultConfig.secondary_color,
                set: (value) => { cfg.secondary_color = value; window.elementSdk.setConfig({ secondary_color: value }); }
              },
              {
                get: () => cfg.accent_color || defaultConfig.accent_color,
                set: (value) => { cfg.accent_color = value; window.elementSdk.setConfig({ accent_color: value }); }
              },
              {
                get: () => cfg.background_color || defaultConfig.background_color,
                set: (value) => { cfg.background_color = value; window.elementSdk.setConfig({ background_color: value }); }
              },
              {
                get: () => cfg.text_color || defaultConfig.text_color,
                set: (value) => { cfg.text_color = value; window.elementSdk.setConfig({ text_color: value }); }
              }
            ],
            borderables: [],
            fontEditable: undefined,
            fontSizeable: undefined
          }),
          mapToEditPanelValues: (cfg) => new Map([
            ["name", cfg.name || defaultConfig.name],
            ["title", cfg.title || defaultConfig.title],
            ["bio", cfg.bio || defaultConfig.bio],
            ["email", cfg.email || defaultConfig.email],
            ["phone", cfg.phone || defaultConfig.phone],
            ["location", cfg.location || defaultConfig.location],
            ["github_username", cfg.github_username || defaultConfig.github_username],
            ["linkedin_url", cfg.linkedin_url || defaultConfig.linkedin_url],
            ["telegram_username", cfg.telegram_username || defaultConfig.telegram_username]
          ])
        });
      }
    }

    // Initialize everything
    async function init() {
      await initElementSDK();
      updateUI();
      renderSkills();
      renderProjects();
      renderExperience();
      fetchGitHubStats();
      setupContactForm();
      setupMobileMenu();
      setupScrollAnimations();
      setupScrollEffects();
      setupSmoothScroll();
      
      // Adicionar animação de digitação ao título
     setTimeout(() => typeWriter(document.getElementById('hero-title'), config.title), 500);
    }
    document.addEventListener("DOMContentLoaded", () => {
  fetchGitHubStats();
});

document.addEventListener("DOMContentLoaded", () => {
  updateUI();
  renderSkills();
  renderProjects();
  renderExperience();
  fetchGitHubStats();
  setupContactForm();
});
const username = "victorsouza2382";

async function fetchGitHubStats() {

  try {

    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();

    animateNumber("github-repos", data.public_repos);
    animateNumber("github-followers", data.followers);
    animateNumber("github-following", data.following);
    animateNumber("github-gists", data.public_gists);

    fetchLanguages();

  } catch (error) {

    console.error("Erro ao buscar dados do GitHub", error);

  }

}

function animateNumber(id, finalNumber) {

  let element = document.getElementById(id);
  let start = 0;
  let duration = 1500;

  let increment = finalNumber / (duration / 16);

  function updateNumber() {

    start += increment;

    if (start >= finalNumber) {
      element.textContent = finalNumber;
    } else {
      element.textContent = Math.floor(start);
      requestAnimationFrame(updateNumber);
    }

  }

  updateNumber();

}

async function fetchLanguages() {

  const response = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);
  const repos = await response.json();

  const languages = {};

  repos.forEach(repo => {

    if (repo.language) {

      languages[repo.language] = (languages[repo.language] || 0) + 1;

    }

  });

  const sorted = Object.entries(languages)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6);

  renderLanguages(sorted);

}

function renderLanguages(languages) {

  const container = document.getElementById("languages-chart");

  container.innerHTML = "";

  languages.forEach(([lang, count]) => {

    const percentage = count * 10;

    const item = `
      <div>
        <div class="flex justify-between text-sm mb-1">
          <span>${lang}</span>
          <span>${count}</span>
        </div>
        <div class="w-full bg-gray-700 rounded-full h-2">
          <div class="bg-purple-500 h-2 rounded-full" style="width:${percentage}%"></div>
        </div>
      </div>
    `;

    container.innerHTML += item;

  });

}

document.addEventListener("DOMContentLoaded", () => {
  fetchGitHubStats();
});
    init();