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
});
