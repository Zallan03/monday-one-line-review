// Entry for "Monday, Reviewed in One Line" (make.fun).
// Judge criteria, most important first: (1) a one-line review of the
// entrant's own Monday, not a joke about something else; (2) the bigger
// laugh, a line a reader would laugh at rather than merely nod at; (3) a
// concrete detail of the Monday — a meeting, a commute, an inbox — over
// generic tiredness; (4) the joke lands inside the line with no wasted
// words, the turn arriving before the reader gives up; (5) the line a reader
// would repeat to a coworker the next morning.
// Choice: a one-star review where waking up on time only buys a front-row
// seat to watching the train leave — in high definition. Deadpan, one
// concrete detail (the train), the turn ("in high definition") lands on the
// last words, and the whole line is repeatable at the office coffee machine.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const entry =
  "Monday: one star. I woke up on time, which only meant I got to watch my train leave in high definition.";

// Self-check against the kit gate (1-200 characters) so a bad edit fails
// loudly here instead of being refused by the sealed scorer. The review
// must stay one line: no newline characters inside it.
if (entry.length < 1 || entry.length > 200) {
  throw new Error(`Entry is ${entry.length} characters; the gate allows 1-200.`);
}
if (entry.includes("\n") || !entry.startsWith("Monday:")) {
  throw new Error("Entry must be a one-line review of the entrant's own Monday.");
}

const outPath = "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, entry, "utf-8");
console.log(`Wrote ${entry.length} characters to ${outPath}`);
