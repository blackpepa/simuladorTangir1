let zodiaco = confirm("¿Querés que Madame LeFortune te cuente que te deparan los astros?");


while(zodiaco){
    let signoIngresado = prompt("Ingresá tu signo").toLowerCase();
    alert("Madame LeFortune dice que " + horoscopo(signoIngresado));
    zodiaco = confirm("¿Deseás consultar tu horóscopo nuevamente?");
}

function horoscopo(signoUser) {
    let horoscopo
    switch (signoUser) {
        case "aries":
            horoscopo = "comerás buen jamón crudo. ";
            break;
        case "tauro":
            horoscopo = "tu inodoro quedará reluciente. ";
            break;
        case "geminis":
            horoscopo = "llamarás a tu mamá. ";
            break;
        case "géminis":
            horoscopo = "llamarás a tu mamá. ";
            break;
        case "cancer":
            horoscopo = "club día te dará un descuento en papas fritas. ";
            break;
        case "cáncer":
            horoscopo = "club día te dará un descuento en papas fritas. ";
            break;
        case "leo":
            horoscopo = "tomarás sol al mediodía. ";
            break;
        case "virgo":
            horoscopo = "te quedarás sin papel higiénico. ";
            break;
        case "libra":
            horoscopo = "ese jean te volverá a entrar. ";
            break;
        case "escorpio":
            horoscopo = "cantarás todo el día una canción de Arjona. ";
            break;
        case "sagitario":
            horoscopo = "tendrás que correr el bondi.";
            break;
        case "capricornio":
            horoscopo = "pisarás caca de perro. ";
            break;
        case "acuario":
            horoscopo = "te caerá mal ese sushi. ";
            break;
        case "piscis":
            horoscopo = "seguirás igual de hippie.";
            break;
        default:
            horoscopo = "eso no es un signo, seguí participando.";
    }
    return horoscopo
}

