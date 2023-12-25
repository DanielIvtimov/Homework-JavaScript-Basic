const contacts = [];
function saveContact() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    let newContact = {
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
    };
    contacts.push(newContact);
    displayContacts();
    document.getElementById("contactForm").reset();
}
function displayContacts() {
    const table = document.getElementById("contactTable");
    table.innerHTML = `<tr><th>First Name</th><th>Last Name</th><th>Phone Number</th><th>Action</th></tr>`;
    for (let i = 0; i < contacts.length; i++) {
        const contact = contacts[i];
        const row = table.insertRow(i + 1);
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        const cell4 = row.insertCell(3);
        cell1.innerHTML = contact.firstName;
        cell2.innerHTML = contact.lastName;
        cell3.innerHTML = contact.phoneNumber;
        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Delete";
        deleteButton.onclick = function () {
            deleteContact(i);
        };
        cell4.appendChild(deleteButton);
        const editButton = document.createElement("button");
        editButton.innerHTML = "Edit";
        editButton.onclick = function () {
            editContact(i);
        };
        cell4.appendChild(editButton);
    }
}
function deleteContact(index) {
    contacts.splice(index, 1);
    displayContacts();
}
function editContact(index) {
    const contact = contacts[index];
    document.getElementById("firstName").value = contact.firstName;
    document.getElementById("lastName").value = contact.lastName;
    document.getElementById("phoneNumber").value = contact.phoneNumber;
    contacts.splice(index, 1);
    displayContacts();
}

