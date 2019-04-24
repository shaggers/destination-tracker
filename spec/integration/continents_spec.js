const request = require("request");
const server = require("../../src/server");
const base = "http://localhost:3000/navigation/";
const sequelize = require("../../src/db/models/index").sequelize;
const Continent = require("../../src/db/models").Continents;

describe("routes : navigation", () => {

    beforeEach((done) => {
        this.continent;
        sequelize.sync({force: true}).then((res) => {
  
         Continent.create({
           name: "Asia",
           acronym: "AS"
         })
          .then((continent) => {
            this.continent = continent;
            done();
          })
          .catch((err) => {
            console.log(err);
            done();
          });
  
        });
  
    });


    describe("GET /navigation", () => {

        it("should return a status code 200 and all continents", (done) => {
        request.get(base, (err, res, body) => {
            expect(res.statusCode).toBe(200);
            expect(err).toBeNull();
            expect(body).toContain("Asia");
            done();
        });
        });

    });

    describe("GET /navigation/:name", () => {

        it("should render a view with the selected continent", (done) => {
          request.get(`${base}${this.continent.name}`, (err, res, body) => {
            expect(err).toBeNull();
            expect(body).toContain("Asia");
            done();
          });
        });
   
      });
});