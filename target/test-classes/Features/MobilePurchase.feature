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
@mobile
Feature: Mobile Purchase
  I want to use this template for my feature file

  Background: 
    Given user launches flipkart application
    And user login to flipkart
	@smoke
  Scenario: Mobile
    When user search mobile
    And user choose the mobile and doing payments
    Then user receive order confirmation message
    And user quit the launches
	@smoke @sanity
  Scenario: Mobile one dimension list
    When user search mobile by using one dimensional list
      | Realme Mobiles | iphone | Vivo Mobiles |
    And user choose the mobile and doing payments
    Then user receive order confirmation message
    And user quit the launches

  Scenario: Mobile one dimension map
    When user search mobile by using one dimensional map
      | Phone1 | Realme Mobiles |
      | Phone2 | iphone         |
      | Phone3 | Vivo Mobiles   |
    And user choose the mobile and doing payments
    Then user receive order confirmation message
    And user quit the launches

  Scenario Outline: Mobile
    When user search mobile "<Phones>"
    And user choose the mobile and doing payments
    Then user receive order confirmation message
    And user quit the launches

    Examples: 
      | Phones         |
      | iphone         |
      | Realme Mobiles |
      | Redmi Mobiles  |
