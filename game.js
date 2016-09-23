var gameInput = $("#game-input");
var gameOutput  = $("#game-output");
gameInput.keydown(function(keydownEvent) {
  // the key code for enter is 13

  if (keydownEvent.keyCode == 13) {      
    parseText(gameInput.val()); 
    gameInput.val("");
  }  
})

function parseText(text) {  
  //  if (text.slice(0,2) === "Hi") {
  //    gameOutput.html("Hi there!");
  //  }
  text = text.toLowerCase();
  switch (text) {
    case "hello":
      gameOutput.html("Bob!");
      break;
    case "这道菜很难吃。":
      gameOutput.html("是啊，再也没有比这道菜更难吃的一道菜了。");
      break;
    case "why?": 
      gameOutput.html("Hi there!");
      break;  
    case "prepare for trouble":
      gameOutput.html("And make it double");
      break;
    case "to protect our world from devastation":
      gameOutput.html("To unite the peoples within our nation");
      break;
    case "to denounce the evils of truth and love":
      gameOutput.html("To extend our reach to the stars above");
      break;
    case "jesse":
      gameOutput.html("James");
      break;
    case "team rocket blasts off at the speed of light":
      gameOutput.html("Surrender now or prepare to fight");
      break;
    case "meowth":
      gameOutput.html("That's right");
      break;
    case "hi":
      gameOutput.html("Hello");
      break;
    case "mirror, mirror on the wall, which team is the fairest of them all?":
      gameOutput.html('<img src = "http://vignette3.wikia.nocookie.net/pokemon/images/b/b0/Team_Rocket_trio_OS.png/revision/latest?cb=20150915073657" width="128" height="128"> Team Rocket!');
      break;
    case "strawberries":
      gameOutput.html('<img src = "http://www.strangebeaver.com/wp-content/uploads/2010/03/google/1.jpg"> ')
      break;
    case "Boo!"
      var boo = 0
      boo++
      if (boo > 3)
      gameOutput.html("Aah!")
      else (Meh.)
      break;

    case "random":
      var responses = [
        "IDK",
        "David's Rocks",
        "Who am I?",
        "Stop asking me questions"
      ]
      var response=responses[Math.floor(Math.random()*responses.length)];
      gameOutput.html(response);
      break;
    case "What's your favorite idea?":
      gameOutput.html("Mine is being creative.")
      break;

    default:
      gameOutput.html("What did you say?");
      break;

  }
}