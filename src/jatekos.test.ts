import Játékos from "./Játékos";
describe("Játékos osztály unit tesztek:", () => {
    const tesztJátékos = new Játékos("Laci 2 2 3 4 5 2 3 1 1 2");
    it("Játékos osztálypéldány ellenőrzése", async () => {
        expect(tesztJátékos).toBeInstanceOf(Játékos);
    });

    it("Játékos nevének ellenőrzése", async () => {
        expect(tesztJátékos.név).toBe("Laci");
    });
    it("Fordulók száma", async () => {
        expect(tesztJátékos.fordulókSzáma).toBe(10);
    });
});
