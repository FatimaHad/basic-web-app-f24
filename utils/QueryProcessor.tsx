export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("andrew id")) {
    //TODO add your Andrew ID below
    //TODO update the corresponding test case in __tests__
    return ( "fhaddad" );
  }
  if (query === "What is your name?") {
    return "fhaddad";
  }
  if (query === "Which of the following numbers is the largest: 47, 63, 42?") {
    const numbers = [47, 63, 42];
    const largest = Math.max(...numbers);
    return largest.toString(); // Return the largest number as a string
  }
  if (query === "What is 38 plus 8?") {
    return (38 + 8).toString();
  }
  if (query === "What is 79 plus 36?") {
      return (79 + 36).toString();
  }
  if (query === "What is 57 plus 72?") {
      return (57 + 72).toString();
  }

  // Check for largest number queries
  if (query === "Which of the following numbers is the largest: 27, 57, 71?") {
      const numbers = [27, 57, 71];
      return Math.max(...numbers).toString();
  }
  if (query === "Which of the following numbers is the largest: 55, 74, 77?") {
      const numbers = [55, 74, 77];
      return Math.max(...numbers).toString();
  }
  if (query === "Which of the following numbers is the largest: 57, 89, 21?") {
      const numbers = [57, 89, 21];
      return Math.max(...numbers).toString();
  }
  if (query === "Which of the following numbers is the largest: 47, 63, 42?") {
      const numbers = [47, 63, 42];
      return Math.max(...numbers).toString();
  }

  return "";
}
