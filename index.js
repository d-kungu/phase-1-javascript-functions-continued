// code your solution here
function saturdayFun(event="roller-skate"){
    return (`This Saturday, I want to ${event}!`)

}
saturdayFun("batheMyDog")

function mondayWork(event="go to the office"){
    return (`This Monday, I will ${event }.`)

}
mondayWork("work from home")

function wrapAdjective(val='*'){


    let adjective  = function( text = "a hard worker"){
    return `You are ${val}${text}${val}!`};
    return adjective;

    
};
