//JS code goes here
var click_checker = [0,0,0,0,0,0,0,0,0];
var game_status = false;

var turn;
var player_status = true;

function game_play(event)
{
  var check_player=event.target;
  if(click_checker[check_player.id]==0)
  {
    event.target.innerHTML = turn? "O":"X";
    if(player_status==true)
    {
      click_checker[check_player.id]=1;
      player_status =false;
    }
    else if(player_status == false){
      click_checker[check_player.id]=2;
      player_status =true;
    }
    turn = !turn;
    console.log(click_checker);
  }

  else if(click_checker[check_player]!==0) {
    alert("This is a Wrong Move. Put your X or O in another cell");
  }
  var game_win_checker = game_win_logic();
  if(game_win_checker==1)
  {
    alert("Player 1 Win");
  }
  else if(game_win_checker==2)
  {
    alert("Player 2 Win");
  }
  else if(game_win_checker==3)
  {
    alert("It's a Tie");
  }
}

function game_win_logic()
{

}
