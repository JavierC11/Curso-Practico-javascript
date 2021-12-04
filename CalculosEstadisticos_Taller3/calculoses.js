//Helpters

console.log("Puedes usar la funcion 'promedioponderado' y darle tu array para buscar el promedio ponderado");


//****************************************************************** */

function CalcularModa(list1){
const ListaCount = {};

list1.map(
    function (element){
        if(ListaCount[element]){
            ListaCount[element] += 1;
        }else{
            ListaCount[element] = 1;
        }
    }   
);

const ListaObjet = Object.entries(ListaCount).sort(function(a,b){
    return a[1] - b[1];
});

const moda = ListaObjet[ListaObjet.length - 1];
return console.log("Encontramos la moda de su array es "+moda[0]+ " y se repite "+moda[1]+ " veces" ) ;
}



//In this function we ma
function Buscar_Mediana(List){
    const listaordenada = List.sort(function(a,b){
        return a - b; 
    })

    const ladodelmedio = parseInt(listaordenada.length / 2);
    let mediana;
    
        if (listaordenada.length % 2 === 0 )
        {
            const mitad1 = listaordenada[ladodelmedio - 1];
            const mitad2 = listaordenada[ladodelmedio];

            const mediaarit = Calcularpromedio([mitad1, mitad2]); 
            
            return mediana = mediaarit;
    
             
        }
        else{
            return mediana = listaordenada[ladodelmedio];
        }

}


//Normal averange
function Calcularpromedio(lista) {
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedio = sumaLista / lista.length;
    return promedio;
}


/*
//This is Only a exemple of the list 
const listaordenada = [
    100,
    200,
    200,
    300,
    400,
    500,
    1000,
];*/


// Promedio Geometrico who helps os to practice the method .Math
function promediogeometrico(list_promedio_geo){

    const n = list_promedio_geo.length;
    const totalmulti = list_promedio_geo.reduce(function(valor_acumulado = 0, numeromulti){
        	return valor_acumulado * numeromulti;
    });

    const resultado = Math.pow(totalmulti, 1/n);
    console.log("Encontramos el promedio geometrico de esta ejercicio estamos muy felices por que estamos aprendiendo mucho con esos ejercicis " +resultado);
}


//We make the "Promedio Ponderado"

function promedioponderado(hola){

    const notes = [
        {course: "Math",
        note: 10,
        credit: 2,
    },
    {
        course: "Fisic",
        note: 9,
        credit: 5,
    },
    {
        course: "programacion",
        note: 8,
        credit: 4,
    },
    ];

    const coursewithcredit = notes.map(function(noteObjet){
        return noteObjet.note * noteObjet.credit;  
    });


    const sumacusewithcredit = coursewithcredit.reduce(function(sumof = 0, newval){
        return sumof + newval;
    });

    const credit = notes.map(function(noteObjet){
        return noteObjet.credit;
    });

    const sumcredit = credit.reduce(function(sumatotal, valor){
        return sumatotal + valor;
    });

    const resultado = sumacusewithcredit / sumcredit ;
    
    console.log(resultado);
    console.log(typeof(credit));
    console.log(credit);
    
}




