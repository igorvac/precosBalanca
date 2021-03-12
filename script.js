
function calcularPeso() {
    let kg = document.getElementById("kg").value;
    let ba = document.getElementById("ba").value;
    const result = document.getElementById("result");
    ba = convert(ba);
    kg = convert(kg);
    let r = (kg * ba);
    
    result.innerHTML = r.toLocaleString("pt-BR", {style: 'currency', currency: 'BRL'});
}

function calcularValor() {
    let kg = document.getElementById("kg").value;
    let rs = document.getElementById("rs").value;
    const result = document.getElementById("result");

    rs = convert(rs);
    kg = convert(kg);

    let r = (rs / kg);
    result.innerHTML = r.toFixed(3) + " Kg";


}

function convert(value) {
    let result = '';
    const v = value.split('');
    for (let i = 0; i < v.length; i++) {
        if (v[i] === ",") {
            v[i] = ".";
        }
        result += v[i];
    }
    return parseFloat(result);
}