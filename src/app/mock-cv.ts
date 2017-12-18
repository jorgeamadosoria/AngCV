import { CV } from './cv';
export const mockCV: CV = {
  personal: {
   name: 'Javier Alsina',
   label: 'Creador de Jsons para Jorge',
   picture: 'https://imgur.com/gallery/yg5vl',
   email: 'mail@mail.com',
   phone: ['12345678', '12345678'],
   summary: 'Alta experiencia en creacion de jsons',
   location: {
    address: 'Miranda 2415',
    postalCode: 'CP 11300',
    city: 'Montevideo',
    countryCode: 'UY',
    region: 'Montevideo'
   },
   social: [{
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
    startDate: '2013-12-01',
    endDate: '2014-12-01',
    tag: ['performance', 'Automation']
   },
   {
    name: 'destapador de frascos',
    summary: 'abrir botellas y frascos muy apretados?',
    website: 'web.com',
    startDate: '2013-12-01',
    endDate: '2014-12-01',
    tag: ['Cooking']
   }
  ],
  work: [{
    company: 'Globant',
    position: 'CPresident',
    website: 'globamt.com',
    startDate: '2013-12-01',
    endDate: '2014-12-01',
    summary: 'I tested things',
    logo: 'link a una imaggen',
    tag: ['Performance']
   },
   {
    company: 'Moovit',
    position: 'Developer',
    website: 'webmoovit.com',
    startDate: '2013-12-01',
    endDate: '2014-12-01',
    summary: 'I developed things',
    logo: 'link a una imaggen',
    tag: ['Development']
   }
  ],
  education: [{
   institution: 'University of Montevideo',
   carrier: 'Engineer',
   startDate: '2010-06-01',
   endDate: '2014-01-01',
   logo: 'link a una imaggen',
   summary: 'I engineered things'
  }],
  volunteer: [{
   organization: 'Organization',
   position: 'Maestro',
   website: 'weblink.com',
   startDate: '2015-01-01',
   endDate: '2016-01-01',
   summary: 'Maestro Roshi por 1 año',
   tag: []
  }],
  certification: [{
   name: 'Matrix Theorist',
   date: '2013-11-01',
   link: 'Taca.com',
   summary: 'There is no spoon',
   tag: []
  }],
  publications: [{
   name: 'How to create json',
   publisher: 'FCC',
   date: '2014-10-01',
   website: '',
   summary: 'sumary',
   tag: ['Development']
  }],
  awards: [{
   title: 'Best json ever',
   from: 'FCC',
   date: '2014-10-01',
   website: '',
   summary: 'summary here',
   tag: ['Development']
  }],
  events: [{
   name: 'Conferencia de How to create json',
   publisher: 'Conferences for all',
   startDate: '2014-10-01',
   endDate: '2014-10-01',
   website: '',
   summary: 'summary',
   tag: ['Development']
  }],
  languages: [{
    language: 'English',
    level: 'Upper-Intermediate'
   },
   {
    language: 'Spanish',
    level: 'Native speaker'
   }
  ]
 };
