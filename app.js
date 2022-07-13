const formElement = document.querySelector("#form_id")



formElement.addEventListener("submit", (e) => {
    e.preventDefault()
    const formName = document.querySelector("input[name=name]")
    const formEmail = document.querySelector("input[name=email]")
    const formText = document.querySelector("textarea[name=message]")

    const formData = {
        name: formName.value,
        email: formEmail.value,
        message: formText.value
    }
    const data = new FormData(e.target)


    fetch("https://formspree.io/f/myyojwko", {
        method: "POST",
        headers: {
            'Accept': "application/json"
        },
        mode: "no-cors",
        body: data
    }).then(response => {
        if (response.status == 0) {
            formName.value = ""
            formEmail.value = ""
            formText.value = ""
            swal("Thanks for contacting me!", "✔", "success");

        }
    }).catch(error => {
        swal("Ha ocurrido un error inesperado.", "Favor intentarlo mas adelante!", "error")
    })



})