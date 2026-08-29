# assets/

Arquivos estáticos referenciados pelo site.

| Arquivo | Uso | Status |
| --- | --- | --- |
| `curriculo-bruno-coelho-pt.pdf` | Botão "Baixar CV" quando o site está em português | ⚠️ placeholder — substituir pelo CV real |
| `bruno-coelho-resume-en.pdf` | Botão "Download CV" quando o site está em inglês | ⚠️ placeholder — substituir pelo currículo real |
| `og-image.png` | Imagem de preview em redes sociais (Open Graph / Twitter Card) | ❌ ainda não criado — recomendado 1200×630 |

## O que fazer

1. Gere seu currículo em PDF (PT e EN) e salve **com exatamente estes nomes**, sobrescrevendo os placeholders.
2. Crie um banner `og-image.png` de 1200×630 e, no `index.html`, troque as tags
   `og:image` / `twitter:image` de `css/src/photo1.png` para `assets/og-image.png`.
