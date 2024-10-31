document.addEventListener('DOMContentLoaded', function() {
    const joinBtn = document.getElementById('mainBtn');
    const joinForm = document.getElementById('joinForm');
    const submitBtn = document.getElementById('mainbtn');

    joinBtn.addEventListener('click', function() {
        joinForm.style.display = 'block'; // Show join form
    });

    submitBtn.addEventListener('click', function() {
        const name = document.getElementById('names').value.trim();
        const number = document.getElementById('number').value.trim();

        if (name === "" || number === "") {
            alert("Please fill out both fields.");
        } else if (isNaN(number) || number.length < 10) {
            alert("Please enter a valid phone number.");
        } else {
            alert(`Thank you, ${name}! We will contact you at ${number} soon.`);
            // Clear input fields after submission
            document.getElementById('names').value = '';
            document.getElementById('number').value = '';
            joinForm.style.display = 'none'; // Optionally hide form again
        }
    });
});
