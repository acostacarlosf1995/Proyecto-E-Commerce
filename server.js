const express = require("express");
const server = express();
const bodyParser = require("body-parser");
const cors = require("cors");

var productos = [
    {
        descripcion: "AE Long Sleeve Tie-Dye Graphic T-Shirt",
        precio: "3.200",
        oferta: "1.800",
        img: "https://s7d2.scene7.com/is/image/aeo/1182_4631_400_f?$PDP-1910L$"
    },
    {
        descripcion: "AE Especial Edition Pride Graphic T-Shirt",
        precio: "2.200",
        oferta: "1.550",
        img: "https://s7d2.scene7.com/is/image/aeo/9932_4286_100_f?$PDP-1910L$"
    },
    {
        descripcion: "AE Long Sleeve Dip Dye Graphic T-Shirt",
        precio: "3.800",
        oferta: "2.230",
        img: "https://s7d2.scene7.com/is/image/aeo/1182_4632_500_f?$PDP-1910L$"
    },
    {
        descripcion: "AE Long Sleeve Tie-Dye Graphic T-Shirt",
        precio: "3.630",
        oferta: "1.910",
        img: "https://s7d2.scene7.com/is/image/aeo/1182_4671_615_f?$PDP-1910L$"
    },
    {
        descripcion: "American Eagle Classic Button-Down Oxford T-Shirt",
        precio: "3.122",
        oferta: "2.410",
        img: "https://aeo.imgix.net/img/app/product/2/273363-1103005.jpeg?w=382&auto=format"
    },
    {
        descripcion: "American Eagle Tailgate Men's Rock Chalk T-Shirt",
        precio: "1.115",
        oferta: "830",
        img: "https://s7d2.scene7.com/is/image/aeo/1011_3874_400_f?$PDP-1910L$"
    },
    {
        descripcion: "AE COLORBLOCK GRAPHIC TEE for Men",
        precio: "1.850",
        oferta: "1.230",
        img: "https://assets.abfrlcdn.com/img/app/product/3/343428-1662124-large.jpg"
    },
    {
        descripcion: "American Eagle Colorblock Football T-Shirt",
        precio: "1.740",
        oferta: "1.115",
        img: "https://i.pinimg.com/originals/b1/14/4d/b1144df76cb00168587029dc1d60acc6.jpg"
    }
];

server.use(cors());
server.use(bodyParser.json());

server.get("/productos", (req, res) => {
    res.status(200).json(productos);
});

server.listen(3000, (req, res) => {
    console.log("Servidor iniciado...");
});