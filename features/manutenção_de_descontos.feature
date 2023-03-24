Scenario: Visualizar a página de ofertas
    As um cliente
    I quero acessar a página “Descontos”
    So that eu posso pagar menos por uma atração

Scenario: escolher maior oferta da lista
    Given  eu estou na página "Descontos"
    and vejo as opções de descontos oferecidos na página
    and eu olho para o início da página, onde as maiores ofertas residem
    when eu vejo a atração “Passeio de dois dias com almoço em angra dos Reis” possuindo desconto de “40% off”
    and esse é o maior desconto disponível
    then eu clico no botão “Comprar promoção” que se encontra abaixo da oferta desejada
    and sou encaminhado para a página “métodos de pagamento”


Scenario: visualizar mais opções de descontos
    Given eu estou na página "Descontos"
    and eu vejo que nenhuma dos descontos me interessa
    and vejo o botão “Ver mais”, localizada no canto inferior
    when clico na opção de “Ver mais”
    Then aparecem mais opções de desconto na página de “Descontos”
    and aparece uma barrinha de rolagem para acessar outros descontos 

Scenario: Obter informações de “horário” e “contato”
    Given eu estou na página "Descontos"
    and gostaria de obter mais informações sobre uma atração específica
    And eu vejo uma elipse branca com um “i” em todos os descontos da página
    When eu passo o cursor em cima dessa elipse
    Then eu vejo informações do “horário” daquela atração com desconto
    And informações sobre o “contato” para aquela atração em um bloco branco

//commit um da questão 13 na branch master


