/* eslint-disable no-unused-vars */

interface Customer {
  name: string;
  details?: {
    address?: {
      city: string;
      street: string;
      zip: string;
    };
    age?: number;
  };
}

const v1 = { value: 'Something' };
const v2 = '';
const v3 = undefined;
const v4 = [3, 5, 7, 9];
const v5: Customer = {
  name: 'Carl',
  details: {
    age: 82,
  },
};

// logical && operator

v1 && console.log('v1 is truthy');
v2 && console.log('v2 is truthy');

// logical || operator

const config1 = v1 || 'default value';
const config2 = v2 || 'default value';
console.log(config1);
console.log(config2);

// Nullish coalescing operator (??)

const cfg1 = v1 ?? 'default-value';

const cfg2 = v2 ?? 'default-value';

const cfg3 = v3 ?? 'default-value';
console.log(cfg1, cfg2, cfg3);

// Conditional (ternary) operator (?:)

const tern1 = v1 ? 'truthy' : 'falsy';

const tern2 = v2 ? 'truthy' : 'falsy';
console.log(tern1, tern2);

// Optional chaining operator (?.)

const oc1 = v1.value;
const oc2 = v5.details?.address?.city;
console.log(oc1, oc2);

// // spread syntax

const sObjs = { ...v1, foo: 'bar' };
console.log(sObjs);

const sArr = [100, ...v4];
console.log(sArr);
