/* i18n.js — PT-BR and EN-US translations */

const translations = {
  pt: {
    "nav.about": "Sobre",
    "nav.skills": "Skills",
    "nav.projects": "Projetos",
    "nav.experience": "Experiência",
    "nav.contact": "Contato",

    "hero.available": "Disponível para novas oportunidades",
    "hero.roleData": "Analista de Dados",
    "hero.roleEng": "Engenheiro de Software",
    "hero.tagline":
      "5+ anos construindo soluções com dados.<br/>Hoje, construindo os sistemas que os sustentam.",
    "hero.cta.projects": "Ver Projetos",
    "hero.cta.contact": "Contato",
    "hero.stack": "Stack atual",

    "about.title": "Sobre mim",
    "about.lead": "Técnico por natureza, engenheiro por escolha.",
    "about.p1":
      "Comecei minha carreira mergulhado em dados — construindo pipelines, modelando bancos, transformando números em decisões de negócio. Ao longo de mais de 5 anos, aprendi que entender profundamente os dados exige também entender os sistemas que os produzem e consomem.",
    "about.p2":
      "Essa percepção me levou a uma transição intencional para a Engenharia de Software. Não estou começando do zero — estou evoluindo. Trago comigo maturidade técnica, capacidade analítica e a rara habilidade de enxergar o problema antes de escrever a solução.",
    "about.p3":
      "Hoje, com foco em Java e Spring Boot, construo APIs, sistemas e serviços com a mesma disciplina que sempre apliquei à análise de dados: clareza, performance e impacto real.",
    "about.stat1": "anos em dados",
    "about.stat2": "empresas",
    "about.stat3": "graduações",
    "about.stat4": "queries SQL",
    "about.from": "Dados",
    "about.to": "Engenharia",

    "skills.title": "Skills",
    "skills.eng.tag": "Foco principal",
    "skills.eng.title": "Engenharia de Software",
    "skills.data.tag": "Background sólido",
    "skills.data.title": "Dados & Analytics",
    "skills.bridge":
      "Diferencial único: entendo profundamente os dois lados — sei construir a API e saber exatamente quais dados ela precisa expor e por quê.",

    "projects.title": "Projetos",
    "projects.filter.all": "Todos",
    "projects.filter.eng": "Java / Backend",
    "projects.filter.data": "Dados",
    "projects.filter.bridge": "Dados + Eng.",
    "projects.type.java": "Java · Backend",
    "projects.type.data": "Dados · Analytics",
    "projects.type.bridge": "Dados + Engenharia",
    "projects.featured": "Destaque",
    "projects.demo": "Demo ↗",
    "projects.p1.title": "CRUD com JDBC Puro",
    "projects.p1.desc":
      "Aplicação de console em Java para estudo aprofundado da API JDBC sem uso de ORM: conexão com MySQL via Docker, CRUD completo de duas entidades relacionadas (Producer/Anime) com PreparedStatement, além de exploração de RowSet, transações, CallableStatement e metadados de banco.",
    "projects.p2.title": "Data Analytics API",
    "projects.p2.desc":
      "Pipeline de dados em Python processando dados de vendas + API Java expondo os resultados analíticos em tempo real. Une os dois mundos em uma solução end-to-end.",
    "projects.p3.title": "Sistema de Agendamentos",
    "projects.p3.desc":
      "Aplicação com regras de negócio complexas, validações customizadas, testes unitários com JUnit 5 e cobertura de código. Foco em clean code e arquitetura testável.",
    "projects.p4.title": "Pipeline de Dados com Airflow",
    "projects.p4.desc":
      "Pipeline automatizado processando +2M registros/dia, com orquestração via Airflow, transformações dbt e dashboards no Power BI. Redução de 60% no tempo de atualização.",

    "exp.title": "Experiência",
    "exp.present": "Presente",
    "exp.e1.role": "Analista de Dados Sênior",
    "exp.e1.b1":
      "Liderança e gerenciamento de projetos analíticos internos com métodos ágeis, garantindo entregas de alto valor e sinergia entre times.",
    "exp.e1.b2":
      "Desenvolvimento de dashboards dinâmicos e relatórios estratégicos para a alta gestão, traduzindo dados complexos em insights acionáveis.",
    "exp.e1.b3":
      "Diagnóstico e otimização de fluxos de trabalho via Matriz RACI, SIPOC e mapeamento de processos, elevando a maturidade de dados das áreas.",
    "exp.e1.b4":
      "Estruturação de POPs, Normas e documentação de indicadores, assegurando confiabilidade e consistência das métricas organizacionais.",
    "exp.e2.role": "Analista de Dados Pleno",
    "exp.e2.b1":
      "Desenvolvimento e implementação de bancos de dados, fluxos de coleta e estratégias de integração de fontes primárias e secundárias.",
    "exp.e2.b2":
      "Interpretação de dados via métodos estatísticos, gerando relatórios de progresso e análises preditivas para suporte à decisão.",
    "exp.e2.b3":
      "Domínio na extração e manutenção de dados no TOTVS RM, garantindo integridade dos dados de negócio em sistemas legados.",
    "exp.e3.role": "Estagiário de Desenvolvimento de Software",
    "exp.e3.b1":
      "Criação de APIs RESTful robustas e desenvolvimento de sistemas alinhados aos objetivos de negócio, com foco em código testável e escalável.",
    "exp.e3.b2":
      "Participação ativa em times ágeis (Scrum), colaborando em Planning, Daily e Review com entregas preditivas e alinhamento com stakeholders.",
    "exp.e3.b3":
      "Automação da Governança de EHS via Power BI, Power Apps, Infield, Forms e SharePoint, reduzindo trabalho operacional de diversas áreas.",
    "exp.e4.role": "Analista de Engenharia",
    "exp.e4.b1":
      "Desenvolvimento e manutenção de dashboards de controle e automatização de processos manuais com Power Query.",
    "exp.e4.b2":
      "Monitoramento de escopo, controle documental e apontamento de não conformidades, mitigando retrabalhos e custos extras.",
    "exp.e4.b3":
      "Elaboração de orçamentos complexos e levantamento de quantitativos para planejamento estratégico do portfólio de projetos.",

    "edu.title": "Formação",
    "edu.ongoing": "Em andamento",
    "edu.done": "Concluído",
    "edu.e1.title": "MBA em Engenharia de Software",
    "edu.e1.year": "Conclusão prevista: 2027",
    "edu.e2.title": "Graduação em Engenharia Civil",
    "edu.e3.title": "Graduação em Ciência e Tecnologia",

    "contact.title": "Contato",
    "contact.lead": "Vamos conversar?",
    "contact.desc":
      "Estou aberto a conversas sobre vagas de Engenharia de Software (foco Java) e oportunidades na área de dados. Se quiser trocar uma ideia, basta entrar em contato.",

    "footer.copy": "Feito por @brunucoelho · 2026",
  },

  en: {
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.experience": "Experience",
    "nav.contact": "Contact",

    "hero.available": "Open to new opportunities",
    "hero.roleData": "Data Analyst",
    "hero.roleEng": "Software Engineer",
    "hero.tagline":
      "5+ years building data solutions.<br/>Now, building the systems that sustain them.",
    "hero.cta.projects": "View Projects",
    "hero.cta.contact": "Contact",
    "hero.stack": "Current stack",

    "about.title": "About",
    "about.lead": "Technical by nature, engineer by choice.",
    "about.p1":
      "I started my career deep in data — building pipelines, modeling databases, turning numbers into business decisions. Over more than 5 years, I learned that truly understanding data also requires understanding the systems that produce and consume it.",
    "about.p2":
      "That insight led me to an intentional transition into Software Engineering. I'm not starting from scratch — I'm evolving. I bring with me technical maturity, analytical capability, and the rare ability to understand the problem before writing the solution.",
    "about.p3":
      "Today, focused on Java and Spring Boot, I build APIs, systems, and services with the same discipline I've always applied to data analysis: clarity, performance, and real impact.",
    "about.stat1": "years in data",
    "about.stat2": "companies",
    "about.stat3": "degrees",
    "about.stat4": "SQL queries",
    "about.from": "Data",
    "about.to": "Engineering",

    "skills.title": "Skills",
    "skills.eng.tag": "Main focus",
    "skills.eng.title": "Software Engineering",
    "skills.data.tag": "Strong background",
    "skills.data.title": "Data & Analytics",
    "skills.bridge":
      "Unique advantage: I understand both sides deeply — I can build the API and know exactly what data it needs to expose and why.",

    "projects.title": "Projects",
    "projects.filter.all": "All",
    "projects.filter.eng": "Java / Backend",
    "projects.filter.data": "Data",
    "projects.filter.bridge": "Data + Eng.",
    "projects.type.java": "Java · Backend",
    "projects.type.data": "Data · Analytics",
    "projects.type.bridge": "Data + Engineering",
    "projects.featured": "Featured",
    "projects.demo": "Demo ↗",
    "projects.p1.title": "Pure JDBC CRUD",
    "projects.p1.desc":
      "Java console application for an in-depth study of the JDBC API without using an ORM: MySQL connection via Docker, complete CRUD operations for two related entities (Producer/Anime) using PreparedStatement, as well as exploration of RowSet, transactions, CallableStatement, and database metadata.",
    "projects.p2.title": "Data Analytics API",
    "projects.p2.desc":
      "Python data pipeline processing sales data + Java API exposing analytical results in real-time. Bridges both worlds in an end-to-end solution.",
    "projects.p3.title": "Scheduling System",
    "projects.p3.desc":
      "Application with complex business rules, custom validations, unit tests with JUnit 5, and code coverage. Focus on clean code and testable architecture.",
    "projects.p4.title": "Data Pipeline with Airflow",
    "projects.p4.desc":
      "Automated pipeline processing 2M+ records/day, with Airflow orchestration, dbt transformations, and Power BI dashboards. 60% reduction in update time.",

    "exp.title": "Experience",
    "exp.present": "Present",
    "exp.e1.role": "Senior Data Analyst",
    "exp.e1.b1":
      "Led and managed internal analytics projects using agile methods, ensuring high-value deliveries and team synergy.",
    "exp.e1.b2":
      "Built dynamic dashboards and strategic reports for senior management, translating complex data into actionable insights.",
    "exp.e1.b3":
      "Diagnosed and optimized workflows using RACI Matrix, SIPOC, and process mapping, raising data maturity across business units.",
    "exp.e1.b4":
      "Structured SOPs, Standards, and indicator documentation, ensuring reliability and consistency of organizational metrics.",
    "exp.e2.role": "Mid-level Data Analyst",
    "exp.e2.b1":
      "Developed and implemented databases, data collection flows, and integration strategies for primary and secondary sources.",
    "exp.e2.b2":
      "Interpreted data through statistical methods, generating progress reports and predictive/descriptive analyses for decision support.",
    "exp.e2.b3":
      "Expertise in extracting and maintaining data from TOTVS RM, ensuring data integrity for business processes in legacy systems.",
    "exp.e3.role": "Software Development Intern",
    "exp.e3.b1":
      "Built robust RESTful APIs and business-aligned systems focused on testable, scalable, high-quality code.",
    "exp.e3.b2":
      "Active participation in agile teams (Scrum), collaborating in Planning, Daily, and Review ceremonies with predictable deliveries.",
    "exp.e3.b3":
      "EHS Governance automation via Power BI, Power Apps, Infield, Forms, and SharePoint, reducing manual work across multiple areas.",
    "exp.e4.role": "Engineering Analyst",
    "exp.e4.b1":
      "Developed and maintained control dashboards and automated manual processes using Power Query.",
    "exp.e4.b2":
      "Monitored scope, controlled document distribution, and flagged non-conformities, mitigating rework and extra costs.",
    "exp.e4.b3":
      "Prepared complex budgets and analytical quantity surveys to support strategic project portfolio planning.",

    "edu.title": "Education",
    "edu.ongoing": "In progress",
    "edu.done": "Completed",
    "edu.e1.title": "MBA in Software Engineering",
    "edu.e1.year": "Expected completion: 2027",
    "edu.e2.title": "B.S. in Civil Engineering",
    "edu.e3.title": "B.S. in Science and Technology",

    "contact.title": "Contact",
    "contact.lead": "Let's talk?",
    "contact.desc":
      "I'm open to conversations about Software Engineering positions (Java-focused) and data opportunities. If you'd like to connect, just reach out.",

    "footer.copy": "Feito por @brunucoelho · 2026",
  },
};

