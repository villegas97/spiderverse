const Spiderman = require("./../app/spiderman");
describe("Unit Test for Spiderman Class", () => {
  test("1)Create a Spiderman Object", () => {
    const andrewGarfield = new Spiderman(
      "Spiderman Sony",
      31,
      "Andrew Garfield",
      2,
      "Sony"
    );
    expect(andrewGarfield.name).toBe("Spiderman Sony");
    expect(andrewGarfield.age).toBe(31);
    expect(andrewGarfield.actor).toBe("Andrew Garfield");
    expect(andrewGarfield.movies).toBe(2);
    expect(andrewGarfield.studio).toBe("Sony");
  });
  test("2) Use the method getInfo()", () => {
    const tomHolland = new Spiderman(
      "Spiderman Marvel",
      25,
      "Tom Holland",
      5,
      "Marvel Studio"
    );
    expect(tomHolland.getInfo()).toBe(
      "Hey, I'm Tom Holland from Marvel Studio"
    );
  });
});

describe("Unit testing for spiderman class", () => {
  test("1)Creación de un nuevo objeto", () => {
    const tobey = new Spiderman(
      "Spider Original",
      40,
      "Tobey McGuire",
      3,
      "Sony"
    );
    expect(tobey.name).toBe("Spider Original");
  });
});
