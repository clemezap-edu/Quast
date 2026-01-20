/*
    * Definición de las preguntas de calidad.
*/

const preguntas = [
    {
        tema: 'Mantenibilidad',
        pregunta: '¿Cuál es el propósito principal de medir la Complejidad Ciclomática de McCabe en un módulo de software?',
        posiblesRespuesta: [
            "Determinar el número de rutas linealmente independientes a través del código fuente.",
            "Calcular el tiempo total de ejecución del algoritmo en el peor de los casos.",
            "Medir la cantidad de memoria volátil consumida por el stack de ejecución.",
            "Evaluar la compatibilidad del sistema con diferentes sistemas operativos."
        ],
        respuestaCorrecta: 'Determinar el número de rutas linealmente independientes a través del código fuente.'
    },
    {
        tema: 'Eficiencia de Desempeño',
        pregunta: 'En el contexto de pruebas de carga, ¿qué indica un aumento exponencial en el tiempo de respuesta ante un incremento lineal de usuarios concurrentes?',
        posiblesRespuesta: [
            "Que el sistema tiene una escalabilidad elástica óptima.",
            "La presencia de un cuello de botella (bottleneck) en los recursos del sistema.",
            "Que el ancho de banda de la red es superior a la capacidad del servidor.",
            "Un manejo eficiente de la concurrencia mediante hilos no bloqueantes."
        ],
        respuestaCorrecta: 'La presencia de un cuello de botella (bottleneck) en los recursos del sistema.'
    },
    {
        tema: 'Fiabilidad',
        pregunta: '¿Qué métrica se utiliza para medir el tiempo promedio que transcurre entre dos fallos consecutivos del sistema?',
        posiblesRespuesta: [
            "MTTR (Mean Time To Repair)",
            "TTR (Total Time to Recover)",
            "MTBF (Mean Time Between Failures)",
            "SLA (Service Level Agreement)"
        ],
        respuestaCorrecta: 'MTBF (Mean Time Between Failures)'
    },
    {
        tema: 'Seguridad',
        pregunta: '¿Qué principio de diseño asegura que el software solo otorgue los permisos mínimos necesarios para realizar una operación?',
        posiblesRespuesta: [
            "Principio de Menor Privilegio (POLP)",
            "Seguridad por Oscuridad",
            "Defensa en Profundidad",
            "Aislamiento de Procesos"
        ],
        respuestaCorrecta: 'Principio de Menor Privilegio (POLP)'
    },
    {
        tema: 'Portabilidad',
        pregunta: '¿Qué técnica permite ejecutar aplicaciones en entornos aislados asegurando que el software se comporte igual en desarrollo y producción?',
        posiblesRespuesta: [
            "Virtualización de Hardware",
            "Contenerización (ej. Docker)",
            "Compilación Just-In-Time (JIT)",
            "Transpilación de código fuente"
        ],
        respuestaCorrecta: 'Contenerización (ej. Docker)'
    },
    {
        tema: 'Usabilidad',
        pregunta: 'Según la heurística de Nielsen, ¿qué aspecto se evalúa cuando el sistema informa al usuario sobre lo que está ocurriendo mediante retroalimentación oportuna?',
        posiblesRespuesta: [
            "Consistencia y estándares",
            "Visibilidad del estado del sistema",
            "Prevención de errores",
            "Flexibilidad de uso"
        ],
        respuestaCorrecta: 'Visibilidad del estado del sistema'
    },
    {
        tema: 'Pruebas de Software',
        pregunta: '¿Cuál es la diferencia fundamental entre las pruebas de "Caja Negra" y "Caja Blanca"?',
        posiblesRespuesta: [
            "La caja negra analiza la lógica interna; la blanca solo la interfaz.",
            "La caja blanca requiere conocimiento de la estructura interna del código; la negra se basa en requisitos funcionales.",
            "Las de caja negra son realizadas por desarrolladores; las de blanca por usuarios finales.",
            "La caja blanca solo mide el rendimiento; la negra solo la funcionalidad."
        ],
        respuestaCorrecta: 'La caja blanca requiere conocimiento de la estructura interna del código; la negra se basa en requisitos funcionales.'
    },
    {
        tema: 'Calidad de Código',
        pregunta: '¿A qué se refiere el término "Deuda Técnica" en el ciclo de vida de desarrollo?',
        posiblesRespuesta: [
            "Al costo financiero de las licencias de software utilizadas.",
            "Al costo futuro de retrabajo causado por elegir una solución fácil ahora en lugar de una mejor solución a largo plazo.",
            "Al tiempo que tarda el equipo de QA en reportar un bug de alta prioridad.",
            "A la depreciación del hardware donde se aloja el sistema."
        ],
        respuestaCorrecta: 'Al costo futuro de retrabajo causado por elegir una solución fácil ahora en lugar de una mejor solución a largo plazo.'
    },
    {
        tema: 'Integridad de Datos',
        pregunta: '¿Qué propiedad de las transacciones (ACID) garantiza que una operación se complete en su totalidad o no se realice en absoluto?',
        posiblesRespuesta: [
            "Consistencia",
            "Aislamiento (Isolation)",
            "Atomicidad",
            "Durabilidad"
        ],
        respuestaCorrecta: 'Atomicidad'
    },
    {
        tema: 'Escalabilidad',
        pregunta: '¿Qué es la Escalabilidad Horizontal en una infraestructura de software?',
        posiblesRespuesta: [
            "Añadir más recursos (CPU, RAM) a un servidor existente.",
            "Reducir el consumo energético de los nodos de procesamiento.",
            "Añadir más nodos o máquinas a un clúster para distribuir la carga.",
            "Optimizar el código para que use menos ciclos de CPU."
        ],
        respuestaCorrecta: 'Añadir más nodos o máquinas a un clúster para distribuir la carga.'
    }
];

