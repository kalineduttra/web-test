<h2>Funcionality: Registration in the Adopet system</h2>

<h3>Scenario: Successfully register on the website</h3>

**Given** that the user accessed the registration page, **when** the user fills in the registration data fields correctly **and** click on the "Cadastrar" button, **then** the system must register the user in Adopet

**Business rules:** 
<h4> Email and password are mandatory fields for registration. <h4>
<h4> The password must contain at least one capital letter, one number and be between 6 and 15 characters long <h4>

| Password size | Capital letter | Number |    Result   |
|---------------|----------------|--------|-------------|
|     < 6       |       Y        |   Y    |     Fail    |
|     <= 6      |       Y        |   Y    |     Fail    |
|  > 6 and < 15 |       Y        |   Y    |    Sucess   |
|     >=15      |       Y        |   Y    |     Fail    |


<h3>Scenario: Registration attempt fails</h3>

**Given** that the user accesses the registration page, **when** the user leaves the required fields blank **and** clicks on the register button, **then** the system validates the blank fields and displays an error message to the user.

