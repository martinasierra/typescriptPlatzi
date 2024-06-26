(()=> {                                          //self-executing anonymous function
let isEnable = true;
// isEnable = 'as'; -- Incorrect
// isEnable = '1234'; -- Incorrect
isEnable = false;
console.log('isEnable', isEnable);

let isNew: boolean = false;
console.log('isNew', isNew);
isNew = true;
console.log('isNew', isNew);

const random = Math.random();
console.log('random', random);
isNew = random >= 0.5 ? true : false;
console.log('isNew', isNew);

const myBoolean: boolean = true;
let type = typeof myBoolean;
console.log('typeMyBoolean', type);

})();
