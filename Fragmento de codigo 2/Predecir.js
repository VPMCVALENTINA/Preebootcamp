function muestraInformaciónContacto() {
    var auntContactInfo = ["Paula", "Smith", "Calle Principal 1234", "St. Louis", "MO", 12345];
    console.log(auntContactInfo);
}
/*
console.log(auntContactInfo) = ["Paula", "Smith", "Calle Principal 1234", "St. Louis", "MO", 12345];

Diagrama en T
Variables         valores
auntContactInfo   ["Paula", "Smith", "Calle Principal 1234", "St. Louis", "MO", 12345];

*/
function muestraListaDeCompras() {
    var produce = ["manzanas", "naranjas"];
    var frozen = ["brócoli", "helado"];
    frozen.push("croqueta de papa");
    console.log(frozen);
}
/*
Console.log(frozen)= ["brócoli", "helado", "croqueta de papa"];

Diagrama en T
variables     valores
produce = ["manzanas", "naranjas"];
frozen = ["brócoli", "helado"];
frozen = ["brócoli", "helado", "croqueta de papa"];
*/
var movieLibrary = ["Bambi", "E.T.", "Toy Story"];
movieLibrary.push("Zoro");
movieLibrary[1] = "Beetlejuice";
console.log(movieLibrary);
/*
console.log(movieLibrary)=["Bambi", "E.T.", "Toy Story","Zoro"],["Beetlejuice"]

Diagrama en T
Variables      Valores
movieLibrary = ["Bambi", "E.T.", "Toy Story"];
movieLibrary = ["Bambi", "E.T.", "Toy Story","Zoro"];
movieLibrary = ["Bambi", "E.T.", "Toy Story","Zoro"],["Beetlejuice"]
*/
