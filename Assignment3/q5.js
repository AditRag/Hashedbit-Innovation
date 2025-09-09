    // Q5) Write a function to replace wrong word with correct word in any sentance.
    // Like this - correctfn(string, wrong, correct)
    // Use string.replace in function.

function correctfn(string, wrong, correct) {
 //It uses a regular expression with the g flag to replace all instances of the wrong word in the sentence.
  const regex = new RegExp(wrong, 'g');
  console.log(regex)
  return string.replace(regex, correct);
}

const sentence = "This sentance has a wrong word in the sentance.";
console.log("Wrong : ",sentence);
const corrected = correctfn(sentence, "sentance", "sentence");
console.log("Correct : " ,corrected); 


