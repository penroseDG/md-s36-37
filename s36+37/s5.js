function addItem() {
    var x = document.getElementById("myInput").value;
    var div = document.getElementById("items");
    div.innerHTML += "<p>• " + x + "</p>";
    document.getElementById("myInput").value = "";
};