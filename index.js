// code your solution here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}
//saturdayFun("bathe my dog");

function mondayWork(value){
    if (value == undefined){
        return "This Monday, I will go to the office."
    } else {
        return `This Monday, I will ${value}.`
    }
}

function wrapAdjective(value){
    return function (emphatic){
        return `You are ${value}${emphatic}${value}!`
    }
}
