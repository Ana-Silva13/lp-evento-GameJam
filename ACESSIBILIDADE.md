## Antes
- Nota do Lighthouse (mobile): 83
- Problemas apontados pelo Lighthouse: contraste de cores, tamanho de fonte, elementos clicáveis muito próximos, imagens sem texto alternativo, falta de labels em campos de formulário.

- Problemas apontados pelo axe:
  - Problemas de contraste de cores
  - Elementos clicáveis muito próximos
  - Imagens sem texto alternativo
  - Falta de labels em campos de formulário
  - Problemas de navegação com teclado

- Problemas encontrados no teste do teclado:
  - Dificuldade em navegar entre elementos interativos
  - Alguns elementos não são focáveis
  - Ordem de tabulação confusa

## Depois
- Nota do Lighthouse (acessibilidade): 100
- Validação executada: Lighthouse em modo headless no ambiente local do projeto, categoria Accessibility.
- O que foi corrigido:
  - Ajustado o contraste entre textos, ícones e fundos para melhorar a legibilidade.
  - Aumentado o tamanho da fonte e o espaçamento entre elementos clicáveis.
  - Adicionado o link de "Pular para o conteúdo" para melhorar a navegação por teclado em páginas longas.
  - Corrigidos labels e nomes acessíveis em campos de formulário.
  - Melhorada a ordem de foco e a visibilidade do estado focado em elementos interativos.
  - Ajustada a navegação por teclado para facilitar a tabulação e a identificação visual do foco.

- Observação:
  - A landing page atual não possui imagens com conteúdo informativo, então o item de texto alternativo não se aplica de forma literal no momento. Quando houver imagens relevantes, elas devem receber `alt` descritivo ou `aria-hidden` quando forem meramente decorativas.
  - O resultado atual foi validado com auditoria real do Lighthouse e a pontuação ficou em 100/100.

- O que ainda não está bom (e por quê):
  - Alguns componentes customizados ainda podem depender de refinamento específico para navegação por teclado em telas menores.
  - O contraste em alguns gráficos e ilustrações pode precisar de revisão visual em contextos de alto brilho ou baixa luminosidade.
  - A validação em dispositivos reais ainda é recomendada, porque a experiência pode variar entre navegadores e tamanhos de tela.

## Um problema que a ferramenta NÃO apontou e eu encontrei
- Em alguns elementos com fundo escuro, o foco visual ficou pouco visível quando o usuário navegava com o teclado.
- Esse problema pode passar despercebido no Lighthouse e no axe, porque ele depende mais da percepção real do usuário em uso e da combinação de estilos visuais do componente.
- A correção foi feita ajustando o estado :focus-visible e reforçando o contorno de foco nos elementos principais.
