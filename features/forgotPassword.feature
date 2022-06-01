Feature: Forgot Password
    As a grip user
    I want to retrieve my forgotten password
    In order to be able to login

Scenario: Request new password with correct email
    Given the user is at the login page
    When the user request a new password by the forgot password feature using his correct e-mail
    Then a message informing that the user will receive his new password is shown
    And the user receives the password reset information

Scenario: Request new password with incorrect email
    Given the user is at the login page
    When the user request a new password by the forgot password feature using an incorrect valid e-mail
    Then a message informing that the user will receive his new password is shown
    And the user does not receive the password reset information

Scenario: Request new password with correct email after correcting it
    Given the user is at the login page
    And the user informs his incorrect e-mail at the login page
    When the user correct the e-mail at the confirmation page before requesting new password
    Then a message informing that the user will receive his new password is shown
    And the user receives the password reset information