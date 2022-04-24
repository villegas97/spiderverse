const Batman = require("./../app/batman");
describe("Unit test for Batman class", () => {
  test("1)Creating batman class object", () => {
    const batman1 = new Batman("Ben Affleck", 42, 3, "DC");
    expect(batman1.actor).toBe("Ben Affleck");
    expect(batman1.age).toBe(42);
    expect(batman1.movies).toBe(3);
    expect(batman1.studio).toBe("DC");
  });
});
