Feature: Cadastro e manutenção de promoções 

    Restaurantes e administradores poderão cadastrar, remover ou atualizar promoções (cupons), 
    e usuários (clientes) poderão inserir e remover cupons de seus pedidos.

Scenario: inserção de cupom em pedido bem-sucedida
Given o usuário "Maria Luísa" está na página de inserção de cupom no pedido "1237" com o valor "R$40,00"
And o cupom "10%off" está ativo e possui um valor mínimo de "R$20,00"
And o pedido "1237" não tem cupons aplicados
When o usuário "Maria Luísa" tenta inserir o cupom "10%off" no pedido "1237"
Then o cupom "10%off" é aplicado com sucesso
And o valor do pedido "1237" é atualizado para "R$36,00"

Scenario: inserção de múltiplos cupons em um pedido
Given o usuário "Acrucha" está na página de inserção de cupom no pedido "3456" com o valor "R$100,00"
And o cupom "PRIMEIRACOMPRA20" já está aplicado ao pedido "3456"
When o usuário "Acrucha" tenta inserir o cupom "PIZZAEMDOBRO" no pedido "3456"
Then o cupom "PIZZAEMDOBRO" é recusado
And uma mensagem de erro é exibida indicando que já existe um cupom aplicado ao pedido "3456"
And o valor do pedido "3456" se mantém "R$100,00"

Scenario: inserção de cupom em pedido que não atingiu o valor mínimo
Given o usuário "Tales" está na página de inserção de cupom no pedido "2345" com o valor "R$10,00"
And o cupom "10%off" está ativo possui um valor mínimo de "R$20,00"
And o pedido "2345" não tem cupons aplicados
When o usuário "Tales" tenta inserir o cupom "10%off" no pedido "2345"
Then o cupom "10%off" é recusado
And uma mensagem de erro é exibida indicando que o valor do pedido "2345" não atingiu o mínimo para aplicação do cupom "10%off"
And o valor do pedido "2345" se mantém "R$10,00"

Scenario: inserção de cupom expirado em um pedido
Given o usuário "Pedro" está na página de inserção de cupom no pedido "9856" com o valor "R$100,00"
And o cupom "PIZZAEMDOBRO" está expirado
When o usuário "Pedro" tenta inserir o cupom "PIZZAEMDOBRO" no pedido "9856"
Then o cupom "PIZZAEMDOBRO" é recusado
And uma mensagem de erro é exibida indicando que o cupom "PIZZAEMDOBRO" se encontra expirado
And o valor do pedido "9856" se mantém "R$100,00"
