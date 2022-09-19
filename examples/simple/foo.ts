import { b, format } from '@myorg/ts_lib';

export const a: string = `number: 1, date: ${format(
    new Date(2014, 1, 11),
    'MM/dd/YYYY'
)}`

b.substr(0);

console.log(a, b);
