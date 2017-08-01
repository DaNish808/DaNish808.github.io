"use strict";

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


// questions [i, 0], true response [i, 1], false response [i, 2]
var tNf_qNrs = [ [ 'a', 'g', 'b' ],
             [ 'b', 'good', 'bad' ],
             [ 'c', '', '' ] ];



trueFalseQuestions(tNf_qNrs);   // first 3 out of 5