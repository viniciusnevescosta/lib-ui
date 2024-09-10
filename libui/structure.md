libui/
│
├── src/
│   ├── components/               # Componentes React isolados
│   │   ├── Button/               # Exemplo de componente (um diretório por componente)
│   │   │   ├── Button.tsx        # Implementação do componente
│   │   │   ├── Button.stories.tsx # Storybook para o componente
│   │   │   ├── Button.test.tsx   # Testes unitários do componente
│   │   │   └── index.ts          # Exporta o componente
│   │   ├── Input/
│   │   │   ├── Input.tsx         # Implementação do componente Input
│   │   │   ├── Input.stories.tsx # Storybook para o componente Input
│   │   │   └── index.ts          # Exporta o componente Input
│   │   └── ...                   # Outros componentes
│   │
│   ├── layouts/                  # Layouts compostos por vários componentes
│   │   ├── DashboardLayout/      # Exemplo de layout
│   │   │   ├── DashboardLayout.tsx # Implementação do layout
│   │   │   ├── DashboardLayout.stories.tsx # Storybook para o layout
│   │   │   └── index.ts          # Exporta o layout
│   │   └── ...                   # Outros layouts
│   │
│   ├── hooks/                    # Hooks customizados para facilitar o desenvolvimento
│   │   ├── useTheme.ts           # Exemplo de um hook para gerenciar o tema
│   │   └── ...                   # Outros hooks
│   │
│   ├── styles/                   # Configurações globais de estilo e utilitários do Tailwind
│   │   ├── tailwind.config.js    # Configurações do Tailwind
│   │   └── index.css             # Arquivo principal de estilo importando Tailwind
│   │
│   ├── utils/                    # Utilitários e helpers
│   │   ├── classNames.ts         # Exemplo de helper para manipular classes
│   │   └── ...                   # Outros helpers
│   │
│   ├── index.ts                  # Exportações públicas da biblioteca
│   └── types/                    # Tipos e interfaces TypeScript globais
│       ├── index.d.ts            # Definições de tipos para uso global
│       └── ...                   # Outros arquivos de tipos
│
├── .storybook/                   # Configurações do Storybook
│   ├── main.js                   # Arquivo de configuração principal do Storybook
│   └── preview.js                # Configurações para decorar o Storybook com estilos globais
│
├── package.json
├── tsconfig.json                 # Configuração do TypeScript
└── tailwind.config.js            # Configuração do Tailwind
