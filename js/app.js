var url = "http://127.0.0.1:3000/productos";

document.querySelector(".comenzar").onclick = function() {
    document.querySelector(".primerContainer").style.display = "none"
    document.querySelector(".stock").style.display = "flex"

    const probando = fetch(url)
    .then(response => response.json())
    .then(data => {
        enviarProductos(data)
    })
    .catch(error => console.log(error));

    function enviarProductos(data) {

        const myArray = data;

        myArray.forEach(element => {

            document.querySelector(".primera").innerHTML += `
                <div class="col-xs-6 col-sm-6 col-md-6 col-lg-3 primeraColumna">
                    <div class="card">
                        <img class="card-img-top" src="${element.img}" width="220px" height="240px" alt="Card image">
                        <div class="card-body">
                            <p>${element.descripcion}<p>
                            <p class="precio">$${element.precio}<p>
                            <p><strong class="oferta">$${element.oferta}</strong></p>
                            <a href="#" class="btn btn-primary btnComprar">Comprar</a>
                        </div>
                    </div>
                </div>
            `

            document.querySelectorAll(".btnComprar").forEach(button => {
                button.addEventListener("click", (e) => {
                    alert("Se agrego al carrito de compras")
                });
            });
        })
    }
}



