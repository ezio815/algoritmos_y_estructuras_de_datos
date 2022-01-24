const generarId = () => {
    let id = "";
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            // Son 36 valores posibles: 0-9 y a-z. 0-35 ya que el 36 no está incluido
            const val = Math.floor(Math.random() * 36);
            if (val <= 9)
                // Le sumo 48 para obtener el codigo ascii de los números (48 es "0" en ascii)
                id += String.fromCharCode(val + 48);
            else
                // Le sumo 97 - 10 para obtener el código ascii de las letras minúsculas (97 es "a" en ascii), le resto los 10 posibles valores númericos (0-9)
                id += String.fromCharCode(val + 87);
        }
        if (i < 3) id += "-";
    }
    return id;
};

let id = generarId();
console.log(`La id vale: ${id}`);