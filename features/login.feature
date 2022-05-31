Feature: Login with registered user

Scenario: Login with registered user

    Given the user is at the login page
    When the user informs his credentials
    Then the home page is shown

Scenario: Try to login with unregistered user e-mail

    Given the user is at the login page
    When the user informs his unregistered e-mail
    Then an error message related to the wrong credentials will be shown
    And the user is not able to inform the password

Scenario: Try to login with wrong password

    Given the user is at the login page
    When the user informs his correct e-mail and wrong password
    Then an error message related to the wrong credentials will be shown
    And the user is not able move to the next page


Scenario: Try to login with invalid e-mail
    
    Given the user is at the login page
    When the user informs an invalid e-mail
    Then an error message related to the wrong e-mail will be shown
    And the user is not able to inform the password

