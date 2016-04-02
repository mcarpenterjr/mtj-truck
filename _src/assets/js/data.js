function model() {
  var self = this;

  self.about = {
    name: 'M. T. J Truck Equipment INC.',
    shortName: 'M. T. J.',
    contacts: {
      phone: '(203)334-4939',
      email: 'sales@mtjtruck.com',
      googlePlus: 'xXSirenSxOpusXx',
      faceBook: 'MTJTruckEquipmentINCBridgeport',
      address: {
        street: '127 Wilmot Ave.',
        state: 'Connecticut',
        zip: '06607',
      },
    },
    mainPic: 'img/profile/badge.jpg',
    short: 'Proffesinally installed truck equipment',
    services: ['some array of traits'],
  };

  self.projects = [{
    size: {
      length: null,
      width: null,
      height: null,
    },
    description: 'Producing machined parts for the Aerospace, Medical, ' +
      'and Energy Generation industries. Works from supplied blueprints and ' +
      'drawings to create excellent qaulity parts per customer specifications. ' +
      'Keeps a clean and safe work area along with routine equipment maintinence ' +
      'and quality checks. Works closely with Quality Control to meet Zero-Loss ' +
      'Certified Material requirements.',
    features: ['Studies Blueprints', 'Verifies Program Through Measurements ' +
      'and Feedback From Quality Control', 'Maintains Production Consistency Through ' +
      'Attention to Part Details', 'Maintains a Safe Work Enviroment', 'Maintians Quality ' +
      'and Production Logs', 'Explores Oppurtunities to Add Value to Jobs',
    ],
  }, ];
}
