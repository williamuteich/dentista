# Sorriso Cachoeirinha Digital

Landing page moderna e responsiva para clínica odontológica em Cachoeirinha, RS.

## Sobre

Site profissional desenvolvido para atrair pacientes em Cachoeirinha para tratamentos odontológicos, com foco em:

- Clareamento dental
- Implantes dentários  
- Estética dental
- Aparelhos ortodônticos
- Limpeza e profilaxia

## Tecnologias

- React + TypeScript
- Vite
- Tailwind CSS
- Shadcn/ui
- Lucide React (ícones)

## Funcionalidades

✅ Design responsivo e moderno
✅ Otimização para SEO
✅ Integração com WhatsApp
✅ Animações suaves
✅ Banner de cookies LGPD
✅ Galeria de resultados
✅ Formulário de contato
✅ Localização com Google Maps

## Como executar localmente

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/sorriso-cachoeirinha-digital.git
cd sorriso-cachoeirinha-digital
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o projeto:
```bash
npm run dev
```

4. Acesse: http://localhost:8080

## Deploy no GitHub Pages

1. No GitHub, vá em Settings > Pages
2. Selecione "Deploy from a branch"
3. Escolha a branch "gh-pages"
4. Execute o deploy:

```bash
npm run build
npm run deploy
```

## Estrutura do Projeto

```
src/
├── components/          # Componentes React
│   ├── ui/             # Componentes base (shadcn)
│   ├── Header.tsx      # Cabeçalho com navegação
│   ├── HeroSection.tsx # Seção principal
│   └── ...
├── assets/             # Imagens e recursos
├── pages/              # Páginas
└── lib/                # Utilitários

```

## Personalização

Para personalizar o site para sua clínica:

1. **Informações da clínica**: Edite os dados em cada componente
2. **Cores**: Modifique as variáveis CSS em `src/index.css`
3. **Imagens**: Substitua as imagens em `src/assets/`
4. **WhatsApp**: Atualize o número em `WhatsAppButton.tsx`

## SEO

O site está otimizado com:
- Meta tags apropriadas
- Títulos hierárquicos (H1, H2, H3)
- Alt text em imagens
- URLs amigáveis
- Schema markup
- Open Graph tags

## Licença

Este projeto está sob licença MIT.