Cenário: acesso ao histórico de uma conta logada
Given: o usuario está logado na conta "joao1234" 
And: está na pagína inicial do site
Then: "joao1234" acessa o botão de histórico
And: ele vê suas ultimas músicas ouvidas 

Cenário: acesso ao histórico de uma conta não logada
Given: o usuário está na página inicial do site
Then: o usuário tenta acessar a aba do histórico
And: o usuário vê uma mensagem de erro
And: a mensagem diz que precisa estar logado para acessar o histórico

Cenário: Seleção de uma música do histórico
Given:  usuário "joão1234" está logado
And: está na aba do histórico
When: o usuário clica na foto da música
Then: ele é redirecionado para a música

Given: Estou na aba do histórico de músicas pesquisadas
When: Clico na opção "Remover músicas" na tela
And: Vejo que surge uma caixa de seleção ao lado de todas as músicas
And: Selecionei as músicas "Envolver - Anitta" e "everything i wanted - Billie Eilish"
And: Clico no ícone da lixeira para deletar as músicas selecionadas do histórico
Then: Verifico que as músicas "Envolver - Anitta" e "everything i wanted - Billie Eilish" não estão mais no histórico

Cenário: Remover todas as músicas
Given: Estou na aba do histórico
And: vejo no canto superior da tela a frase "apagar todas as músicas"
And: eu clico nesse botão
Then: vejo na tela o pop-up pedindo para confirmar a ação
And: todas as músicas do histórico foram apagadas

Cenário: Pesquisa de música no histórico
Given: Estou na aba do histórico de músicas pesquisadas
And: Vejo a barra de pesquisa no topo da tela
When: Digito "Make you mine" na barra de pesquisa
Then: O sistema exibe a música "Make you mine" na tela

Cenário: Pesquisa de música não encontrada
Given: Eu quero pesquisar a música "I Wanna Be Yours"
And: estou na aba de histórico
When: Eu digito "I Wanna Be Yours" na barra de pesquisa
Then: O sistema exibe uma lista de resultados de pesquisa que inclui a música "I Wanna Be Yours"
And: Se a música não estiver no histórico, a mensagem "Nenhum resultado encontrado no histórico de pesquisa" é exibida.

Cenário: Busca por Gênero Musical
Given: O usuário está na página de histórico do site de streaming de música
And: O usuário deseja ouvir músicas de um gênero específico
When: O usuário digita o nome do gênero musical na barra de pesquisa
Then: A plataforma retorna uma lista de músicas correspondentes ao gênero pesquisado
And: O usuário pode ouvir as músicas selecionadas e salvar as músicas favoritas
