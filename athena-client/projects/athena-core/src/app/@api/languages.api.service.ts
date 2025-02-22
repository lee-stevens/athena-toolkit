import { Injectable } from '@angular/core';
import { APIService } from './api.service';
import { ILanguage, IWord, IWordLanguage, ITranslatedWord } from '@Models/languages.types';

@Injectable({ providedIn: 'root' })
export class LanguagesApiService {
  endpointPrefix = 'languages';

  constructor(private _apiService: APIService) {}

  fetchAllLanguages(): Promise<ILanguage[]> {
    return this._apiService.get(`${this.endpointPrefix}/languages`);
  }

  fetchAllWords(): Promise<IWord[]> {
    return this._apiService.get(`${this.endpointPrefix}/words`);
  }

  fetchAllWordTranslations(): Promise<IWordLanguage[]> {
    return this._apiService.get(`${this.endpointPrefix}/word-language`);
  }

  fetchAllWordsByLanguage(language: string): Promise<IWordLanguage[]> {
    const endPoint = `${this.endpointPrefix}/translations/${language}`;
    return this._apiService.get(endPoint);
  }

  fetchAllTranslatedWords(): Promise<ITranslatedWord[]> {
    return this.fetchAllWords().then((words) => {
      return this.fetchAllWordTranslations().then((translations) => {
        const wordTranslations: ITranslatedWord[] = [];

        words.forEach((word) => {
          const translationsForWord = translations.filter((t) => t.word === word.name);
          const wordTranslation: ITranslatedWord = {
            word,
            translations: translationsForWord,
          };
          wordTranslations.push(wordTranslation);
        });

        return Promise.resolve(wordTranslations);
      });
    });
  }
}
