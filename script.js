//your JS code here. If required.
function submitForm() {
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const phoneNumber = document.getElementById("phoneNumber").value;
  const email = document.getElementById("email").value;
  const alertMessage = `First Name: ${firstName} \nLast Name: ${lastName} \nPhone Number: ${phoneNumber} \nEmail ID: ${email}`;
  alert(alertMessage);
}