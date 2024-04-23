const _ = require('lodash');

const object1 = {
    id: 2,
    name: 'Przyjaciele',
    startYear: 1994,
    endYear: 2004,
    type: ["Komedia"],
    seasons: 10
};

const object2 = {
    id: 2,
    name: 'Przyjaciele edytowany',
    startYear: 1994,
    endYear: 2010,
    type: ["Komedia"],
    seasons: 10
};

const detectChanges = (orginal, modified) => {
    const diffrences = [];
    const allKeys = _.union(_.keys(orginal), _.keys(modified));

    _.each(allKeys, (key) => {
        if (!_.isEqual(orginal[key], modified[key])) {
            diffrences.push([key, modified[key]]);
        }
    });

    return diffrences;
};

console.log(detectChanges(object1, object2));