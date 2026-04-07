document.getElementById("formAdocao").addEventListener("submit",function (e){
e.preventDefault();

let nome = document.getElementById("nome").value;
let email = document.getElementById("email").value;
let telefone = document.getElementById("telefone").value;
let cpf = document.getElementById("cpf").value;
let idade = document.getElementById("idade").value;
let cidade = document.getElementById("cidade").value;
let moradia = document.getElementById("moradia").value;
let quintal = document.getElementById('input[name="quintal"]:checked');
let  pet = document.getElementById('input[name="pet"]:checked');
let horas = document.getElementById("horas").value;
let motivo = document.getElementById("motivo").value;
let permite = document.getElementById("permite").checked;
let seguro = document.getElementById("seguro").checked;
let finaceiro= document.getElementById("finaceiro").checked;
let termo = document.getElementById("termo").checked;

let cpfCadrastrados = ["125678900", "11111111111"]

if (nome.length<3) return alert ("Nome Invalido");
});
