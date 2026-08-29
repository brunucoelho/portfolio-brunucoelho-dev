# brunucoelho.dev — Portfólio

Site pessoal de **Bruno Coelho** — Analista de Dados em transição para Engenharia de Software (foco em Java e Spring Boot).

🔗 **Online:** [brunucoelho.dev](https://brunucoelho.dev)

![HTML](https://img.shields.io/badge/HTML5-e34f26?logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572b6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-f7df1e?logo=javascript&logoColor=black)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222?logo=github&logoColor=white)
[![Lint](https://github.com/brunucoelho/portfolio-brunucoelho-dev/actions/workflows/lint.yml/badge.svg)](https://github.com/brunucoelho/portfolio-brunucoelho-dev/actions/workflows/lint.yml)

---

## Sobre o projeto

Página única (single-page) construída com **HTML, CSS e JavaScript puro** — sem frameworks, sem build step. O objetivo é ser leve, rápida e fácil de hospedar via GitHub Pages.

### Funcionalidades

- **Bilíngue** (PT-BR / EN-US) com troca de idioma em tempo real via `js/i18n.js`
  (inclui `<html lang>` e o download do currículo, que trocam junto com o idioma)
- **Tema claro / escuro** com persistência em `localStorage`
- **Design responsivo** (desktop, tablet e mobile)
- **Filtro de projetos** por categoria (Java/Backend, Dados, Full-Stack)
- **Navegação ativa** conforme a rolagem e animações de *scroll reveal*
- **CTAs no hero**: "Ver Projetos", "Falar comigo" e "Baixar CV"
- **SEO**: Open Graph, Twitter Card, `sitemap.xml`, `robots.txt` e `canonical`
- Marca própria de domínio (`CNAME` → `brunucoelho.dev`)

---

## Estrutura

```text
portfolio-brunucoelho-dev/
├── index.html              # Todo o conteúdo e a marcação das seções
├── CNAME                   # Domínio customizado do GitHub Pages
├── robots.txt / sitemap.xml
├── package.json            # Apenas scripts de lint (o site em si não tem build)
├── .htmlhintrc / .stylelintrc.json
├── .github/workflows/
│   └── lint.yml            # CI: valida HTML (HTMLHint) e CSS (Stylelint)
├── assets/
│   ├── curriculo-bruno-coelho-pt.pdf   # CV (PT) — ⚠️ placeholder, ver assets/README.md
│   └── bruno-coelho-resume-en.pdf      # CV (EN) — ⚠️ placeholder
├── css/
│   ├── variables.css       # Design tokens: cores, tipografia, temas claro/escuro
│   ├── style.css           # Estilos de todas as seções
│   └── src/
│       └── photo1.png      # Foto de perfil
└── js/
    ├── i18n.js             # Dicionário PT/EN + lógica de troca de idioma
    └── main.js             # Tema, menu mobile, filtro de projetos, animações
```

### Seções da página

`Hero` · `Sobre` · `Skills` · `Projetos` · `Experiência` · `Formação` · `Contato`

---

## Rodando localmente

O site não tem build. Basta servir os arquivos estáticos:

```bash
python -m http.server 8000
# depois acesse http://localhost:8000
```

## Lint

O único uso de Node no projeto é a checagem de qualidade de HTML/CSS
(mesma que roda no CI a cada push/PR):

```bash
npm install
npm run lint
```

---

## Deploy

Hospedado no **GitHub Pages** a partir da branch `main` (raiz do repositório).
O arquivo `CNAME` aponta o domínio `brunucoelho.dev`; qualquer push na `main` publica automaticamente.

---

## Contato

- **LinkedIn:** [linkedin.com/in/brunucoelho](https://linkedin.com/in/brunucoelho)
- **GitHub:** [github.com/brunucoelho](https://github.com/brunucoelho)
- **E-mail:** bruno-coelho@hotmail.com
