function renderErrors (JSONerrors) {
    let parseJSON =  JSON.parse(JSONerrors)

    // Con Object.keys podemos acceder a los atributos de un objeto, sino no podemos hacer foreach
    Object.keys(parseJSON).forEach((formsFields) => {
        let errorText = document.getElementById(formsFields);
        let errorDiv = document.createElement('div');

// Le añadimos la clase de Bootstrap al texto y al div
        errorText.classList.add("is-invalid");
        errorDiv.classList.add("invalid-feedback");
// Le añadimos el mensaje al div, que lo cogemos del campo del formulario
        errorDiv.innerText = parseJSON[formsFields].message;

// Le damos la orden de que lo muestre debajo del campo
       errorText.parentNode.appendChild(errorDiv);
    });

};

window.onload = () => {
    document.querySelectorAll("form[data-errors]").forEach((formItems) => {
        if (formItems.dataset.errors.length > 0) {
            renderErrors(formItems.dataset.errors);
        }
    })
};