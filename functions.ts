export function getInput(aocDay: string): string[] {
  return parseFile(Deno.readTextFileSync(`./aoc/${aocDay}/input.txt`));
}

function parseFile(file: string): string[] {
  return file.split("\n");
}