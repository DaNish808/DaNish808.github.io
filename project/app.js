"use strict";


quiz();


function quiz(){
    var want = confirm("Feel like trying a get-to-know-the-author quiz?");

    // QUIZ
    if(want){
        var score = 0;
        console.log('user is taking the quiz: ');
        alert('Alright, we\'ll start with some yes or no questions.');    
        score = ynQs();
        score = numGuess(score);
        score = jobs(score);

        alert("You got " + score + " out of 7 questions right. Thanks for playing!");
        console.log("Final score: " + score + "/7");
        document.getElementById('ts').innerHTML = (score);
    }
}

function ynQs(){
    var score =0;
    // Q's and A's for Y/N quiz
    // questions [i, 0], true response [i, 1], false response [i, 2]
    var yn_qNrs = [ [ 'I\'m 25 years old',                   // question 1
                    'That\'s right!',                         // response 1 if answer === yes
                    'I am!',                                 // response 1 if answer === no
                    'true' ],                                // is the yes answer correct?
                    [ 'I go hiking with my cat.',
                    'His name is Oreo!',
                    'You\'re right! I bring my dog too.',
                    'true' ],
                    [ 'When I was 7 I told my mom I wanted to be an engineer.',
                    'She wishes I did. I told her I\'d become an entomologyst ^^',
                    'Correct!',
                    'false' ],
                    [ 'I practice Muay Thai.',
                    'Not anymore :(',
                    'You\'re right! It\'s Tae Kwon Do now.',
                    'false'],
                    [ 'Ready for some more interesting questions?',
                    'Let\'s go!',
                    'Too bad! ;D',
                    'true' ] ];    

    // Y/N QUIZ

    for(var i = 0; i < yn_qNrs.length; i++) {

        console.log(yn_qNrs[i][0]);     // log question
        document.getElementById('tq' + i).innerHTML = (yn_qNrs[i][0]);

        var invalidAnswer = false;
        do { //finding valid answer
            if(invalidAnswer) {
                alert('"yes", \'y\', "no", or \'n\' answers only please (case nonsensitive).');
            }

            var answer = prompt(yn_qNrs[i][0]).toLowerCase();
            invalidAnswer = !(answer === 'yes' || answer === 'no' || answer ==='y'|| answer === 'n');  // if the answer is neither yes nor no, it's invalid

        } while(invalidAnswer);
        console.log('user: ' + answer);
        document.getElementById('ta' + i).innerHTML = (answer);

        if(answer === 'yes' || answer === 'y') {
            console.log(yn_qNrs[i][1]);
            document.getElementById('tr' + i).innerHTML = (yn_qNrs[i][1]);
            alert(yn_qNrs[i][1]);
            if(yn_qNrs[i][3] === "true") {
                score++;
            }
        }
        else {
            console.log(yn_qNrs[i][2]);
            document.getElementById('tr' + i).innerHTML = (yn_qNrs[i][2]);
            alert(yn_qNrs[i][2]);
            if(yn_qNrs[i][3] !== "true") {
                score++;
            }
        }
        document.getElementById('ts' + i).innerHTML = score;
        
    }   // Y/N QUIZ END
    return score;
}


