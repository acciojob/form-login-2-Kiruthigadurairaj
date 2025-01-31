 function submitForm() {
            // Get the values from input fields
            const firstName = document.getElementById("firstName").value.trim();
            const lastName = document.getElementById("lastName").value.trim();
            const phoneNumber = document.getElementById("phoneNumber").value.trim();
            const email = document.getElementById("email").value.trim();

            // Format the alert message
            const alertMessage = `First Name: ${firstName} Last Name: ${lastName} Phone Number: ${phoneNumber} Email ID: ${email}`;

            // Display the alert
            alert(alertMessage);
        }