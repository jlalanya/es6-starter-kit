import {DataType} from './dataType';

export class ArrayDataType extends DataType {

    constructor() {
        super()

    }

    getValue(value){

      let arrString2 = Array.from(value);
      let arrString = value.split(",").filter(item => Number.isInteger(parseInt(item)));
      return Array.from(arrString, item => parseInt(item));
    }
}
