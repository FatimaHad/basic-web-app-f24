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
    // Test cases
    test('should return correct results for addition and multiplication questions', () => {
        expect(QueryProcessor("What is 57 multiplied by 88?")).toBe("5016");
        expect(QueryProcessor("What is 44 plus 91?")).toBe("135");
        expect(QueryProcessor("What is 46 plus 43?")).toBe("89");
    });

    test('should return the largest number for largest number comparison', () => {
        expect(QueryProcessor("Which of the following numbers is the largest: 90, 56, 80?")).toBe("90");
        expect(QueryProcessor("Which of the following numbers is the largest: 88, 10, 74?")).toBe("88");
        expect(QueryProcessor("Which of the following numbers is the largest: 51, 41, 8?")).toBe("51");
    });

    test('should return the number that is both a square and a cube', () => {
        expect(QueryProcessor("Which of the following numbers is both a square and a cube: 3375, 729, 2681, 1702, 557, 2401, 1110?")).toBe("729");
    });
    test('should return correct prime numbers', () => {
        expect(QueryProcessor("Which of the following numbers are primes: 94, 87, 85, 53, 26?")).toBe("53");
        expect(QueryProcessor("Which of the following numbers are primes: 23, 34, 55, 2, 19?")).toBe("23, 2, 19");
        expect(QueryProcessor("Which of the following numbers are primes: 4, 6, 8, 9, 10?")).toBe("None");
    });
    // Test cases to handle different mathematical queries
test('should return correct results for multi-addition queries', () => {
    expect(QueryProcessor("What is 95 plus 34 plus 58?")).toBe("187");
    expect(QueryProcessor("What is 40 plus 4 plus 50?")).toBe("94");
});

test('should return correct results for exponentiation queries', () => {
    expect(QueryProcessor("What is 42 to the power of 9?")).toBe(Math.pow(42, 9).toString());
});

test('should return the largest number for largest number comparison', () => {
    expect(QueryProcessor("Which of the following numbers is the largest: 29, 3, 61?")).toBe("61");
});

test('should return the correct prime numbers', () => {
    expect(QueryProcessor("Which of the following numbers are primes: 94, 87, 85, 53, 26?")).toBe("53");
});

test('should return the correct number that is both a square and a cube', () => {
    expect(QueryProcessor("Which of the following numbers is both a square and a cube: 729, 3483, 4683, 125, 3481, 879, 796?")).toBe("729");
});
});
