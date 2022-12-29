RQ1: O sistema deve permitir ao aluno realizar uma auto-avaliação, o aluno só pode enviá-la após dar notas para todas as metas de aprendizagem avaliadas

Feature: auto-avaliação
As a estudante de uma turma
I want to atribuir a mim mesmo conceitos(MA, MPA, MANA) para uma série de metas de aprendizagem 
And ver também a nota que me foi atribuída em cada meta pelo professor da turma
Then eu possa assim dar um feedback ao professor da minha concepção das metas avaliadas pela disciplina


Cenário: Aluno não consegue enviar a sua auto-avaliação pois deixou de preencher um conceito

Given que eu sou a aluna “Fulano x”
And não realizei a minha auto-avaliação 
And atribui "MA" para parte das metas avaliadas
And estou na página "auto-avaliação"
When eu peço ao sistema para enviar minha auto-avaliação
Then permaneço na página de "auto-avaliação"
And vejo um modal com uma mensagem de erro
