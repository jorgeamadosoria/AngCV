import { Injectable } from '@angular/core';
import { CV } from './cv';
import { mockCV } from './mock-cv';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { LoopBackConfig } from '../src/app/shared/sdk';
import { Cv, AccessToken } from '../src/app/shared/sdk/models';
import { CvApi } from '../src/app/shared/sdk/services';
@Injectable()
export class CVService {

  constructor(private cvApi: CvApi) { }

  getCV(id): Observable<CV> {
    return this.cvApi.findById(id);
  }

  getMock() {
    return mockCV;
  }

  persistCV(cv) {
    let ret: any = null;
    this.cvApi.upsert(cv).subscribe(r => ret = r, err => console.log(err) );
    return ret;
  }
}
