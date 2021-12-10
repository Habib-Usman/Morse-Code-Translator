import Translator from "./convert";

describe("Text Conversion", () => {
    const translator = new Translator();

    it("It should convert text into morse code", () => {
        expect(translator.translateMorse("Hello")).toBe(".... . .-.. .-.. ---");
        expect(translator.translateMorse("Hello World")).toBe(
            ".... . .-.. .-.. --- / .-- --- .-. .-.. -.."
        );
        expect(translator.translateMorse("Morse code is cool")).toBe(
            "-- --- .-. ... . / -.-. --- -.. . / .. ... / -.-. --- --- .-.."
        );
    });

    test("It should convert text into morse code", () => {
        expect(translator.translateEnglish("..-. --- --- -..")).toBe("food");
        expect(
            translator.translateEnglish(
                ".. .----. -- / .... ..- -. --. .-. -.--"
            )
        ).toBe("im hungry");
        expect(
            translator.translateEnglish(
                ".--. .. --.. --.. .- / .. ... / -- -.-- / ..-. .- ...- --- .-. .. - ."
            )
        ).toBe("pizza is my favorite");
    });

    test("It should convert numbers into morse code", () => {
        expect(translator.translateMorse("12")).toBe(".---- ..---");
        expect(translator.translateMorse("233845761")).toBe(
            "..--- ...-- ...-- ---.. ....- ..... --... -.... .----"
        );
        expect(translator.translateMorse("2085 82377481 1284771285 11 0")).toBe(
            "..--- ----- ---.. ..... / ---.. ..--- ...-- --... --... ....- ---.. .---- / .---- ..--- ---.. ....- --... --... .---- ..--- ---.. ..... / .---- .---- / -----"
        );
    });
});
