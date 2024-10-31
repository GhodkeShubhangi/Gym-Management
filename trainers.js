// Sample data for trainers (this would normally come from a database)
const trainers = [
    {
        name: "John Doe",
        expertise: "Weight Training",
        contact: "john.doe@example.com"
    },
    {
        name: "Jane Smith",
        expertise: "Yoga",
        contact: "jane.smith@example.com"
    },
    {
        name: "Mike Johnson",
        expertise: "Cardio",
        contact: "mike.johnson@example.com"
    },
    // Add more trainer data as needed
];

// Function to populate the table with trainers
function populateTrainers() {
    const tableBody = document.querySelector('tbody'); // Select the tbody element
    tableBody.innerHTML = ""; // Clear any existing rows

    trainers.forEach(trainer => {
        const row = document.createElement('tr'); // Create a new table row

        row.innerHTML = `
            <td>${trainer.name}</td>
            <td>${trainer.expertise}</td>
            <td>${trainer.contact}</td>
        `; // Populate the row with trainer data

        tableBody.appendChild(row); // Append the new row to the table body
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    populateTrainers(); // Call the function to populate the trainers when the page loads
});
