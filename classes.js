// JavaScript for Class Scheduling
document.addEventListener('DOMContentLoaded', () => {
    const scheduleForm = document.getElementById('scheduleForm'); // Select the schedule form
    const confirmationMessage = document.getElementById('confirmation-message'); // Select the confirmation message paragraph

    // Event listener for form submission
    scheduleForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the default form submission

        const className = document.getElementById('class-name').value; // Get the selected class name
        const date = document.getElementById('date').value// JavaScript for Class Scheduling
        document.addEventListener('DOMContentLoaded', () => {
            const scheduleForm = document.getElementById('scheduleForm'); // Select the schedule form
            const confirmationMessage = document.getElementById('confirmation-message'); // Select the confirmation message paragraph
        
            // Event listener for form submission
            scheduleForm.addEventListener('submit', (event) => {
                event.preventDefault(); // Prevent the default form submission
        
                const className = document.getElementById('class-name').value; // Get the selected class name
                const date = document.getElementById('date').value; // Get the selected date
                const time = document.getElementById('time').value; // Get the selected time
        
                // Validate input
                if (className && date && time) {
                    // Display confirmation message
                    confirmationMessage.textContent = `Class Scheduled: You have successfully scheduled a ${className} class on ${date} at ${time}.`;
                    confirmationMessage.style.color = 'green'; // Set message color to green
                } else {
                    confirmationMessage.textContent = 'Please fill in all fields.';
                    confirmationMessage.style.color = 'red'; // Set message color to red
                }
        
                // Reset form fields after submission
                scheduleForm.reset();
            });
        });
        ; // Get the selected date
        const time = document.getElementById('time').value; // Get the selected time

        // Validate input
        if (className && date && time) {
            // Display confirmation message
            confirmationMessage.textContent = `Class Scheduled: You have successfully scheduled a ${className} class on ${date} at ${time}.`;
            confirmationMessage.style.color = 'green'; // Set message color to green
        } else {
            confirmationMessage.textContent = 'Please fill in all fields.';
            confirmationMessage.style.color = 'red'; // Set message color to red
        }

        // Reset form fields after submission
        scheduleForm.reset();
    });
});
