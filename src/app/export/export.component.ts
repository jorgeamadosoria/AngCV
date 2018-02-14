import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';
import { Event } from '../../../common/event';
import { User } from '../../../common/user';
import { Language, languages, languageLevels } from '../../../common/language';
import { Country, countries } from '../../../common/countries';
import { Filter } from '../../../common/filter';
import { skillLevels } from '../../../common/skill';
import { socialKeys } from '../../../common/socialIcon';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CV } from '../../../common/cv';
import { MatChipInputEvent } from '@angular/material';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { AuthGuard } from '../AuthGuard';
import { ActivatedRoute } from '@angular/router';
import * as _ from 'underscore';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
    selector: 'app-export',
    templateUrl: './export.component.html',
    styleUrls: ['./export.component.css']
})
export class ExportComponent implements OnInit {
    fullCv: CV;

    constructor(private http: HttpClient, private route: ActivatedRoute) {
        this.route.params.subscribe(
            params => {

                this.http.get('http://localhost:3000/api/export')
                    .subscribe(res => {
                        this.fullCv = new CV(res);
                    }, err => console.log(err));
                console.log(params);
            }
        );

    }

    ngOnInit() {

    }
}

