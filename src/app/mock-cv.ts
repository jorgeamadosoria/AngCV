import { CV } from './cv';
export const mockCV = new CV(
  {
   name: 'Javier Alsina',
   label: 'Creador de Jsons para Jorge',
   picture: 'https://i.imgur.com/zktRC5t.gif',
   email: 'mail@mail.com',
   phones: ['12345678', '12345678'],
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
     url: 'www.twitter.com'
    },
    {
     network: 'Facebook',
     url: 'www.facebook.com'
    },
    {
     network: 'Instagram',
     url: 'www.instagran.com'
    }
   ]
  },
  [{
    name: 'Automation Testing',
    level: 'Senior',
    summary: '',
    tag: 'performance,Automation'
   },
   {
    name: 'Web Performance Development',
    level: 'Senior',
    summary: '',
    tag: 'performance,Development'
   },
   {
    name: 'Java',
    level: 'Semi-Senior',
    summary: 'ESB, JSP, Java development version 7',
    tag: 'Development'
   },
   {
    name: 'Javascript',
    level: 'Newbie',
    summary: 'Angular 2, JQuery and ReactJS',
    tag: 'Development'
   }
  ],
  [{
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
  [{
    company: 'Globant',
    position: 'CPresident',
    website: 'globamt.com',
    startDate: new Date(2013, 12, 1),
    endDate: new Date(2014, 12, 1),
    summary: 'I tested things',
    logo: 'link a una imaggen',
    tag: 'Performance'
   },
   {
    company: 'Moovit',
    position: 'Developer',
    website: 'webmoovit.com',
    startDate: new Date(2013, 12, 1),
    endDate: new Date(2014, 12, 1),
    summary: 'I developed things',
    logo: 'link a una imaggen',
    tag: 'Development'
   }
  ],
  [{
   institution: 'University of Montevideo',
   career: 'Engineer',
   startDate: new Date(2010, 6, 1),
   endDate: new Date(2014, 1, 1),
   logo: 'link a una imaggen',
   summary: 'I engineered things'
  }],
  [{
   organization: 'Organization',
   position: 'Maestro',
   website: 'weblink.com',
   startDate: new Date(2015, 1, 1),
   endDate: new Date(2016, 1, 1),
   summary: 'Maestro Roshi por 1 año',
   tag: ''
  }],
  [{
   name: 'Matrix Theorist',
   from: 'Myself',
   date: new Date(2013, 11, 1),
   link: 'Taca.com',
   summary: 'There is no spoon',
   tag: ''
  },
  {
    name: 'Best json ever',
    from: 'FCC',
    date: new Date(2014, 10, 1),
    link: '',
    summary: 'summary here',
    tag: 'Development'
   }],
   [{
   name: 'How to create json',
   publisher: 'FCC',
   date: new Date(2014, 10, 1),
   website: '',
   summary: 'sumary',
   tag: 'Development'
  }],
  [{
   name: 'Conferencia de How to create json',
   publisher: 'Conferences for all',
   startDate: new Date(2014, 10, 1),
   endDate: new Date(2014, 10, 1),
   website: '',
   summary: 'summary',
   tag: 'Development'
  }],
  [{
    language: 'English',
    level: 'Upper-Intermediate'
   },
   {
    language: 'Spanish',
    level: 'Native speaker'
   }
  ]
);
