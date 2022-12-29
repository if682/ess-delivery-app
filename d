[1mdiff --git a/feature/cancelamento_pedidos.feature b/feature/cancelamento_pedidos.feature[m
[1mindex e69de29..5691303 100644[m
[1m--- a/feature/cancelamento_pedidos.feature[m
[1m+++ b/feature/cancelamento_pedidos.feature[m
[36m@@ -0,0 +1,43 @@[m
[32m+[m[32mCenário de GUI[m
[32m+[m[32mScenario: Preenchimento de aluno com sucesso[m
[32m+[m	[32mGiven estou na página “Avaliação” logado como “aluno” nomeado “Kennedy”[m
[32m+[m	[32mWhen eu preencho todos os campos “Avaliação Aluno” e confirmo[m
[32m+[m	[32mThen Eu vejo “uma mensagem de confimação”[m
[32m+[m
[32m+[m[32mCenário de Serviço[m
[32m+[m[32mScenario: Preenchimento de aluno com sucesso[m
[32m+[m	[32mGiven aluno “Kennedy” logado e sem notas preenchidas por ele[m
[32m+[m	[32mWhen eu preencho todos os campos “Avaliação Aluno” e confirmo[m
[32m+[m	[32mThen o sistema armazena o aluno “Kennedy” como todas as notas dadas para as metas.[m
[32m+[m
[32m+[m[32mCenário de GUI[m
[32m+[m[32mScenario: Preenchimento de aluno com erro[m
[32m+[m	[32mGiven estou na página “Avaliação” logado como “aluno” nomeado “Kennedy”[m
[32m+[m	[32mWhen eu preencho alguns (mas não todos) campos “Avaliação Aluno” e confirmo[m
[32m+[m	[32mThen Eu vejo “uma mensagem de erro”[m
[32m+[m
[32m+[m[32mCenário de Serviço[m
[32m+[m[32mScenario: Preenchimento de aluno com erro[m
[32m+[m	[32mGiven aluno “Kennedy” logado e sem notas preenchidas por ele[m
[32m+[m	[32mWhen eu preencho alguns (mas não todos) campos “Avaliação Aluno” e confirmo[m
[32m+[m	[32mThen o sistema não armazena o aluno “Kennedy” como suas metas atribuidas.[m
[32m+[m
[32m+[m
[32m+[m[32mScenario: Sem auto-avaliação discrepante[m
[32m+[m	[32mGiven Eu estou logado como “professor” nomeado “Antônio”[m
[32m+[m[32mAnd O aluno “Marcos” possui 1 uma auto-avaliação discrepante em relação ao total de 5 metas.[m
[32m+[m[32mAnd O aluno “Ricardo” possui todas auto-avaliações inferiores às avaliações do professor.[m
[32m+[m[32mAnd O aluno “Pedro” possui todas auto-avaliações iguais às avaliações do professor.[m
[32m+[m[32mWhen eu acessar a página “auto-avaliações discrepantes”[m
[32m+[m	[32mThen a “Quantidade de alunos discrepantes” será 0, a “Procentagem de alunos discrepantes” será 0% e a “Lista de alunos discrepantes” estará vazia.[m
[32m+[m
[32m+[m
[32m+[m
[32m+[m[32mScenario: 1 Aluno discrepante de 3[m
[32m+[m	[32mGiven Eu estou logado como “professor” nomeado “Antônio”[m
[32m+[m[32mAnd O aluno “Marcos” possui 3 auto-avaliações discrepantes em relação ao total de 5 metas.[m
[32m+[m[32mAnd O aluno “Ricardo” possui 1 auto-avaliação discrepantes em relação ao total de 5 metas.[m
[32m+[m[32mAnd O aluno “Pedro” possui 1 auto-avaliação discrepantes em relação ao total de 5 metas.[m
[32m+[m[32mWhen eu acessar a página “auto-avaliações discrepantes”[m
[32m+[m	[32mThen a “Quantidade de alunos discrepantes” será 1, a “Procentagem de alunos discrepantes” será 33,3% e a “Lista de alunos discrepantes” estará apenas com o aluno “Marcos”.[m
[32m+[m
