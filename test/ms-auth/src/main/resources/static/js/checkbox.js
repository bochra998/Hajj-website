document.getElementById("radio5").addEventListener("click", myFunction);
document.getElementById("radio4").addEventListener("click",  Function);
    function myFunction() {
        var checkBox = document.getElementById("radio5");
        var text = document.getElementById("container2");
        if (checkBox.checked == true) {
            text.style.display = "flex";

        } else {
            text.style.display = "none";
        }
    }

    function Function() {
        var checkBox = document.getElementById("radio4");
        var text = document.getElementById("container2");
        if (checkBox.checked == true) {
            text.style.display = "none";

        } else {
            text.style.display = "flex";
        }
    }
