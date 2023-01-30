Cenário C
Feature: conferência
As a member of a research group
I want to add, remove and modify conferencias I have published
so that I can generate web pages and reports containing these conferencias

Scenario: Order conference web by title
Given I am at the conference page
When I click on the column "title" at the conference list table
Then a list of conferences stored by the system is displayed at the conference page by ascending alphabetic order

Cenário B
Feature: Book Chapter
As a member of a research group
I want to add, remove and modify book chapters I have published so that I can generate web pages and reports containing these book chapters

Scenario: new book chapter web
Given I am at the book chapter page
And the system has no book chapter entitled "Next Generation Software Product Line Engineering"
When I go to new book chapter page
And I use the webpage to create the book chapter "Next Generation Software Product Line Engineering" with file name "Ngs.pdf"
Then the book chapter "Next Generation Software Product Line Engineering" was stored by the system
And it is shown in the book chapter list with title "Next Generation Software Product Line Engineering"
And adicao teste de mudanca no final do arquivo