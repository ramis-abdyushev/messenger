export function generateRange(end: number): number[];
export function generateRange(start: number, end: number): number[];

export function generateRange(a: number, b?: number): number[] {
  let start: number;
  let end: number;

  if (b === undefined) {
    start = 1;
    end = a;
  } else {
    start = a;
    end = b;
  }

  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}
