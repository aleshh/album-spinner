export default function fuzzyMatch(val1: string, val2: string): number {
  const encode = (val: string): string =>
    val.toLowerCase().replace(/[^0-9a-zA-Z]/g, "");

  val1 = encode(val1);
  val2 = encode(val2);

  if (val1 === val2) return 2;
  if (val1.indexOf(val2) !== -1 || val2.indexOf(val1) !== -1) return 1;
  return 0;
}
