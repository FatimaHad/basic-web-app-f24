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
  function isSquareAndCube(num: number): boolean {
    const sqrt = Math.sqrt(num);
    const cbrt = Math.cbrt(num);
    return Number.isInteger(sqrt) && Number.isInteger(cbrt);
  }
  // Check if the query is an addition or multiplication question
  const arithmeticMatch = query.match(/What is (\d+) (plus|multiplied by) (\d+)\?/);
  if (arithmeticMatch) {
      const num1 = parseInt(arithmeticMatch[1], 10);
      const num2 = parseInt(arithmeticMatch[3], 10);
      const operation = arithmeticMatch[2];

      if (operation === "plus") {
          return (num1 + num2).toString();
      } else if (operation === "multiplied by") {
          return (num1 * num2).toString();
      }
  }

  // Check if the query is asking for the largest number
  const largestNumberMatch = query.match(/Which of the following numbers is the largest: ([\d,\s]+)\?/);
  if (largestNumberMatch) {
      const numbers = largestNumberMatch[1].split(',').map(num => parseInt(num.trim(), 10));
      return Math.max(...numbers).toString();
  }

  // Check if the query is asking for a number that is both a square and a cube
  const squareAndCubeMatch = query.match(/Which of the following numbers is both a square and a cube: ([\d,\s]+)\?/);
  if (squareAndCubeMatch) {
      const numbers = squareAndCubeMatch[1].split(',').map(num => parseInt(num.trim(), 10));
      const result = numbers.find(isSquareAndCube);
      return result ? result.toString() : "None";
  }

  return "";
}
