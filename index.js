// Your code here
function saturdayFun(fun="roller-skate") {
  console.log(`This Saturday, I want to ${fun}!`);
}
saturdayFun();
saturdayFun("go out to eat");

function mondayWork(str="go to the office") {
  console.log(`This Monday, I will ${str}.`)
}
mondayWork();
mondayWork("go for a run");

function wrapAdjective(w="*") {
  return function(p="special") {
    return `You are ${w}${p}${w}.`
  }
}
wrapAdjective()("cool");
wrapAdjective("%")("a dedicated programmer");

