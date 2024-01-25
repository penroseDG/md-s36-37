function createStudent() {
    var id = document.getElementById("studentId").value;
    var name = document.getElementById("studentName").value;
    var age = document.getElementById("age").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
  
    console.log("Student Created:");
    console.log("Id: " + id);
    console.log("Name: " + name);
    console.log("Age: " + age);
    console.log("Phone: " + phone);
    console.log("Email: " + email);

    document.getElementById("studentId").value = "";
    document.getElementById("studentName").value = "";
    document.getElementById("age").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("email").value = "";
  }