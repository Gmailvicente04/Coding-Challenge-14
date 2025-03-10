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

// Task 3: Highlighting High Priority Tickets
function highlightHighPriorityTickets() {
    const highPriorityTickets = Array.from(document.querySelectorAll(".high"));
    highPriorityTickets.forEach(ticket => {
        ticket.style.backgroundColor = "red";
        ticket.style.color = "white";
    });
}
// Task 4: Implementing Ticket Resolution with Event Bubbling
document.getElementById("ticketContainer").addEventListener("click", function() {
    console.log("A ticket was clicked!");
});

// Task 5: Inline Editing of Support Tickets
function enableInlineEditing(ticket) {
    ticket.addEventListener("dblclick", function() {
        const name = ticket.querySelector("h3").textContent;
        const issue = ticket.querySelector("p").textContent;
        const priority = ticket.querySelector("span").textContent.replace("Priority: ", "");
        
        ticket.innerHTML = "";
        
        const nameInput = document.createElement("input");
        nameInput.value = name;
        
        const issueInput = document.createElement("input");
        issueInput.value = issue;
        
        const priorityInput = document.createElement("input");
        priorityInput.value = priority;
        
        const saveButton = document.createElement("button");
        saveButton.textContent = "Save";
        saveButton.addEventListener("click", function() {
            ticket.innerHTML = "";
            addSupportTicket(nameInput.value, issueInput.value, priorityInput.value);
        });
        
        ticket.appendChild(nameInput);
        ticket.appendChild(issueInput);
        ticket.appendChild(priorityInput);
        ticket.appendChild(saveButton);
    });
}
