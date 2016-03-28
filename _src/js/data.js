function model() {
  var self = this;

  self.about = {
    name: 'M. T. J Truck Equipment INC.',
    shortName: 'M. T. J.',
    contacts: {
      phone: '(203)816-5206',
      email: 'marksthings24@gmail.com',
      googlePlus: 'xXSirenSxOpusXx',
      faceBook: 'Mark N Carpenter Jr',
      address: {
        street: '127 Wilmot Ave.',
        state: 'Connecticut',
        zip: '06607',
      },
    },
    mainPic: 'img/profile/badge.jpg',
    short: 'With strong problem solving skills, the ability to adapt,' +
      ' and capability to quickly learn new tasks, I know I will become a vital' +
      ' asset to almost any team. ',
    services: ['HTML', 'CSS', 'JavaScript', 'Jquery', 'Bootstrap', 'CMS', 'Netbeans',
      'Git', 'GitHub', 'MySql', 'iOS', 'Windows', 'CLI', 'PhotoShop', 'Fireworks',
      'Premier Pro', 'Illustrator', 'DreamWeaver', 'Joomla', 'WordPress', 'MVC',
      'CodeIgniter',
    ],
  };

  self.projects = [{
    employer: 'G. P. Tool Co.',
    type: 'CNC Machinist',
    size: {
      length: null,
      width: null,
      height: null,
    },
    location: 'Danbury, CT',
    description: 'Producing machined parts for the Aerospace, Medical, ' +
      'and Energy Generation industries. Works from supplied blueprints and ' +
      'drawings to create excellent qaulity parts per customer specifications. ' +
      'Keeps a clean and safe work area along with routine equipment maintinence ' +
      'and quality checks. Works closely with Quality Control to meet Zero-Loss ' +
      'Certified Material requirements.',
    duties: ['Studies Blueprints', 'Verifies Program Through Measurements ' +
      'and Feedback From Quality Control', 'Maintains Production Consistency Through ' +
      'Attention to Part Details', 'Maintains a Safe Work Enviroment', 'Maintians Quality ' +
      'and Production Logs', 'Explores Oppurtunities to Add Value to Jobs',
    ],
  }, ];
}
