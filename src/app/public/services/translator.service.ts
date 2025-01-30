import { Injectable } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslatorService {

  constructor(private _translator: TranslateService) {
    this._translator.setDefaultLang('es');
    this._translator.use('es');
    this._translator.addLangs(['es', 'en']);
  }

  changeLang(lang: string) {
    this._translator.use(lang);
  }
}