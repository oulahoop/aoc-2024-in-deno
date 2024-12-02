import { getInput } from "../../functions.ts";

export function solution() {
    solutionPart1(getInput("2", "_part1"));
    solutionPart2(getInput("2", "_part2"));
}

function solutionPart1(input: string[]) {
    let totalValidReports = 0;
    for (let i = 0; i < input.length; i++) {
        const reportTab = input[i].split(" ").map(Number);

        const validReport = isValidReport(reportTab);

        if(validReport) {
            totalValidReports++;
        }
    }

    console.log(totalValidReports);
}

function solutionPart2(input: string[]) {
    let totalValidReports = 0;
    // Loop through all the reports
    for (let i = 0; i < input.length; i++) {
        // Split the report into an array of numbers
        const reportTab = input[i].split(" ").map(Number);

        // Loop through all the numbers in the report
        for (let j = 0; j < reportTab.length; j++) {
            // Clone the report and remove the number at the index j
            const clone = structuredClone(reportTab);
            clone.splice(j, 1);

            // Check if is valid and add to the total valid reports if it is
            const valid = isValidReport(clone);
            if(valid) {
                totalValidReports++;
                break;
            }
        }
    }

    console.log(totalValidReports);
}

function isValidReport(reportTab: number[]): boolean {
    let validReport = true;
    const isPositive = reportTab[0] - reportTab[1] > 0;

    for (let i = 1; i < reportTab.length; i++) {
        const currentValue = reportTab[i];
        const previousValue = reportTab[i - 1];

        const isCountNotCorrect = Math.abs(previousValue - currentValue) > 3 || Math.abs(previousValue - currentValue) == 0;
        if ((isPositive && previousValue - currentValue < 0) || isCountNotCorrect) {
            validReport = false;
        } else if ((!isPositive && previousValue - currentValue > 0) || isCountNotCorrect) {
            validReport = false;
        }
    }
    return validReport;
}