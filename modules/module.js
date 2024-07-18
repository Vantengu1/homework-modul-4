// 1-е задание
export function greet(myName) {
    return myName;
}


// 2-е задание
export function celsiusToFahrenheit(temp) {
    return ((temp * 9.0 / 5.0) + 32.0);
}

// 3-е задание
 export function calculateFallDistance(t) {
    let g = 9.8;
    let d = (1/2) * g * t^2
    return d;
}

// 4-е задание
export function calculateAverage(a, b ,c) {
    let num = (a + b + c) / 3;
    return num;
}

// 5-е задание
export function concatStrings(text1, text2) {
    let string = (text1 + text2);
    return string;
}