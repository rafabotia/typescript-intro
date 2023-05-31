export interface Product {
    description: string;
    price: number;
}

// const phone: Product = {
//     description: 'Nokia A1',
//     price: 150.0
// }

// const tablet: Product = {
//     description: 'iPad Air',
//     price: 250.0
// }

interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}


// function taxCalculation( options: TaxCalculationOptions ): number[] {
    
//     let total = 0;

//     options.products.forEach( product => {
//         total += product.price;
//     })

//     return [ total, total * options.tax ]
// }

// function taxCalculation( options: TaxCalculationOptions ): [number, number] {
// function taxCalculation( { tax, products }: TaxCalculationOptions ): [number, number] {
export function taxCalculation( options: TaxCalculationOptions ): [number, number] {
    
    const { tax, products } = options;

    let total = 0;

    // options.products.forEach( ({ price }) => {
    //     total += price;
    // })
    products.forEach( ({ price }) => {
        total += price;
    })

    // return [ total, total * options.tax ]
    return [ total, total * tax ]
}


// const shoppingCart = [phone, tablet];
// const tax = 0.15;

// const result = taxCalculation({
//     products: shoppingCart,
//     tax: tax,
// })

// const [ total, taxTotal ] = result;

// console.log('Total:', total);
// console.log('Total tax:', taxTotal);

// console.log('Total', result[0] );
// console.log('Total', result[1] );


// export {};