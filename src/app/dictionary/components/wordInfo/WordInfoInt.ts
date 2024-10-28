export interface WordInfoProps {
  wordInfo: WordProperties[];
}

interface WordProperties {
  word: string;
  phonetic: string;
  phonetics: Phonetic[];
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

interface Phonetic {
  text: string;
  audio: string;
}