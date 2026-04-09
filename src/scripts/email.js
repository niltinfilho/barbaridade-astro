emailjs.init({
        publicKey: "2wWrTxqHIXsQu5dcS",
      });  

document.getElementById("form").addEventListener("submit", function (event){
    event.preventDefault();

    const formData = {
        name: document.getElementById("name").value,
        telefone: document.getElementById("telefone").value,
        email: document.getElementById("email").value,
        data: document.getElementById("data").value,
        numero: document.getElementById("numero").value,
    }

    const serviceID = "service_boa1usd";
    const tamplateID = "template_2fsj40d";
    const submitButton = document.getElementById("button");
    
    emailjs.send(serviceID, tamplateID, formData);
    submitButton.textContent = "Enviando.."
});