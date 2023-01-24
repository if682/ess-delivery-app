Cenário: acesso ao histórico de uma conta logada
Given o usuario está logado na conta "joao1234" 
And está na pagína inicial do site
Then "joao1234" acessa o botão de histórico
And ele vê suas ultimas músicas ouvidas 

Cenário: acesso ao histórico de uma conta não logada
Given o usuário está na página inicial do site
Then o usuário tenta acessar a aba do histórico
Then o usuário vê uma mensagem de erro
And a mensagem diz que precisa estar logado para acessar o histórico



passo solicitado.

Ajeitando desenvolvimento
