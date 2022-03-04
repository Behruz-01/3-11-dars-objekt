// var numbers = [0, -54, 5, 6.6, -7.7, 9];


// function jon() {
//     var number = [];
//     for(var num of numbers){
//         if(num<0){
//             number.push( Math.round(Math.abs(num)))
//         }else{
//             number.push(Math.round(num))
//         }
//     }

//     return number;
// }
// console.log(jon(numbers));


var elForm = document.querySelector(".head__form");
var elInput = document.querySelector(".head__input");
var elButton = document.querySelector(".head__button");
var elList = document.querySelector(".head__list")
var todos = [];

elForm.addEventListener("submit", function(evt){
    evt.preventDefault();

    var inputValue = elInput.value.trim();

    elInput.value = null;

    var todo = {
        id:todos.length,
        title: inputValue,

    };

    todos.push(todo)
    elList.innerHTML = null;

    for(var item of todos){
        var Newli = document.createElement("li");
        Newli.textContent = item.title;
        elList.appendChild(Newli);
    }
});