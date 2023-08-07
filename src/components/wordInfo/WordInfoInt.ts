export interface WordInfoProps {
  wordInfo: WordProperties[];
}

interface WordProperties {
  word: string;
  phonetic: string;
  phonetics: [];
  meanings: Meaning[];
  sourceUrls: [];
  license: {};
}

export interface Meaning {
  partOfSpeech: string;
  definitions: Definition[];
  synonyms: [];
  antonyms: [];
}

interface Definition {
  definition: string;
  example: string;
}