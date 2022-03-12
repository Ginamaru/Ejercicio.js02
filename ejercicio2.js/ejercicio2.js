let pregunta = prompt('ingresa el valor que quieres conocer en ingles (casa,mesa perro o gato)')
let casa = document.getElementById('casa')
let mesa = document.getElementById('mesa')
let gato = document.getElementById('gato')
let perro = document.getElementById('perro')


switch (pregunta) {
    case "casa":
        alert("casa en ingles se dice house");
        casa.classList.remove('d-none')
        break;

        case "mesa":
            alert("mesa en ingles se dice table");
            mesa.classList.remove('d-none')
            break;

            case "perro":
                alert ("perro en ingles se dice Dog");
                perro.classList.remove('d-none')
                break;

            case "gato":
            alert ("gato en ingles se dice cat");
            gato.classList.remove('d-none')
            break;

    default:
        alert("Favor ingresa un valor ya sea casa, mesa, gato o perro")
        break;
}