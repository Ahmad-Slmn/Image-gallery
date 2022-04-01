let button = document.getElementsByClassName("btn");

let img = document.getElementById("banner");

button[0].onclick = function () {

    img.src = "images/pic1.jpg";

    animate();

    this.classList.add("active")


}

button[1].onclick = function () {

    img.src = "images/pic2.jpg";

    animate();

    this.classList.add("active")
}

button[2].onclick = function () {

    img.src = "images/pic3.jpg";

    animate();

    this.classList.add("active")
}

function animate() {

    img.classList.add("zoom");

    setTimeout(function () {

        img.classList.remove("zoom")

    }, 500);

    for (b of button) {

        b.classList.remove("active")
    }
}
