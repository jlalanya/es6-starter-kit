import {ArrayDataType} from './arrayDataType';

export class Target {
    constructor(type) {
        let result
        switch(type) {
            case 'Array':
                result = new ArrayDataType()
                break;
            default:
                result = undefined;
        }
        return result
    }
}
