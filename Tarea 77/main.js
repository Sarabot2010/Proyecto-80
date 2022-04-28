nombre_alumno_array = [];
function submit(){
    var ver_alumno_array = [];
    for(var j = 1; j<=4; j++){
        var nombre_alumno = document.getElementById("nombre_alumno_"+j).value;
        console.log(nombre_alumno);
        nombre_alumno_array.push(nombre_alumno);
    }
    console.log(nombre_alumno_array);

    var longitud_nombre_alumnos_array = nombre_alumno_array.length;
    console.log(longitud_nombre_alumnos_array);

    for(var k=0; k < longitud_nombre_alumnos_array; k++){
        ver_alumno_array.push("<h4>NOMBRE - "+ nombre_alumno_array[k]+"<h4>");
        console.log(ver_alumno_array);
    }
}
