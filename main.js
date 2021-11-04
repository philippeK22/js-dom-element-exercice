// EXERCICE 6

// 1

let afficheH3 = document.getElementById("content");
console.log(afficheH3.firstElementChild);

// 2

let diese = document.getElementById("titreNiv3");
console.log(diese);

// 3

let diese = document.getElementById("titreNiv3");
console.log(diese.previousElementSibling);


// 4

let petitPara = document.getElementsByClassName("petitParagraphe")[0];
console.log(petitPara.nextElementSibling);


// 5



let parentClass = document.getElementsByClassName('important')[0];
console.log(parentClass.parentElement);



// 6

let idiese = document.getElementById("listElements").parentElement;
console.log(idiese.firstElementChild);

// 7

let parentClass = document.getElementsByClassName('important');
let children = parentClass[parentClass.length-1].nextElementSibling;
console.log(children);


// 8

let textGen = document.getElementById("textGeneral");
console.log(textGen.nextElementSibling.nextElementSibling);

// 9

let footer = document.getElementById("footer");
let span = footer.getElementsByTagName("span")[0];
console.log(span);
let spanParent = span.parentElement;
console.log(spanParent.nextElementSibling.firstElementChild);

// 10
 let spanInit = document.getElementsByTagName("b")[2];
 console.log(spanInit);
 console.log(spanInit.parentElement.parentElement.previousElementSibling.firstElementChild.firstElementChild);

// 11

let query = document.querySelector(".grandParagraphe");
console.log(query);

// 12

let liAll = document.querySelectorAll("li");
console.log(liAll);

let arrayLi = [...liAll];
console.log(arrayLi);
console.log(arrayLi);

arrayLi.forEach(el => {
    console.log(el.textContent);
    
});

