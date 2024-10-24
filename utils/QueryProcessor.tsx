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
  const additionMatch = query.match(/What is (\d+) plus (\d+)\?/);
    if (additionMatch) {
        const num1 = parseInt(additionMatch[1], 10);
        const num2 = parseInt(additionMatch[2], 10);
        return (num1 + num2).toString();
    }

    // Check if the query is asking for the largest number
    const largestNumberMatch = query.match(/Which of the following numbers is the largest: ([\d,\s]+)\?/);
    if (largestNumberMatch) {
        // Extract numbers from the query
        const numbers = largestNumberMatch[1].split(',').map(num => parseInt(num.trim(), 10));
        return Math.max(...numbers).toString();
    }

  return "";
}
