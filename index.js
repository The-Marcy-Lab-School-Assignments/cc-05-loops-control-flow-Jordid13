//1

const multiplesOfSixAndNine = () => {
    let i = 0
    while (i <= 100) {
        i++
        if(i % 6 === 0 && i % 9 === 0) {
            console.log(i)
        };
    };
};

//multiplesOfSixAndNine();

//2
const greaterNum = (a, b) => {
    if (typeof(a) === 'number' && typeof(b) === 'number' ) {
        if (a === b) {
            return 'both integers are equal'
        } else if (a > b) {
            return a
        }
        return b
    }
    return null
};

//console.log(greaterNum(41, 31))

//3
const sumOfFourAndSix = () => {
    let i = 0
    let sum = 0
    while (i <= 1000) {
        i++
        if(i % 4 === 0 && i % 6 === 0) {
            sum += i
        } 
    };
    return sum
};

//console.log(sumOfFourAndSix())

//4
const oddAndEvenToN = (a) => {
    let i = 0
    while (i <= a) {
        if(i % 2 === 0) {
            console.log(`${i} is even`)
        } else {
            console.log(`${i} is odd`)
        }
        i++
    };
};

//oddAndEvenToN(10);

//5
const sumOfNotDivisibleByTen = () => {
    let i = 0
    let sum = 0
    while (i <= 1000) {
        if(i % 10 !== 0) {
            sum += i
        } 
        i++
    };
    return sum
};

//console.log(sumOfNotDivisibleByTen());

//6
const greatestNum = (a, b, c ,d) => {
    let arr = [a, b, c, d];
    let uniquearr = new Set([a, b, c, d]);
    let difference = (arr.length + 1) - uniquearr.size

    if (
        typeof(a) !== 'number'
        || typeof(b) !== 'number'
        || typeof(c) !== 'number'
        || typeof(d) !== 'number'
    ) {
        return null
    }
    
    if (difference === 2) {
        return 'two integers are equal'
    } else if (difference === 3) {
        return 'three integers are equal'
    } else if (difference === 4) {
        return 'all integers are equal'
    }
    
    return Math.max(...arr)
};

//Bonus #1
const multiplesOfFourAndSix = () => {
    let i = 0
    let result = []
    while (i <= 100) {
        i++
        if(i % 4 === 0 && i % 6 === 0) {
            result.push(i)
        };
    };
    return result
};


//Bonus #2
const countMultiplesOfTwo = (arr) => {
    let i = 0;
    let counter = 0;
    while (i <= arr.length) {
        i++
        if(arr[i] % 2 === 0) {
            counter += 1
        };
    };
    return `Number of integers multiples of two: ${counter}`
};