const flagImages = {
  pt: {
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAcUlEQVR4nGNgoBSsCg1lpgQz+FVt/Y8LH3d1/YcXOzv/BxsAAt3bP6DQYPF///BiuAHdaJpBNEj8+4QJePEgc0HXtvcoNEku8MeBiXLBcWdngjbhdcFxZ2eCNtHWBcecnP4ec3b+RxZ2cvpLcV4aeAAA7MBEQTcNKTsAAAAASUVORK5CYII=",
    alt: "Português",
  },
  en: {
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAABXUlEQVR4nMVSS0sCURj1dxbUIiNalBGRqIFaDpZYiBPkyDjM6KIEcUYhUzBaDFaD2qYwiAI39hDRCDSN6sS9kDr42Ljwwrl83HM53/keBsPUzxy/iUlgIBenCV0EtBDsKS8WRAtiV34k8yyMkhW2pAfcde8fwYDAYS4IU3Qba8d2PD7xQD1CUS7zWI86sHLiBJsLDhfYzbJYlKzwZTxovYYRisuY2Ulh1nUGQZbRfgsjeLEPo2SBO+vXC5gVN5bCNlzeHtGMQlyG8UCFK1EFo1RpTEQIV7gPYDliw0aM6QnYFQaNZ7Fruf7RRrPzg0rjG+rDJ3zpGnXyz7+/iHAmxgjMuzNgMzXEi02UKl9odX4hpO50Ao5+AfOIEoh9l1LFlliAelOkXL40pAROE7B3rm8iqZnYHmyidbCJnG6MTphGjHF13Bi5/kU69dJMsuanIDF5I9zQRZpolad+/gAioyZCxZuybgAAAABJRU5ErkJggg==",
    alt: "English",
  },
};

