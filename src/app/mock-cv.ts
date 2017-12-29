import { CV } from './cv';
export const mockCV = new CV(
  {
   name: 'Javier Alsina',
   label: 'Creador de Jsons para Jorge',
   picture: 'https://i.imgur.com/zktRC5t.gif',
   email: 'mail@mail.com',
   phone: '12345678',
   summary: 'Alta experiencia en creacion de jsons',
   location: {
    address: 'Miranda 2415',
    city: 'Montevideo',
    country: 'Uruguay',
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
    level: 'Beginner',
    summary: '',
    tag: 'performance,Automation'
   },
   {
    name: 'Web Performance Development',
    level: 'Professional',
    summary: '',
    tag: 'performance,Development'
   },
   {
    name: 'Java',
    level: 'Professional',
    summary: 'ESB, JSP, Java development version 7',
    tag: 'Development'
   },
   {
    name: 'Javascript',
    level: 'Intermediate',
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
    logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Globant-Logo.svg',
    tag: 'Performance'
   }, {
    company: 'UCI',
    position: 'Teacher',
    website: 'uci.cu',
    startDate: new Date(2003, 12, 1),
    endDate: new Date(2015, 6, 1),
    summary: 'I taught things',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/6/67/UCi.jpg',
    tag: 'Performance'
   },
   {
    company: 'Moovit',
    position: 'Developer',
    website: 'webmoovit.com',
    startDate: new Date(2013, 12, 1),
    endDate: new Date(2014, 12, 1),
    summary: 'I developed things',
    logo: 'https://lh3.googleusercontent.com/UVKcWAC_p7NicUQlnhuYqYGG8u8CoIcb9FsYTlKrQCxNMu5YRlcfxcxyGTJ57lY85i4=w300',
    tag: 'Development'
   }
  ],
  [{
   institution: 'University of Montevideo',
   career: 'Engineer',
   startDate: new Date(2010, 6, 1),
   endDate: new Date(2014, 1, 1),
   logo: 'http://tc.iuscomparatum.info/tc/wp-content/uploads/2016/02/LOGO-UM-624x247px.png',
   summary: 'I engineered things'
  }],
  [{
   organization: 'ACM ICPC',
   position: 'Maestro',
   website: 'https://icpc.baylor.edu/',
   startDate: new Date(2015, 1, 1),
   endDate: new Date(2016, 1, 1),
   summary: 'Maestro Roshi por 1 año',
   tag: 'Programming, Development, ACM, ACM-ICPC'
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
    link: 'https://www.fcc.gov/',
    summary: 'summary here',
    tag: 'Development, Net Neutrality, Evil, FCC'
   }],
   [{
   name: 'How to create json',
   publisher: 'Self',
   date: new Date(2014, 10, 1),
   website: 'https://www.fcc.gov/',
   summary: 'sumary',
   tag: 'Development'
  }],
  [{
   name: 'Conferencia de How to create json',
   publisher: 'Conferences for all',
   startDate: new Date(2014, 10, 1),
   endDate: new Date(2014, 10, 1),
   website: 'https://www.fcc.gov/',
   summary: 'summary',
   tag: 'Development'
  }],
  [{
    language: 'English',
    level: 'advanced'
   },
   {
    language: 'Spanish',
    level: 'native'
   }
  ]
);
