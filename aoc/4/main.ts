import { getInput } from "../../functions.ts";

export function solution() {
    solutionPart1(getInput("4", "_part1"));
    solutionPart2(getInput("4", "_part2"));
}

function solutionPart1(input: string[]) {
    let totalXMas = 0;
    const charMatrix = input.map((line) => line.split(''));
    for(let i = 0; i < input.length; i++) {
        for (let j = 0; j < input[i].length; j++) {
            if (charMatrix[i][j] == 'X') {
                // We need to search in front of the x
                if(j < input[i].length - 3) {
                    if(charMatrix[i][j + 1] == 'M' && charMatrix[i][j + 2] == 'A' && charMatrix[i][j + 3] == 'S') {
                        totalXMas++;
                    }
                }

                // We need to search behind the x
                if(j > 2) {
                    if(charMatrix[i][j - 1] == 'M' && charMatrix[i][j - 2] == 'A' && charMatrix[i][j - 3] == 'S') {
                        totalXMas++;
                    }
                }

                // We need to search above the x
                if(i > 2) {
                    if(charMatrix[i - 1][j] == 'M' && charMatrix[i - 2][j] == 'A' && charMatrix[i - 3][j] == 'S') {
                        totalXMas++;
                    }
                }

                // We need to search below the x
                if(i < input.length - 3) {
                    if(charMatrix[i + 1][j] == 'M' && charMatrix[i + 2][j] == 'A' && charMatrix[i + 3][j] == 'S') {
                        totalXMas++;
                    }
                }

                // We need to search top right
                if(i > 2 && j < input[i].length - 3) {
                    if(charMatrix[i - 1][j + 1] == 'M' && charMatrix[i - 2][j + 2] == 'A' && charMatrix[i - 3][j + 3] == 'S') {
                        totalXMas++;
                    }
                }

                // We need to search top left
                if(i > 2 && j > 2) {
                    if(charMatrix[i - 1][j - 1] == 'M' && charMatrix[i - 2][j - 2] == 'A' && charMatrix[i - 3][j - 3] == 'S') {
                        totalXMas++;
                    }
                }

                // We need to search bottom right
                if(i < input.length - 3 && j < input[i].length - 3) {
                    if(charMatrix[i + 1][j + 1] == 'M' && charMatrix[i + 2][j + 2] == 'A' && charMatrix[i + 3][j + 3] == 'S') {
                        totalXMas++;
                    }
                }

                // We need to search bottom left
                if(i < input.length - 3 && j > 2) {
                    if(charMatrix[i + 1][j - 1] == 'M' && charMatrix[i + 2][j - 2] == 'A' && charMatrix[i + 3][j - 3] == 'S') {
                        totalXMas++;
                    }
                }
            }
        }
    }

    console.log(totalXMas);
}

function solutionPart2(input: string[]) {
    let totalXMas = 0;
    const charMatrix = input.map((line) => line.split(''));
    const map = new Map<string, number>();
    for(let i = 0; i < input.length; i++) {
        for (let j = 0; j < input[i].length; j++) {
            // Diagonal bottom right
            if(i < input.length - 2 && j < input[i].length - 2) {
                if (charMatrix[i][j] == 'M' &&
                    charMatrix[i + 1][j + 1] == 'A' &&
                    charMatrix[i + 2][j + 2] == 'S') {
                    const key = `${i + 1}-${j + 1}`;
                    if (map.has(key)) {
                        map.set(key, (map.get(key) ?? 0) + 1);
                    } else {
                        map.set(key, 1);
                    }
                }
            }

            // Diagonal bottom left
            if(i < input.length - 2 && j > 1) {
                if (charMatrix[i][j] == 'M' && charMatrix[i + 1][j - 1] == 'A' && charMatrix[i + 2][j - 2] == 'S') {
                    const key = `${i + 1}-${j - 1}`;
                    if (map.has(key)) {
                        map.set(key, (map.get(key) ?? 0) + 1);
                    } else {
                        map.set(key, 1);
                    }
                }
            }

            // Diagonal top right
            if(i > 1 && j < input[i].length - 2) {
                if (charMatrix[i][j] == 'M' && charMatrix[i - 1][j + 1] == 'A' && charMatrix[i - 2][j + 2] == 'S') {
                    const key = `${i - 1}-${j + 1}`;
                    if (map.has(key)) {
                        map.set(key, (map.get(key) ?? 0) + 1);
                    } else {
                        map.set(key, 1);
                    }
                }
            }

            // Diagonal top left
            if(i > 1 && j > 1) {
                if (charMatrix[i][j] == 'M' && charMatrix[i - 1][j - 1] == 'A' && charMatrix[i - 2][j - 2] == 'S') {
                    const key = `${i - 1}-${j - 1}`;
                    if (map.has(key)) {
                        map.set(key, (map.get(key) ?? 0) + 1);
                    } else {
                        map.set(key, 1);
                    }
                }
            }
        }
    }

    map.forEach((value) => {
        if (value == 2) {
            totalXMas++;
        }
    })

    console.log(totalXMas);
}
