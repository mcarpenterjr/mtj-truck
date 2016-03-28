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
    style: 'Utillity Rack Body',
    application: 'Utilities Service',
    material: {
      deck: 'Aluminum',
      frame: 'Aluminum',
      sides: 'Aluminum',
    },
    size: {
      length: null,
      width: null,
      height: null,
    },
    auxComponents: ['Liftgate', 'Crane'],
    features: ['LED Body Lights', 'Post Mounted Crane', 'Anthony Railtrac Liftgate', 'Deck Mounted Toolboxes', 'Under Body Toolboxes', 'Integrated Bin Organizer', '3 Point Locking Cabinet Doors'],
    description: 'Custom designed for the Gas Utillity Industry, this body comes fully loaded.' +
      ' Boasting impressive storage space, above and below the body deck. Twin curbside deck mounted' +
      ' Toolboxes with integrated shelves and small parts bins, along with cabinet style doors' +
      ' make it a breeze to pick small parts. An underbody box for storing tie downs, wheel chocks' +
      ' and crane stabilizers.',
  }, {
    style: 'Van Body',
    application: 'Pavement Marking Support',
    material: {
      deck: 'Oak Flooring',
      frame: 'Steel',
      sides: 'Aluminum',
    },
    size: {
      length: null,
      width: null,
      height: null,
    },
    auxComponents: ['Liftgate'],
    features: ['LED Body Lights', 'Anthony Railtrac Liftgate', 'Under Body Toolboxes', 'Side Access Roll Up Doors', 'Extended Folding Liftgate Deck', 'Integrated Front Body Storage Area'],
    description: '',
  }, ];
}
