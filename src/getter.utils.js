/**
 * Getter and setter are used to hold value temporarily
 */

let holderObject = {};

export function Getter(propertyName) {
    if (Array.isArray(propertyName)) {
        const value = {};
        propertyName.forEach(name => {
            value[name] = holderObject[name];
        });
        return value;
    }

    return holderObject[propertyName];
}

export function Setter(propertyName, value) {
    if (!propertyName) {
        console.warn('Property name could not found');
        return value;
    }
    holderObject[propertyName] = value;
    return value;
}