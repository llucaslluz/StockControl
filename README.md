Stock Control (Levantamento - 2)

📦 Projeto – Sistema de Controle de Materiais
🎯 Objetivo

Controlar de ponta a ponta os materiais de uma empresa prestadora de serviços (como Manserv → Voith, Braskem, Petrobras etc.), garantindo rastreabilidade de compras, estoque, saídas, validade de EPIs, fornecedores e consumo por funcionário/unidade.
O sistema deve fornecer dados estratégicos para gestão: quando comprar, quanto gastar, quem está usando, e histórico de valores.

🗂️ Estrutura por Módulos
1. Cadastro
Materiais:
Nome, categoria (EPI, EPC, uniforme, ferramentas, equipamentos etc).
Unidade de medida (unidade, caixa, par, litro).
Código interno.
Estoque mínimo e máximo configurável.
Validade (se aplicável).
Categorias de Materiais.
Fornecedores:
Nome, CNPJ, contato, e-mail, telefone.
Histórico de fornecimento.
Funcionários:
Nome, matrícula, unidade, função.
Histórico de EPIs entregues.
Clientes e Unidades:
Estrutura hierárquica: Cliente > Unidade > Estoque.

2. Entrada de Materiais (Compras/Notas Fiscais)
Cadastro da NF: número, fornecedor, data, valor total.
Registro de itens: nome, quantidade comprada, quantidade recebida, preço unitário.
Controle de entregas parciais (registrar faltas).
Histórico de preços unitários.
Importação futura via XML da SEFAZ.

3. Estoque
Saldo atualizado automaticamente após entradas e saídas.
Alerta de estoque mínimo/máximo.
Localização do material (almoxarifado, prateleira, setor).
Histórico completo de movimentações (com auditoria de quem fez).
Controle de validade → alerta de vencimento.

4. Saída de Materiais
Registro de entrega a funcionário ou setor.
Controle de EPIs:
Data de retirada, data prevista de troca.
Alerta quando vencido.
Responsabilidade dupla: quem entregou e quem recebeu.
Assinatura digital (ou login/senha de confirmação).

5. Requisição de Materiais
Funcionário solicita material pelo sistema.
Fluxo de aprovação (gestor local aprova → almoxarife entrega).
Evita saídas sem controle.

6. Relatórios e Dashboards
Relatórios básicos:
Estoque atual.
Histórico de movimentações.
Consumo por funcionário/unidade.
Dashboards avançados:
Consumo médio mensal por material.
Top 10 materiais mais usados.
Top 10 funcionários que mais retiraram EPIs.
Custo total por categoria.
Evolução de preços ao longo do tempo.
Comparativo entre unidades/clientes.

7. Multiunidade e Multiempresa
Cada cliente possui suas unidades.
Gestor local enxerga apenas sua unidade.
Gestor master enxerga todas as unidades e clientes.

8. Alertas Automáticos
Materiais vencendo em X dias.
Estoque abaixo do mínimo ou acima do máximo.
Funcionário com EPI vencido.
Diferença entre quantidade comprada e recebida de NF.

9. Segurança e Auditoria
Log completo de operações: quem cadastrou, alterou, entregou, excluiu.
Histórico de exclusões (soft delete).

10. Exportação e Integração
Exportação de relatórios para Excel e PDF.
API futura para integração com sistemas ERP ou XML de NF.

👥 Perfis de Usuário
Funcionário comum:
Solicita materiais.
Consulta histórico do que recebeu.
Almoxarife / Responsável:
Registra entradas (NF).
Registra saídas.
Garante atualização de estoque.
Gestor Local (Unidade):
Aprova requisições.
Acompanha estoque e relatórios da unidade.
Gestor Master (Corporativo):
Acesso consolidado a todas as unidades/clientes.
Relatórios estratégicos de custo, consumo e comparação.
