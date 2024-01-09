function downloadResume() {

    var link = document.createElement("a");
    //link.href = "path/to/your/resume.pdf";
    link.href = "https://drive.google.com/file/d/1jFW-oIKM4wFKAKdwoDZ_1wTebLgGDdM7/view?usp=sharing";
   
    link.download = "Maansi_Manmode_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}



/**************************************/

var roles = ["Full Stack Developer", "Java Developer", "Frontend Developer"];
var roleIndex = 0;

setInterval(function () {
    changeDeveloperRole();
}, 2000); 

function changeDeveloperRole() {
    document.getElementById('developerRole').innerText = 'I\'m a passionate ' + roles[roleIndex];
    roleIndex = (roleIndex + 1) % roles.length;
}


/**************************************/

function validateForm() {
    var fullName = document.forms["contactForm"]["fullName"].value;
    var email = document.forms["contactForm"]["email"].value;
    var mobile = document.forms["contactForm"]["mobile"].value;
    var message = document.forms["contactForm"]["message"].value;
    var errorMessage = "";

    if (fullName === "" || email === "" || mobile === "" || message === "") {
        errorMessage = "All fields are required";
    }

    document.getElementById("errorMessage").innerText = errorMessage;

    // If there are no errors, you can perform further actions here
    if (errorMessage === "") {
        // Perform additional actions or submit the form to the server
        alert("Form submitted successfully!");
    }
}