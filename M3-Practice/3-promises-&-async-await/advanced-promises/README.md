# Tarea de JavaScript: Promesas Avanzadas

## Descripción:

El objetivo de esta tarea es profundizar en el uso de promesas en JavaScript,
trabajando con múltiples promesas, encadenamiento y manejo avanzado de errores.

## Tareas a realizar:

1. **Crear múltiples promesas:**

   - Crea al menos tres funciones que devuelvan promesas para simular tareas
     asíncronas y diferentes escenarios (por ejemplo: obtener datos de una API,
     consultar una base de datos, enviar una solicitud HTTP).

2. **Encadenar promesas:**

   - Utiliza el encadenamiento de promesas para ejecutar estas funciones
     secuencialmente.
   - Cada función debe depender del resultado de la anterior, es decir, la
     segunda función debe ejecutarse solo después de que la primera se haya
     completado correctamente, y así sucesivamente.

3. **Manejar errores:**

   - Implementa el manejo de errores para cada promesa.
   - Si alguna de las promesas se rechaza, muestra un mensaje de error adecuado
     en la consola y maneja el error de manera apropiada.

4. **Consumir los resultados:**

   - Cuando todas las promesas se resuelvan correctamente, realiza alguna acción
     con los resultados obtenidos (por ejemplo: mostrar los datos en una
     interfaz de usuario, guardarlos en una base de datos local, etc.).

5. **Uso avanzado:**
   - Utiliza las características avanzadas de las promesas, como `Promise.all` o
     `Promise.race`, para trabajar con múltiples promesas simultáneamente.

## Entrega:

- Sube tu código a un repositorio en GitHub o cualquier otro servicio de control
  de versiones.
- Asegúrate de que tu repositorio esté bien organizado y documentado.
