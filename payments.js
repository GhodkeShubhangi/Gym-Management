// Sample payment data
const paymentsData = [
    { memberName: "John Doe", amount: 50, status: "Pending" },
    { memberName: "Jane Smith", amount: 75, status: "Completed" },
    { memberName: "Emily Johnson", amount: 100, status: "Pending" }
];

// Function to populate the payments table
function populatePaymentsTable() {
    const paymentsTableBody = document.querySelector('#paymentsTable tbody');

    paymentsData.forEach((payment, index) => {
        const row = document.createElement('tr');
        
        // Create cells for each data point
        const nameCell = document.createElement('td');
        nameCell.textContent = payment.memberName;

        const amountCell = document.createElement('td');
        amountCell.textContent = `$${payment.amount}`;

        const statusCell = document.createElement('td');
        statusCell.textContent = payment.status;

        const actionsCell = document.createElement('td');
        const completeButton = document.createElement('button');
        completeButton.textContent = "Complete";
        completeButton.onclick = () => markAsCompleted(index);
        
        actionsCell.appendChild(completeButton);
        row.appendChild(nameCell);
        row.appendChild(amountCell);
        row.appendChild(statusCell);
        row.appendChild(actionsCell);
        paymentsTableBody.appendChild(row);
    });
}

// Function to mark payment as completed
function markAsCompleted(index) {
    // Update the status in the data array
    if (paymentsData[index].status === "Pending") {
        paymentsData[index].status = "Completed";
        // Refresh the table to reflect the changes
        refreshPaymentsTable();
    }
}

// Function to refresh the payments table
function refreshPaymentsTable() {
    const paymentsTableBody = document.querySelector('#paymentsTable tbody');
    paymentsTableBody.innerHTML = ''; // Clear the existing rows
    populatePaymentsTable(); // Repopulate the table
}

// Populate the payments table on page load
document.addEventListener('DOMContentLoaded', populatePaymentsTable);
