/*
    * Definición de las preguntas de calidad.
*/

const preguntas = [
    {
        tema: 'Mantenibilidad',
        pregunta: '¿En qué medida tu código sigue los principios SOLID y estándares de "Clean Code" (nombres descriptivos, funciones pequeñas, sin efectos secundarios)?',
        posiblesRespuesta: [
            "No se aplican estándares de limpieza (Código espagueti).",
            "Se aplican de forma inconsistente en algunos módulos.",
            "La mayor parte del código sigue buenas prácticas de legibilidad.",
            "Cumplimiento total: código autodocumentado y altamente modular."
        ]
    },
    {
        tema: 'Usabilidad / Accesibilidad',
        pregunta: '¿Qué nivel de implementación de accesibilidad (etiquetado ARIA, contraste, navegación por teclado) posee la interfaz de usuario?',
        posiblesRespuesta: [
            "Nulo: no se consideró la accesibilidad en el diseño.",
            "Básico: solo cumple con etiquetas HTML semánticas elementales.",
            "Intermedio: cumple con la mayoría de las pautas de contraste y navegación.",
            "Avanzado: cumple con estándares WCAG y es compatible con lectores de pantalla."
        ]
    },
    {
        tema: 'Fiabilidad y Pruebas',
        pregunta: '¿Cuál es el porcentaje de cobertura de pruebas (Unit Testing / Integration Testing) de las funciones críticas del sistema?',
        posiblesRespuesta: [
            "0%: No se realizan pruebas automatizadas.",
            "Menos del 50%: Solo se prueban los flujos principales.",
            "Entre 50% y 80%: La mayoría de los módulos están cubiertos.",
            "Más del 90%: Cobertura casi total con pruebas de regresión."
        ]
    },
    {
        tema: 'Eficiencia de Desempeño',
        pregunta: '¿Cómo calificarías la gestión de recursos (memoria, CPU, conexiones a DB) y la complejidad algorítmica de tu software?',
        posiblesRespuesta: [
            "Deficiente: Presenta fugas de memoria o bloqueos frecuentes.",
            "Aceptable: El rendimiento es estable pero no está optimizado.",
            "Óptimo: Se utilizan estructuras de datos eficientes y manejo de caché.",
            "Excelente: Optimización máxima con perfiles de rendimiento y baja latencia."
        ]
    },
    {
        tema: 'Seguridad',
        pregunta: '¿En qué grado el software implementa mecanismos de saneamiento de entradas y protección contra vulnerabilidades comunes (OWASP Top 10)?',
        posiblesRespuesta: [
            "Ninguno: No hay validación de entradas ni protección de datos.",
            "Básico: Solo validaciones simples en el lado del cliente.",
            "Sólido: Implementa sentencias preparadas, hashing de contraseñas y JWT.",
            "Integral: Auditorías de seguridad constantes y cifrado en todas las capas."
        ]
    },
    {
        tema: 'Mantenibilidad',
        pregunta: '¿En qué medida tu código sigue los principios SOLID y estándares de "Clean Code" (nombres descriptivos, funciones pequeñas, sin efectos secundarios)?',
        posiblesRespuesta: [
            "No se aplican estándares de limpieza (Código espagueti).",
            "Se aplican de forma inconsistente en algunos módulos.",
            "La mayor parte del código sigue buenas prácticas de legibilidad.",
            "Cumplimiento total: código autodocumentado y altamente modular."
        ]
    },
    {
        tema: 'Usabilidad / Accesibilidad',
        pregunta: '¿Qué nivel de implementación de accesibilidad (etiquetado ARIA, contraste, navegación por teclado) posee la interfaz de usuario?',
        posiblesRespuesta: [
            "Nulo: no se consideró la accesibilidad en el diseño.",
            "Básico: solo cumple con etiquetas HTML semánticas elementales.",
            "Intermedio: cumple con la mayoría de las pautas de contraste y navegación.",
            "Avanzado: cumple con estándares WCAG y es compatible con lectores de pantalla."
        ]
    },
    {
        tema: 'Fiabilidad y Pruebas',
        pregunta: '¿Cuál es el porcentaje de cobertura de pruebas (Unit Testing / Integration Testing) de las funciones críticas del sistema?',
        posiblesRespuesta: [
            "0%: No se realizan pruebas automatizadas.",
            "Menos del 50%: Solo se prueban los flujos principales.",
            "Entre 50% y 80%: La mayoría de los módulos están cubiertos.",
            "Más del 90%: Cobertura casi total con pruebas de regresión."
        ]
    },
    {
        tema: 'Eficiencia de Desempeño',
        pregunta: '¿Cómo calificarías la gestión de recursos (memoria, CPU, conexiones a DB) y la complejidad algorítmica de tu software?',
        posiblesRespuesta: [
            "Deficiente: Presenta fugas de memoria o bloqueos frecuentes.",
            "Aceptable: El rendimiento es estable pero no está optimizado.",
            "Óptimo: Se utilizan estructuras de datos eficientes y manejo de caché.",
            "Excelente: Optimización máxima con perfiles de rendimiento y baja latencia."
        ]
    },
    {
        tema: 'Seguridad',
        pregunta: '¿En qué grado el software implementa mecanismos de saneamiento de entradas y protección contra vulnerabilidades comunes (OWASP Top 10)?',
        posiblesRespuesta: [
            "Ninguno: No hay validación de entradas ni protección de datos.",
            "Básico: Solo validaciones simples en el lado del cliente.",
            "Sólido: Implementa sentencias preparadas, hashing de contraseñas y JWT.",
            "Integral: Auditorías de seguridad constantes y cifrado en todas las capas."
        ]
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
    * Variables para el sistema de puntuación
*/
let totalScore = 0; // Puntuación acumulada
const maxScorePerQuestion = 100; // Valor máximo por pregunta

/*
    * Valores para cada opción de respuesta (0%, 25%, 50%, 100%)
*/
const answerValues = [0, 25, 50, 100];


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
        `<p>${preguntas[index].tema}</p> 
        <p>${preguntas[index].pregunta}</p>
        `;

    /*
        * Muestra las posibles respuestas 
    */
    answerContainer.innerHTML = "";
    preguntas[index].posiblesRespuesta.forEach((respuesta, respuestaIndex) => {
        const valorPorcentaje = answerValues[respuestaIndex];
        answerContainer.innerHTML += `<button data-value="${valorPorcentaje}">${respuesta}</button>`;
    });

    /*
       *  Maneja las respuestas seleccionadas
    */
    let answers = document.querySelectorAll("button");
    answers.forEach((answer) => {
        answer.addEventListener("click", (e) => {
        
            // Obtener el valor de la respuesta seleccionada
            const selectedValue = parseInt(e.target.getAttribute('data-value'));
            totalScore += selectedValue;
            
            console.log(`Respuesta seleccionada: ${selectedValue}%`);
            console.log(`Puntuación acumulada: ${totalScore}`);

            // Verificar si es la última pregunta
            if (currentQuestionIndex === preguntas.length - 1) {
                // Mostrar pantalla final
                showFinalScreen();
            } else {
                currentQuestionIndex++;
                handleQuestion(currentQuestionIndex);
            }

        });

    });

}

/*
    * Función para mostrar la pantalla final con el porcentaje acumulado
*/
function showFinalScreen() {
    // Calcular el porcentaje final
    const maxPossibleScore = preguntas.length * maxScorePerQuestion;
    const finalPercentage = ((totalScore / maxPossibleScore) * 100).toFixed(2);
    
    // Limpiar la barra de progreso
    quizProgress.innerHTML = "";

    quizProgress.classList.add("visibility");

    // Mostrar pantalla de resultados
    questionContainer.innerHTML = `
        <div class="final-screen">
            <h1>¡Quiz Completado!</h1>
            <p class="final-message">Has terminado todas las preguntas</p>
        </div>
    `;
    
    answerContainer.innerHTML = `
        <div class="results-container">
            <h2>Tu Puntuación Final</h2>
            <div class="score-display">
                <span class="percentage">${finalPercentage}%</span>
            </div>
            <p class="score-details">Puntos obtenidos: ${totalScore} de ${maxPossibleScore}</p>
            <button class="restart-btn" onclick="restartQuiz()">Reiniciar Quiz</button>
        </div>
    `;
}

/*
    * Función para reiniciar el quiz
*/
function restartQuiz() {
    currentQuestionIndex = 0;
    totalScore = 0;
    quizProgress.classList.remove("visibility");
    handleQuestion(currentQuestionIndex);
}

handleQuestion(currentQuestionIndex);
