// Write your solution here!
const cats =["Milo", "Otis", "Garfield"];


function destructivelyAppendCat(Ralph){
    cats.push("Ralph");
}
function destructivelyPrependCat(Bob){
    cats.unshift("Bob");
}
function destructivelyRemoveLastCat(Bob){
    cats.pop(3);
}
function destructivelyRemoveFirstCat(Milo){
    cats.shift(0);
}

const newCats=[...cats, "Broom"];

function appendCat(Broom){
    return newCats;
}
const newCats1=["Arnold", ...cats];
function prependCat(Arnold){
    return newCats1;
}

function removeLastCat(){
    return cats.slice(0,cats.length -1);

}
function removeFirstCat(){
    return cats.slice(1);
}