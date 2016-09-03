import {ArrayDataType} from './arrayDataType';
import {DefaultDataType} from './defaultDataType';

export class Target {
    constructor(type) {
        let result
        switch(type) {
            case 'Array':
                result = new ArrayDataType()
                break;
            default:
                result = new DefaultDataType()
        }
        return result
    }
}
