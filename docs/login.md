<h2>Funcionality: Website login</h2>

<h3>Scenario: Login with valid credentials</h3>

**Preparation:** ensure that the user is registered in the system with the attribute email = **julie@email.com** and password = **Password123**

**Given** that I am a user registered with the email “julie@email.com” and password “Password123” in Adopet, **when** I access the login page, fill in the email and password fields with my access data **and** click on the “Entrar” button, **then** I should be redirected to the home page.

<h3>Scenario: System login failed</h3>

**Given** the user is on the login page, **when** the user inputs an invalid email and an incorrect password **and** clicks the "Entrar" button, **then** the system validates the credentials provided and displays specific error messages for the incorrectly entered email and password.

**Business rules:** 
1. The email must be in a valid format.
2. The password must contain at least one capital letter, one number and be between 6 and 15

