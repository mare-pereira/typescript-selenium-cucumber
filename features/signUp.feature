Feature: Sign Up
    As a not yet grip user
    I want to become a grip user
    In order to user their software

Scenario: Sign up with correct information
    Given the user is at the login page
    When the user signs up informing his correct information
    Then the page after the login page will be shown

Scenario: Sign up with correct information
    Given the user is at the login page
    When the user signs up informing incorrect information
    Then an error message related to the incorrect information will be shown
    And the page after the login page will not be shown