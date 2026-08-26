# Plano: Página com "oi"

Substituir o placeholder da página inicial (`src/routes/index.tsx`) por uma página em branco simples contendo apenas o texto "oi".

## Alterações
- Reescrever `src/routes/index.tsx`: remover o placeholder e renderizar uma tela em branco (fundo `bg-background`) centralizada com o texto "oi".
- Adicionar `head()` próprio à rota `/` com título e descrição adequados (em vez de herdar o "Lovable App" genérico do `__root.tsx`).

## Detalhes técnicos
- Sem novos pacotes, sem backend, sem roteamento adicional.
- Usar as cores semânticas do design system (`bg-background`, `text-foreground`) para respeitar o tema.
