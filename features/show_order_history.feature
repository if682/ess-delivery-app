Feature: Mostrar histórico de pedidos do usuário

   Os usuários poderão visualizar todo o histórico de pedidos ativos/concluídos e cancelados. Além da possibilidade de filtrá-los por nome, status, código do pedido, etc.

Scenario: Filtrar histórico de pedidos por número do pedido
Given que estou na página de histórico de pedidos
When eu digito "12345" no campo de filtro "Número do pedido"
And clico no botão "Aplicar Filtros"
Then Então a lista de pedidos deve ser filtrada para mostrar somente o pedido com o número "12345"
And eu deveria ver a mensagem "1 pedido encontrado"

Scenario: Filtrar histórico de pedidos por data
Given que estou na página de histórico de pedidos
When eu seleciono "Últimos 30 dias" no campo de filtro "Data"
And clico no botão "Aplicar Filtros"
Then a lista de pedidos deve ser filtrada para mostrar somente os pedidos colocados nos últimos 30 dias
And eu deveria ver pelo menos um pedido na lista.

Scenario: Filtrar histórico de pedidos por múltiplos status
Given que estou na página de histórico de pedidos
When eu seleciono "Enviado" e "Entregue" no campo de filtro "Status"
And clico no botão "Aplicar Filtros"
Then a lista de pedidos deve ser filtrada para mostrar somente os pedidos com status "Enviado" ou "Entregue"
And eu deveria ver pelo menos um pedido na lista.

Scenario: Buscar histórico de pedidos por nome do produto
Given que estou na página de histórico de pedidos
When eu digito "Apple iPhone 12" no campo de busca "Nome do Produto"
And clico no botão "Pesquisar"
Then a lista de pedidos deve ser filtrada para mostrar somente os pedidos que contém o produto "Apple iPhone 12"
And eu deveria ver pelo menos um pedido na lista.

Scenario: Limpar filtros
Given que estou na página de histórico de pedidos
And eu tenho filtros aplicados
When eu clico no botão "Limpar Filtros"
Then a lista de pedidos deve mostrar todos os pedidos
And os campos de filtro devem ser redefinidos para seus valores padrão.

Scenario: Filtrar histórico de pedidos por número de pedido - Falha
Given que eu estou na página de histórico de pedidos
When eu digito "numero_invalido_de_pedido" no campo de filtro "Número do Pedido"
And eu clico no botão "Aplicar Filtros"
Then a lista de pedidos não deve ser filtrada
And eu deveria ver a mensagem "Nenhum pedido encontrado"

Scenario: Buscar histórico de pedidos por nome do produto - Falha
Given que eu estou na página de histórico de pedidos
When eu digito "Nome do Produto Inválido" no campo de pesquisa "Nome do Produto"
And eu clico no botão "Pesquisar"
Then a lista de pedidos não deve ser filtrada
And eu deveria ver a mensagem "Nenhum pedido encontrado"
Then o campo de pesquisa "Nome do Produto" deve ser limpo e pronto para uma nova pesquisa.