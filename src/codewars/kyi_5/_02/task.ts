// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

export function pigIt(str: string) {
  return str.replace(/\b(\w+)\b/g, (m, i) => i.slice(1) + i[0] + "ay");
}
