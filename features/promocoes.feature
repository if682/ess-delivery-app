Scenario: remoção de promoção bem sucedida por restaurante
Given o restaurante "Méqui" está na página de atualização de promoções
And o cupom de código "2BIGMEQUIPOR1" está cadastrado
When o restaurante "Méqui" tenta excluir o cupom "2BIGMEQUIPOR1" 
Then o cupom "2BIGMEQUIPOR1" é removido das promoções com sucesso
And o cupom "2BIGMEQUIPOR1" não aparece mais na página de atualização de promoções