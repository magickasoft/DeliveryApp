import {
    Images,
} from './index';

export const App = {
    "appTitle": "Dentasol",
    "id": "de.dentasol.app.brand.demo",
    "PRAXIS_PIN" :"false",
    "PRAXIS_PIN_INFO" : "kann false, ein beliebiger pin, oder alle sein. alle lässt alle pins zu."
};

export const infoLabor = {
    "location": {
        "street": "Rekener Postweg 47",
        "city": "Coesfeld",
        "postcode": 48653,
        "name": "Dentasol Musterlabor"
    },
    "url": "http://dentasol.eu",
    "email": "info@dentasol.eu",
    "phone": "02541 / 880 117",
    "phone_click": "+492541880117",
    "newsURL": "",
    "cell": "02541 / 880 118",
    "labor_images":[Images.labor_01, Images.labor_02, Images.labor_03, Images.labor_04, Images.labor_05],
};

export const users = [
  {
    "gender": "male",
    "name": {
      "title": "mr",
      "first": "Thomas",
      "last": "Müller"
    },
    "subTitle" : "Geschäftsführer",
    "person_image": Images.persons_1,
    "location": {
      "street": "3649 dieppe ave",
      "city": "maitland",
      "state": "nunavut",
      "postcode": 58699
    },
    "email": "",
    "phone": "+492541880117",
    "skype" : "echo123",
    "cell": "889-621-4075",
    "nat": "CA"
  },
  {
    "gender": "male",
    "name": {
      "title": "mr",
      "first": "Andreas",
      "last": "Wald"
    },
    "subTitle" : "ZTM",
    "person_image": Images.persons_2,
    "location": {
      "street": "3875 fatih sultan mehmet cd",
      "city": "elazığ",
      "state": "erzincan",
      "postcode": 44000
    },
    "email": "info@dentasol.eu",
    "phone": "+492541880117",
    "skype" : "echo456",
    "cell": "(255)-294-7516",
    "nat": "TR"
  },
  {
    "gender": "female",
    "name": {
      "title": "miss",
      "first": "Simone",
      "last": "Berger"
    },
    "subTitle" : "ZT",
    "person_image": Images.persons_3,
    "location": {
      "street": "7057 nowlin rd",
      "city": "salem",
      "state": "south dakota",
      "postcode": 47964
    },
    "email": "info@dentasol.eu",
    "phone": "+492541880117",
    "skype" : "",
    "cell": "(611)-766-4831",
    "nat": "US"
  },
  {
    "gender": "female",
    "name": {
      "title": "miss",
      "first": "Anne",
      "last": "Winter"
    },
    "subTitle" : "Empfang",
    "person_image": Images.persons_4,
    "location": {
      "street": "3556 toften",
      "city": "aarhus n",
      "state": "midtjylland",
      "postcode": 13212
    },
    "email": "",
    "phone": "+492541880117",
    "skype" : "",
    "cell": "71929658",
    "nat": "DK"
  }
];