function applyTranslations(lang) {
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const text = translations[lang][key];
    if (!text) return;
    if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
      el.placeholder = text;
    } else {
      el.innerHTML = text;
    }
  });

  // Update html lang attribute
  document.documentElement.lang = lang === "pt" ? "pt-BR" : "en-US";

  // Update flag indicators
  const langLabel = document.getElementById("langLabel");
  const langOther = document.getElementById("langOther");
  if (langLabel) {
    const current = flagImages[lang];
    langLabel.src = current.src;
    langLabel.alt = current.alt;
    langLabel.classList.toggle("lang-active", true);
    langLabel.classList.toggle("lang-other", false);
  }
  if (langOther) {
    const opposite = flagImages[lang === "pt" ? "en" : "pt"];
    langOther.src = opposite.src;
    langOther.alt = opposite.alt;
    langOther.classList.toggle("lang-active", false);
    langOther.classList.toggle("lang-other", true);
  }
}

window.currentLang = "pt";

document.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("bc-lang") || "pt";
  window.currentLang = saved;
  applyTranslations(saved);

  const btn = document.getElementById("langToggle");
  if (!btn) return;
  btn.addEventListener("click", () => {
    window.currentLang = window.currentLang === "pt" ? "en" : "pt";
    localStorage.setItem("bc-lang", window.currentLang);
    applyTranslations(window.currentLang);
  });
});
