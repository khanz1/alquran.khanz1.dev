export interface ISurah {
  number: number;
  name: string;
  latinName: string;
  verseCount: number;
  revelationPlace: string;
  meaning: string;
  descriptions: string;
  audio: string;
}

export interface IVerse {
  surahNumber: number;
  verse: number;
  arabic: string;
  translation: string;
  indTranslation: string;
  commentary: string;
}