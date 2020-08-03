Feature: Create user
  Scenario: Create user using API
    Given create new User
    When start page
    Then login by User
