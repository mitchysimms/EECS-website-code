<?php

$Q1answer = $_POST['question1-answer'];
$Q2answer = $_POST['question2-answer'];
$Q3answer = $_POST['question3-answer'];
$Q4answer = $_POST['question4-answer'];
$Q5answer = $_POST['question5-answer'];

$amount_correct = 0;

if($Q1answer == "2,248") {$amount_correct++;}
if($Q2answer == "Phog Allen") {$amount_correct++;}
if($Q3answer == "5") {$amount_correct++;}
if($Q4answer == "Danny Manning") {$amount_correct++;}
if($Q5answer == "10") {$amount_correct++;}

$percentCorrect = ($amount_correct/5)*100;

echo "You answered {$amount_correct} out of 5 <br>";
echo "Your Score: {$percentCorrect}% <br> <br>";

echo"Question 1: How many wins does KU have all time? <br>";
echo"You answered: {$Q1answer} <br>";
echo"Correct Answer: 2,248 <br> <br> <br>";


echo"Question 2: Who is the winningest coach in KU history? <br>";
echo"You answered: {$Q2answer} <br>";
echo"Correct Answer: Phog Allen <br> <br> <br>";


echo"Question 3: How many National Championships have the Jayhawks won? <br>";
echo"You answered: {$Q3answer} <br>";
echo"Correct Answer: 5 <br> <br> <br>";


echo"Question 4: Who has scored the most points in KU history? <br>";
echo"You answered: {$Q4answer} <br>";
echo"Correct Answer: Danny Manning <br> <br> <br>";


echo"Question 5: How many choaches AND players are in the Naismith Memorial Basketball HOF? <br>";
echo"You answered: {$Q5answer} <br>";
echo"Correct Answer: 10 <br> <br> <br>";



 ?>
