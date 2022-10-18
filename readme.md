# TypeScript

## Para que podamos utilizar TypeScript necesitamos node.js para compilarlo

<br>

- Iniciamos Npm

```sh
  npm init -y
```

- Instalamos node y typescript

```sh
  npm install --save-dev ts-node typescript
```

- Creamos un nuevo archivo en la raiz del proyecto con la extesion .ts. Para este ejemplo voy a utilizar un archivo llamado: <b>multiplicador.ts</b>

- Vamos a package.json y en scripts agregamos un nuevo atributo:

```sh
  "scripts": {
     "nombre_de_la_accion" : "ts-node nombre_del_archivo_a_ejectuar"
    }
```

<br>

> Con los pasos anteriores ya podriamos ejecutar un archivo con node.js

- En la terminal escribimos el comando run y el nombre de la accion

```sh
    npm run multiplicador
```

<br>

# Podemos cambiar la configuracion de TypeScript para que nos permita modificarlo a nuestras necesidades

<br>

1. Creamos un archivo llamado tsconfig.json en la raiz del proyecto.

2. Agregamos el siguiente json:

```sh
{
    "compilerOptions": {
        "noImplicitAny": false
    }
}
```

- Con esta opcion le decimos a TS que no valide la implicidad de una variable de tipo any.

<br>
<br>

# Tipos de datos en TypeScript

<br>

> Para tipar una variable en una funcion, debemos escribir el nombre de la variable, dos puntos y el tipo de dato

```sh
    function multiplicador(a: number, b: number, accion: string){}
```

<br>

### Tipar un numero entero:

<br>

> El tipo de dato numero en TypeScript se identifica como number.

- Como parametro en una funcion

```sh
    function numero(numero_uno: number){}
```

<br>

### Tipar un texto:

<br>

> El tipo de dato string, texto. En TypeScript se identifica como string.

- Como parametro en una funcion

```sh
    function numero(nombre: string){}
```

<br>

### TypeScript nos permite validar que un tipo de dato sea de un valor en especifico:

<br>

> En este caso deseo que la variable operacion sea alguno de los siguientes valores: <b>multiplicacion, division, suma o resta.</b>

- Como parametro en una funcion

```sh
    const calculator = (
        a: number,
        b: number,
        operacion: "multiplicacion" | "division" | "suma" | "resta"
    ) => {};
```

<br>

### TypeScript nos permite crear tipos de datos personalizados, De esta manera podemos reutilizar los tipos de datos.

<br>

- Para declarar un tipo de dato o varios tipos de datos, escribimos <b>type</b> el nombre del tipo y le asignamos las variables separadas por barras verticales <b>( | )</b>

```sh
    type operaciones = "multiplicacion" | "division" | "suma" | "resta";
```

- Tambien podriamos ponerle export, para usarlo desde diferentes archivos

```sh
    export type operaciones = "multiplicacion" | "division" | "suma" | "resta";
```

<br>

- Script completo de la calculadora

```sh
type operaciones = "multiplicacion" | "division" | "suma" | "resta";

const calculator = (a: number, b: number, op: operaciones) => {
  if (op === "multiplicacion") return a * b;

  if (op === "division") {
    if (a === 0 || b === 0) {
      return "No se puede dividir por 0";
    }
    return a / b;
  }

  if (op === "suma") return a + b;
  if (op === "resta") return a - b;
};

console.log(calculator(2, 0, "division"));
```

<br>

# TypeScript nos permite indicar que retorna una funcion

<br>

> Para declarar el retorno de una funcion escribimos dos puntos ( : ) y el tipo de retorno.

```sh
    function numero(nombre: string): number {}
```

<br>

> Podemos declarar varios tipos de retornos

```sh
    function numero(nombre: string): number | string {}
```

<br>

> Tambien podriamos usar nuestros tipos de datos personalizados

```sh
    type Retorno = number | string;
    function numero(nombre: string): Retorno {}
```
