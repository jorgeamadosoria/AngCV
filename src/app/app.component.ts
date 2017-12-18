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
           /*     label: 'Creador de Jsons para Jorge',
                picture: 'https://imgur.com/gallery/yg5vl',
                email: 'mail@mail.com',
                phone: ['12345678', '12345678'],
                summary: 'Alta experiencia en creacion de jsons',
                location: {
                 address: 'Miranda 2415',
                 postalCode: 'CP 11300',
                 city: 'Montevideo',
                 countryCode: 'UY',
                 region: 'Montevideo'*/
          }),
        /*    social: [{
              network: 'Twitter',
              username: 'TwitName',
              url: 'www.twitter.com'
             },
             {
              network: 'Facebook',
              username: 'faceName',
              url: 'www.facebook.com'
             },
             {
              network: 'Instagram',
              username: 'instaName',
              url: 'www.instagran.com'
             }
            ]
           },
           skills: [{
             name: 'Automation Testing',
             level: 'Senior',
             summary: '',
             tag: ['performance', 'Automation']
            },
            {
             name: 'Web Performance Development',
             level: 'Senior',
             summary: '',
             tag: ['performance', 'Development']
            },
            {
             name: 'Java',
             level: 'Semi-Senior',
             summary: 'ESB, JSP, Java development version 7',
             tag: ['Development']
            },
            {
             name: 'Javascript',
             level: 'Newbie',
             summary: 'Angular 2, JQuery and ReactJS',
             tag: ['Development']
            }
           ],
           references: [{
             name: 'Englander',
             position: 'Boss',
             mail: 'mailref@mail.com',
             phone: '12345'
            },
            {
             name: 'ref2',
             position: 'Boss2',
             mail: 'mailref2@mail.com',
             phone: '123453'
            }
           ],
           experience: [{
             name: 'Globant',
             summary: 'I tested things',
             website: 'web.com',
             startDate: new Date(2013, 12, 1),
             endDate: new Date(2014, 12, 1),
             tag: ['performance', 'Automation']
            },
            {
             name: 'destapador de frascos',
             summary: 'abrir botellas y frascos muy apretados?',
             website: 'web.com',
             startDate: new Date(2013, 12, 1),
             endDate: new Date(2014, 12, 1),
             tag: ['Cooking']
            }
           ],
           work: [{
             company: 'Globant',
             position: 'CPresident',
             website: 'globamt.com',
             startDate: new Date(2013, 12, 1),
             endDate: new Date(2014, 12, 1),
             summary: 'I tested things',
             logo: 'link a una imaggen',
             tag: ['Performance']
            },
            {
             company: 'Moovit',
             position: 'Developer',
             website: 'webmoovit.com',
             startDate: new Date(2013, 12, 1),
             endDate: new Date(2014, 12, 1),
             summary: 'I developed things',
             logo: 'link a una imaggen',
             tag: ['Development']
            }
           ],
           education: [{
            institution: 'University of Montevideo',
            carrier: 'Engineer',
            startDate: new Date(2010, 6, 1),
            endDate: new Date(2014, 1, 1),
            logo: 'link a una imaggen',
            summary: 'I engineered things'
           }],
           volunteer: [{
            organization: 'Organization',
            position: 'Maestro',
            website: 'weblink.com',
            startDate: new Date(2015, 1, 1),
            endDate: new Date(2016, 1, 1),
            summary: 'Maestro Roshi por 1 año',
            tag: []
           }],
           certification: [{
            name: 'Matrix Theorist',
            date: new Date(2013, 11, 1),
            link: 'Taca.com',
            summary: 'There is no spoon',
            tag: []
           }],
           publications: [{
            name: 'How to create json',
            publisher: 'FCC',
            date: new Date(2014, 10, 1),
            website: '',
            summary: 'sumary',
            tag: ['Development']
           }],
           awards: [{
            title: 'Best json ever',
            from: 'FCC',
            date: new Date(2014, 10, 1),
            website: '',
            summary: 'summary here',
            tag: ['Development']
           }],*/
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

initEvent() {
    return this.formBuilder.group({
        name: ['', Validators.required],
        publisher: ['', Validators.required],
        startDate: new Date(),
        endDate: new Date(),
        website: '',
        summary: '',
        tag: this.formBuilder.array([])
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
