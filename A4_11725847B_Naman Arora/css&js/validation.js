document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById('newsletterSignupPage')) {
        alert("Welcome to NovaTech Corporation Ltd. - Newsletter Signup");
    }

    const form = document.getElementById('signupForm');
    form.addEventListener('submit', function(event) {
        const firstName = document.getElementById('firstName').value.trim();
        const lastName = document.getElementById('lastName').value.trim();
        
        if (firstName === '' || lastName === '') {
            alert('First Name and Last Name cannot be empty.');
            event.preventDefault();
        }
        else {
            alert('Thank you for signing up for our newsletter, ' + firstName + '!');
            
            document.body.innerHTML = '<h1>Thank you for signing up, ' + firstName + '!</h1>' + 
                                      '<p>We will send updates to the email address you provided.</p>' +
                                      '<button onclick="window.location.href=\'index.html\'">Return to Home</button>';
        }
    });
});
