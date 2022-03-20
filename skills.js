
$(document).on('click', '#sendem', function(){
  getvalues();
});

function getvalues(){
var Email=$('#email').val();
var Name=$('#Name').val();
var PhoneNumber=$('#PhoneNumber').val();
var Subject=$('#Subject').val();
var Comments=$('#Comments').val();

if(Email==""||Name==""||PhoneNumber==""||Subject==""||Comments==""){
alert("Please enter values");
return false;
}

sendEmail()
}

function sendEmail() {
 var form=$("#contact")
 debugger;
  Email.send({
   
    Host: "smtp.gmail.com",
    Username: "sems.sahilv@gmail.com",
    Password: "qohxmrdiypmcmxls",

    To: $('#email').val(),
    From: "sems.sahilv@gmail.com",
    cc:$('#Subject').val(),
    Subject: $('#Subject').val(),
    Body: "Name:" +$('#Name').val()
    +"<br> Phone Number:" +$('#number').val()
    + "<br> Email:" +$('#email').val() +"<br> Body:" +$('#Comments').val() ,
    /*Attachments: [
      {
        name: "File_Name_with_Extension",
        path: "Full Path of the file"
      }]*/
  })
 
    .then(function (message) {
      debugger;
      alert("Mail has been sent successfully")
      window.location.reload()

    });
}