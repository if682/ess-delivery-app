Feature: Gerar link de compartilhamento de página personalizada
    As a pessoa que possui um restaurante
    I want to gerar link do URL do cardápio do meu estabelecimento
    So that eu possa facilitar o acesso de possíveis clientes

	# Cenários de sucesso
    Scenario: Gerar link com sucesso
        Given que eu estou logado como "Admin" com o login "uva"
        And eu possuo o restaurante "Mark Chris"
        And eu estou na página "Cardápio"
        When eu clico no botão "Gerar link de compartilhamento"
        Then o link da URL da página "Cardápio" do restaurante "Mark Chris" será adicionado à área de transferência