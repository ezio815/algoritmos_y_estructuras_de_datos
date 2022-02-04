const arr = [1, 11, "a", "b", 123];
let a = 10;
let b = false;
for (let i of arr) {
    if (i === a) {
        b = true;
        break;
    }
}
if (b) console.log(`${a} pertenece al array.`);
else console.log(`${a} no pertenece al array.`);