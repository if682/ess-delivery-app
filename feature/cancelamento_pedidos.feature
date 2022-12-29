Cenário de GUI
Scenario: Preenchimento de aluno com sucesso
	Given estou na página “Avaliação” logado como “aluno” nomeado “Kennedy”
	When eu preencho todos os campos “Avaliação Aluno” e confirmo
	Then Eu vejo “uma mensagem de confimação”

Cenário de Serviço
Scenario: Preenchimento de aluno com sucesso
	Given aluno “Kennedy” logado e sem notas preenchidas por ele
	When eu preencho todos os campos “Avaliação Aluno” e confirmo
	Then o sistema armazena o aluno “Kennedy” como todas as notas dadas para as metas.

Cenário de GUI
Scenario: Preenchimento de aluno com erro
	Given estou na página “Avaliação” logado como “aluno” nomeado “Kennedy”
	When eu preencho alguns (mas não todos) campos “Avaliação Aluno” e confirmo
	Then Eu vejo “uma mensagem de erro”

Cenário de Serviço
Scenario: Preenchimento de aluno com erro
	Given aluno “Kennedy” logado e sem notas preenchidas por ele
	When eu preencho alguns (mas não todos) campos “Avaliação Aluno” e confirmo
	Then o sistema não armazena o aluno “Kennedy” como suas metas atribuidas.


Scenario: Sem auto-avaliação discrepante
	Given Eu estou logado como “professor” nomeado “Antônio”
And O aluno “Marcos” possui 1 uma auto-avaliação discrepante em relação ao total de 5 metas.
And O aluno “Ricardo” possui todas auto-avaliações inferiores às avaliações do professor.
And O aluno “Pedro” possui todas auto-avaliações iguais às avaliações do professor.
When eu acessar a página “auto-avaliações discrepantes”
	Then a “Quantidade de alunos discrepantes” será 0, a “Procentagem de alunos discrepantes” será 0% e a “Lista de alunos discrepantes” estará vazia.


Scenario: 1 Aluno discrepante de 3
	Given Eu estou logado como “professor” nomeado “Antônio”
And O aluno “Marcos” possui 3 auto-avaliações discrepantes em relação ao total de 5 metas.
And O aluno “Ricardo” possui 1 auto-avaliação discrepantes em relação ao total de 5 metas.
And O aluno “Pedro” possui 1 auto-avaliação discrepantes em relação ao total de 5 metas.
When eu acessar a página “auto-avaliações discrepantes”
	Then a “Quantidade de alunos discrepantes” será 1, a “Procentagem de alunos discrepantes” será 33,3% e a “Lista de alunos discrepantes” estará apenas com o aluno “Marcos”.

Scenario: Cancelar pedido logado porém sem digitar senha de confirmação.
Ideia: Irá requisitar senha no campo requisitado

