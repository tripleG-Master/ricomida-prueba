$("document").ready(function () {
    //funcion de los tooltip
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

    //funcion para el boton de enviar email
    $("#enviarEmail").on("click", function (e) {
        e.preventDefault();
        //console.log(e.target)
        alert("Email enviado correctamente.")
    })

    //funcion cambio de color en los titulos
    //selecciono ambos elementos por la clase
    const h3ToRed = $(".texto-negro")
    h3ToRed.dblclick(function (e) {
        //console.log(e.target)
        //consulto si el elemento tiene la clase texto negro, para reemplazarla por texto rojo
        if ($(this).hasClass("texto-negro")) {
            $(this).removeClass("texto-negro").addClass("texto-rojo")
            // en caso contrario, vuelve a agregar el texto negro
        } else {
            $(this).removeClass("texto-rojo").addClass("texto-negro")
        }
    });

    //funcion para desaparecer las card
    //este fue el primer selector que use
    //const cardsTitle = $("#cardContainer div.card div.card-body h4.card-title");

    const cardsContainer = $("#cardsContainer")
    //despues simplifiqué dentro de la misma funcion
    cardsContainer.on("click", "h4.card-title", function (e) {
        //con find busco los elementos text y img y con toggle los oculto
        //console.log($(this))
        //console.log(cardsContainer.find(".card-text"))
        const textos = cardsContainer.find(".card-text").toggle()
        const imagenes = cardsContainer.find(".card-img-top").toggle()
        
    })
})