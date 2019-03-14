// Business Logic for AddressBook ---------

// Business Logic for Contacts ---------
function Contact(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.addresses = [];
}

function Address(street, city, state) {
  this.street = street;
  this.city = city;
  this.state = state;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}
Address.prototype.fullAddress = function () {
  return this.street + ", " + this.city + " " + this.state;
};

$(document).ready(function() {
  $("form#input-number").submit(function(event) {
      event.preventDefault();
      var firstInput = $("input#first").val();
      var lastInput = $("input#last").val();
      var streetInput = $("input#street").val();
      var cityInput = $("input#city").val();
      var stateInput = $("input#state").val();
      var newContact = new Contact(firstInput, lastInput);

      var newAddress = new Address(streetInput, cityInput, stateInput);
      $("#show-contact").show();
      $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
      $(".address-loc").append( newAddress.fullAddress());
      $("#show-contact h2").text(newContact.firstName);
      /*$(".contact").last().click(function() {
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.firstName);
      $(".first-name").append(newContact.firstName);
      $(".last-name").append(newContact.lastName);
    });*/
  });
});
