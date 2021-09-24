
import mocker from 'mocker-data-generator'

const startDate = '2021-01-01'
const endDate = '2021-01-04'

const diffInMs  = Math.abs(new Date(endDate).getTime() - new Date(startDate).getTime());
const num_of_days = diffInMs / (1000 * 60 * 60 * 24);

// const num_of_days = 3;

const max_water_consumption = 100
const max_electric_consumption = 100

var electricHistory = {
    date: {
        faker: 'date.between("2021-01-01", "2021-01-15")'
    },
    consumption: {
        faker: 'random.number({"min": 1, "max": 100})'
    }
};

var waterHistory = {
    date: {
        faker: 'date.between("2021-01-01", "2021-01-15")'
    },
    consumption: {
        faker: 'random.number({"min": 1, "max": 100})'
    }
};


var house = {
    id: {
        chance: 'guid'
    },
    family_name: {
       faker: 'name.lastName'
    },
    household_size: {
      faker: 'random.number({"min": 1, "max": 8})'
    },
    postal_code: {
        randexp: / [A-Z][0-9][A-Z][0-9][A-Z][0-9]/,
        unique: true
    },
    activeContests: {
        faker: 'random.number({"min": 1, "max": 8})'
    },
    electricity: {
        hasMany: 'electricHistories',
        max: num_of_days,
        min: num_of_days
    },
    water: {
        hasMany: 'waterHistories',
        max: num_of_days,
        min: num_of_days
    }
};


function returnHousesJson(numberOfHouses: number) {
    return mocker()
    .schema('electricHistories', electricHistory, num_of_days)
    .schema('waterHistories', waterHistory, num_of_days)
    .schema('houses', house, numberOfHouses)
}
