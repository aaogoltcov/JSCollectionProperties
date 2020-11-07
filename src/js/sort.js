'use strict'

export default function orderByProps(dict, priorKeyList) {
    let newDict = {}

    // priority key list sort first
    for (let key in dict) {
        if ( priorKeyList.indexOf(key) >= 0 ) {
            newDict[key] = dict[key];
        }
    }

    // sort last keys of dict
    Object.keys(dict).sort().forEach(function(key) {
        if ( newDict.hasOwnProperty(key) ) {
            // pass
        } else {
            newDict[key] = dict[key];
        }
    });

    return newDict;
}
