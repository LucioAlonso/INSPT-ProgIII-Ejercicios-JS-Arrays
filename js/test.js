/*
    Abrí la consola del browser para visualizar los resultados esperados de cada función
*/

/* 
    1) Testear función imprimirPaises. La consola del browser debería mostrar: 
    Suriname. Capital: Paramaribo
    Argentina. Capital: Buenos Aires
    Chile. Capital: Santiago
    Brazil. Capital: Brasília
    Uruguay. Capital: Montevideo
    Colombia. Capital: Bogotá
    Ecuador. Capital: Quito
    Bolivia. Capital: Sucre
    Guyana. Capital: Georgetown
    Paraguay. Capital: Asunción
    Falkland Islands. Capital: Stanley
    Venezuela. Capital: Caracas
    French Guiana. Capital: Cayenne
    Peru. Capital: Lima
*/
imprimirPaises();

/* 
    2) Testear función imprimirPaises. La consola del browser debería mostrar: 
    (14) ['Republic of Suriname', 'Argentine Republic', 'Republic of Chile', 'Federative Republic of Brazil', 'Oriental Republic of Uruguay', 'Republic of Colombia', 'Republic of Ecuador', 'Plurinational State of Bolivia', 'Co-operative Republic of Guyana', 'Republic of Paraguay', 'Falkland Islands', 'Bolivarian Republic of Venezuela', 'Guiana', 'Republic of Peru']
*/
console.log(nombresDePaises());

/* 
    3) Testear función nombresDeCapitales. La consola del browser debería mostrar: 
    (14) ['Paramaribo', 'Buenos Aires', 'Santiago', 'Brasília', 'Montevideo', 'Bogotá', 'Quito', 'Sucre', 'Georgetown', 'Asunción', 'Stanley', 'Caracas', 'Cayenne', 'Lima']
*/
console.log(nombresDeCapitales());

/* 
    4) Testear función poblacionTotal. La consola del browser debería mostrar: 
    430895697
*/
console.log(poblacionTotal());

/* 
    5) Testear función poblacionTotalMundialSinSud. La consola del browser debería mostrar: 
    7540427948
*/
console.log(poblacionTotalMundialSinSud(7971323645));

/* 
    6) Testear función todosEmpiezanLosLunes. La consola del browser debería mostrar: 
    true
*/
console.log(todosEmpiezanLosLunes());

/* 
    7) Testear función algunoNoConducePorLaDerecha. La consola del browser debería mostrar: 
    true
*/
console.log(algunoNoConducePorLaDerecha());

/* 
    8) Testear función cualesNoConducenPorLaDerecha. La consola del browser debería mostrar: 
    (3) [{…}, {…}, {…}]
*/
console.log(cualesNoConducenPorLaDerecha());

/* 
    9) Testear función cualesNoConducenPorLaDerechaSimpl. La consola del browser debería mostrar: 
    (3) ['Suriname', 'Guyana', 'Falkland Islands']
*/
console.log(cualesNoConducenPorLaDerechaSimpl());

/* 
    10) Testear función cualesNoConducenPorLaDerechaSimpl. La consola del browser debería mostrar: 
    (5) ['Chile', 'Brazil', 'Uruguay', 'Bolivia', 'Paraguay']
*/
console.log(paisesQueLimitanConArgentina());