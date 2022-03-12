const mensaje = prompt('bienvenido a la Hamburgueseria express escribe el tipo de Hamburguesa que deseas: "pequeña", "grande" o "extra-grande"')

if (mensaje === 'pequeña'){
    let tipohamburguesa = prompt('que hamburguesa deseas de "tradicional", "pollo" o "carnes"')

    if(tipohamburguesa === 'tradicional'){
        let contenidos = prompt('desea que su hamburguesa pequeña tradicional lleve "1-con queso" o "2-sin queso"')
        switch (contenidos) {
            case '1':
                alert('su hamburguesa sera pequeña tradicional con queso')
                break;
            case '2':
                let segundocontenido = prompt('desea con "1-con salsa" o "2-sin salsa"')
                switch (segundocontenido) {
                    case '1':
                        alert('su hamburguesa sera pequeña tradicional sin queso con salsa')
                        break;
                    case '2':
                        alert('su hamburguesa sera pequeña tradicional sin queso sin salsa')
                        break;
                
                    default:
                    alert('por favor ingrese un valor valido ya sea 1 0 2')
                        break;
                }
                break;
        
            default:
                alert('por favor ingrese un valor valido ya sea 1 o 2')
                break;
        } 
    }else if(tipohamburguesa === 'pollo'){
        let contenidos = prompt('desea la hambuerguesa con "1-con champiñones" o "2-sin champiñones"')
        switch (contenidos) {
            case '1':
                let segundocontenido = prompt('desea su hamburguesa pequeña de pollo con "1-con queso" "2-sin queso"')
                switch (segundocontenido) {
                    case '1':
                        alert('su hamburguesa sera pequeña de pollo con champillones y sin queso')
                        break;
                    case '2':
                        alert('su hamburguesa sera pequeña de pollo sin champillones y con queso')
                        break;
                
                    default:
                        alert('por favor introdusca un valor ya sea 1 o 2')
                        break;
                }
                break;
            case '2':
                let segundocontenido1 = prompt('desea su hamburguesa pequeña de pollo con "1-sin salsa" o "2-sin jamon"')
                switch (segundocontenido1) {
                    default:
                        alert('por favor introdusca un valor ya sea 1 , 2 o 3')
                        break;
                    case '1':
                        alert('su hamburguesa sera pequeña de pollo sin salsa y con jamon')
                        break;
                    case '2':
                        alert('su hamburguesa sera pequeña de pollo con salsa y sin jamon')
                        break;
                    case '3':
                        alert('su hamburguesa sera pequeña de pollo sin salsa y sin jamon')    
                
                    
                }
                break;

        
            default:
                break;
        
    
        }
    }else if(tipohamburguesa === 'carnes'){
        let contenidos = prompt('desea su hamburguesa pequeña de carnes con 1-con salami o 2-sin salami')
        switch (contenidos) {
            case '1':
            let segundocontenido = prompt('desea su hamburguesa pequeña de carnes con "1-con queso" o "2-sin queso"')
                switch (segundocontenido) {
                    case '1':
                        alert('su hamburguesa sera pequeña de carnes con salami y con queso')
                        break;
                    case '2':
                        alert('su hamburguesa sera pequeña de carnes con salami y sin queso')
                        break;
                
                    default:
                        alert('por favor ingrese un valor valido ya sea 1 o 2')
                        break;
                }
                break;
                case '2':
            let segundocontenido1 = prompt('desea su hamburguesa pequeña de carnes con "1-con queso" o "2-sin queso"')
                switch (segundocontenido1) {
                    case '1':
                        alert('su hamburguesa sera pequeña de carnes sin salami y con queso')
                        break;
                    case '2':
                        alert('su hamburguesa sera pequeña de carnes sin salami y sin queso')
                        break;
                
                    default:
                        alert('por favor ingrese un valor valido ya sea 1 o 2')
                        break;
                }
                break;
        
        
            default:
                alert('por favor introdusca un valor valido')
                break;
        }
    }else{
        alert('por favor ingresa un valor valido ya sea "tradicional" "pollo" "carnes"')
    }
}else if(mensaje === 'grande'){
    let tipohamburguesa = prompt('que sabor deseas de  de "vegetariana",  o "pollo y carne"')
    if(tipohamburguesa === 'vegetariana'){
        let contenidos = prompt('desea su hamburguesa vegetariana "1-con queso" o "2-sin queso"')
        switch (contenidos) {
            case '1':
                alert('su hamburguesa sera grande vegetariana con queso')
                break;
            case '2':
                alert('su hamburguesa sera grande vegetariana sin queso')
                break;
        
        
            default:
            alert('por favor introdusca un valor valido ya sea 1 o 2')
                break;
        }

    }else if (tipohamburguesa === 'pollo y carne'){
        let contenidos = prompt('desea su hamburguesa con "1-adicion de salchicha" o "2-adicion de champiñones" o "3-sin ninguno" o "4-con ambos"')
            switch (contenidos) {
                case '1':
                    alert('su hamburguesa grande sera una de pollo y carne con adicion de salchicha')
                    break;
                case '2':
                    alert('su hamburguesa grande sera una de pollo y carne con adicion de champiñones')
                    break;
                case '3':
                    alert('su hamburguesa grande sera una de pollo y carne')
                    break;
                case '4':
                    alert('su hamburguesa grande sera una de pollo y carne con adicion de champiñones y adicion de salchicha ')
                    break;
            
                default:
                    alert('por favor introdusca un valor valido ya sea 1, 2, 3 o 4')
                    break;
            }
    }else{
        alert('por favor ingres un valor valido ya sea "vegetariana" o "pollo y carne""')
    }

}else if(mensaje === 'extra-grande'){
    let tipohamburguesa = prompt('que sabor de hamburguesa deseas  "criolla", o "mexicana"')
    if(tipohamburguesa === 'criolla'){
        let contenidos = prompt('desea su hamburguesa con "1-extra carne molida" o "2-con queso"')
        switch (contenidos) {
            case '1':
                let segundocontenido1 = prompt('desea su hamburguesa extra-grande criolla con "1-nachos" o "2-sin nachos"')
                switch (segundocontenido1) {
                    case '1':
                        alert('su hamburguesa sera una criolla  extra-grande con extra carne molida y nachos')
                        break;
                    case '2':
                        alert('su hamburguesa sera una criolla  extra-grande con extra carne molida y sin  nachos')
                        break;
                
                    default:
                    alert('por favor introdusca un numero valido ya sea 1 o 2')
                        break;
                }
                break;
            case '2':
                let segundocontenido2 = prompt('desea su hamburguesa extra-grande criolla con "1-nachos" o "2-sin nachos"')
                switch (segundocontenido2) {
                    case '1':
                        alert('su hamburguesa sera una criolla extra-grande de queso con nachos')
                        break;
                    case '2':
                        alert('su hamburguesa sera una criolla extra-grande de queso sin nachos')
                        break;
                
                    default:
                        alert('por favor introdusca un valor valido ya sea 1 o 2')
                        break;
                }
                break;
        
            default:
                alert('introdusca un valor valido')
                break;
        }


    }else if(tipohamburguesa ==='extra-grande'){
         let contenidos = prompt('desea su hamburguesa con "1-extra guacamole" o "2-sin guacamole"')
        switch (contenidos) {
            case '1':
                let segundocontenido1 = prompt('desea su hamburgesa extra-grande mexicana con "1-nachos" o "2-sin nachos"')
                switch (segundocontenido1) {
                    case '1':
                        alert('su hamburguesa sera una mexicana extra-grande con extra guacamole y nachos')
                        break;
                    case '2':
                        alert('su hamburguesa sera una mexicana  extra-grande con extra guacamole y sin  nachos')
                        break;
                
                    default:
                    alert('por favor introdusca un numero valido ya sea 1 o 2')
                        break;
                }
                break;
            case '2':
                let segundocontenido2 = prompt('desea su hamburguesa extra-grande mexicana con "1-nachos" o "2-sin nachos"')
                switch (segundocontenido2) {
                    case '1':
                        alert('su hamburguesa sera una mexicana extra-grande sin extra guacamole con nachos')
                        break;
                    case '2':
                        alert('su hamburguesa sera una mexicana extra-grande sin extra guacamole y sin nachos')
                        break;
                
                    default:
                        alert('por favor introdusca un valor valido ya sea 1 o 2')
                        break;
                }
                break;
        
            default:
                alert('introdusca un valor valido')
                break;
        }


    }else{
        alert('por favor ingresa un valor valido ya sea "criolla" o "mexicana"')
    }
}else{
    alert('por favor ingesa un valor ya sea "pequeña", "grande" o "extra-grande"')
}