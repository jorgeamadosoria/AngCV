import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';
import { Event } from './event';
import { Language, languages, languageLevels } from './language';
import { Country, countries } from './countries';
import { Filter } from './filter';
import { skillLevels } from './skill';
import { socialKeys } from './socialIcon';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CV } from './cv';
import {MatChipInputEvent} from '@angular/material';
import {ENTER, COMMA} from '@angular/cdk/keycodes';
import * as _ from 'underscore';
import { mockCV } from './mock-cv';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    form: FormGroup;
    filterForm: FormGroup;
    fullCv: CV;
    cv: CV;
    appliedFilter: Filter;
    socialKeys: String[];
    languageLevels: String[];
    skillLevels: String[];
    languages: String[];
    countries: Country[];

    constructor(private http: HttpClient) {}

    getMock() {
        return mockCV;
    }

    persistCV(cv): void {
        //  this.cvApi.upsert(cv).subscribe(r => ret = r, err => console.log(err) );
       // this.service.persistCV(cv);
    }

    ngOnInit() {
        this.http.get('http://localhost:3000/api/cvs/findOne'
        + '?filter=%7B%22personal%22%3A%7B%22name%22%3A%22Javier%20Alsina%22%7D%7D')
        .subscribe(res => {
            this.cv = new CV(res);
            this.fullCv = new CV(res);
            this.appliedFilter = this.cv.createFilter();
            this.cv.applyFilter(this.appliedFilter);
            this.createForm(this.fullCv);
            this.initFilterForm(this.appliedFilter);
            console.log(this.fullCv);
        });

        this.socialKeys = socialKeys;
        this.languageLevels = languageLevels;
        this.skillLevels = skillLevels;
        this.languages = languages;
        this.countries = countries;
    }


    createForm(fullCv: CV) {
        this.form = new FormGroup({
            personal: new FormGroup({
                name: new FormControl(fullCv.personal.name, [Validators.required, Validators.minLength(5)]),
                label: new FormControl(fullCv.personal.label, [Validators.required]),
                picture: new FormControl(fullCv.personal.picture, [Validators.required]),
                email: new FormControl(fullCv.personal.email, [Validators.required]),
                phone: new FormControl(fullCv.personal.phone, [Validators.required]),
                summary: new FormControl(fullCv.personal.summary),
                location: new FormGroup({
                    address: new FormControl(fullCv.personal.location.address),
                    city: new FormControl(fullCv.personal.location.city),
                    country: new FormControl(fullCv.personal.location.country),
                    region: new FormControl(fullCv.personal.location.region)
                }),
                social: new FormArray(
                    _.map(fullCv.personal.social, function (social) {
                        return new FormGroup({
                            network: new FormControl(social.network, Validators.required),
                            url: new FormControl(social.url, Validators.required),
                        });
                    })
                )
            }),
            skills: new FormArray(
                _.map(fullCv.skills, function (skill) {
                    return new FormGroup({
                        name: new FormControl(skill.name, Validators.required),
                        level: new FormControl(skill.level, Validators.required),
                        summary: new FormControl(skill.summary),
                        tag: new FormControl(skill.tag),
                    });
                })
            ),
            references: new FormArray(
                _.map(fullCv.references, function (reference) {
                    return new FormGroup({
                        name: new FormControl(reference.name, Validators.required),
                        position: new FormControl(reference.position, Validators.required),
                        mail: new FormControl(reference.mail),
                        phone: new FormControl(reference.phone),
                    });
                })
            ),
            work: new FormArray(
                _.map(fullCv.work, function (work) {
                    return new FormGroup({
                        company: new FormControl(work.company, Validators.required),
                        position: new FormControl(work.position, Validators.required),
                        website: new FormControl(work.website),
                        startDate: new FormControl(work.startDate),
                        endDate: new FormControl(work.endDate),
                        summary: new FormControl(work.summary),
                        logo: new FormControl(work.logo),
                        tag: new FormControl(work.tag)
                    });
                })),
            accolades: new FormArray(
                _.map(fullCv.accolades, function (accolade) {
                    return new FormGroup({
                        name: new FormControl(accolade.name, Validators.required),
                        from: new FormControl(accolade.from, Validators.required),
                        link: new FormControl(accolade.link, Validators.required),
                        date: new FormControl(accolade.date),
                        summary: new FormControl(accolade.summary),
                        tag: new FormControl(accolade.tag),
                    });
                })),
            volunteer: new FormArray(
                _.map(fullCv.volunteer, function (volunteer) {
                    return new FormGroup({
                        organization: new FormControl(volunteer.organization),
                        position: new FormControl(volunteer.position),
                        logo: new FormControl(volunteer.logo),
                        website: new FormControl(volunteer.website),
                        startDate: new FormControl(volunteer.startDate),
                        endDate: new FormControl(volunteer.endDate),
                        summary: new FormControl(volunteer.summary),
                        tag: new FormControl(volunteer.tag),
                    });
                })),
            education: new FormArray(
                _.map(fullCv.education, function (education) {
                    return new FormGroup({
                        institution: new FormControl(education.institution, Validators.required),
                        career: new FormControl(education.career, Validators.required),
                        startDate: new FormControl(education.startDate),
                        endDate: new FormControl(education.endDate),
                        logo: new FormControl(education.logo),
                        website: new FormControl(education.website),
                        summary: new FormControl(education.summary)
                    });
                })),
            publications: new FormArray(
                _.map(fullCv.publications, function (publication) {
                    return new FormGroup({
                        name: new FormControl(publication.name, Validators.required),
                        publisher: new FormControl(publication.publisher, Validators.required),
                        date: new FormControl(publication.date),
                        website: new FormControl(publication.website),
                        summary: new FormControl(publication.summary),
                        tag: new FormControl(publication.tag),
                    });
                })),
            events: new FormArray(
                _.map(fullCv.events, function (event) {
                    return new FormGroup({
                        name: new FormControl(event.name, Validators.required),
                        publisher: new FormControl(event.publisher, Validators.required),
                        startDate: new FormControl(event.startDate),
                        endDate: new FormControl(event.endDate),
                        website: new FormControl(event.website),
                        summary: new FormControl(event.summary),
                        tag: new FormControl(event.tag)
                    });
                })
            ),
            languages: new FormArray(
                _.map(fullCv.languages, function (language) {
                    return new FormGroup({
                        language: new FormControl(language.language, Validators.required),
                        level: new FormControl(language.level, Validators.required)
                    });
                })
            )
        }); 
    }

    onChangePic(event) {
        console.log(event.target.value);
        this.fullCv.personal.picture = event.target.value;
        console.log(this.fullCv.personal.picture);
    }

    initSocial() {
        return new FormGroup({
            network: new FormControl('', Validators.required),
            url: new FormControl('', Validators.required),
        });
    }

    addSocial() {
        const control = <FormArray>this.form.controls['personal'];
        control.controls['social'].push(this.initSocial());
    }

    removeSocial(i: number) {
        const control = <FormArray>this.form.controls['personal'];
        control.controls['social'].removeAt(i);
    }


    initSkills() {
        return new FormGroup({
            name: new FormControl('', Validators.required),
            level: new FormControl('', Validators.required),
            summary: new FormControl(''),
            tag: new FormControl(''),
        });
    }

    addSkill() {
        const control = <FormArray>this.form.controls['skills'];
        control.push(this.initSkills());
    }

    removeSkill(i: number) {
        const control = <FormArray>this.form.controls['skills'];
        control.removeAt(i);
    }

    initReferences() {
        return new FormGroup({
            name: new FormControl('', Validators.required),
            position: new FormControl('', Validators.required),
            mail: new FormControl(''),
            phone: new FormControl(''),
        });
    }

    addReference() {
        const control = <FormArray>this.form.controls['references'];
        control.push(this.initReferences());
    }

    removeReference(i: number) {
        const control = <FormArray>this.form.controls['references'];
        control.removeAt(i);
    }

    initWork() {
        return new FormGroup({
            company: new FormControl('', Validators.required),
            position: new FormControl('', Validators.required),
            website: new FormControl(''),
            startDate: new FormControl(new Date()),
            endDate: new FormControl(new Date()),
            summary: new FormControl(''),
            logo: new FormControl(''),
            tag: new FormControl(''),
        });
    }

    addWork() {
        const control = <FormArray>this.form.controls['work'];
        control.push(this.initWork());
    }

    removeWork(i: number) {
        const control = <FormArray>this.form.controls['work'];
        control.removeAt(i);
    }


    initEducation() {
        return new FormGroup({
            institution: new FormControl('', Validators.required),
            career: new FormControl('', Validators.required),
            startDate: new FormControl(new Date()),
            endDate: new FormControl(new Date()),
            logo: new FormControl(''),
            website: new FormControl(''),
            summary: new FormControl(''),
        });
    }

    addEducation() {
        const control = <FormArray>this.form.controls['education'];
        control.push(this.initEducation());
    }

    removeEducation(i: number) {
        const control = <FormArray>this.form.controls['education'];
        control.removeAt(i);
    }

    initVolunteer() {
        return new FormGroup({
            organization: new FormControl(''),
            position: new FormControl(''),
            website: new FormControl(''),
            logo: new FormControl(''),
            startDate: new FormControl(new Date()),
            endDate: new FormControl(new Date()),
            summary: new FormControl(''),
            tag: new FormControl(''),
        });
    }

    addVolunteer() {
        const control = <FormArray>this.form.controls['volunteer'];
        control.push(this.initVolunteer());
    }

    removeVolunteer(i: number) {
        const control = <FormArray>this.form.controls['volunteer'];
        control.removeAt(i);
    }

    initAccolade() {
        return new FormGroup({
            name: new FormControl('', Validators.required),
            from: new FormControl('', Validators.required),
            link: new FormControl('', Validators.required),
            date: new FormControl(new Date()),
            summary: new FormControl(''),
            tag: new FormControl(''),
        });
    }

    addAccolade() {
        const control = <FormArray>this.form.controls['accolades'];
        control.push(this.initAccolade());
    }

    removeAccolade(i: number) {
        const control = <FormArray>this.form.controls['accolades'];
        control.removeAt(i);
    }

    initPublication() {
        return new FormGroup({
            name: new FormControl('', Validators.required),
            publisher: new FormControl('', Validators.required),
            date: new FormControl(new Date()),
            website: new FormControl(''),
            summary: new FormControl(''),
            tag: new FormControl(''),
        });
    }

    addPublication() {
        const control = <FormArray>this.form.controls['publications'];
        control.push(this.initPublication());
    }

    removePublication(i: number) {
        const control = <FormArray>this.form.controls['publications'];
        control.removeAt(i);
    }

    initEvent() {
        return new FormGroup({
            name: new FormControl('', Validators.required),
            publisher: new FormControl('', Validators.required),
            startDate: new FormControl(new Date()),
            endDate: new FormControl(new Date()),
            website: new FormControl(''),
            summary: new FormControl(''),
            tag: new FormControl(''),
        });
    }

    addEvent() {
        const control = <FormArray>this.form.controls['events'];
        control.push(this.initEvent());
    }

    removeEvent(i: number) {
        const control = <FormArray>this.form.controls['events'];
        control.removeAt(i);
    }

    initLanguage() {
        return new FormGroup({
            language: new FormControl(languages[0], Validators.required),
            level: new FormControl(languageLevels[0], Validators.required)
        });
    }

    addLanguage() {
        const control = <FormArray>this.form.controls['languages'];
        control.push(this.initLanguage());
    }

    removeLanguage(i: number) {
        const control = <FormArray>this.form.controls['languages'];
        control.removeAt(i);
    }

    initFilterForm(filter: Filter) {
        console.log('init ' + filter.tags);
        this.filterForm = new FormGroup({
            tags: new FormArray(
                filter.tags.map(obj => new FormControl(obj))),
            startDate: new FormControl(filter.startDate),
            endDate: new FormControl(filter.endDate)
        });
    }

    save(model: CV) {
        this.fullCv.assignFrom(model);
        this.persistCV(this.fullCv);
        this.filter(this.appliedFilter);
        console.log(model);
    }

    filter(filter: Filter) {
        this.cv = this.fullCv.clone();
        this.cv.applyFilter(filter);
        this.initFilterForm(this.fullCv.createFilter());
        this.appliedFilter = filter;
        console.log(filter);
    }
}
