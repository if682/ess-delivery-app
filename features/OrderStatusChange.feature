Mudança do Status do Pedido

Restaurante aceita novo pedido, a ideia é que após um pedido ser realizado o banco de dados do aplicativo atualize o status e notifique o cliente.

Restaurante notifica cliente que pedido está pronto, a ideia é que após um pedido ser preparado o banco de dados do aplicativo atualize o status do mesmo e notifique o cliente

Restaurante notifica delivery para entrega de pedido, a ideia aqui é que delivery deve ser notificado que há uma nova entrega, mas não há atualização de db.

Restaurante modifica o status do pedido com sucesso, a ideia aqui é explorar possíveis cenários que são um sucesso.

Restaurante envia uma notificação e cliente a recebe, a ideia aqui é testar possíveis cenários onde latência pode ocorrer ou não ocorrer.

Aplicativo testa ciclo de status de pedido e completa todos os testes com sucesso, a ideia aqui é testar se o aplicativo consegue reproduzir o ciclo de um pedido e diagnosticar possíveis problemas.

Restaurante modifica o status do pedido mas falha no processo, a ideia aqui é explorar possíveis cenários que causariam uma falha na modificação do status no db.

Restaurante envia notificação e cliente não a recebe, a ideia aqui é testar o que fazer caso o cliente não receba a notificação

Aplicativo testa ciclo de status de pedido e completa parcialmente os testes, a ideia aqui é descobrir possíveis testes que por ausência de cobertura de funcionalidades auxiliares não obtém sucesso.
