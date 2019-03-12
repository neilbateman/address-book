// Business Logic for AddressBook ---------
function AddressBook() {
  this.contacts = []
}

AddressBook.prototype.addContact = function(contact) {
  this.contacts.push(contact);
}

// Business Logic for Contacts ---------
function Contact(firstName, lastName, phoneNumber) {
  this.firstName = firstName,
  this.lastName = lastName,
  this.phoneNumber = phoneNumber
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

$(document).ready(function() {
  $("form#input-number").submit(function(event) {
      event.preventDefault();
      var nameInput = $("input#name").val();
      var addressInput = $("input#address").val();
      var phoneInput = $("input#phone").val();
      var contact1 = new Contact(nameInput, addressInput, phoneInput);
      var contact2 = new Contact(document.getElementById("name").value, document.getElementById("address").value, document.getElementById("phone").value);
      $("#result").append(contact2) ;
      contact1.addContact();
  });
});
