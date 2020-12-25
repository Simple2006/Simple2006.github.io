function openNav() {
    document.getElementById("mySidebar").style.width = "28rem";
    document.getElementById("main").style.marginLeft = "250px";
}
  
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

function colorChange() {
    document.getElementById("plus-minus").style.color = "blue";
}

function showHard() {
    const elements = document.getElementsByClassName("notHard");
    var e;
    var x;
    var y = elements[0];
    if (y.style.display != "none") {
        for (e of elements) {
            e.style.display = "none";
        }
    }
    else {
        for (x of elements) {
            x.style.display = "block";
        }
    }
}

function showSchool() {
    const elements = document.getElementsByClassName("notSchool");
    const hidden = document.getElementById("nothingFound");
    const button = document.getElementById("mycheck");
    var e;
    var x;
    var y = elements[0];
    if (!y.length) {
        hidden.style.display = "block";
    }
    if (y.style.display != "none") {
        for (e of elements) {
            e.style.display = "none";
        }
    }
    else {
        for (x of elements) {
            x.style.display = "block";
        }
        hidden.style.display = "none";
    }
<<<<<<< HEAD
}
=======
}
>>>>>>> 65a6ec86f396621003e5b094306d815f941a4be2
