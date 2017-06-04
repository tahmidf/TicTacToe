//JS code goes here
var click_checker = [0,0,0,0,0,0,0,0,0];
var game_status = false;
var player1_counter = 0;
var player2_counter = 0;

var turn;
var player_status = true;
var game_status = true;
function game_play(event)
{
  var check_player=event.target;

  if(click_checker[check_player.id]==0 && game_status == true)
  {
    event.target.innerHTML = turn? "O":"X";
    if(player_status==true)
    {
      click_checker[check_player.id]=1;
      player_status =false;
      check_player.style.color="#2466FE";
      document.getElementById('ticTable').className="ticTable1";
    }
    else if(player_status == false){
      click_checker[check_player.id]=2;
      player_status =true;
      check_player.style.color="#4937BC";
      document.getElementById('ticTable').className="ticTable";
    }
    turn = !turn;
  }

  else if(game_status == false)
  {
    alert("The Game is Finished Either Press Reset to Start a New Game or Leave The Page");
  }
  else if(click_checker[check_player]!==0) {
    alert("This is a Wrong Move. Put your X or O in another cell");
  }
  var game_win_checker = game_win_logic();
  if(game_win_checker==1 && game_status ==true)
  {
    document.getElementById('game_status_html').innerHTML = "Player 1 Win";
    document.getElementById('game_status_html').style.color = "#FF0000";
    game_status = false;
    document.getElementById('Player_win_counter').innerHTML = player1_counter+1;
    player1_counter+=1;
    document.getElementById('Player_win_counter4').innerHTML = player1_counter;
  }
  else if(game_win_checker==2 && game_status ==true)
  {
    document.getElementById('game_status_html').innerHTML = "Player 2 Win";
    document.getElementById('game_status_html').style.color = "#FF0000";
    game_status = false;
    document.getElementById('Player_win_counter3').innerHTML = player2_counter+1;
    player2_counter+=1;
    document.getElementById('Player_win_counter2').innerHTML = player2_counter;
    turn = !turn;
  }
  else if(game_win_checker==3 && game_status ==true)
  {
    document.getElementById('game_status_html').innerHTML = "Great Game but it's a tie";
    document.getElementById('game_status_html').style.color = "#FF0000";
    game_status = false;
  }
}

function game_win_logic()
{
  if((click_checker[0]==1 && click_checker[1]==1&&click_checker[2]==1)||
   (click_checker[3]==1&&click_checker[4]==1&&click_checker[5]==1)||
   (click_checker[6]==1&&click_checker[7]==1&&click_checker[8]==1)||
   (click_checker[2]==1&&click_checker[4]==1&&click_checker[6]==1)||
   (click_checker[0]==1&&click_checker[4]==1&&click_checker[8]==1)||
   (click_checker[0]==1&&click_checker[3]==1&&click_checker[6]==1)||
   (click_checker[2]==1&&click_checker[5]==1&&click_checker[8]==1)||
   (click_checker[1]==1&&click_checker[4]==1&&click_checker[7]==1))
     return 1;

  else if((click_checker[0]==2 && click_checker[1]==2&&click_checker[2]==2)||
   (click_checker[3]==2&&click_checker[4]==2&&click_checker[5]==2)||
   (click_checker[6]==2&&click_checker[7]==2&&click_checker[8]==2)||
   (click_checker[2]==2&&click_checker[4]==2&&click_checker[6]==2)||
   (click_checker[0]==2&&click_checker[4]==2&&click_checker[8]==2)||
   (click_checker[0]==2&&click_checker[3]==2&&click_checker[6]==2)||
   (click_checker[2]==2&&click_checker[5]==2&&click_checker[8]==2)||
   (click_checker[1]==2&&click_checker[4]==2&&click_checker[7]==2))
     return 2;

   else {
     var temp = 0;
     for(var i=0; i<click_checker.length;i++)
     {
       if(click_checker[i]!==0)
        temp++;
     }
     if(temp==9)
       return 3;
   }
}

function resetbutton(event)
{
  for(var i=0; i<click_checker.length; i++)
  {
    click_checker[i] =0;
    document.getElementById(i).innerHTML = '';
  }
  game_status = true;
  player_status = true;
  document.getElementById('game_status_html').innerHTML = "New Game";
  document.getElementById('game_status_html').style.color = "white";
  if(turn==!turn)
    turn = turn;
  else if(turn==turn)
    turn = !turn;
}
