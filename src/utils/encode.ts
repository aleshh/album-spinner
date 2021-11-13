export default function encode(val: string): string {
  return val.replace(/\s/g, "+").replace(/,/g, "+");
}
