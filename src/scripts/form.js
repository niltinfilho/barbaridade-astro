const campos = document.querySelectorAll(".required");
const spans = document.querySelectorAll(".span-required");
const button = document.getElementById("button");

const nameInput = document.getElementById("name");
const telefoneInput = document.getElementById("telefone");
const emailInput = document.getElementById("email");
const dataInput = document.getElementById("data");
const numeroInput = document.getElementById("numero");

const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
const dataRegex = /^\d{4}-\d{2}-\d{2}$/;

let validacoes = {
  nome: false,
  telefone: false,
  email: false,
  data: false,
  numero: false,
};

function setError(index) {
  campos[index].style.border = "2px solid red";
  spans[index].style.display = "block";
}

function removeError(index) {
  campos[index].style.border = "";
  spans[index].style.display = "none";
}

function isValidDateReal(dateString) {
  const [ano, mes, dia] = dateString.split("-").map(Number);
  const dataTeste = new Date(ano, mes - 1, dia);

  return (
    dataTeste.getFullYear() === ano &&
    dataTeste.getMonth() === mes - 1 &&
    dataTeste.getDate() === dia
  );
}

function validaTodosCampos() {
  const formValido = Object.values(validacoes).every((v) => v === true);

  if (formValido) {
    button.classList.remove("disabled");
    button.disabled = false;
  } else {
    button.classList.add("disabled");
    button.disabled = true;
  }
}

function nameValidate() {
  if (nameInput.value.length >= 3) {
    removeError(0);
    validacoes.nome = true;
  } else {
    if (nameInput.value.length > 0) setError(0);
    validacoes.nome = false;
  }
  validaTodosCampos();
}

function telefoneValidate() {
  // Esta linha agora limpa letras e símbolos instantaneamente do campo
  telefoneInput.value = telefoneInput.value.replace(/\D/g, "");
  
  const cleanValue = telefoneInput.value;
  if (cleanValue.length >= 8) {
    removeError(1);
    validacoes.telefone = true;
  } else {
    if (cleanValue.length > 0) setError(1);
    validacoes.telefone = false;
  }
  validaTodosCampos();
}

function emailValidate() {
  if (emailRegex.test(emailInput.value)) {
    removeError(2);
    validacoes.email = true;
  } else {
    if (emailInput.value.length > 0) setError(2);
    validacoes.email = false;
  }
  validaTodosCampos();
}

function dataValidate() {
  if (dataInput.value.length > 0 && isValidDateReal(dataInput.value)) {
    removeError(3);
    validacoes.data = true;
  } else {
    if (dataInput.value.length > 0) setError(3);
    validacoes.data = false;
  }
  validaTodosCampos();
}

function numeroValidate() {
  if (numeroInput.value !== "" && numeroInput.value < 1) {
    numeroInput.value = 1;
  }
  const val = parseInt(numeroInput.value);
  if (!isNaN(val) && val >= 1) {
    removeError(4);
    validacoes.numero = true;
  } else {
    if (numeroInput.value.length > 0) setError(4);
    validacoes.numero = false;
  }
  validaTodosCampos();
}

function aplicarMascara() {
  let r = telefoneInput.value.replace(/\D/g, "");
  if (r.length > 11) r = r.substring(0, 11);

  if (r.length > 10) {
    r = r.replace(/^(\d{2})(\d{5})(\d{4}).*/, "($1) $2-$3");
  } else if (r.length > 5) {
    r = r.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, "($1) $2-$3");
  } else if (r.length > 2) {
    r = r.replace(/^(\d{2})(\d{0,5})/, "($1) $2");
  } else if (r.length > 0) {
    r = r.replace(/^(\d*)/, "($1");
  }
  telefoneInput.value = r;
}

function sendWhatsapp() {
  const phoneNumber = "5517991248918";
  const message =
    `*Dados para Reserva*%0A%0A` +
    `*Nome:* ${nameInput.value}%0A` +
    `*Telefone:* ${telefoneInput.value}%0A` +
    `*Email:* ${emailInput.value}%0A` +
    `*Data:* ${dataInput.value}%0A` +
    `*Pessoas:* ${numeroInput.value}`;

  const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
  window.open(url, "_blank");
}

nameInput.addEventListener("input", nameValidate);
telefoneInput.addEventListener("input", telefoneValidate);
telefoneInput.addEventListener("blur", aplicarMascara);
emailInput.addEventListener("input", emailValidate);
dataInput.addEventListener("input", dataValidate);
numeroInput.addEventListener("input", numeroValidate);
button.addEventListener("click", sendWhatsapp);