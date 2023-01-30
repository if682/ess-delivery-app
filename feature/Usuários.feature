Feature: conferência
As a member of a research group
I want to add, remove and modify conferencias I have published
so that I can generate web pages and reports containing these conferencias

Scenario: Order conference web by title
Given I am at the conference page
When I click on the column "title" at the conference list table
Then a list of conferences stored by the system is displayed at the conference page by ascending alphabetic 
Then teste