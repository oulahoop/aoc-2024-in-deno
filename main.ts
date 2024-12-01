import {getInput} from "./functions.ts";

if (import.meta.main) {
    // Input of the aoc day
    const aocDay = Deno.args[0];

    // Import the main function of the aoc day
    const { solution } = await import(`./aoc/${aocDay}/main.ts`);

    // Run the solution with the input of the aoc day
    solution(getInput(aocDay));
}
