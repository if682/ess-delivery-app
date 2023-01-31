Feature: ranqueamento_categorias
As a usuário do aplicativo de musica
I want to ranquear , seja musica podcast ou artista, os mais ranqueados.
So that conseguir escutar pelos mais ouvidos/ranqueados.

Scenario: Ranquear musica;
Given que eu estou na tela de musica
When eu clicar no botão de ranquear
Then a musica será ranqueada

Scenario: Ranquear podcast;
Given que eu estou na tela de podcast
When eu clicar no botão de ranquear
Then o podcast será ranqueado

Scenario: Ranquear artista;
Given que eu estou na tela de artista
When eu clicar no botão de ranquear
Then o artista será ranqueado
