Feature: Cadastro e manutenção de promoções
    Restaurantes e administradores poderão cadastrar, remover ou atualizar promoções (cupons), e usuários (clientes) poderão inserir e remover cupons de seus pedidos

Scenario: cadastro de promoção bem-sucedido por administrador
Given o administrador "Maluzinha" está na página de cadastro de promoção
And o cupom de código "PRIMEIRACOMPRA" não está cadastrado
When o administrador "Maluzinha" tenta cadastrar o cupom "PRIMEIRACOMPRA" de valor "20% do valor do pedido" com valor mínimo de "R$30,00" sem prazo de validade
Then o cupom "PRIMEIRACOMPRA" é cadastrado com sucesso

Scenario: cadastro de promoção malsucedido pelo restaurante
Given o restaurante "Méqui" está na página de cadastro de promoção
And o cupom de código "2BIGMEQUIPOR1" não está cadastrado
And o produto "Big Méqui" de valor "R$10,00" não possui promoções associadas a ele
When o restaurante "Méqui" tenta cadastrar o cupom "2BIGMEQUIPOR1" de valor "R$20,00" com valor mínimo "R$20,00", associado ao produto "Big Méqui", para ser ativo na hora "21:00" do dia "05/04/2022" até "23:59" do "06/04/2022"
Then o cupom "2BIGMEQUIPOR1" não é cadastrado

Scenario: cadastro de promoção bem-sucedido pelo restaurante
Given o restaurante "Méqui" está na página de cadastro de promoção
And o cupom de código "2BIGMEQUIPOR1" não está cadastrado
And o produto "Big Méqui" de valor "R$10,00" não possui promoções associadas a ele
When o restaurante "Méqui" tenta cadastrar o cupom "2BIGMEQUIPOR1" de valor "R$10,00" com valor mínimo "R$20,00", associado ao produto "Big Méqui", para ser ativo na hora "21:00" do dia "05/04/2022" até "23:59" do "06/04/2022"
Then o cupom "2BIGMEQUIPOR1" é cadastrado

Scenario: inserção de cupom inexistente em um pedido
Given o usuário "Pedro" está na página de inserção de cupom no pedido "9316" com o valor "R$80,00"
And o cupom "SORVETE20" não está cadastrado
When o usuário "Pedro" tenta inserir o cupom "SORVETE20" no pedido "9316"
Then o cupom "SORVETE20" é recusado
And uma mensagem de erro é exibida indicando que o cupom "SORVETE20" não existe
And o valor do pedido "9316" se mantém "R$80,00"
    