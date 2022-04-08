import {TypeFromB} from './b';

export type TypeFromA = string;

const toBeExported: TypeFromB = 'cycle';

export default toBeExported;
