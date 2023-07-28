### FizzBizz by Mohammed Saffath


Clone the repository using the following command:

git clone https://github.com/MohammedSaffath/FizzBizz.git

Navigate to the backend directory:

`$ cd blckbx backend`

# Run the backend server:

`$ python app.py`
The backend API should now be running on http://localhost:5000 You can access the API endpoint


# Frontend (ReactJS)
Navigate to the frontend directory: 
(Make sure to go back to the root directory using cd ..)

`$ cd blckbx`


Start the frontend development server:
`$ npm install`
`$ npm start`

# Security 
In the above project, I have hard-coded the user credentials which is less than ideal and optimal. A proper authentication mechanism would require a database implementation and implementing OAuth requires integrating with OAuth provider APIs eg Google (which is outside the scope of this project, I presume)

Addressing security risks through input validation, XSS prevention in React, CSRF token implementation, secure configuration, and avoidance of deserialization from untrusted sources. While sensitive data exposure is mitigated through encryption, missing function-level access control is managed with role-based access control. Safe practices and secure API endpoints protect against XSSI. Regular updates guard against vulnerabilities and logging and monitoring enhance incident detection and response


# Additional security measures for a larger project includes:

1. Adding two-factor authentication (2FA) will increase the security of user authentication.

2. Use OAuth2 for secure user authentication and authorization when interacting with third-party applications.

3. Implementing secure session handling and token-based authentication is known as secure session management.

4. Security Code Reviews: Having seasoned developers or security professionals perform regular security code reviews.

5. Security testing: Performing routine security testing, such as vulnerability scanning and penetration testing.

