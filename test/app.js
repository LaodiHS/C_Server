var ngram = require('simple-ngram-markov');

var options = {
  length: 2, // ngram size; default is 2
  stripPunctuation: true // default is true
};

var model = ngram.createModel(options);

ngram.addSentenceToModel(model, "Hey, what the heck is up man.");
ngram.addSentenceToModel(model, "Honestly I really just don't believe it. Simply.");

var sentence = ngram.generateSentence(model, 10); // 10 is the desired length of the sentence


sentence 

var options2 = {
    length: 2, // ngram size; default is 2
    stripPunctuation: true // default is true
  };
  

var model2 = ngram.createModel(options2);

ngram.addSentenceToModel(model2, `Real Deal M
Young rich nigga
Migos
Young rich nigga
Real Deal M
Go Go Go Go
M's nigga (M)
Want them M's nigga (Real Deal M)
Got some niggas in the hood
They got M's nigga
M's nigga (M)
Want them M's nigga (Real Deal M)
Yo rich nigga ain't got no deal
I want them M's nigga

Walking around with them M&M's (Young rich nigga)
Snake nigga in the grass
Young nigga you need to get rid of him
Came from the bottom (Bottom)
Now I've got gualla (Cash)
I'm trapping and capping
I'm cooking that fix with no flowers
My plug live in Mongolia
Finessing in Cambodia
Got Iggy Azalea in the kitchen
And she make it from Australia (Go whip whip)
My teacher always told me
Quavo you gon be a failure
I seen her yesterday
And put her number in my cellular (Lets go)
M's nigga (M)
Want them M's nigga (Real Deal M)
Got some niggas in the hood
They got M's nigga
M's nigga (M)
Want them M's nigga (Real Deal M)
Yo rich nigga ain't got no deal
I want them M's nigga

Ain't talking about candy (Ain't talking about candy)
The work come in on a boat
So big it look like the Titanic (Damn)
My niggas they selling Mariah
So they strapped up with that cannon (White)
Nigga we business
I'm with the rich fuck the famous
Son you can have it (I'd rather be rich)
Fuck nigga I walk in the club with my Ruger
I flex with ice on my medusa
These niggas be ducking and dodging
When they see me
They stealing my swag
Cause they want to be with QC
Angelina Pitt Jolie
I'm beatin the pot like Muhammad Ali
Feeling like president Lincoln and Malcolm X
They tryna assassinate me
M's nigga (M)
Want them M's nigga (Real Deal M)
Got some niggas in the hood
They got M's nigga
M's nigga (M)
Want them M's nigga (Real Deal M)
Yo rich nigga ain't got no deal
I want them M's nigga

Money the mulla
Medusa maneuver
A Ruger for pussy intruders
I'm smoking on gas like hookah
We fought for the top
Throwing bows like we Luda
I remember the day
When we would jugg at computers
My bitch in Bermuda
These haters be starting up so many rumors
Finessing a country ass nigga in Newnan
I'm sitting the down as you niggas are viewing
QC the label got money on the table
Top floor condo got to use the elevator
Trappers be biting just like it's a gator
Leaving them holes in a nigga like vega
I'm the talk of the talk
Interviews by Fader
Thanking the Lord for my Ends in my Prayers
I'm a young black nigga with all white neighbors
I stay in a Mansion with Forty Acres
M's nigga (M)
Want them M's nigga (Real Deal M)
Got some niggas in the hood
They got M's nigga
M's nigga (M)
Want them M's nigga (Real Deal M)
Yo rich nigga ain't got no deal
I want them M's nigga
`);
ngram.addSentenceToModel(model2, "it just learns from people talking to it");
ngram.addSentenceToModel(model2, "so it does what people do, fuck you");
ngram.addSentenceToModel(model2, "you can tell it's weird, but if you didn't know it was a bot you may not have guessed it");

var sentence2 = ngram.generateSentence(model2, 20); 


sentence2
