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
  function isPrime(num: number): boolean {
    if (num <= 1) return false; // Numbers less than or equal to 1 are not prime
    if (num === 2) return true; // 2 is the only even prime number
    if (num % 2 === 0) return false; // Exclude even numbers

    // Check divisibility from 3 to sqrt(num)
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}

// Utility function to check if a number is both a square and a cube
function isSquareAndCube(num: number): boolean {
    const sqrt = Math.sqrt(num);
    const cbrt = Math.cbrt(num);
    return Number.isInteger(sqrt) && Number.isInteger(cbrt);
}
  const additionMatch = query.match(/What is (\d+(?: plus \d+)+)\?/);
  if (additionMatch) {
      const numbers = additionMatch[1].split(' plus ').map(num => parseInt(num, 10));
      const sum = numbers.reduce((acc, curr) => acc + curr, 0);
      return sum.toString();
  }

  // Handle exponentiation queries
  const exponentiationMatch = query.match(/What is (\d+) to the power of (\d+)\?/);
  if (exponentiationMatch) {
      const base = parseInt(exponentiationMatch[1], 10);
      const exponent = parseInt(exponentiationMatch[2], 10);
      return Math.pow(base, exponent).toString();
  }

  // Handle largest number queries
  const largestNumberMatch = query.match(/Which of the following numbers is the largest: ([\d,\s]+)\?/);
  if (largestNumberMatch) {
      const numbers = largestNumberMatch[1].split(',').map(num => parseInt(num.trim(), 10));
      return Math.max(...numbers).toString();
  }

  // Handle prime number queries
  const primeNumberMatch = query.match(/Which of the following numbers are primes: ([\d,\s]+)\?/);
  if (primeNumberMatch) {
      const numbers = primeNumberMatch[1].split(',').map(num => parseInt(num.trim(), 10));
      const primes = numbers.filter(isPrime);
      return primes.length > 0 ? primes.join(', ') : "None";
  }

  // Handle square and cube number queries
  const squareAndCubeMatch = query.match(/Which of the following numbers is both a square and a cube: ([\d,\s]+)\?/);
  if (squareAndCubeMatch) {
      const numbers = squareAndCubeMatch[1].split(',').map(num => parseInt(num.trim(), 10));
      const result = numbers.find(isSquareAndCube);
      return result ? result.toString() : "None";
  }

  return "";
}
