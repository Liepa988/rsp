
function rock(player_choise,word){
    //bot choise
   const bot_choise=["rock","paper","scisors"];
   let i = Math.floor(Math.random()*3);
   word = bot_choise[i];
   //player choise
   player_choise = "rock";
   //answer
  if (player_choise == word){
    message = "Tie"
  ;}
  else if ((player_choise == "rock" && word == "scisors") || (player_choise == "paper" && word == "rock") || (player_choise == "scisors" && word == "paper")){
    message = "Win"
  ;}
  else{
    message = "Lost"
  ;}
  //output
  document.getElementById("result").innerHTML="Game result: " + message;
  document.getElementById("ch").innerHTML="Bot choise: "+ word;

}
function paper(player_choise,word){
    //bot choise
   const bot_choise=["rock","paper","scisors"];
   let i = Math.floor(Math.random()*3);
   word = bot_choise[i];
   //player choise
   player_choise = "paper";
   //answer
  if (player_choise == word){
    message = "Tie"
  ;}
  else if ((player_choise == "rock" && word == "scisors") || (player_choise == "paper" && word == "rock") || (player_choise == "scisors" && word == "paper")){
    message = "Win"
  ;}
  else{
    message = "Lost"
  ;}
  //output
  document.getElementById("result").innerHTML="Game result: " +message;
  document.getElementById("ch").innerHTML="Bot choise: "+ word;
  

}
function scisors(player_choise,word){
    //bot choise
   const bot_choise=["rock","paper","scisors"];
   let i = Math.floor(Math.random()*3);
   word = bot_choise[i];
   //player choise
   player_choise = "scisors";
   //answer
  if (player_choise == word){
    message = "Tie"
  ;}
  else if ((player_choise == "rock" && word == "scisors") || (player_choise == "paper" && word == "rock") || (player_choise == "scisors" && word == "paper")){
    message = "Win"
  ;}
  else{
    message = "Lost"
  ;}
  //output
  document.getElementById("result").innerHTML="Game result: " +message;
  document.getElementById("ch").innerHTML="Bot choise: "+ word;

}

