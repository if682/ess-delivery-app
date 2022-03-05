Feature: “Inserir novo cliente”
    As a cliente que não possui conta no aplicativo
    I want to inserir meus dados para cadastro de nova conta
    So that eu possa realizar compras

Scenario: Registro de cliente já registrado querendo se registrar com novo e-mail
  Given eu já possuo uma conta com cpf “111.222.333-44” vinculado ao email “pjls2@cin.ufpe.br”
    And estou na página de cadastro de cliente
   When eu insiro o cpf “111.222.333-44” no campo de “cpf”
    And vou preencher o próximo campo
   Then aparece uma mensagem de que o cpf já está cadastrado para o email “p***2@*****pe.br”
    And sou perguntado se desejo redefinir a minha senha