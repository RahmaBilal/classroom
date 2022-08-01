//random notes

const max = (num) => {
    var maxNumbers = num[0]; 

    for (let i = 1; i < num.length; i++) {
       if(maxNumbers < num[i]) {
        maxNumbers = num[i];
       }
        
    }
    console.log(maxNumbers)
};

max([1, 2, 4, 0, 8]);


var h1 = document.querySelector(".time");
var main = document.querySelector("#main")
var seconds = 10;
function setHeader () {

    let timer = setInterval(function () {
        seconds--;
        h1.textContent = seconds;

        if (seconds === 0) {
            clearInterval(timer);
            addImage();
        }
    }, 1000);
}

function addImage() {
    let image = document.createElement("img");
    image.setAttribute("src", "./----");
    main.appendChild(image);

}
