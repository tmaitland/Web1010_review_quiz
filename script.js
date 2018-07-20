
//2// Create 5 variables in a js file that is linked to your html file 

var head2 = document.querySelector(".head2")
var firstPara = document.querySelector(".firstPara")
var container = document.querySelector("#container")
var clickMi = document.querySelector(".clickMi")
var input = document.querySelector("input[type=text]")

function doStuff(input, src){
    container.innerHTML += `
        <img src=${src} alt="cat jumps">
    `
    firstPara.textContent = input
}

function loopIt(num){
    for(var i=1; i<=num; i++){
        var inp = input.value 
        doStuff(inp, 'https://www.gettyimages.com/gi-resources/images/Embed/new/embed2.jpg')  
    }

}

clickMi.addEventListener("click", function(){
    var inp = input.value 
    doStuff(inp, 'https://www.gettyimages.com/gi-resources/images/Embed/new/embed2.jpg')
    loopIt(4)
})

