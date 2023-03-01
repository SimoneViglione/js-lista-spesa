const spesa = ["Pasta", "Fagioli", "Uova", "Acqua", "AK-47 con castello Type 2"];

let i = 0;

const spesaDom = document.getElementById("lista_spesa")

while (i < spesa.length) {
    let liDom = document.createElement("li");

    liDom.innerText = spesa[i];

    spesaDom.append(liDom);

    i++;
}