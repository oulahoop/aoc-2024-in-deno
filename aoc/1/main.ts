export function solution(input: string[]) {
    const leftNumbers = [];
    const rightNumbers = [];

    for(let i = 0; i < input.length; i++) {
        const numberSplit = input[i].split("   ");
        leftNumbers.push(parseInt(numberSplit[0]));
        rightNumbers.push(parseInt(numberSplit[1]));
    }

    console.log(leftNumbers);
    console.log(rightNumbers);

    // Sort the numbers
    leftNumbers.sort((a, b) => a - b);
    rightNumbers.sort((a, b) => a - b);

    // Add the difference between the first left number and the first right number
    let difference = 0;

    for(let i = 0; i < leftNumbers.length; i++) {
        difference += Math.abs(leftNumbers[i] - rightNumbers[i]);
    }

    console.log(difference);
}