# 📦 Stock Control

- Site: https://www.stockcontrol.com.br/
- Login: Lucas
- 1234

## 🔎 Visão Geral
O **Stock Control** é um sistema de gestão de estoques, notas fiscais, EPIs e processos de almoxarifado para empresas multiunidade.  
Permite controle operacional em nível de unidade e visão estratégica corporativa, com dashboards, relatórios e gestão de cadastros.

---

## 🎯 Objetivo do Sistema
- Garantir **rastreabilidade de materiais** (entrada, saída, validade, lote/série).
- Automatizar fluxos de **requisições, aprovações e inventários**.
- Apoiar **conformidade legal** (EPIs, NFes, auditoria).
- Oferecer **visão analítica corporativa** (custos, consumo, divergências).
- Reduzir desperdícios e melhorar a **eficiência de suprimentos**.

---

## 📌 Escopo Principal (Funcionalidades)
- 🔐 Autenticação e perfis de acesso.
- 📊 Dashboards (Unidade e Corporativo).
- 📦 Gestão de Notas Fiscais (lista, cadastro, recebimento).
- 📊 Estoque (saldos, lotes, movimentações).
- 📤 Saídas (registro e histórico).
- 📑 Requisições (fluxo completo).
- 📋 Inventário (planos, contagens, ajustes).
- ⚠️ Painel de Alertas.
- 📈 Relatórios e Estatísticas.
- 🏷️ Cadastros (materiais, categorias, UoM, fornecedores, funcionários, almoxarifados, localizações, usuários).
- ⚙️ Administração (configurações e políticas).
- 📤 Exportações (Excel, CSV, PDF em todas as listas e relatórios).

---

## 👥 Perfis de Usuário
- **FUNC** → Funcionário comum (requisitar materiais, consultar EPIs).
- **ALMOX** → Almoxarife (gerir NFs, entradas/saídas, inventário).
- **GESTOR_LOCAL** → Gestor da unidade (aprovar requisições, ver relatórios locais).
- **GESTOR_MASTER** → Gestor corporativo (visão consolidada multiunidade).
- **VISITANTE (futuro)** → Acesso restrito a dashboards de leitura.

---

## 🖥️ Especificação Funcional

### Telas Principais
- **Login / Recuperar senha** → autenticação segura.
- **Dashboard da Unidade** → visão operacional local.
- **Dashboard Corporativo** → visão estratégica consolidada.
- **Notas Fiscais** → lista, cadastro e detalhe/recebimento.
- **Estoque** → saldos, lotes/séries, movimentações.
- **Saídas** → registrar e consultar histórico.
- **Requisições** → solicitação, aprovação e atendimento.
- **Inventário** → planos, contagens e ajustes.
- **Alertas** → monitoramento central.
- **Relatórios / Estatísticas** → consultas, KPIs e gráficos.
- **Cadastros** → materiais, categorias, UoM, fornecedores, funcionários, almoxarifados, localizações, usuários.
- **Admin** → configurações do sistema.

---

## 📋 Tabela de Telas

| Tela                         | Objetivo                                          | Perfis com Acesso |
|------------------------------|---------------------------------------------------|-------------------|
| Login / Recuperar Senha      | Acesso ao sistema                                 | Todos             |
| Dashboard Unidade            | Indicadores operacionais locais                   | ALMOX, GESTOR_LOCAL |
| Dashboard Corporativo        | KPIs e visão consolidada                          | GESTOR_MASTER     |
| Lista de Notas Fiscais       | Controle de NFs recebidas                         | ALMOX, GESTOR_LOCAL |
| Nova NF                      | Cadastro de NFs                                   | ALMOX             |
| Detalhe da NF                | Recebimento e fechamento                          | ALMOX             |
| Estoque - Saldos             | Consultar saldos e status (min/máx)               | Todos (restrito)  |
| Estoque - Lotes/Séries       | Rastreabilidade por lote/validade                 | ALMOX, GESTOR_LOCAL |
| Estoque - Movimentações      | Auditoria de entradas/saídas                      | ALMOX, GESTOR_LOCAL, GESTOR_MASTER |
| Registrar Saída              | Registrar entrega de materiais/EPIs               | ALMOX             |
| Histórico de Saídas          | Consultar entregas anteriores                     | ALMOX, GESTOR_LOCAL |
| Requisições (Nova/Lista/Det.)| Fluxo de solicitação, aprovação e atendimento     | FUNC, GESTOR_LOCAL, ALMOX |
| Inventário (Planos/Cont/Ajuste)| Contagem e ajuste de estoque                    | ALMOX, GESTOR_LOCAL |
| Painel de Alertas            | Acompanhar e resolver alertas                     | Todos (restrito)  |
| Relatórios/Estatísticas      | KPIs, consumo, conformidade EPIs                  | GESTOR_LOCAL, GESTOR_MASTER |
| Cadastros (Materiais, etc.)  | Base do sistema                                   | ALMOX, GESTOR_LOCAL, GESTOR_MASTER |
| Configurações/Administração  | Políticas, permissões e integrações               | GESTOR_MASTER     |

