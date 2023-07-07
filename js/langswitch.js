function switchLang() {
    var link = document.getElementById("switch");
    var enElements = document.getElementsByClassName("en");
    var czElements = document.getElementsByClassName("cz");
          
    for (var i = 0; i < enElements.length; i++) {
        if (enElements[i].style.display === "none") {
            enElements[i].style.display = "block";
            czElements[i].style.display = "none";
        } else {
            enElements[i].style.display = "none";
            czElements[i].style.display = "block";
        }
    }
}