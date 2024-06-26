(()=> {                                          //self-executing anonymous function
 let productPrice = 100;
 productPrice = 12;
 console.log('productPrice', productPrice);

 let customerAge: number = 28;
  // customerAge = customerAge + '1'; --- Incorrect
  customerAge = customerAge + 1;
  console.log('customerAge', customerAge);

  let productInStock: number; // When we declare a variable without assigning it, we declare its type
  // console.log('productInStock', productInStock);  Error because used before asigned

  let discount: number = parseInt('100');
  console.log('discount', discount);
  if (discount <= 200) {
    console.log('apply');
  } else {
    console.log('not apply');
  }

    let hex = 0xfff; // They are defined by placing "0x" at the beginning of the value
    console.log('hex', hex);
    let bin = 0b1010; // 10  They are defined by placing "0b" at the beginning of the value
    console.log('bin', bin);

    const myNumber: number = 10;

})();
