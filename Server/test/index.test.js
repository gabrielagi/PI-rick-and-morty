const app = require("../src/app");
const session = require("supertest");
const request = session(app);

const character = {
  id: 940,
  name: "Gabriela",
  species: "Human",
  gender: "Female",
  status: "Alive",
  origin: {
    name: "Earth",
  },
  image: "image.jpg",
};

describe("test de RUTAS", () => {
  describe("GET /rickandmorty/character/:id", () => {
    it("Responde con status: 200", async () => {
      const response = await request.get("/rickandmorty/character/1");
      expect(response.statusCode).toBe(200);
    });

    it("Responde un objeto con las propiedades: 'id', 'name', 'species', 'gender', 'status', 'origin' e 'image'", async () => {
      const response = await request.get("/rickandmorty/character/1");
      for (const prop in character) {
        expect(response.body).toHaveProperty(prop);
      }
    });
    describe("GET /rickandmorty/login", () => {
      it("Responde con un objeto con la propiedad access en true si la información del usuario es válida", async () => {
        const response = await request.get(
          "/rickandmorty/login?email=gabriela@gmail.com&password=asd123"
        );
        const access = { access: true };
        expect(response.body).toEqual(access);
      });

      it("Responde con un objeto con la propiedad access en true si la información del usuario es válida", async () => {
        const response = await request.get(
          "/rickandmorty/login?email=gabriela@gmail.com&password=a342fd"
        );
        const access = { access: false };
        expect(response.body).toEqual(access);
      });
    });
  });
  describe("POST /rickandmorty/fav", () => {
    it("Debe guardar el personaje en favoritos", async () => {
      const response = await request.post("/rickandmorty/fav").send(character);
      expect(response.body).toContainEqual(character);
    });

    it("Debe agregar personajes a favoritos sin eliminar los existentes", async () => {
      character.id = 3293;
      character.name = "FT 41a";
      const response = await request.post("/rickandmorty/fav").send(character);
      expect(response.body.length).toBe(2);
    });
  });

  describe("DELETE /rickandmorty/fav/:id", () => {
    it("Si el ID solicitado no existe, deber'ia retornar un arreglo con todos los favoritos", async () => {
      const response = await request.delete("/rickandmorty/fav/2");
      expect(response.body.length).toBe(2);
    });
    it("Si el ID enviado existe, debería eliminarlo de favoritos", async () => {
      const response = await request.delete("/rickandmorty/fav/3293");
      expect(response.body.length).toBe(1);
    });
  });
});
