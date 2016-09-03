import {DataType} from './dataType';

export class DefaultDataType extends DataType {

    constructor() {
        super()
        console.log('DefaultDataType adapter created');
    }

    getValue(value){
        return value;
    }
}
