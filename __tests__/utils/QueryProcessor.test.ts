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
    test('should return the correct addition results', () => {
        expect(QueryProcessor("What is 82 plus 14?")).toBe("96");
        expect(QueryProcessor("What is 63 plus 69?")).toBe("132");
        expect(QueryProcessor("What is 22 plus 37?")).toBe("59");
        expect(QueryProcessor("What is 71 plus 55?")).toBe("126");
        expect(QueryProcessor("What is 98 plus 59?")).toBe("157");
        expect(QueryProcessor("What is 25 plus 20?")).toBe("45");
        expect(QueryProcessor("What is 74 plus 61?")).toBe("135");
        expect(QueryProcessor("What is 28 plus 6?")).toBe("34");
        expect(QueryProcessor("What is 71 plus 76?")).toBe("147");
        expect(QueryProcessor("What is 65 plus 67?")).toBe("132");
        expect(QueryProcessor("What is 38 plus 8?")).toBe("46");
        expect(QueryProcessor("What is 79 plus 36?")).toBe("115");
        expect(QueryProcessor("What is 57 plus 72?")).toBe("129");
    });
    
    test('should return the largest number for comparison queries', () => {
        expect(QueryProcessor("Which of the following numbers is the largest: 91, 88, 64?")).toBe("91");
        expect(QueryProcessor("Which of the following numbers is the largest: 31, 10, 64?")).toBe("64");
        expect(QueryProcessor("Which of the following numbers is the largest: 26, 9, 19?")).toBe("26");
        expect(QueryProcessor("Which of the following numbers is the largest: 63, 76, 46?")).toBe("76");
        expect(QueryProcessor("Which of the following numbers is the largest: 79, 98, 59?")).toBe("98");
        expect(QueryProcessor("Which of the following numbers is the largest: 27, 57, 71?")).toBe("71");
        expect(QueryProcessor("Which of the following numbers is the largest: 55, 74, 77?")).toBe("77");
        expect(QueryProcessor("Which of the following numbers is the largest: 57, 89, 21?")).toBe("89");
        expect(QueryProcessor("Which of the following numbers is the largest: 47, 63, 42?")).toBe("63");
    });
    test('should return correct results for addition questions', () => {
        expect(QueryProcessor("What is 12 plus 39?")).toBe("51");
        expect(QueryProcessor("What is 10 plus 51?")).toBe("61");
        expect(QueryProcessor("What is 73 plus 54?")).toBe("127");
    });
    
    test('should return the largest number for largest number comparison', () => {
        expect(QueryProcessor("Which of the following numbers is the largest: 30, 19, 28?")).toBe("30");
        expect(QueryProcessor("Which of the following numbers is the largest: 98, 49, 33?")).toBe("98");
        expect(QueryProcessor("Which of the following numbers is the largest: 91, 50, 38?")).toBe("91");
        expect(QueryProcessor("Which of the following numbers is the largest: 17, 16, 47?")).toBe("47");
        expect(QueryProcessor("Which of the following numbers is the largest: 95, 22, 26?")).toBe("95");
        expect(QueryProcessor("Which of the following numbers is the largest: 79, 8, 77?")).toBe("79");
    });
});
