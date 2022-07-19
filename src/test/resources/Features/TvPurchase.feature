#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template
Feature: Tv Purchase
  I want to use this template for my feature file

  Scenario: Tv
    Given user launches flipkart application
    And user login to flipkart
    When user search Tv
    And user choose the Tv and doing payments
    Then user receive order confirmation message
    And user quit the launches

  Scenario: Tv one dimension list
    Given user launches flipkart application
    And user login to flipkart
    When user search Tv by using one dimensional list
      | Realme Tv | Sony Tv | SAMSUNG Tv |
    And user choose the Tv and doing payments
    Then user receive order confirmation message
    And user quit the launches

  Scenario: Tv one dimension map
    Given user launches flipkart application
    And user login to flipkart
    When user search Tv by using one dimensional map
      | Tv1 | Realme Tv  |
      | Tv2 | Sony Tv    |
      | Tv3 | SAMSUNG Tv |
    And user choose the Tv and doing payments
    Then user receive order confirmation message
    And user quit the launches

  Scenario Outline: Tv
    Given user launches flipkart application
    And user login to flipkart
    When user search Tv "<Tv>"
    And user choose the Tv and doing payments
    Then user receive order confirmation message
    And user quit the launches

    Examples: 
      | Tv         |
      | Realme Tv  |
      | Sony Tv    |
      | SAMSUNG Tv |
