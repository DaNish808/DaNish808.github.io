"use strict";


var questionnaire = function(yn_qNrs, gen_qNrs) {

    var want = confirm("Feel like trying a get-to-know-the-author quiz?");

    if(want){
        console.log('user is taking the quiz: ');
        alert('Alright, we\'ll start with some true or false.');
        trueFalseQuestions(yn_qNrs);
    }
}

 

var trueFalseQuestions = function(yn_qNrs) {       // yn_qNrs is a 2D array holding arrays of strings with question at 0, true answers at 1, and false answers at 2
    for(var i = 0; i < yn_qNrs.length; i++) {

        console.log(yn_qNrs[i][0]);     // log question

        var invalidAnswer = false;
        do {
            if(invalidAnswer) {
                alert('"yes", \'y\', "no", or \'n\' answers only please (case nonsensitive).');
            }

            var answer = prompt(yn_qNrs[i][0]);
            answer = answer.toLowerCase();
            invalidAnswer = !(answer === 'yes' || answer === 'no' || answer ==='y'|| answer === 'n');  // if the answer is neither yes nor no, it's invalid

        } while(invalidAnswer);
        console.log('user: ' + answer);

        if(answer === 'yes' || answer === 'y') {
            console.log(yn_qNrs[i][1]);
            alert(yn_qNrs[i][1]);
        }
        else {
            console.log(yn_qNrs[i][2]);
            alert(yn_qNrs[i][2]);
        }
    }
}



// Array for a function that can respond to non t/f questions (to be completed)
var gen_qNrs = [ ['', 'if answer', 'if answer response', 'else answer'],
                 [], ];



// questions [i, 0], true response [i, 1], false response [i, 2]
var yn_qNrs = [ [ 'I grew up in Oregon.',                  // question 1
                   'Nope. Hawaii born and raised :D',       // response 1 if answer === true
                   'Mahalo!' ],                             // response 1 if answer === false
                 [ 'I go hiking with my cat.',
                   'His name is Oreo!',
                   'You\'re right! I bring my dog too.' ],
                 [ 'When I was 7 I told my mom I wanted to be an engineer.',
                   'She wishes I did. I told her I\'d become an entomologyst ^^',
                   'Correct!' ],
                 [ 'I practice Muay Thai.',
                   'Not anymore :(',
                   'Correct! OSU doesnt have a Muay Thai group, so it\'s taekwondo now.' ],
                 [ 'Should I modify this quiz to have more than just true/false questions?',
                   'I agree! I\'ll get right on it after finishing up the necessities.',
                   'cool' ]
                 ];


                

questionnaire(yn_qNrs, gen_qNrs);