function numGuess (score){
    // NUMBER GUESSING GAME
    alert('Welcome to the number guessing game!');
    var datNum = Math.floor((Math.random() * 25) + 1);
    console.log("Number guessing game:")
    document.getElementById('tq' + 5).innerHTML = "Guess the number [1 - my_age]";
    for(var i = 4; i > 0; i--) {

        var more = " more";
        if(i === 4) { more = ''; }
        alert('You have ' + i + more + " guesses.");

        var numGuess = parseFloat(prompt('I\'m thinking of a whole number from 1 to my age...'));
        document.getElementById('ta' + 5).innerHTML = (document.getElementById('ta' + 5).innerHTML + numGuess + "  ");
        if((numGuess %1 !== 0) || !(numGuess >= 1 && numGuess <= 25)) {
            alert('Not a valid guess.');
            console.log('in numGuesser: !numGuess.isInteger = ' + (numGuess %1 !== 0));
            console.log('in numGuesser: (numGuess < 1 && numGuess > 25) = ' + (numGuess <= 1 && numGuess >= 25));
            i++;
            continue;
        } 
        else if(numGuess === datNum) {
            alert('You did it!  ' + datNum + ' was the correct number.');
            document.getElementById('tr' + 5).innerHTML = 'You did it!  ' + datNum +  ' was the correct number.';
            score++;
            document.getElementById('ts' + 5).innerHTML = score;
            return score;
        }
        else if(numGuess > datNum) {
            alert('Too high.');
        }
        else if(numGuess < datNum) {
            alert('Too low.');
        }
        if(i === 1) {
        alert("The number was " + datNum + ".");    
        document.getElementById('tr' + 5).innerHTML = "The number was " + datNum + ".";
        }

        document.getElementById('ts' + 5).innerHTML = score;
    } // END OF NUM GUESSING GAME

    return score;
}

// MULTIPLE ANSWER QUESTION
function jobs(score){
    var trueAnswers = [ [ 'entomologyst', 'park ranger', 'soldier',
                        'engineer','scientist', 'physical therapist',
                        'data scientist', 'web designer' ],
                        [ 'seven.', 'in middle school.', 'in high school.',
                        'in college.', 'in college.', 'in college.'] ];
                        
    var answerListString = '';
    for(var i = 0; i < trueAnswers[0].length; i++) {
        if(i === trueAnswers[0].length - 1) {
            answerListString = answerListString + 'and ' + trueAnswers[0][i] + '.';
        }
        else {
            answerListString = answerListString + trueAnswers[0][i] + ', ';
        }
    }

    for(var i = 6; i > 0; i--) {

        if(i === 6) {
            alert('You have reached the Final Question');
            console.log('Final Question:  Can you name one job I\'ve wanted to be? (eg. musician, architect, lawyer, etc.)');
            document.getElementById('tq' + 6).innerHTML = 'Can you name one job I\'ve wanted to be? (eg. musician, architect, lawyer, etc.)';
        }
        var guess = prompt('Can you name one job I\'ve wanted to be? (eg. musician, architect, lawyer, etc.)').toLowerCase();
        console.log('user guess (' + i + '): ' + guess);
        document.getElementById('ta' + 6).innerHTML = (document.getElementById('ta' + 6).innerHTML + guess + '   ');

        if(i === 1) {
            alert('Good try but time\'s up! I\'ve wanted to be an ' + answerListString );
            console.log('Answers: ' + answerListString);
            break;
        }
        else if(trueAnswers[0].indexOf(guess) === -1) {
            alert('Good guess, but try again. You have ' + (i - 1) + ' attempts left.');
        }
        else if (trueAnswers[0].indexOf(guess) < 6){
            alert("You got it! I wanted to be a " + guess + " when i was " + trueAnswers[1][trueAnswers[0].indexOf(guess)]);
            console.log('User guessed correctly!');
            document.getElementById('tr' + 6).innerHTML = 'User guessed correctly!';
            score++;
            document.getElementById('ts' + 6).innerHTML = score;
            return score;
        }
        else {
            alert("You got it! I want to be a " + guess);
            console.log('User guessed correctly!');
            document.getElementById('tr' + 6).innerHTML = 'User guessed correctly!';
            score++;
            document.getElementById('ts' + 6).innerHTML = score;
            return score;
        }
        
    } // END OF MULT ANSWER QUESTION
    return score;
}





/* TEST FUNCTIONS */

//addPElement();

function addPElement() {
    var main = document.getElementsByTagName("main");
    var pElem = document.createElement("p");
    var pText = document.createTextNode("hello world!@#$");
    pElem.appendChild(pText);
    main.appendChild(pElem);
}