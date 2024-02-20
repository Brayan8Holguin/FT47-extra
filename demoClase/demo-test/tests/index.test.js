const {
  resta,
  suma,
  undefinedFunction,
  definedVariable,
  nullVariable,
  server
} = require("../src/index");
const request = require("supertest")


describe("testeando ruta /", () => {
  it("devuelve status 200",async () => {
    const response = await request(server).get("/");
    expect(response).toBe(203)
  })
})

xdescribe("Test de la Funcion resta", () => {
  it("Debe devolver 3 si se ejecuta con 7 y 4", () => {
    expect(resta(7, 4)).toBe(3);
  });
  it("Debe devolver 0 si se ejecuta con 5 y 5", () => {
    expect(resta(5, 5)).toBe(0);
  });
});

describe("Test de la Funcion suma", () => {
  it("Debe devolver 3 si se ejecuta con 1 y 2", () => {
    expect(suma(1, 2)).toBe(3);
  });
  xit("Debe devolver 6 si se ejecuta con 5 y 1", () => {
    expect(suma(5, 1)).toBe(6);
  });
});

describe("Test de la funcion undefinedFunction", () => {
  it("Debe devolver true, ya que la funcion deberia retornar undefined", () => {
    expect(undefinedFunction()).toBeUndefined();
  });
});

describe("Test de la variable definedVariable", () => {
  it("Deve devolver true, ya que la variable esta definida", () => {
    expect(definedVariable).toBeDefined();
  });
});

describe("Test de la variable nullVariable", () => {
  it("Debe devolver true, ya que la variable es null", () => {
    expect(nullVariable).toBeNull();
  });
});

describe("Test de toBeTruthy", () => {
  //? algo sea true vs que algo se pueda ver como true
  // true vs {} , true vs []
  const prueba1 = true;
  const prueba2 = {};
  const prueba3 = [];
  it("Deve devolver true para cada una de las anteriores", () => {
    expect(prueba1).toBeTruthy();
    expect(prueba2).toBeTruthy();
    expect(prueba3).toBeTruthy();
  });
});

// copia por valor vs copia por referencia
// datos primituivos vs datos no primitivos
// strings, boolean, null vs array, object, function

// toBe -> para elementos primitivos
// toEqual -> para comparar elementos no primitivos

describe("Comparando datos no primitivos", () => {
  xit("Vamos a ver que tira con arrays", () => {
    expect([1, 2]).not.toBe([1, 2]);
  });
  it("vamos a ver que tira con objetos", () => {
    expect({ name: "Feli" }).toEqual({ name: "Feli" });
    expect(10.0005).toBeCloseTo(10);
    expect("hola").not.toMatch("u");
  });
  const arr = [1, 2, 3, "hola", "chao", true, false];
  xit("comprobando que contiene", () => {
    expect(arr).toContain(1);
    expect(arr).toContain(2);
    expect(arr).toContain(3);
    expect(arr).not.toContain(4);
    expect(arr).toContain(false);
  });
  const obj = { name: "Feli", age: 25, email: "f@f.com" };
  expect(obj).toHaveProperty("name");
  expect(obj).toHaveProperty("age", 25);
  expect(obj).toHaveProperty("email");
});
