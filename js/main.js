window.addEventListener("load", function () {
  function sendData() {
    var XHR = new XMLHttpRequest();

    // Bind the FormData object and the form element
    var FD = new FormData(form);

    // Define what happens on successful data submission
    XHR.addEventListener("load", function(event) {
      alert(event.target.responseText);
    });

    // Define what happens in case of error
    XHR.addEventListener("error", function(event) {
      alert('Oups! Something goes wrong.');
    });

    // Set up our request
    XHR.open("POST", "http://formtoemail.com/user_forms.php");

    // The data sent is what the user provided in the form
    XHR.send(FD);
  }
 
  // Access the form element...
  var form = document.getElementById("myForm");

  // ...and take over its submit event.
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    sendData();
  });
});
