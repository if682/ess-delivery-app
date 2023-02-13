Feature: Realização de reserva
As a usuário do sistema
I want to realizar uma reserva no sistema
So that eu possa utilizar a acomodação

Cenário 1 - Reserva bem sucedida
Given estou na página "Fernando de Noronha Duplex"
And a acomodação ainda não foi reservada
And a descrição diz que o número máximo de pessoas é 6
And a acomodação ficará disponível para reserva de "02/04/2023" até "15/08/2023"
When eu preencho o campo de data inicial com "12/05/2023"
And eu preencho o campo de data final com "15/05/2023"
And eu escolho a forma de pagamento "Cartâo de débito" e preencho o campo do número do cartão com "5163986707187763", o campo de código de segurança com "193" e o campo de validade com "12/23/2025"
And eu preencho o campo de número de convidados com "3"
And eu pressiono o botão "Requisistar Reserva"
Then uma mensagem aparece mostrando que o criador do anúncio foi avisado da minha requisição e qualquer atualização será informada por e-mail

Cenário 2 - Número máximo de pessoas atingido
Given estou na página "Fernando de Noronha Duplex"
And a acomodação ainda não foi reservada
And a descrição diz que o número máximo de pessoas é 4
And a acomodação ficará disponível para reserva de "02/04/2023" até "15/08/2023"
When eu preencho o campo de data inicial com "12/05/2023"
And eu preencho o campo de data final com "15/05/2023"
And eu escolho a forma de pagamento "Cartâo de débito" e preencho o campo do número do cartão com "5163986707187763", o campo de código de segurança com "193" e o campo de validade com "12/23/2025"
And eu preencho o campo de número de convidados com "8"
And eu pressiono o botão "Requisistar Reserva"
Then uma mensagem aparece informando que a acomodação não comporta a quantidade de pessoas pretendida

Cenário 3 - Acomodação já reservada
Given estou na página "Fernando de Noronha Duplex"
And a acomodação já foi reservada
And a descrição diz que o número máximo de pessoas é 4
And a acomodação ficará disponível para reserva de "02/04/2023" até "15/08/2023"
When eu preencho o campo de data inicial com "12/05/2023"
And eu preencho o campo de data final com "15/05/2023"
And eu escolho a forma de pagamento "Cartâo de débito" e preencho o campo do número do cartão com "5163986707187763", o campo de código de segurança com "193" e o campo de validade com "23/12/2025"
And eu preencho o campo de número de convidados com "2"
And eu pressiono o botão "Requisistar Reserva"
Then uma mensagem aparece informando que existem pessoas com prioridade para realizar a reserva e qualquer atualização será informada por e-mail

Cenário 4 - Forma de pagamento inválida
Given estou na página "Fernando de Noronha Duplex"
And a acomodação ainda não foi reservada
And a descrição diz que o número máximo de pessoas é 6
And a acomodação ficará disponível para reserva de "02/04/2023" até "15/08/2023"
When eu preencho o campo de data inicial com "12/05/2023"
And eu preencho o campo de data final com "15/05/2023"
And eu escolho a forma de pagamento "Cartâo de débito" e preencho o campo do número do cartão com "5124982737167536", o campo de código de segurança com "892" e o campo de validade com "23/12/2025"
And eu preencho o campo de número de convidados com "3"
And eu pressiono o botão "Requisistar Reserva"
Then uma mensagem aparece informando que a reserva não foi requisistada por que a forma de pagamento é inválida

Cenário 5 - Requisição fora do período permitido
Given estou na página "Fernando de Noronha Duplex"
And a acomodação ainda não foi reservada
And a descrição diz que o número máximo de pessoas é 6
When eu preencho o campo de data inicial com "12/05/2022"
And eu preencho o campo de data final com "15/05/2023"
And eu escolho a forma de pagamento "Cartâo de débito" e preencho o campo do número do cartão com "5163986707187763", o campo de código de segurança com "193" e o campo de validade com "12/23/2025"
And eu preencho o campo de número de convidados com "3"
And eu pressiono o botão "Requisistar Reserva"
Then uma mensagem aparece iformando que a requisição está fora do período permitido

