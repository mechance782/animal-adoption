document.getElementById('click').onclick = function() {
    let animalKind = document.getElementById('petKind').value;
    let qnty = document.getElementById("quantity").value;
    let color = document.getElementById("color").value;

    if(qnty > 1) {
        animalKind = animalKind + "s";
    } 
    document.getElementById("display").innerHTML = "You ordered " + qnty + " " + color + " " + animalKind + ".";

}