"use strict";

var questionnaire = function(tNf_qNrs, gen_qNrs) {

    var want = confirm("Feel like trying a get-to-know-the-author quiz?");

    if(want){
        alert('Alright, we\'ll start with some true or false.');
        trueFalseQuestions(tNf_qNrs);
    }
}

 

var trueFalseQuestions = function(tNf_qNrs) {       // tNf_qNrs is a 2D array holding arrays of strings with question at 0, true answers at 1, and false answers at 2
    for(var i = 0; i < tNf_qNrs.length; i++) {

        var invalidAnswer = false;
        do {
            if(invalidAnswer) {
                alert('"true" or "false" only please.');
            }

            var answer = prompt(tNf_qNrs[i][0]);
            invalidAnswer = !(answer === 'true' || answer === 'false');  // if the answer is neither yes nor no, it's invalid

        } while(invalidAnswer);

        if(answer === 'true') {
            alert(tNf_qNrs[i][1]);
        }
        else {
            alert(tNf_qNrs[i][2]);
        }
    }
}


var gen_qNrs = [ ['', 'if answer', 'if answer response', 'else answer'],
                 [], ];

// questions [i, 0], true response [i, 1], false response [i, 2]
var tNf_qNrs = [ [ 'I grew up in Oregon.', 
                   'Nope. Hawaii born and raised :D',
                   'Mahalo!' ],
                 [ 'I go hiking with my cat.',
                   'His name is Oreo!',
                   'You\'re right! I bring my dog too.' ],
                 [ 'When I was 7 I told my mom I wanted to be an engineer',
                   'She wishes I did. I told her I\'d become an entomologyst ^^',
                   'Correct!' ] ];


questionnaire(tNf_qNrs, gen_qNrs);