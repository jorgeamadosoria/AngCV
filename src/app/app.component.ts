import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';
import { Event } from './event';
import { Language } from './language';
import { CV } from './cv';
import { CVService } from './cv.service';
import * as _ from 'underscore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  form: FormGroup;
  cv: CV;
  constructor(private formBuilder: FormBuilder, private service: CVService) { }

    getCV(): void {
      this.service.getCV().subscribe(cv => this.cv = cv);
    }

    ngOnInit() {
        this.getCV();


        this.form = this.formBuilder.group({
            personal: this.formBuilder.group({
                name: this.formBuilder.control(this.cv.personal.name, [Validators.required, Validators.minLength(5)]),
                label: this.formBuilder.control(this.cv.personal.label, [Validators.required]),
                picture: this.formBuilder.control(this.cv.personal.picture, [Validators.required]),
                email: this.formBuilder.control(this.cv.personal.email, [Validators.required]),
                phones: this.formBuilder.array(
                    _.map(this.cv.personal.phones, function(phone){
                        return new FormControl(phone);
                    })
                ),
                summary: this.formBuilder.control(this.cv.personal.summary),
                location : this.formBuilder.group({
                    address: this.formBuilder.control(this.cv.personal.location.address),
                    postalCode: this.formBuilder.control(this.cv.personal.location.postalCode),
                    city: this.formBuilder.control(this.cv.personal.location.city),
                    countryCode: this.formBuilder.control(this.cv.personal.location.countryCode),
                    region: this.formBuilder.control(this.cv.personal.location.region)
                }),
                social: this.formBuilder.array(
                    _.map(this.cv.personal.social, function(social){
                        return new FormGroup({
                            network: new FormControl(social.network, Validators.required),
                            username: new FormControl(social.username, Validators.required),
                            url: new FormControl(social.url, Validators.required),
                        });
                    })
                )
            }),
            skills: this.formBuilder.array(
                _.map(this.cv.skills, function(skill){
                    return new FormGroup({
                        name: new FormControl(skill.name, Validators.required),
                        level: new FormControl(skill.level, Validators.required),
                        summary: new FormControl(skill.summary),
                        tag: new FormControl(skill.tag),
                    });
                })
            ),
            references: this.formBuilder.array(
                _.map(this.cv.references, function(reference){
                    return new FormGroup({
                        name: new FormControl(reference, Validators.required),
                        position: new FormControl(reference, Validators.required),
                        mail: new FormControl(reference),
                        phone: new FormControl(reference),
                    });
                })
            ),
            experience: this.formBuilder.array(
                _.map(this.cv.experience, function(experience){
                    return new FormGroup({
                        name: new FormControl(experience.name, Validators.required),
                        summary: new FormControl(experience.summary),
                        website: new FormControl(experience.website),
                        startDate: new FormControl(experience.startDate),
                        endDate: new FormControl(experience.endDate),
                        tag: new FormControl(experience.tag),
                    });
            })),
            work: this.formBuilder.array(
                _.map(this.cv.work, function(work){
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
            certification: this.formBuilder.array(
                _.map(this.cv.certification, function(certification){
                    return new FormGroup({
                        name: new FormControl(certification.name, Validators.required),
                        link: new FormControl(certification.link, Validators.required),
                        date: new FormControl(certification.date),
                        summary: new FormControl(certification.summary),
                        tag: new FormControl(certification.tag),
                });
            })),
            volunteer: this.formBuilder.array(
                _.map(this.cv.volunteer, function(volunteer){
                    return new FormGroup({
                        organization: new FormControl(volunteer.organization),
                        position: new FormControl(volunteer.position),
                        website: new FormControl(volunteer.website),
                        startDate: new FormControl(volunteer.startDate),
                        endDate: new FormControl(volunteer.endDate),
                        summary: new FormControl(volunteer.summary),
                        tag: new FormControl(volunteer.tag),
                    });
            })),
            education: this.formBuilder.array(
                _.map(this.cv.education, function(education){ return new FormGroup({
                    institution: new FormControl(education.institution, Validators.required),
                    career: new FormControl(education.career, Validators.required),
                    startDate: new FormControl(education.startDate),
                    endDate: new FormControl(education.endDate),
                    logo: new FormControl(education.logo),
                    summary: new FormControl(education.summary)
                });
            })),
            publications: this.formBuilder.array(
                _.map(this.cv.publications, function(publication){ return new FormGroup({
                    name: new FormControl(publication.name, Validators.required),
                    publisher: new FormControl(publication.publisher, Validators.required),
                    date: new FormControl(publication.date),
                    website: new FormControl(publication.website),
                    summary: new FormControl(publication.summary),
                    tag: new FormControl(publication.tag),
                });
            })),
            awards: this.formBuilder.array(
                _.map(this.cv.awards, function(award){ return new FormGroup({
                        title: new FormControl(award.title, Validators.required),
                        from: new FormControl(award.from, Validators.required),
                        date: new FormControl(award.date),
                        website: new FormControl(award.website),
                        summary: new FormControl(award.summary),
                        tag: new FormControl(award.tag)
                    });
                })
            ),
            events: this.formBuilder.array(
                _.map(this.cv.events, function(event){ return new FormGroup({
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
            languages: this.formBuilder.array(
                _.map(this.cv.languages, function(language) {
                    return new FormGroup({
                        language: new FormControl(language.language, Validators.required),
                        level: new FormControl(language.level, Validators.required)
                    });
                })
            )
        });
    }

    initSocial() {
        return this.formBuilder.group({
            network: ['', Validators.required],
            username: ['', Validators.required],
            url: ['', Validators.required],
        });
    }

    addSocial() {
    const control = <FormArray>this.form.controls['social'];
    control.push(this.initSocial());
    }

    removeSocial(i: number) {
    const control = <FormArray>this.form.controls['social'];
    control.removeAt(i);
    }


initSkills() {
  return this.formBuilder.group({
      name: ['', Validators.required],
      level: ['', Validators.required],
      summary: '',
      tag: '',
  });
}

addSkills() {
  const control = <FormArray>this.form.controls['skills'];
  control.push(this.initSkills());
}

removeSkills(i: number) {
  const control = <FormArray>this.form.controls['skills'];
  control.removeAt(i);
}

initReferences() {
  return this.formBuilder.group({
      name: ['', Validators.required],
      position: ['', Validators.required],
      mail: '',
      phone: '',
  });
}

addReferences() {
  const control = <FormArray>this.form.controls['references'];
  control.push(this.initReferences());
}

removeReferences(i: number) {
  const control = <FormArray>this.form.controls['references'];
  control.removeAt(i);
}


initExperience() {
  return this.formBuilder.group({
      name: ['', Validators.required],
      summary: '',
      website: '',
      startDate: new Date(),
      endDate: new Date(),
      tag: '',
  });
}

addExperience() {
  const control = <FormArray>this.form.controls['experience'];
  control.push(this.initExperience());
}

removeExperience(i: number) {
  const control = <FormArray>this.form.controls['experience'];
  control.removeAt(i);
}


initWork() {
  return this.formBuilder.group({
    company: ['', Validators.required],
    position: ['', Validators.required],
    website: '',
    startDate: new Date(),
    endDate: new Date(),
      summary: '',
      logo: '',
      tag: '',
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
   return this.formBuilder.group({
    institution: ['', Validators.required],
    career: ['', Validators.required],
      startDate: new Date(),
      endDate: new Date(),
      logo: '',
      summary: '',
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
  return this.formBuilder.group({
    organization: '',
    position: '',
    website: '',
    startDate: new Date(),
    endDate: new Date(),
      summary: '',
      tag: '',
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

initCertification() {
    return this.formBuilder.group({
        name: ['', Validators.required],
        link: ['', Validators.required],
        date: new Date(),
        website: '',
        summary: '',
        tag: '',
    });
}

addCertifications() {
    const control = <FormArray>this.form.controls['certification'];
    control.push(this.initCertification());
}

removeCertifications(i: number) {
    const control = <FormArray>this.form.controls['certification'];
    control.removeAt(i);
}

initPublications() {
    return this.formBuilder.group({
        name: ['', Validators.required],
        publisher: ['', Validators.required],
        date: new Date(),
        website: '',
        summary: '',
        tag: '',
    });
}

addPublications() {
    const control = <FormArray>this.form.controls['publications'];
    control.push(this.initAward());
}

removePublications(i: number) {
    const control = <FormArray>this.form.controls['publications'];
    control.removeAt(i);
}

initPhone() {
    return new FormControl('');
}

addPhone() {
    const control = <FormArray>this.form.controls['personal'];
    control.controls['phones'].push(this.initPhone());
}

removePhone(i: number) {
    const control = <FormArray>this.form.controls['personal'];
    control.controls['phones'].removeAt(i);
}

initAward() {
    return this.formBuilder.group({
        title: ['', Validators.required],
        from: ['', Validators.required],
        date: new Date(),
        website: '',
        summary: '',
        tag: '',
    });
}

addAward() {
    const control = <FormArray>this.form.controls['awards'];
    control.push(this.initAward());
}

removeAward(i: number) {
    const control = <FormArray>this.form.controls['awards'];
    control.removeAt(i);
}

initEvent() {
    return this.formBuilder.group({
        name: ['', Validators.required],
        publisher: ['', Validators.required],
        startDate: new Date(),
        endDate: new Date(),
        website: '',
        summary: '',
        tag: '',
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
    return this.formBuilder.group({
        language: ['', Validators.required],
        level: ['', Validators.required]
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

save(model: CV) {
    // call API to save
    // ...
    console.log(model);
}
}
