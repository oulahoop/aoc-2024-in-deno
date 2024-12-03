import { getInput } from "../../functions.ts";

export function solution() {
    solutionPart1(getInput("3", "_part1"));
    solutionPart2(getInput("3", "_part2"));
}

function solutionPart1(input: string[]) {
    let total = 0;
    for (let i = 0; i < input.length; i++) {
        let regex = '(mul\\([0-9]+,[0-9]+\\))';

        // Get all the matches of the regex
        let matches = input[i].match(new RegExp(regex, 'g'));

        if(matches == null) {
            continue;
        }

        // Loop through all the matches
        for (let j = 0; j < matches.length; j++) {
            let match = matches[j];
            let numbers = match.match(/\d+/g);
            if(numbers == null) {
                continue;
            }
            let result = parseInt(numbers[0]) * parseInt(numbers[1]);

            // Add the result to the total
            total += result;
        }

    }

    console.log(total);
}

function solutionPart2(input: string[]) {
    let total = 0;

    let enabled = true;

    for (let i = 0; i < input.length; i++) {

        // Regex qui match les fonctions mul(x, y) sans qu'il y ait de "don't()" avant (possiblement séparé par n'importe quel charactère)
        // Excepté s'il y a un "do()" avant, alors on match le prochain mul(x, y)
        let regex = 'do\\(\\)|don\'t\\(\\)|mul\\(\\d+,\\d+\\)';

        // Parcourir toutes les groupes de la regex dans la string dans l'ordre
        let matches = input[i].matchAll(new RegExp(regex, 'gm'));

        // Loop through all the matches
        for (const match of matches) {
            // Si le match est un "do()", alors on active les mul(x, y) suivants
            if (match[0] == "do()") {
                enabled = true;
            } else if (match[0] == "don't()") {
                enabled = false;
            } else if (enabled) {
                let numbers = match[0].match(/\d+/g);
                if (numbers == null) {
                    continue;
                }
                let result = parseInt(numbers[0]) * parseInt(numbers[1]);

                // Add the result to the total
                total += result;
            }
        }
    }

    console.log(total);
}
