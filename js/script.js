const btnCalcular = document.querySelector('#btn-calcular');
const btnClear = document.querySelector('#btn-clear');
const divCalculo = document.querySelector('.calculo-imc');

const inputPeso = document.querySelector('.input-peso');
const inputAltura = document.querySelector('.input-altura');

btnCalcular.addEventListener('click', (event) => {
    event.preventDefault();
    
    let peso = parseFloat(inputPeso.value);
    let altura = parseFloat(inputAltura.value);

    if (!peso || !altura || peso <= 0 || altura <= 0) {
        return window.alert('Insira valores válidos e positivos para peso e altura!');
    }

    if (altura > 3) {
        altura = altura / 100;
    }

    const calculoImc = peso / (altura * altura);

    let situacaoAtual;
    let cor;

    resetarCores(); // Limpa cores antigas antes de aplicar a nova

    if (calculoImc < 18.5) {
        situacaoAtual = 'MAGREZA';
        cor = 'red';
        mudarCor1();
    } else if (calculoImc >= 18.5 && calculoImc < 25) {
        situacaoAtual = 'NORMAL';
        cor = 'green';
        mudarCor2();
    } else if (calculoImc >= 25 && calculoImc < 30) {
        situacaoAtual = 'SOBREPESO';
        cor = 'orange';
        mudarCor3();
    } else if (calculoImc >= 30 && calculoImc < 40) {
        situacaoAtual = 'OBESIDADE';
        cor = 'red';
        mudarCor4();
    } else {
        situacaoAtual = 'OBESIDADE GRAVE - ATENÇÃO!';
        cor = 'darkred';
        mudarCor5();
    }

    divCalculo.style.display = "block";

    divCalculo.innerHTML = `
            <p class="p-resultadoImc">SEU IMC ${calculoImc.toFixed(2)}</p>
            <p class="p-situacaoAtual" style="color:${cor};">SITUAÇÃO: ${situacaoAtual}</p>
    `;
});

btnClear.addEventListener('click', (e) => {
    e.preventDefault();
    inputPeso.value = '';
    inputAltura.value = '';
    divCalculo.innerHTML = '';
    divCalculo.style.display = "none";
    resetarCores();
});

function resetarCores() {
    const ids = ["opcao01", "opcao02", "opcao03", "opcao04", "opcao05"];
    ids.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.style.backgroundColor = "";
        }
    });
}

function mudarCor1(){
    let th = document.getElementById("opcao01");
    if(th) th.style.backgroundColor = "red";
}
function mudarCor2(){
    let th = document.getElementById("opcao02");
    if(th) th.style.backgroundColor = "green";
}
function mudarCor3(){
    let th = document.getElementById("opcao03");
    if(th) th.style.backgroundColor = "orange";
}
function mudarCor4(){
    let th = document.getElementById("opcao04");
    if(th) th.style.backgroundColor = "red";
}
function mudarCor5(){
    let th = document.getElementById("opcao05");
    if(th) th.style.backgroundColor = "red";
}
