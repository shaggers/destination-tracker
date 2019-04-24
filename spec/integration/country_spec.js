const request = require("request");
const server = require("../../src/server");
const base = "http://localhost:3000/navigation";

const sequelize = require("../../src/db/models/index").sequelize;
const Continent = require("../../src/db/models").Continents;
const Country = require("../../src/db/models").Countries;

describe("routes : countries", () => {

  beforeEach((done) => {
    this.continent;
    this.country;

    sequelize.sync({force: true}).then((res) => {

      Continent.create({
        name: "North America",
        acronym: "NA"
      })
      .then((continent) => {
        this.continent = continent;

        Country.create({
          name: "Canada",
          abbreviation: "CA",
          continent: this.continent.acronym
        })
        .then((country) => {
          this.country = country;
          done();
        })
        .catch((err) => {
          console.log(err);
          done();
        });
      });
    });

  });

  describe("GET /navigation/:continent/countries/:name", () => {

    it("should render a view with the selected country", (done) => {
      request.get(`${base}/${this.continent.name}/countries/${this.country.name}`, (err, res, body) => {
        expect(err).toBeNull();
        expect(body).toContain("Canada");
        done();
      });
    });

  });

});