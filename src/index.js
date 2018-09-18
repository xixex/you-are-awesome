// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (propName) => {
    return propName;
};

const createNotEnumerableProperty = (propName) => {
    return Symbol(propName)
};

const createProtoMagicObject = () => {
    const magicObject = function () {
    };
    magicObject.prototype = magicObject.__proto__;
    return magicObject;
};

let counter = 0;
const incrementor = () => {
    incrementor.toString = () => {
        return counter;
    };
    counter++;
    return incrementor;
};

let counter2 = 1;
const asyncIncrementor = () => {
    return new Promise((res, rej) => {
        res(counter2++);
    });
};


const createIncrementer = () => {
    return {
        value: 0,
        [Symbol.iterator]() {
            return this;
        },

        next: function () {
            this.value++;
            return this;
        }
    }
};


// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (param) => {
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res( param );
    }, 1000);
    });
};

const getDeepPropertiesCount = (obj) => {
   return JSON.stringify(obj, null, ' ').match(/:/ig).length;
};
const createSerializedObject = () => {
    return {
        toString: ()=>{
            return 1;
        },
        toJSON: ()=>{
            return 1;
        }
    }
};
const toBuffer = () => {
};


const count =( obj, counter = 0)=> {
    debugger
    if (obj.__proto__ != null) {
        counter++;
        count( obj.__proto__, counter)
    }else{
        return counter;
    }
};

const sortByProto = (arr) => {
    arr.sort((a , b)=>{
        return count(a) - count(b);
    })
    return arr;
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;