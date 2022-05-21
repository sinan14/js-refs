const multiply = (x, y) => x * y;

const square = x => multiply(x, x);

const isRightTriangle = (a, b, c) => (
    square(a) + square(b) === square(c)
)
console.log("BEFORE")
const a = isRightTriangle(3, 4, 5)
console.log(a)

console.log("DONEEEE!")