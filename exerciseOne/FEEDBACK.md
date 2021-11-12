Teniendo en cuenta las especificaciones del ejercicio decido comenzar por devolver la cadena completa si la longitud de esta es menor a 7, teniendo esa verificación habría completado una de las condiciones realizada.

Posteriormente realizó una iteración sobre la cadena para pushear dentro de un array distinto valores.

* Comienzo por agregar el que coincida con el indice 0
* Después todos los valores que cumplan la condición de estar en la posición anterior a los últimos 4, hacen un push de "x"
* Por último agrego los valores restantes y devuelvo el array aplicando el método join(''), uniendo así los elementos y devolviendo un string 

Agregaría otra validación como la que esta comentada en caso de no proporcionar ningún numero o bien una cadena vacía.