import {getInput} from "../../functions.ts";

export function solution() {
    solutionPart1(getInput("1", "_part1"));
    solutionPart2(getInput("1", "_part2"));
}

export function solutionPart1(input: string[]) {
    const leftNumbers = [];
    const rightNumbers = [];

    for(let i = 0; i < input.length; i++) {
        const numberSplit = input[i].split("   ");
        leftNumbers.push(parseInt(numberSplit[0]));
        rightNumbers.push(parseInt(numberSplit[1]));
    }

    // Sort the numbers
    leftNumbers.sort((a, b) => a - b);
    rightNumbers.sort((a, b) => a - b);

    // Add the difference between the first left number and the first right number
    let difference = 0;

    // Perform the differences calculation
    for(let i = 0; i < leftNumbers.length; i++) {
        difference += Math.abs(leftNumbers[i] - rightNumbers[i]);
    }

    // Print the difference
    console.log(difference);
}

export function solutionPart2(input: string[]) {
    const leftNumbers = [];
    const mapRightNumbers = new Map();
    let totalSimilarities = 0;

    // Create left numbers and a map of the count of right numbers
    for(let i = 0; i < input.length; i++) {
        const numberSplit = input[i].split("   ");
        const leftNumber = parseInt(numberSplit[0]);
        const rightNumber = parseInt(numberSplit[1]);
        leftNumbers.push(leftNumber);
        if(mapRightNumbers.has(rightNumber)) {
            mapRightNumbers.set(rightNumber, mapRightNumbers.get(rightNumber) + 1);
        } else {
            mapRightNumbers.set(rightNumber, 1);
        }
    }

    // Perform the similarities calculation
    for(let i = 0; i < leftNumbers.length; i++) {
        const number = leftNumbers[i];
        if(mapRightNumbers.has(number)) {
            totalSimilarities += (mapRightNumbers.get(number) * number);
        }
    }

    // Print the total similarities
    console.log(totalSimilarities);
}