//Helpters

console.log("Muchas de nuestras funcionesgu");


//****************************************************************** */
//this is a function on the mode (the mode is the value with the most repetitions in the list)
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
return console.log("La moda de su array es "+moda[0]+ " y se repite un total de "+moda[1]+ " veces" ) ;
}



//In this function we found the "mediana" this functions works better than the normal averange because 
//we can fix some statistical issues
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
    return resultado;
}


//We make the "Promedio Ponderado"

function promedioponderado(){

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
}


function calcularsalariosGT(){

//We are goint to make the last function for finding the Top10% of the salarys and the media of the salarys
const SalariosGT = guatemala.map(function(Persona){
        return Persona.salary;
    });

    const salariosorderGT = SalariosGT.sort(function(a,b){
        return a - b;
    }); 

    function calcularmediana(Lista){
        let mediana;
        const mitadlista = parseInt(Lista.length / 2);

        if((Lista.length % 2) === 0){

             const persona1 = Lista[mitadlista - 1 ];
             const persona2 = Lista[mitadlista];

             mediana = Calcularpromedio([persona1, persona2]); 
             return mediana;

        }else{
            mediana = Lista[mitadlista];
            return mediana;
        }
    }


    
    //making the top 10%
    const knife  =  parseInt( (90 * SalariosGT.length)/100);
    const count = parseInt( (SalariosGT.length - knife)); 
    const salariosgtto10 = salariosorderGT.splice(knife, count,);



    //I let my values in my constant
    const medianageneralsalariosgt = calcularmediana(salariosorderGT);
    const medianatop10gt = calcularmediana(salariosgtto10); 


return console.log("La Mediana del salario Guatemalteco (no incluyendo el top10%) es de Q" + medianageneralsalariosgt +
    " Y la mediana del top 10% de Guatemaltecos es de Q"+medianatop10gt 
);
}






 
