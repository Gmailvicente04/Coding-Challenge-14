// Task 1: Creating the Base Structure

// Task 2: Adding Support Tickets Dynamically
function addSupportTicket(name, issue, priority) {
    const ticketContainer = document.getElementById("ticketContainer");
    const ticket = document.createElement("div");
    ticket.classList.add("ticket");
    
    const customerName = document.createElement("h3");
    customerName.textContent = name;
    
    const issueDesc = document.createElement("p");
    issueDesc.textContent = issue;
    
    const priorityLabel = document.createElement("span");
    priorityLabel.textContent = `Priority: ${priority}`;
    ticket.classList.add(priority.toLowerCase()); // Add priority class
    
    const resolveButton = document.createElement("button");
    resolveButton.textContent = "Resolve";
    resolveButton.addEventListener("click", function(event) {
        event.stopPropagation();
        ticketContainer.removeChild(ticket);
    });
    
    ticket.appendChild(customerName);
    ticket.appendChild(issueDesc);
    ticket.appendChild(priorityLabel);
    ticket.appendChild(resolveButton);
    
    ticketContainer.appendChild(ticket);
}