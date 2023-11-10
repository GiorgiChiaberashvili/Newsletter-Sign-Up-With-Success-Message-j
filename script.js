
document.addEventListener('DOMContentLoaded', function () {
    // Get references to important elements
    const subscribeForm = document.forms['subscription'];
    const emailInput = document.getElementById('email');
    const errorText = document.getElementById('error');
    const successSection = document.getElementById('success');
    const dismissButton = document.getElementById('dismiss_btn');
    const desktopSection = document.getElementById('desktop');
    const input = document.querySelector('input')



    // Function to validate email
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Event listener for form submission
    subscribeForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Validate email
        const emailValue = emailInput.value.trim();
        if (validateEmail(emailValue)) {
            // Email is valid, hide desktop section and show success section
            desktopSection.style.display = 'none';
            errorText.style.display = 'none';
            successSection.style.display = 'block';
            emailInput.style.color = 'initial';
            emailInput.style.backgroundColor = 'initial';

        } else {
            // Invalid email, show error message
            errorText.style.display = 'block';
            input.style.border = " 1px solid red";
            input.style.backgroundColor = "hsla(4, 90%, 80%, 0.5)";
            emailInput.style.color = 'red';
        }
    });

    // Event listener for dismiss button
    dismissButton.addEventListener('click', function () {
        // Hide success section and show desktop section
        desktopSection.style.display = 'block';
        successSection.style.display = 'none';
        input.style.backgroundColor = "white"
        emailInput.style.color = 'initial';
        emailInput.style.border = "1px solid #dcdcdc";
        subscribeForm.reset();

    });

});
