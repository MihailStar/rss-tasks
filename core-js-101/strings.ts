export function concatenateStrings(value1: string, value2: string): string {
  return value1.concat(value2);
}

export function getStringLength(value: string): number {
  return value.length;
}

export function getStringFromTemplate(
  firstName: string,
  lastName: string
): string {
  return `Hello, ${firstName} ${lastName}!`;
}

export function extractNameFromTemplate(value: string): string {
  return value.replace(/^Hello, (.+)!$/, '$1');
}

export function getFirstChar(value: string): string {
  return value[0];
}

export function removeLeadingAndTrailingWhitespaces(value: string): string {
  return value.trim();
}

export function repeatString(value: string, count: string): string {
  return value.repeat(Number(count));
}

export function removeFirstOccurrences(str: string, value: string): string {
  return str.replace(value, '');
}

export function unbracketTag(str: string): string {
  return str.slice(1, -1);
}

export function convertToUpperCase(str: string): string {
  return str.toUpperCase();
}

export function extractEmails(str: string): string[] {
  return str.split(';');
}

export function getRectangleString(width: number, height: number): string {
  const header = `┌${'─'.repeat(width - 2)}┐\n`;
  const footer = `└${'─'.repeat(width - 2)}┘\n`;
  const body = `│${' '.repeat(width - 2)}│\n`.repeat(height - 2);

  return `${header}${body}${footer}`;
}

export function encodeToRot13(str: string): string {
  const Unicode = { A: 65, Z: 90, a: 97, z: 122 } as const;

  const ALPHABET_LENGTH = 26;
  const SHIFT = 13;

  let result = '';

  for (let index = 0; index < str.length; index += 1) {
    const char = str[index];
    const charCode = str.charCodeAt(index);

    if (charCode >= Unicode.A && charCode <= Unicode.Z) {
      const charCodeWithShift =
        Unicode.A + ((charCode + SHIFT - Unicode.A) % ALPHABET_LENGTH);

      result += String.fromCharCode(charCodeWithShift);
    } else if (charCode >= Unicode.a && charCode <= Unicode.z) {
      const charCodeWithShift =
        Unicode.a + ((charCode + SHIFT - Unicode.a) % ALPHABET_LENGTH);

      result += String.fromCharCode(charCodeWithShift);
    } else {
      result += char;
    }
  }

  return result;
}

export function isString(value: unknown): value is string | String {
  return typeof value === 'string' || value instanceof String;
}

type CardNumber = '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10';
type CardPicture = 'A' | 'J' | 'Q' | 'K';
type CardValue = CardNumber | CardPicture;
type CardColor = '♣' | '♦' | '♥' | '♠';
type Card = `${CardValue}${CardColor}`;

export function getCardId(value: Card): number {
  // prettier-ignore
  const cards: Card[] = [
    'A♣', '2♣', '3♣', '4♣', '5♣', '6♣', '7♣', '8♣', '9♣', '10♣', 'J♣', 'Q♣', 'K♣',
    'A♦', '2♦', '3♦', '4♦', '5♦', '6♦', '7♦', '8♦', '9♦', '10♦', 'J♦', 'Q♦', 'K♦',
    'A♥', '2♥', '3♥', '4♥', '5♥', '6♥', '7♥', '8♥', '9♥', '10♥', 'J♥', 'Q♥', 'K♥',
    'A♠', '2♠', '3♠', '4♠', '5♠', '6♠', '7♠', '8♠', '9♠', '10♠', 'J♠', 'Q♠', 'K♠',
  ];

  return cards.indexOf(value);
}
