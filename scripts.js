
var add = document.getElementById("addElem"),
    list = document.getElementById("list");
        
        
add.addEventListener("click", function(e) {
    var items = document.getElementsByTagName("li");
    list.innerHTML += "<li>item " + items.length + "</li>";
});
