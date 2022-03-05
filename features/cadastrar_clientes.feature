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

Scenario: Registro de cliente com senha fora do padrão
  Given eu não estou registrado no sistema
    And estou na página de cadastro de cliente
   When eu insiro o uma senha “123456” fora do padrão especificado com 8 caracteres onde desses caracteres pelo menos 1 é número e 1 letra maiúscula
    And vou preencher o próximo campo
   Then aparece uma mensagem de que a senha nao segue os requisitos
    And eu permaneço na mesma página de cadastro e não consigo seguir com o cadastro.

Scenario: Registro de cliente com CPF falso
  Given eu não estou registrado no sistema
    And estou na página de cadastro de cliente
   When eu insiro o cpf “111.222.333-44” falso no campo de “cpf”
    And vou preencher o próximo campo
   Then aparece uma mensagem de que o cpf não é válido
    And eu permaneço na mesma página de cadastro e não consigo seguir com o cadastro.