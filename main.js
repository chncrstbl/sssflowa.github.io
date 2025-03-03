function submitForm() {
    // Display the message
    document.getElementById('messageSent').style.display = 'block';

    // Reset the form
    document.getElementById('contactForm').reset();

    // Hide the message after 3 seconds
    setTimeout(function() {
        document.getElementById('messageSent').style.display = 'none';
    }, 3000);
}