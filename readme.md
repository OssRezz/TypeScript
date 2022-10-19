# TypeScript

## Dos formas de iniciar un proyecto de TypeScript

<br>

### 1) TypeScipt de forma global

<br>

- Instalamos TypeScript de forma global

```sh
  npm install -g TypeScript
```

- Creamos una carpeta e inicializamos la configuracion de TypeScript, esto nos creara un archivo llamado tsconfig.json

```sh
  tsc --init
```

- Modificamos donde sera hara el build de TypeScript en el archivo tsconfig.json, En el atributo outDir, descomentamos y escrbimos la carpeta de preferencia.

```sh
   "outDir": "build" /* Specify an output folder for all emitted files. */,
```

<br>

> Para compilar usamos el comando tsc en la consola y podremos ver los archivos en la carpeta del build

```sh
    tsc
```

<br>

### 2) TypeScipt de forma local con node.js y npm

<br>

- Creamos una carpeta e inicializamos el proyecto de node.js con npm

```sh
  npm init -y
```

- Instalamos node y TypeScript

```sh
  npm install --save-dev ts-node TypeScript
```

- Inicializamos la configuracion de TypeScript, esto nos creara un archivo llamado tsconfig.json

```sh
  tsc --init
```

<br>

> Para compilar usamos el comando npx tsc en la consola y podremos ver los archivos en la carpeta del build

```sh
    npx tsc
```

<br>
<br>

### 2.1) <b> Ejecutar un archivo en la consola en caso de escoger la segunda forma</b>

<br>

- Creamos un nuevo archivo en la raiz del proyecto con la extesion .ts. Para este ejemplo voy a utilizar un archivo llamado: <b>multiplicador.ts</b>

- Vamos a package.json y en scripts agregamos un nuevo atributo:

```sh
  "scripts": {
     "nombre_de_la_accion" : "ts-node nombre_del_archivo_a_ejectuar.ts"
    }
```

<br>

> Con los pasos anteriores ya podriamos ejecutar un archivo con node.js

- En la terminal escribimos el comando run y el nombre de la accion

```sh
    npm run nombre_de_la_accion
```

<br>
<br>

# Configuracion de TypeScript

<br>

> Con esta opcion le decimos a TS que no valide la implicidad de una variable de tipo any.

```sh
{
    "compilerOptions": {
        "noImplicitAny": false
    }
}
```

<br>

> Con esta opcion le decimos a TS en que carpeta hara el build

```sh
{
    "compilerOptions": {
       "outDir": "build" /* Specify an output folder for all emitted files. */,
    }
}
```

<br>
<br>

# Tipos de datos primitivos en TypeScript

<br>

> Para tipar una variable en una funcion, debemos escribir el nombre de la variable, dos puntos y el tipo de dato

```sh
    function multiplicador(a: number, b: number, accion: string){}
```

<br>

### Tipar un numero entero:

<br>

> El tipo de dato numero en TypeScript se identifica como number.

- Declarando una variable

```sh
    let x: number;
    let big: bigint = 100n;
```

- Como parametro en una funcion

```sh
    function numero(numero_uno: number){}
```

<br>

### Tipar un texto:

<br>

> El tipo de dato string, texto. En TypeScript se identifica como string.

- Declarando una variable

```sh
    let x: string;
```

- Como parametro en una funcion

```sh
    function numero(nombre: string){}
```

<br>

### Tipar un boleano:

<br>

> El tipo de dato boleano en TypeScript se identifica como boolean.

- Declarando una variable

```sh
    let flag: boolean;
```

- Como parametro en una funcion

```sh
    function sendMensaje(mensaje: boolean){}
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

# Enumeradores

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

44:05
