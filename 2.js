const hash = new Map();

hash.set("suma", arr => {
    let res = 0;
    arr.forEach(ele => {
        if (typeof ele !== "number")
            throw Error("Debes ingresar un arreglo de números como parámetro.");
        res += ele;
    });
    return res;
})

hash.set("resta", arr => {
    let res;
    arr.forEach(ele => {
        if (typeof ele === "number") {
            if (!res && res !== 0) res = ele;
            else res -= ele;
        }
        else throw Error("Debes ingresar un arreglo de números como parámetro.");
    });
    return res;
})

hash.set("multiplicacion", arr => {
    let res = 1;
    arr.forEach(ele => {
        if (typeof ele !== "number") 
            throw Error("Debes ingresar un arreglo de números como parámetro.");
        res *= ele;
    });
    return res;
});

hash.set("division", (a, b) => {
    if (typeof a === "number" && typeof b === "number"){
        if (b === 0)
            throw Error("No se puede dividir entre 0.")
        return a / b;
    }
    throw Error("Los parámetros deben ser números.");
});

try {
    // Parámetro para suma, resta y multiplicación
    let par = [1, 2, 3, 4] // Ingresar parámetro deseado

    // Estos parámetros son sólo para la división
    let par_1 = 1 // Ingresar parámetro deseado
    let par_2 = 0 // Ingresar parámetro deseado

    // Función deseada
    let funcion = "division" // Ingresar nombre de la función entre comillas

    
    if (funcion === "division")
        console.log(hash.get(funcion)(par_1, par_2));
    else
        console.log(hash.get(funcion)(par));
}
catch (err) {
    console.error(err);
}