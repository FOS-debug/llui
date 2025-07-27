const validToken = "s3cr3tT0k3n!2025";

function getCredentials() {
    // Get the token from the query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');

    // Check if the token is valid
    if (token !== validToken) {
        console.error('Invalid access token');
        return null;
    }

    // Return the credentials data
    return [
        {
            "AccountId": "1001",
            "Username": "access",
            "Email": "john.doe@example.com",
            "Password": "1234",
            "Balance": 5000,
            "lockout": 0,
            "deactivated": 0,
            "verificationCode": "123456"
        },
        {
            "AccountId": "1002",
            "Username": "jane_smith",
            "Email": "jane.smith@example.com",
            "Password": "securepass456",
            "Balance": 7500,
            "lockout": 2,
            "deactivated": 0,
            "verificationCode": "789012"
        },
        {
            "AccountId": "1003",
            "Username": "bob_jones",
            "Email": "bob.jones@example.com",
            "Password": "bobpass789",
            "Balance": 3000,
            "lockout": 3,
            "deactivated": 0,
            "verificationCode": "456789"
        }
    ];
}
