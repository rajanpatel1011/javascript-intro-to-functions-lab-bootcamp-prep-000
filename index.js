function shout(string){
  return string.toUpperCase()
}
function whisper(string){
  return string.toLowerCase()
}
function logShout(string){
  return console.log(string.toUpperCase())
}
function logWhisper(string){
  return console.log(string.toLowerCase())
}

function sayHiToGrandma(string){
  if(string==string.toLowerCase()){
  return "I can't hear you!"
  }


  if(string==string.toUpperCase()){
    return "YES INDEED!"
  }

<<<<<<< HEAD
  if(string==="I love you, Grandma."){
    return "I love you, too."
  
=======
  if(string===("I love you, Grandma..")){
    return "I love you, too."
>>>>>>> c0f19f4cf770a2fa8f176211290aacdb5ea87eba
  }
}