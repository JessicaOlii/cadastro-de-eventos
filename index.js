// Cadastro de eventos

let texto = "Seja bem -vindo! \nData atual:"; 

console.log (texto);

// o usario deve cadastrar data posterior a data atual, caso contrario o evento não pode ser cadastrado

// data atual;

function formataData(data = new Date()){
     let dia = data.getDate();
     let mes = data.getMonth()+1;
     let ano = data.getFullYear();

     if (dia.toString().length == 1) dia = '0'+dia;
     if (mes.toString().length == 1) mes = '0'+mes;

     return dia+'/'+ mes+'/'+ano;
}

console.log(formataData());

// Data do evento deve ser diferente da data atual

let DiaDoEvento = 31;
let MesDoEvento = 12;
let AnoDoEvento = 2021;
let SegundoTexto = "Informe a data do evento:";
let data = new Date ()

console.log(SegundoTexto);

if ((DiaDoEvento > data.getDate ()) & (MesDoEvento >= (data.getMonth() +1)) & (AnoDoEvento >= data.getFullYear ())) {
    console.log(" Data do evento permitida!");
} else {
    console.log (" A data informada deve ser posterior a data atual!");
}

// Se o participante for maior de 18 anos, permitir o cadastro; senão, alertar que o cadastro não é permitido pela idade

let IdadePermitida = 18;
let IdadeDoParticipante = 19
let terceiroTexto = "Informe sua idade"

console.log (terceiroTexto)

if (IdadeDoParticipante>=IdadePermitida){
    console.log("Cadastro permitido!");
} else if (IdadeDoParticipante < IdadePermitida){
    console.log("Cadastro não permitido pela idade!")
}
 
let quartoTexto = "Lista de palestrantes e participantes"

console.log(quartoTexto)


let listaDePalestrantesEParticipantes = ["Mariana", "Luan", "Arthur"]

listaDePalestrantesEParticipantes.forEach(aluno => {
    console.log(aluno)
});

if(listaDePalestrantesEParticipantes.length <= 100) {
    console.log("Cadastro realizado com sucesso")
}else {
    console.log("Cadastro não permitido. Todas as vagas do evento foram preenchidas")
}
