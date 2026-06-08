#  Projeto Curso - Formação TypeScript 

Este projeto foi desenvolvido como parte do aprendizado em TypeScript, focando na organização de código, tipagem forte e componentização de uma aplicação web (sistema de controle financeiro).

---

## O sistema possui:

**Visualização de Saldo**: Exibição e atualização do saldo atualizado (saldo-component.ts).

**Nova Transação**: Inclusão de novos lançamentos financeiros e validações (nova-transacao-component.ts).

**Extrato Bancário**:  Listagem, agrupamento histórico de movimentações (extrato-component.ts)

---
## 🛠️ Tecnologias Utilizadas

**TypeScript** - Superset do JavaScript que adiciona tipagem estática e recursos modernos ao desenvolvimento.

## 📁 Estrutura do Projeto

A estrutura de arquivos do projeto está organizada da seguinte forma:

```text
FORMACAO-TYPESCRIPT-PROJETO-CURSO-02/
├── dist/                          # Arquivos compilados prontos para produção
│   ├── css/                       # Estilos da aplicação
│   ├── images/                    # Imagens e assets visuais
│   ├── js/                        # Código JavaScript gerado pelo TypeScript
│   └── index.html                 # Página principal da aplicação
├── src/                           # Código-fonte em TypeScript
│   ├── components/                # Componentes da interface
│   │   ├── extrato-component.ts   # Componente responsável pelo extrato
│   │   ├── nova-transacao-component.ts # Componente para criação de transações
│   │   └── saldo-component.ts     # Componente que exibe e gerencia o saldo
│   ├── types/                     # Definições de tipos e interfaces do domínio
│   │   ├── Conta.ts
│   │   ├── FormatoData.ts
│   │   ├── GrupoTransacao.ts
│   │   ├── TipoTransacao.ts
│   │   └── Transacao.ts
│   ├── utils/                     # Funções utilitárias e helpers
│   └── main.ts                    # Ponto de entrada da aplicação TypeScript
├── README.md                      # Documentação do projeto
├── Requisitos.txt                 # Regras de negócio e requisitos do sistema
└── tsconfig.json                  # Configurações do compilador TypeScript
