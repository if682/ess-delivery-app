Scenario: remoção de promoção bem sucedida por restaurante
Given o restaurante "Méqui" está na página de atualização de promoções
And o cupom de código "2BIGMEQUIPOR1" está cadastrado
When o restaurante "Méqui" tenta excluir o cupom "2BIGMEQUIPOR1" 
Then o cupom "2BIGMEQUIPOR1" é removido das promoções com sucesso
And o cupom "2BIGMEQUIPOR1" não aparece mais na página de atualização de promoções

Scenario: atualização de promoção de um produto que já tem uma promoção ativa pelo restaurante
Given o restaurante "Méqui" está na página de atualização de promoção
And o cupom "2BIGMEQUIPOR1" associado ao produto "Big Méqui" está cadastrado mas inativo
And o produto "Big Méqui" já tem uma promoção associada ele
When o restaurante "Méqui" tenta atualizar o cupom "2BIGMEQUIPOR1" para ser ativo
Then a atualização do cupom "2BIGMEQUIPOR1" é negada
And uma mensagem de erro é exibida indicando que o produto "Big Méqui" já tem uma promoção ativa associada a ele

Scenario: inserção de cupom de primeira compra já utilizado
Given o usuário "Maria Luísa" está na página de inserção de cupom no pedido "1234" com o valor "R$40,00"
And o usuário "Maria Luísa" já utilizou o cupom "PRIMEIRACOMPRA"
And o pedido "1234" não tem cupons aplicados
When o usuário "Maria Luísa" tenta inserir o cupom "PRIMEIRACOMPRA" no pedido "1234"
Then o cupom "PRIMEIRACOMPRA" é recusado
And uma mensagem de erro é exibida indicando que o cupom "PRIMEIRACOMPRA" já foi utilizado

Scenario: atualização de promoção bem sucedida pelo restaurante
Given o restaurante "Méqui" está na página de atualização de promoção
And o cupom "2BIGMEQUIPOR1" está cadastrado mas expirado
When o restaurante "Méqui" tenta atualizar o cupom "2BIGMEQUIPOR1" para ser ativo na hora "21:00" do dia "05/04/2022" até "23:59" do "06/04/2022"
Then o cupom "2BIGMEQUIPOR1" é atualizado
