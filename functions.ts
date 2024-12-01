export function getInput(aocDay: string, suffix: string): string[] {
  return parseFile(Deno.readTextFileSync(`./aoc/${aocDay}/input${suffix}.txt`));
}

function parseFile(file: string): string[] {
  return file.split("\n");
}