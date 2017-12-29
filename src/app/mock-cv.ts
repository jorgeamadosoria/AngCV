import { CV } from './cv';
export const mockCV = new CV(
  {
    name: 'Javier Alsina',
    label: 'Creador de Jsons para Jorge',
    picture: 'https://i.imgur.com/zktRC5t.gif',
    email: 'mail@mail.com',
    phone: '202-555-0103',
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
    tag: 'Performance,Development'
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
    phone: '+1-202-555-0105'
  },
  {
    name: 'ref2',
    position: 'Boss2',
    mail: 'mailref2@mail.com',
    phone: '+1-202-555-0168'
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
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent egestas scelerisque libero et tempus. Cras ornare posuere varius. Aenean pellentesque vestibulum blandit. Praesent accumsan lorem vitae odio sagittis, non finibus nibh iaculis. Morbi dolor risus, placerat et ex sodales, luctus cursus libero. Suspendisse potenti. Integer sagittis viverra varius. In vel gravida ante.'
  }],
  [{
    organization: 'ACM ICPC',
    position: 'Maestro',
    website: 'https://icpc.baylor.edu/',
    startDate: new Date(2015, 1, 1),
    endDate: new Date(2016, 1, 1),
    summary: 'Maestro Roshi por 1 año, In dictum metus ut iaculis dignissim. Donec eu lacinia lectus. Nullam nec ex ac ante sagittis condimentum. Aenean in metus volutpat, maximus odio id, ornare urna. Nunc non convallis libero, ac rhoncus erat. Maecenas facilisis nisi ac ligula sollicitudin, quis commodo ex vestibulum. Sed mattis et dui ut iaculis. Mauris congue nisl id augue porta, quis volutpat urna consequat. Ut viverra laoreet elit, in dignissim nisi dapibus non. Nam id velit non massa pharetra aliquet at at sem. Sed vestibulum tortor in semper dictum. Sed mattis ornare nunc, tincidunt interdum nunc molestie vel. Cras malesuada leo in viverra elementum. Curabitur convallis consectetur massa, at vestibulum neque faucibus quis. Sed posuere velit purus. Donec vel risus rhoncus, consectetur orci eu, molestie sem.',
    tag: 'Programming, Development, ACM, ACM-ICPC'
  }],
  [{
    name: 'Matrix Theorist',
    from: 'Myself',
    date: new Date(2013, 11, 1),
    link: 'Taca.com',
    summary: 'There is no spoon. Integer ut odio eros. Nulla vestibulum auctor magna eget congue. Donec eu lacus a magna placerat suscipit eget sit amet metus. Etiam tristique urna vel accumsan fermentum. Proin eleifend lobortis ipsum eget tincidunt. Fusce molestie finibus auctor. Etiam sodales nulla sit amet dolor condimentum, quis commodo metus scelerisque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam ultrices sapien quam, et ullamcorper sem ultricies et. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris condimentum erat vitae diam viverra ullamcorper. Vivamus pellentesque nulla in ligula consequat ultrices. Vivamus convallis hendrerit eleifend. Donec turpis magna, ultricies at nisi sed, viverra tristique mi. Suspendisse at porta libero.',
    tag: ''
  },
  {
    name: 'Best json ever',
    from: 'FCC',
    date: new Date(2014, 10, 1),
    link: 'https://www.fcc.gov/',
    summary: 'Fusce lobortis accumsan condimentum. Donec ullamcorper accumsan massa sed vulputate. Cras feugiat nunc in est consectetur, et condimentum justo posuere. Duis nec purus id sem aliquam sollicitudin. Vivamus et lectus nec quam dignissim fermentum. Duis rutrum tortor sed magna mollis finibus. Ut tincidunt nunc arcu, nec bibendum mauris eleifend ac. Proin ut maximus nisi, quis placerat nisl. Donec bibendum, felis sed molestie venenatis, nunc nisi iaculis orci, quis ultrices nisi neque vel dolor. Suspendisse tincidunt, quam vel vehicula fringilla, sem orci pretium tellus, ut tempor ligula urna eu felis. Nunc pharetra, lorem ac gravida imperdiet, ex risus vehicula nulla, ac bibendum metus tortor ac nisi. Suspendisse posuere pretium nibh, non volutpat lorem vulputate ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend justo eget placerat maximus. Pellentesque fermentum est mi, eget convallis sapien tempus vitae.',
    tag: 'Development, Net Neutrality, Evil, FCC'
  }],
  [{
    name: 'How to create json',
    publisher: 'Self',
    date: new Date(2014, 10, 1),
    website: 'https://www.fcc.gov/',
    summary: 'Vivamus ligula tellus, tincidunt vel odio in, facilisis ultrices felis. Aenean tincidunt condimentum eros quis gravida. Quisque pretium tellus et nisi pulvinar tincidunt. Suspendisse potenti. Mauris aliquet semper velit, et vestibulum diam porta in. Integer egestas turpis ut eros tristique, quis sollicitudin nulla mattis. Nam ultricies lacus lacus, quis pharetra ante fermentum et. Curabitur nec lacinia augue.',
    tag: 'Development'
  }, {
    name: 'How to create json',
    publisher: 'Self',
    date: new Date(2014, 10, 1),
    website: 'https://www.fcc.gov/',
    summary: 'Vivamus ligula tellus, tincidunt vel odio in, facilisis ultrices' +
    ' felis. Aenean tincidunt condimentum eros quis gravida. Quisque pretium tellus et nisi pulvinar tincidunt. Suspendisse potenti. '
    + 'Mauris aliquet semper velit, et vestibulum diam porta in. Integer egestas turpis ut eros tristique, quis sollicitudin nulla mat'
    + ' tis.Nam ultricies lacus lacus, quis pharetra ante fermentum et. Curabitur nec lacinia augue.',
    tag: 'Development'
  }],
  [{
    name: 'Conferencia de How to create json',
    publisher: 'Conferences for all',
    startDate: new Date(2014, 10, 1),
    endDate: new Date(2014, 10, 1),
    website: 'https://www.fcc.gov/',
    summary: 'Morbi mattis lectus non augue blandit, eu euismod odio sagittis. Curabitur non faucibus elit. Maecenas auctor ante in porttitor maximus. Pellentesque id pellentesque leo. Morbi vehicula consectetur tristique. Nam consequat sollicitudin erat. Sed nec diam in odio tincidunt pharetra. Nullam suscipit in purus non dapibus. Suspendisse et massa eu purus finibus laoreet a vitae lorem. Mauris accumsan ex rhoncus, finibus lorem ut, volutpat massa. Pellentesque sit amet quam vitae neque fringilla tempor ac convallis justo. In porta sem eu posuere maximus. Praesent lorem turpis, eleifend at lacus fringilla, tincidunt suscipit massa. Aenean massa est, iaculis ut scelerisque vitae, aliquam cursus nulla. Suspendisse porta pretium risus, sit amet sagittis metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae',
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
