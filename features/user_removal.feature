Feature: User Removal
As como um usuário
I want to remover a minha conta
So that eu possa ter meus dados removidos e minha conta apagada

    Scenario: Remoção bem-sucedida
    Given eu estou na aba de "Meu perfil"
    When clico em "excluir minha conta"
    And digito minha senha no campo "senha"
    Then recebo o aviso "seus dados serão apagados, deseja continuar?"
    When eu clico no botão "confirmar"
    Then eu recebo um aviso que meus dados foram apagados
    And sou redirecionada para "home" como visitante

    Scenario: Remoção mal-sucedida: senha incorreta
    Given eu estou na aba de "Meu perfil"
    When clico em "excluir minha conta"
    And digito uma senha incorreta no campo "senha"
    Then recebo o aviso "senha incorreta, por favor tente novamente"
    And continuo na aba "Meu perfil"