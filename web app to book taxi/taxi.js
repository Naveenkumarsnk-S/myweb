
function bookTaxi() {
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var location = document.getElementById("location").value;
    var destination = document.getElementById("destination").value;
    
    if (name && phone && location && destination) {
        alert("Thank you, " + name + "! Taxi booked from " + location + " to " + destination + ". We will contact you at " + phone + ".");
    } else {
        alert("Please fill in all the required fields");
    }
}