/*
    * Inicializar elementos del html
*/

const quizProgress = document.getElementById('quizProgress');
const questionContainer = document.getElementById('questionContainer');
const answerContainer = document.getElementById('answerContainer');
let currentQuestionIndex = 0;


/*
    * Funcion para manejar las preguntas
*/

function handleQuestion(index){

    /* 
        * Muestra la barra de progreso dependiendo de las preguntas que están definidas.    
    */

    quizProgress.innerHTML = "";
    preguntas.forEach((pregunta) =>{
        quizProgress.innerHTML += "<span></span>";
    });


    /*
        * Muestra el progreso en la barra de progreso
    */

    let spans = document.querySelectorAll('span');
    for (let i = 0; i <= index; i++ ){
        spans[i].classList.add('seen');
    }


    /*
        * Muestra la información de la pregunta actual
    */ 

    questionContainer.innerHTML =
        `<p>${preguntas[index]  .tema}</p> 
        <p>${preguntas[index].pregunta}</p>
        `;

    /*
        * Muestra las posibles respuestas 
    */
    answerContainer.innerHTML = "";
    preguntas[index].posiblesRespuesta.forEach((respuesta) => {
        answerContainer.innerHTML += `<button>${respuesta}</button>`;
    });

    /*
       *  Maneja las respuestas seleccionadas
    */
    let answers = document.querySelectorAll("button");
    answers.forEach((answer) => {
        answer.addEventListener("click", (e) => {
        
            if (e.target.textContent === preguntas[index].respuestaCorrecta){
                console.log("Correcto!");
            } else {
                console.log("Incorrecto!");
            }

            if (currentQuestionIndex === questionContainer.lenght -1) {
                currentQuestionIndex = 0;
            } else {
                currentQuestionIndex ++;
            }
            handleQuestion(currentQuestionIndex);

        });

    });



}

handleQuestion(currentQuestionIndex);
