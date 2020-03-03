var searchcontainer = document.getElementsByClassName("searchcontainer")[0];
var searchbox = document.getElementById("searchbox");
var show = document.getElementById("show");
var flag = false;
setInterval(function() {
    if (searchbox.value == "32.81 34.95" && !flag) {
        searchbox.setAttribute("disabled", "");
        show.removeAttribute("id");
        var waypoint = document.getElementById("map");
        waypoint.setAttribute("src", "waypointmap.png");
        return flag = true;
    };
}); // needs transition
for (const li of document.getElementById("stations").children) {
    li.firstChild.onclick = () => {
        for (const elem of searchcontainer.children) {
            if (elem.getAttribute("class") == "secondlayer") {
                elem.style.display = "unset";
            } else if (elem.getAttribute("class") == "menu") {
                elem.style.display = "none";
            }
        }
    };
}
