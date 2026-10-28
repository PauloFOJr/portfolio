# 💼 Portfólio · Paulo Júnior

Portfólio de **Paulo Júnior**, desenvolvedor Java e Flutter de Cachoeirinha (RS). Página única e estática (HTML, CSS e JavaScript puros), sem build e sem dependências, publicada com GitHub Pages.

🔗 **Ver o site:** https://paulofojr.github.io

## 📖 Sobre o projeto

A página apresenta quatro projetos reais, do backend em produção ao app na loja, junto com a stack, uma seção sobre mim e os canais de contato.

| Projeto | O que é | Stack |
|---|---|---|
| **ProfAdm** | Sistema em produção para professores particulares gerenciarem alunos, contratos, horas-aula e cobranças. | Java 21, Spring Boot, PostgreSQL, Asaas |
| **PigmentaApp** | App Android para pintores criarem orçamentos em PDF e enviarem por WhatsApp. | Flutter, Dart, Firebase |
| **Teacher Patrícia** | Site de uma professora de inglês online (Business & Tech English). | HTML, CSS, JavaScript |
| **Mulheres Protegidas** | Site de combate à violência doméstica, feito com a Guarda Municipal de Cachoeirinha/RS. | HTML, CSS, JavaScript |

## ✨ Características

- Abre sempre no **tema escuro**. O botão do menu alterna para o claro durante a visita, sem salvar a escolha.
- Cards clicáveis, com links para o site no ar, a loja de apps ou o repositório de cada projeto.
- Layout responsivo, testado para desktop e celular.
- Acessibilidade: link para pular ao conteúdo, foco visível no teclado, texto alternativo nas imagens e respeito a `prefers-reduced-motion`.
- Sem frameworks, sem bibliotecas e sem etapa de build.

## 🗂 Estrutura

```
.
├── index.html            estrutura e conteúdo
├── css/
│   └── style.css         estilos, temas e cores de cada projeto
├── js/
│   └── main.js           botão de tema e ano do rodapé
└── assets/               imagens de showcase (.webp, 1120×560)
    ├── profadm.webp
    ├── pigmentaapp.webp
    ├── teacher-patricia.webp
    └── mulheres-protegidas.webp
```

## 🛠 Tecnologias

- HTML5, CSS3 (variáveis CSS, Grid e Flexbox) e JavaScript puro
- Fontes **Space Grotesk** e **JetBrains Mono**, via Google Fonts
- Hospedagem estática no **GitHub Pages**

## ▶️ Como rodar localmente

Abrir o `index.html` direto no navegador já funciona. Para testar de forma mais fiel, use um servidor local dentro da pasta do projeto:

```bash
npx serve
```

Depois acesse o endereço mostrado (geralmente `http://localhost:3000`).

## 🎨 Como personalizar

**Cores e temas.** Todas as cores ficam como variáveis no topo do `css/style.css`. O tema escuro está em `:root` e o claro em `:root[data-theme="light"]`. Cada projeto tem a sua cor de destaque (`--c-prof`, `--c-pig`, `--c-tp` e `--c-mp`).

**Tema inicial.** O tema padrão é definido no atributo `data-theme="dark"` da tag `<html>` no `index.html`. O `js/main.js` só alterna o valor, sem salvar nada.

**Adicionar um projeto.** Copie um bloco `<article class="card ...">` dentro da seção de projetos no `index.html`, troque textos e links, coloque a imagem em `assets/` e crie uma classe de cor (por exemplo `.novo{--tone:...}`) no CSS.

**Imagens.** Use `.webp` com proporção 2:1 (1120×560 px), nomes em minúsculas e sem acentos. Defina sempre `width`, `height` e `alt`.

## 🚀 Publicação

1. Crie o repositório `PauloFOJr.github.io`.
2. Envie `index.html`, `css/`, `js/` e `assets/` para a raiz.
3. Em *Settings → Pages*, escolha *Deploy from a branch*, branch `main` e pasta `/ (root)`.

O site fica disponível em `https://paulofojr.github.io`. Em outro tipo de hospedagem estática (Netlify, Vercel), basta enviar a pasta mantendo a estrutura.

## 👤 Autor

**Paulo Júnior** · desenvolvedor Java e Flutter

[![GitHub](https://img.shields.io/badge/GitHub-PauloFOJr-181717?style=flat-square&logo=github)](https://github.com/PauloFOJr)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-paulofojunior-0077B5?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/paulofojunior)
