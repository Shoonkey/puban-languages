# Puban languages

Translation scripts for Puban, including adapted UbbiDubbi and PigLatin.

Both sub-languages are translated on a word by word basis, ignoring punctuation marks.

## UbbiDubbi

"ub" is placed before groups of vowels, matching casing. It matches usual vowels plus some Spanish diacritics and some Ys in some cases. Details on the current implementation are in a [comment in the file](./src/ubbi-dubbi.ts).

## PigLatin

Take a word, place its first letter as its last and add "aye", matching casing.

## Puban

Applies Ubbi Dubbi then PigLatin for encryption, and the opposite for decryption.