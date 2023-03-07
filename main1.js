1)
//в чем + стрелочных функций?

//oni koroche i udobnee

2)
//превратите функцию ниже в стрелочную
function newUser(name, age) {
    if (age > 18) {
        console.log(`${name} ты стар`);
    } else {
        console.log(`${name} ты не дорос`);
    }
}

((name, age) => {
    if (age > 18) {
        console.log(`${name} ты стар`);
    } else {
        console.log(`${name} ты не дорос`);
    }
})

3)
//сделай скрипт ниже короче
let call = (a, b) => a + b