import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';
import { Event } from '../../common/event';
import { Language, languages, languageLevels } from '../../common/language';
import { Country, countries } from '../../common/countries';
import { Filter } from '../../common/filter';
import { skillLevels } from '../../common/skill';
import { socialKeys } from '../../common/socialIcon';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CV } from '../../common/cv';
import {MatChipInputEvent} from '@angular/material';
import {ENTER, COMMA} from '@angular/cdk/keycodes';
import * as _ from 'underscore';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    constructor() {
    }

}
