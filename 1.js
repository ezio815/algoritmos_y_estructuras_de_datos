const arr = ["a", 10, "b", "hola", 122, 15];

const letras = [];
const numeros = [];
let mayor;

arr.forEach(ele => {
    if (/[a-z]{1}/.test(ele) && ele.length === 1) letras.push(ele);
    if (typeof ele === "number") {
        numeros.push(ele);
        if ((!mayor && mayor !== 0) || mayor < ele) mayor = ele;
    }
});

console.log(`letras = [${letras}]\nnumeros = [${numeros}]\nmayor = ${mayor}`);