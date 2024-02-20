const server = require("../src/server");
const request = require("supertest");
const app = request(server);

// app -> levantando en http://localhost:
//                      http://127.0.0.1:

describe("Testeando rutas", () => {
  describe("Testeando Characters", () => {
    it("Devuelve un status 200 para el id 1", async () => {
      const response = await app.get("/rickandmorty/character/1");
      expect(response.status).toBe(200);
      expect(response.statusCode).toBe(200);
    });
      
      it("verificando propiedades de la respuesta", async () => {
          const response = await app.get("/rickandmorty/character/1");
          expect(response.body).toHaveProperty("name");
          expect(response.body).toHaveProperty("status");
          expect(response.body).toHaveProperty("species");
          expect(response.body).toHaveProperty("gender");
          expect(response.body).toHaveProperty("origin");
          expect(response.body).toHaveProperty("location");
          expect(response.body).toHaveProperty("image");
      })
  });

  it("Devuelve un objeto con la propiedad 'name' para el id 1 y el valor de 'Rick Sanchez'", async () => {
    const response = await app.get("/rickandmorty/character/1");
    expect(response.body).toHaveProperty("name", "Rick Sanchez");
  });

    describe("Testeando Users", () => {
        it("Devuelve un status 200 para el endpoint /register", async () => {
            const user = {
                email: "rick@mail.com",
                password: "1234",
            };
            const response = await app.post("/rickandmorty/register").send(user);
            expect(response.status).toBe(201);
        });

        it("Devuelve un status 200 para el endpoint /login", async () => {
          const user = {
            email: "rick@mail.com",
            password: "1234",
          };
        const response = await app.post("/rickandmorty/login").send(user);
        expect(response.status).toBe(200);
        expect(response.statusCode).toBe(200);
      });
  });

  describe("Testeando Favorites", () => {});
});
