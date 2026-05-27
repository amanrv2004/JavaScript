const quotes = [
  "Success is the sum of small efforts repeated daily.",
  "Dream big and dare to fail.",
  "Stay hungry, stay foolish.",
  "Code is like humor. When you have to explain it, it’s bad.",
  "Push yourself because no one else is going to do it for you.",
  "Every expert was once a beginner.",
  "Do something today that your future self will thank you for.",
  "Consistency beats motivation.",
  "The harder you work, the luckier you get.",
  "Mistakes are proof that you are trying.",
  "Believe you can and you're halfway there.",
  "Small steps every day lead to big results.",
  "Discipline is choosing between what you want now and what you want most.",
  "Your only limit is your mind.",
  "Don’t stop until you’re proud.",
  "Learn something new every single day.",
  "Action is the foundational key to success.",
  "Great things never come from comfort zones.",
  "Focus on progress, not perfection.",
  "Winners are not people who never fail, but people who never quit."
];

const button = document.querySelector('button');
const quote = document.querySelector('h1');
button.addEventListener('click',()=>{
  const index = Math.floor(Math.random()*20);
  quote.textContent = quotes[index];
})


