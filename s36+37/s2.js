function changeButtonText() {
    var button = document.getElementById("myButton");
    
    if (button.innerHTML === "Click me") {
        button.innerHTML = "Button Clicked!";
    } else {
        button.innerHTML = "Click me";
    }
}
