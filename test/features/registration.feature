Feature: User Registration

  Scenario: Fill out the registration form
    Given the user is on the registration page
    When the user enters the first name as "Test"
    And the user enters the email as "uk@pre.com"
    And the user enters the phone number as "9856457887"
    And the user chooses the gender
    And the user chooses the years of experience
    And the user chooses skills
    And the user chooses tools
    And the user enters details as "Test"
    And the user clicks the submit button
    Then the registration should be successful
