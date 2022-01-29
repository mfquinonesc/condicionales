// ejercicios de altissia 
// Con este codigo se trata de emular una pagina web que 
// realiza la evaluacion de la unidad de un curso de ingles.

// Envia un mensaje de confirmacion para pedir si quiere o no realizar 
// la prueba. Si dice que no envia un mensaje diciendo intentelo otra vez
// y si dice que si luego pregunta el nombre y empieza con las preguntas 
// de la prueba.

// Revisa si la respuesta esta escrita o la revisa por la letra de la respuesta
// Realiza cuatro preguntas y por cada una aumenta el valor del puntaje de la prueba.

// Una vez finalizada las cuatro preguntas hace la evaluacion del puntaje 
// total y segun sea la puntuacion envia un mensaje al usuario.



let nombre;
let respuesta;
let puntaje = 0;

let haceExamen = confirm("Bienvenido esta son las prguntas del examen de la unidad 1 \nhaga click en OK para continuar o Cancel para no presentarlo.");

if (haceExamen){
    
    nombre = prompt("Ingrese su nombre por favor");

    respuesta = prompt("Como se escribe casa en ingles: \na. milhouse \nb. house \nc. hose \nd. huose \nEscriba su respuesta:");
    if(respuesta =="a" || respuesta == "A" || respuesta == "house"){
        puntaje = puntaje + 1;
    }

    respuesta = prompt("Como se escribe puente en ingles: \na. briche \nb. brich \nc.  brige \nd. briege \nEscriba su respuesta:");
    if(respuesta =="c" || respuesta == "C" || respuesta == "brige"){
        puntaje = puntaje + 1;
    }

    respuesta = prompt("Como se escribe escaleras en ingles: \na. Esther \nb. stairs \nc. ster \nd. stiars \nEscriba su respuesta:");
    if(respuesta =="b" || respuesta == "B" || respuesta == "stairs"){
        puntaje = puntaje + 1;
    }

    respuesta = prompt("Como se escribe dormitorio en ingles: \na. vebroom \nb. bedrum \nc. room \nd. bedroom \nEscriba su respuesta:");
    if(respuesta =="d" || respuesta == "D" || respuesta == "bedroom"){
        puntaje = puntaje + 1;
    }


    if(puntaje == 4){
        alert("Felicitaciones "+ nombre + ", usted ha contestado correctamente todo el examen.");
    }else if(puntaje == 3){
        alert(nombre + ", usted ha contestado mal solo en una pregunta.");
    }else if(puntaje == 2){
        alert(nombre + ", usted ha contestado mal dos preguntas.");
    }else if(puntaje == 1){
        alert(nombre + ", usted solo contestó una pregunta bien.");
    }else{
        alert(nombre + ", usted todo lo contestó mal, repita la lección.");
    }


}else{
    alert("Usted ha cancelado la presentacion del examen. Intentelo mas tarde.");
}