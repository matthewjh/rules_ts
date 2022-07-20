import { b, format } from '@myorg/ts_lib'

b.substr(0);
export const a: string = `number: 1, date: ${format(
    new Date(2014, 1, 11),
    'MM/dd/YYYY'
)}`
console.log(a, b)
