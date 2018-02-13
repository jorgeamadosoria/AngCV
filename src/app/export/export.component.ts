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
import * as _ from 'underscore';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
    selector: 'app-export',
    templateUrl: './export.component.html',
    styleUrls: ['./export.component.css']
})
export class ExportComponent implements OnInit {
    filterForm: FormGroup;
    fullCv: CV;
    cv: CV;
    appliedFilter: Filter;
    socialKeys: String[];
    languageLevels: String[];
    skillLevels: String[];
    languages: String[];
    countries: Country[];

    constructor(private http: HttpClient) {
        this.http.get('http://localhost:3000/api/export')
            .subscribe(res => {
                this.cv = new CV(res);
                this.fullCv = new CV(res);
             /*   this.appliedFilter = this.cv.createFilter();
                this.cv.applyFilter(this.appliedFilter);
                this.initFilterForm(this.appliedFilter);*/
            }, err => console.log(err));

        this.socialKeys = socialKeys;
    //    this.languageLevels = languageLevels;
    //    this.skillLevels = skillLevels;
    //    this.languages = languages;
    //    this.countries = countries;

    }

    ngOnInit() {

    }

    initFilterForm(filter: Filter) {
        this.filterForm = new FormGroup({
            tags: new FormArray(
                filter.tags.map(obj => new FormControl(obj))),
            startDate: new FormControl(filter.startDate),
            endDate: new FormControl(filter.endDate)
        });
    }

    filter(filter: Filter) {
        this.cv = new CV(this.fullCv);
        this.cv.applyFilter(filter);
        this.initFilterForm(this.fullCv.createFilter());
        this.appliedFilter = filter;
    }
}

