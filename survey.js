const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questions = [
  "What's your name? Nicknames are also acceptable :) ",
  "What's an activity you like doing? ",
  "What do you listen to while doing that? ",
  "Which meal is your favourite (e.g., dinner, brunch, etc.)? ",
  "What's your favourite thing to eat for that meal? ",
  "Which sport is your absolute favourite? ",
  "What is your superpower? In a few words, tell us what you are amazing at! "
];

const profile = {};

/*
rl.question('What do you think of Node.js? ', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);

  rl.close();
});
*/

const askQuestion = function(index) {
  rl.question(questions[index], (answer) => {
    profile[`answer${index + 1}`] = answer;

    if (index === questions.length - 1) {
      console.log(`Thank you for your valuable feedback`);
      displayProfile();
      rl.close();
    } else {
      askQuestion(index + 1);
    }
  });  
};

const displayProfile = function() {
  const { answer1, answer2, answer3, answer4, answer5, answer6, answer7 } = profile;
  const profileText = `Hi, I'm ${answer1}. I enjoy ${answer2} and listen to ${answer3} while doing it. My favorite meal is ${answer4}, and I love eating ${answer5} for that meal. When I'm not busy, you can find me watching ${answer6} or using my superpower: ${answer7}.`;
  console.log(profileText);
};

askQuestion(0);