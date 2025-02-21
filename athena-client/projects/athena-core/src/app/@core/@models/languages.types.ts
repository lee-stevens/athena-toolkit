//Result
export interface ITranslatedWord {
  word: IWord;
  translations: IWordLanguage[];
}

//Junction
export interface IWordLanguage {
  word: string;
  translation: string;
  language: string;
}

export interface IWord {
  name: string;
  definition: string;
}

export interface ILanguage {
  name: string;
  code: string;
}
