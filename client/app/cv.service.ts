import { Injectable } from '@angular/core';
import { CV } from './cv';
import { mockCV } from './mock-cv';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class CVService {

  constructor() { }

  getCV(): Observable<CV> {
    return of(mockCV);
  }
}
