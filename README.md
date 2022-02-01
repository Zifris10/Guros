## Verificación de DNA
Servicio que detecta si una persona tiene diferencias genéticas basándose en su ADN.

## Ejecución en modo local
Ejecutar el comando `npm run dev` para ejecutar el servicio en modo de desarrollo. La URL del servicio es `http://localhost:3000`. La aplicación se recarga automáticamente al realizar cualquier cambio en el código fuente.

## Variables de entorno
La aplicación utiliza dos variables de entorno: 
`PORT`: Indica el puerto en el que se ejecuta la aplicación. El valor por defecto es 3000.
`DATABASE`: Cadena de conexión al servidor de BD.

## Base de datos
Para almacenar la información de las mutaciones realizadas, la aplicación utiliza la base de datos de postgreSQL

## Ejecución de pruebas unitarias
Ejecutar el comando `npm run test` para las pruebas unitarias del servicio de verificación de ADN

## Verificación
Para ejecutar la verificación, enviar una petición `POST` a la ruta `/mutation`. Por ejemplo, en modo local sería `http://localhost:3000/mutation`. Deberá enviar un objeto JSON con el siguiente formato:
```js
{
    "dna": [
        "ATGCGA",
        "CAGTGC",
        "TTATTT",
        "AGACGG",
        "GCGTCA",
        "TCACTG"
    ]
}
```

Si existe una mutación recibirá una respuesta `HTTP 200` con el siguiente contenido:
```js
{
    status: true,
    mensaje: 'El ADN si tiene mutación'
}
```

En caso contrario recibirá una respuesta `HTTP 403` con el siguiente contenido:
```js
{
    status: false,
    mensaje: 'El ADN no tiene mutación'
}
```

## Stats
Para obtener los stats de las verificaciones realizadas, deberá enviar una petición `GET` a la ruta `/stats`. En modo local sería `http://localhost:3000/stats`. Recibirá una respuesta con el siguiente contenido:
```js
{
    status: true,
    count_mutations: 40,
    count_no_mutation: 100,
    ratio: 0.4
}
```

## Swagger
Para obtener los end points documentados con swagger en modo local sería ingresar a la ruta `http://localhost:3000/api-documentation`