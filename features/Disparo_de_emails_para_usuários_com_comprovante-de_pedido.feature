Scenario: Usuário finaliza o pedido com sucesso
Given o usuário "mateuzinho" está na página de confirmação do pedido “001”
And "mateuzinho" não finalizou o pedido “001”
When "mateuzinho" confirma o pedido “001”. 
Then o sistema envia um email para sua conta com um comprovante do pedido “001”.

Scenario: Usuário finaliza o pedido com sucesso, mas quer que o e-mail de confirmação seja reenviado.
Given o usuário “mateuzinho” está na página de pedidos confirmados
And o usuário “mateuzinho” deseja que o e-mail de confirmação do pedido “001” seja enviado novamente
When o usuário “mateuzinho” pede o reenvio do email com comprovante do pedido “001”
Then o sistema envia novamente um email para sua conta com um comprovante do pedido “001”.

Scenario: O usuário responde email de comprovante de pedido
Given o usuário recebe um email do sistema com o comprovante do pedido “001”
And 
When o usuário “mateuzinho” envia um email respondendo este email 
Then O sistema envia um e-mail avisando que o endereço de email para o qual ele enviou um email não recebe respostas, e oferece um email de suporte.

Scenario: Após finalizar o pedido, o cliente quer baixar o comprovante diretamente do aplicativo
Given o usuário “mateuzinho” finaliza o pedido número “001” 
And o usuario clica no botão de baixar comprovante do pedido “001”
Then o usuário faz o baixa o comprovante do pedido “001” em pdf.

