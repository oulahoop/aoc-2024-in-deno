import { getInput } from "../../functions.ts";

export function solution() {
    solutionPart1(getInput("5", "_part1_1"), getInput("5", "_part1_2"));
    solutionPart2(getInput("5", "_part2_1"), getInput("5", "_part2_2"));
}

function solutionPart1(input: string[], input2: string[]) {
    let total = 0;
    const rules = new Map<string, number[]>();
    for(let i = 0; i < input.length; i++) {
        const parts = input[i].split('|');
        const number = parts[0];
        const numberNeededToBeAfter = parseInt(parts[1]);

        if(!rules.has(number)) {
            rules.set(number, []);
        }

        rules.get(number)?.push(numberNeededToBeAfter);
    }

    for(let i = 0; i < input2.length; i++) {
        const lineToValid = input2[i].split(',');
        let isValid = true;
        for(let j = 1; j < lineToValid.length; j++) {
            if(rules.has(lineToValid[j])) {
                const numbers = rules.get(lineToValid[j]);
                const clonedLineToValid = structuredClone(lineToValid);
                clonedLineToValid.slice(0, j).forEach((number) => {
                    if(numbers?.includes(parseInt(number))) {
                        isValid = false;
                    }
                });

                if(!isValid) {
                    break;
                }
            }
        }

        if(isValid) {
            total += parseInt(lineToValid[Math.floor(lineToValid.length / 2)]);
        }
    }

    console.log(total);
}

function solutionPart2(input: string[], input2: string[]) {
    let total = 0;
    // Get the rules
    const rules = new Map<string, number[]>();
    for(let i = 0; i < input.length; i++) {
        const parts = input[i].split('|');
        const number = parts[0];
        const numberNeededToBeAfter = parseInt(parts[1]);

        if(!rules.has(number)) {
            rules.set(number, []);
        }

        rules.get(number)?.push(numberNeededToBeAfter);
    }

    for(let i = 0; i < input2.length; i++) {
        const lineToValid = input2[i].split(',');
        let isValid = true;
        for(let j = 1; j < lineToValid.length; j++) {
            if(rules.has(lineToValid[j])) {
                const numbers = rules.get(lineToValid[j]);
                const clonedLineToValid = structuredClone(lineToValid);
                clonedLineToValid.slice(0, j).forEach((number) => {
                    if(numbers?.includes(parseInt(number))) {
                        // @TODO: Recreate the array with the correct values
                    }
                });

                if(!isValid) {
                    break;
                }
            }
        }

        if(isValid) {
            total += parseInt(lineToValid[Math.floor(lineToValid.length / 2)]);
        }
    }

    console.log(total);
}