export interface Passenguer {
    name: string;
    children?: string[];
}

const passenguer1: Passenguer = {
    name: 'Fernando',
}

const passenguer2: Passenguer = {
    name: 'Melissa',
    children: ['Natalia', 'Elizabeth']
}

const printChildren = ( passenger: Passenguer ) => {

    // const howManyChildren = passenger.children?.length || 0;
    const howManyChildren = passenger.children?.length;

    console.log( passenger.name, howManyChildren)
    
    return howManyChildren;
}

const returnChildrenNumber = ( passenger: Passenguer ): number => {

    if ( !passenger.children ) return 0;
    
    // const howManyChildren = passenger.children?.length || 0;
    const howManyChildren = passenger.children!.length;

    console.log( passenger.name, howManyChildren)
    
    return howManyChildren;
}

printChildren(passenguer1)
printChildren(passenguer2)

returnChildrenNumber(passenguer1)
returnChildrenNumber(passenguer2)