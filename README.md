# Project-1-Dom-Game
This was my first project from my training at Per Scholas. It utilizes HTML, CSS and Javascript
and the game runs dynamically through Javascript DOM manipulation. I feel like this game fully utilized all the knowledge I have learned from all three technologies barring objects and classes.

###### The Website 
https://rabsickles123.github.io/Project-1-Dom-Game/

## The Game
A straightforward rock, paper, scissors game with seven rounds (an odd number seemed appropriate to give less chances of a draw). The game starts once the player decides to press a button.

## Method
Planning out the game was the most important aspect and thus there is a pseudocode.txt file outlining all the thoughts regarding HOW to actually make the game. This was perhaps the most difficult/overwhelming part of everything. I understood the basics of what was needed in each file and that was typed out and organized by file in the pseudocode. This included things that were nice to have (in terms of animation and styling that couldve been tedious and thus left as "nice to have" once the functionality was viable). Most of the focus was in the scripting and DOM manipulation although, towards the end, the audio files were added to the HTML file instead of using the Audio constructor.

## Technical Stuff
The HTML has several divs including a title, scoreboard, display, choices, and reset button. Each of these divs are then further divided into more divs depending on what is needed. CSS flexbox was used to stylize the divs into a proper looking webpage. Most of the game logic is within the each of the rock, paper, scissor eventlisteners in javascript. 

## The Challenges
The biggest challenge utilizing my logic was adding the seven rounds of game play and declaring a winner within the game. I originally wanted to use a while loop, but that presented some challenges I had the round counter increase at each click of each eventlistener. I'm sure all of this can be added to a certain function that can condense the code (especially within the event listeners) but I'm content with my decision because it worked. However the logic has made it wonky and cause a few bugs/errors if the game is clicked through to fast and the order of the winner/loser announcement is off a tad bit.

## Things that can be improved
The overall look of the website is a bit simpler than originally planned. I had hoped to add more animations and styling and overall readability of the winning/losing can be a bit difficult to read unless you focus alot. It would be better to if the winner could be declared after the rounds have been cleared instead it shows up before all the points are awarded. (Maybe a game function and the order of everything can be changed) If you go too fast and click away sometimes it takes time for the game to catch up and it can throw it off a bit (but not sure if its a rendering issue or just the code but I'm guessing both).

