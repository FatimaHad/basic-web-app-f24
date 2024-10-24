import QueryProcessor from "../../utils/QueryProcessor";
import '@testing-library/jest-dom'

describe("QueryProcessor", () => {
    test("should return a string", () => {
        const query = "test";
        const response: string = QueryProcessor(query);
        expect(typeof response).toBe("string");
    });

    test('should return shakespeare description', () => {
        const query = "shakespeare";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
            "English poet, playwright, and actor, widely regarded as the greatest " +
            "writer in the English language and the world's pre-eminent dramatist."
          ));
    });

    // TODO: You should update the test below after you add your andrew id
    test('should return my andrew id', () => {
        const query = "what's your Andrew ID?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "fhaddad"
          ));
    });
    test('should return my name', () => {
        const query = "What is your name?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("fhaddad");
    });
    test('should return the largest number', () => {
        const query = "Which of the following numbers is the largest: 47, 63, 42?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("63");
    });
    // Test cases
    test('should return the correct addition results', () => {
        expect(QueryProcessor("What is 38 plus 8?")).toBe("46");
        expect(QueryProcessor("What is 79 plus 36?")).toBe("115");
        expect(QueryProcessor("What is 57 plus 72?")).toBe("129");
    });

    test('should return the largest number for comparison queries', () => {
        expect(QueryProcessor("Which of the following numbers is the largest: 27, 57, 71?")).toBe("71");
        expect(QueryProcessor("Which of the following numbers is the largest: 55, 74, 77?")).toBe("77");
        expect(QueryProcessor("Which of the following numbers is the largest: 57, 89, 21?")).toBe("89");
        expect(QueryProcessor("Which of the following numbers is the largest: 47, 63, 42?")).toBe("63");
    });
});
