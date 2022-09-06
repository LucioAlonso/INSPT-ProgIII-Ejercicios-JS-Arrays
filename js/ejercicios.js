/*
    Resolvé las 10 funciones declaradas en este archivo con el menor código posible, aprovechando las ventajas de las funciones de orden superior y la sintaxis de ES6 con JavaScript.

    En el archivo 'data.js' se encuentra una variable global que contiene un array de países sudamericanos. Tené en cuenta la estructura de cada objeto país para resolver lo pedido.
*/

// Función de ejemplo, operando sobre la variable 'data' declarada en el archivo homónimo
const cantPaises = () => data.length;

// 1
const imprimirPaises = () => {
    /* Debe imprimir la info de todos los países (solo su nombre común y su capital) */
    data.forEach(n => console.log(n['name']['common'] + ". Capital: " + n['capital']));
}
// 2
const nombresDePaises = () => {
/* Debe retornar un array con los nombres oficiales de cada país */
    return data.map(n => n['name']['official']);;
}

// 3
const nombresDeCapitales = () => {
/* Debe retornar un array con los nombres de las capitales de cada país */
    return data.map(n => n['capital'][0]);
}

// 4
const poblacionTotal = () => {
/* Debe retornar la población total de Sudamérica */
    let d = 0;
    data.forEach(n => d += n["population"]);
    return d;
}

// 5
const poblacionTotalMundialSinSud = (poblMundial) => {
/* Debe retornar la población total mundial (llega por parámetro) sin reutilizar la función 'poblacionTotal', más bien restando sucesivamente la población de cada país a la población mundial, usando 'reduce' */
    let d = data.reduce(((acu, n, i) => acu - data[i]["population"]), poblMundial)
    return d;
}

// 6
const todosEmpiezanLosLunes = () => {
/* Debe retornar si todos los países inician la semana los días lunes (monday) */
    return data.every(n => n["startOfWeek"] === "monday");
}

// 7
const algunoNoConducePorLaDerecha = () => {
/* Debe retornar si en alguno de los países no se conduce por la derecha (right) */
    return data.some(n => n["car"]["side"] !== "right");
}

// 8
const cualesNoConducenPorLaDerecha = () => {
    /* Debe retornar a los países donde no se conduce por la derecha (right) */
    return data.filter(n => n["car"]["side"] !== "right");;
}

// 9
const cualesNoConducenPorLaDerechaSimpl = () => {
    /* Debe retornar solo los nombres comunes de los países donde no se conduce por la derecha (right) */
    let d = cualesNoConducenPorLaDerecha();
    return d.map((n, i) => n[i] = n["name"]["common"]);;
}

// 10
const paisesQueLimitanConArgentina = () => {
    /* Debe retornar solo los nombres comunes de los países que limitan con Argentina */
    /* WARNING: Hay países que no tienen esa info. A tenerlo en cuenta para evitar errores */

    return data.filter( p => p.borders?.some(pString => pString === "ARG")).map(p => p.name.common);
}