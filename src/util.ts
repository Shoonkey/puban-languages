export const DIACRITICS = "áâãàäéêẽèëíïóõôöúüû";
export const VOWELS = `aeiou${DIACRITICS}`;

// Regex for capturing words
export const WORD_REGEX = new RegExp(`[a-z${DIACRITICS}:\/\\\\\.]+`, "gi");

export function capitalizeStr(str: string): string {
  return str[0].toUpperCase() + str.substring(1);
}

export function uncapitalizeStr(str: string): string {
  return str[0].toLowerCase() + str.substring(1);
}

export function isCapitalized(str: string): boolean {
  const isFirstLetterUppercase = str[0] === capitalizeStr(str[0]);

  if (str.length === 1)
    return isFirstLetterUppercase;

  const isNextLetterLowercase = str[1] === str[1].toLowerCase();
  return isFirstLetterUppercase && isNextLetterLowercase;
}

export function isFullCaps(str: string): boolean {
  return str === str.toUpperCase();
}

export function isUppercaseSentence(str: string): boolean {
  const hasAtLeastTwoWords = str.split(/\s+/g, 2).length > 1;
  return hasAtLeastTwoWords && isFullCaps(str);
}

export function isHTTPLink(str: string): boolean {
  try {
    const url = new URL(str);
    return url.host.length >= 2;
  } catch (err) {
    return false;
  }
}