let max=prompt("Enter Maximum number");
let random=Math.floor(Math.random()* max)+1; 
let guess=prompt("Guess the number");
while(true)
{
    if(guess=="quit")
    {
        console.log("You quit the game");
        break;
    }
    if(guess==random)
    {
        console.log("Congrates! you are right.The number was",random);
       
        break;
    }
    else if(guess<random)
    {
        guess=prompt("Your number is too small");
        
    }
    else if(guess>random)
    {
        guess=prompt("Your number is too big");
    }
}