---

## 📜 Regras de Negócio
- Chamados (Requisições) seguem fluxo: **Pendente → Aprovada → Atendida/Parcial → Concluída**.
- NF só pode ser **fechada** quando todos os itens forem recebidos.
- EPIs possuem **validade e conformidade obrigatória** por funcionário.
- Inventário gera **ajustes apenas após aprovação do gestor**.
- Alertas têm ciclo: **Aberto → Reconhecido → Resolvido**.
- Exclusões devem usar **soft delete**, preservando histórico/auditoria.
- Saídas devem registrar **dupla responsabilidade**: quem **entregou** (almox) e quem **recebeu** (funcionário ou setor/projeto).

---

## 🗂️ Modelo de Dados (MER Simplificado)

### Entidades Principais
- **Clientes** (id, nome, CNPJ, logo).
- **Unidades** (id, nome, cliente, endereço).
- **Almoxarifados** (id, nome, unidade).
- **Localizações** (id, código, almox).
- **Materiais** (id, nome, SKU, categoria, min/máx).
- **Categorias** (id, nome, categoria_pai).
- **Fornecedores** (id, nome, CNPJ).
- **Funcionários** (id, nome, matrícula, unidade).
- **Usuários** (id, email, perfil, funcionário vinculado).
- **Notas Fiscais** (id, fornecedor, valor, status).
- **Itens NF** (id, nf, material, quantidade, preço).
- **Movimentações** (id, tipo, data, material, qtd, usuário).
- **Requisições** (id, solicitante, status, unidade, setor/projeto destino).
- **Itens Requisição** (id, requisição, material, qtd).
- **Inventário** (planos, contagens, ajustes).
- **Alertas** (id, tipo, status, entidade).
- **Setores/Projetos** (id, nome, unidade) → destino de saídas/requisições.

### Tabela de Entidades

| Entidade      | Atributos Principais                | Finalidade                          |
|---------------|-------------------------------------|-------------------------------------|
| Clientes      | id, nome, CNPJ, logo                | Empresas atendidas                  |
| Unidades      | id, nome, cliente, endereço         | Sites/unidades da empresa           |
| Almoxarifados | id, nome, unidade                   | Estoque físico                      |
| Localizações  | id, código, almox                   | Endereços físicos                   |
| Materiais     | id, nome, SKU, categoria, min/máx   | Itens controlados                   |
| Fornecedores  | id, nome, CNPJ                      | Base de compras                     |
| Funcionários  | id, nome, matrícula, unidade        | Pessoas que usam EPIs/materiais     |
| Usuários      | id, email, perfil, funcionário      | Controle de acesso                  |
| NFs           | id, fornecedor, valor, status       | Compras e recebimentos              |
| Movimentações | id, tipo, data, material, qtd       | Entradas/saídas/ajustes             |
| Requisições   | id, solicitante, status, unidade, setor/projeto | Fluxo de pedidos internos  |
| Inventário    | id, plano, status, unidade          | Contagem de estoques                |
| Alertas       | id, tipo, status, entidade          | Monitoramento crítico                |
| Setores/Projetos | id, nome, unidade                | Agrupar saídas/requisições coletivas |

---

## 🔄 Fluxos Resumidos (ASCII)

### Fluxo: Abertura de Requisição
```text
[FUNC] → Cria Requisição → [GESTOR_LOCAL] → Aprova/Reprova
   → [ALMOX] → Atende (parcial/total) → Status Concluído
