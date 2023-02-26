


function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "tusharsn2001@gmail.com",
        Password : "",
        To : 'tusharsn2001@gmail.com.com',
        From : document.getElementById('email').value,
        Subject : "New Contact form enquiry",
        Body : "Name: "+ document.getElementById('name').value
        + "<br> Email : "+ document.getElementById('email')
        + "<br> Subject : "+ document.getElementById('sub')
        + "<br> Message : "+ document.getElementById('message')
    }).then(
      message => alert("Message Sent Succesfully")
    );
}