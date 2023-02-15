Feature: Busca de reservas
As a usuário do sistema
I want ser capaz de realizar uma busca nos anúncios cadastrados
So that eu possa ter melhores condições de escolher a melhor acomodação para a minha situação

Cenário 1 - Reserva encontrada
Given estou na página "Home"
And existem os anúncios "Chalet - Barra Grande" e "Cabana - Jericoacoara"
When eu digito na barra de pesquisa "Jericoacoara"
And pressiono o botão para pesquisar
Then uma lista contendo apenas o anúncio "Cabana - Jericoacoara" é mostrada para mim

Cenário 2 - Nenhum item encontrado
Given estou na página "Home"
And existem os anúncios "Chalet - Barra Grande" e "Cabana - Jericoacoara"
When eu digito na barra de pesquisa "Flat"
And pressiono o botão para pesquisar
Then a lista de anúncios é substituída por uma mensagem informando que nenhum anúncio relacinado à pesquisa foi encontrado

Cenário 3 - Filtro de data
Given estou na página "Home"
And existem os anúncios "Chalet - Barra Grande" e "Cabana - Jericoacoara"
And a acomodação "Chalet - Barra Grande" ficará disponível de "12/05/2023" até "12/06/2023" 
enquanto que "Cabana - Jericoacoara" ficará disponível de "01/06/2023" até "12/06/2023"
When eu digito na barra de filtro por data o período "16/05/2023" até "26/05/2023"
And pressiono o botão para pesquisar
Then uma lista contendo apenas o anúncio "Chalet - Barra Grande" é mostrada para mim

Cenário 4 - Filtro por localidade
Given estou na página "Home"
And existem os anúncios "Chalet - Barra Grande" e "Cabana - Jericoacoara"
And a acomodação "Chalet - Barra Grande" está localizada em Barra Grande e a acomodação "Cabana - Jericoacoara" está localizada em Jericoacoara
When eu digito na barra filtro por localidade "Barra Grande"
And pressiono o botão para pesquisar
Then uma lista contendo apenas o anúncio "Chalet - Barra Grande" é mostrada para mim

Cenário 5 - Filtro por número de pessoas
Given estou na página "Home"
And existem os anúncios "Chalet - Barra Grande" e "Cabana - Jericoacoara"
And a acomodação "Chalet - Barra Grande" comporta 10 pessoas e a acomodação "Cabana - Jericoacoara" comporta 5 pessoas
When eu digito na barra filtro por quantidade de pessoas "7"
And pressiono o botão para pesquisar
Then uma lista contendo apenas o anúncio "Chalet - Barra Grande" é mostrada para mim

