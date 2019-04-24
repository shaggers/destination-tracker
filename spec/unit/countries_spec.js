const sequelize = require("../../src/db/models/index").sequelize;
const Continent = require("../../src/db/models").Continents;
const Country = require("../../src/db/models").Countries;

describe("Country", () => {

    beforeEach((done) => {
        this.continent;
        this.country;
        sequelize.sync({force: true}).then((res) => {

        Continent.create({
            name: "Africa",
            acronym: "AF"
        })
        .then((continent) => {
            this.continent = continent;
            
            Country.create({
                name: "South Africa",
                abbreviation: "ZA",
                continent: "AF"
            })
            .then((country) => {
            this.country = country;
            done();
            });
        })
        .catch((err) => {
            console.log(err);
            done();
        });
        });

    });

    describe("#create()", () => {

        it("should create a country object with a name, abbreviation, and assigned continent", (done) => {

          Country.create({
            name: "Poland",
            abbreviation: "PL",
            continent: this.continent.acronym
          })
          .then((country) => {
            expect(country.name).toBe("Poland");
            expect(country.abbreviation).toBe("PL");
            done();
   
          })
          .catch((err) => {
            console.log(err);
            done();
          });
        });

        it("should not create a country with missing name, abbreviation, or assigned continent", (done) => {
            Country.create({
              name: "Sweden"
            })
            .then((country) => {
       
             // the code in this block will not be evaluated since the validation error
             // will skip it. Instead, we'll catch the error in the catch block below
             // and set the expectations there
       
              done();
       
            })
            .catch((err) => {
       
              expect(err.message).toContain("Countries.abbreviation cannot be null");
              expect(err.message).toContain("Countries.continent cannot be null");
              done();
       
            })
        });
   
    });

    describe("#setContinent()", () => {

        it("should associate a continent and a country together", (done) => {
   
          Continent.create({
            name: "Europe",
            acronym: "EU"
          })
          .then((newContinent) => {
   
            expect(this.country.continent).toBe(this.continent.acronym);
            this.country.setContinent(newContinent)
            .then((country) => {
              expect(country.continent).toBe(newContinent.acronym);
              done();
            });
          })
        });
   
    });

    describe("#getContinent()", () => {

        it("should return the associated continent", (done) => {
   
          this.country.getContinent()
          .then((associatedContinent) => {
            expect(associatedContinent.name).toBe("Africa");
            done();
          });
   
        });
   
    });
});