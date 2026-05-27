const zodiacSigns = [
    "Aries",
    "Taurus",
    "Gemini",
    "Cancer",
    "Leo",
    "Virgo",
    "Libra",
    "Scorpio",
    "Sagittarius",
    "Capricorn",
    "Aquarius",
    "Pisces"
];

const compliments = [
    "You have a great sense of humor.",
    "Your smile is amazing.",
    "You are smarter than you think.",
    "You bring positive energy everywhere.",
    "You are a kind person.",
    "Your creativity is inspiring.",
    "You make people feel comfortable.",
    "You are doing better than you realize.",
    "You have a strong personality.",
    "Your confidence is attractive.",
    "You light up the room.",
    "You are a great listener.",
    "You have excellent taste.",
    "You are incredibly talented.",
    "You make difficult things look easy.",
    "Your presence makes people happy.",
    "You are unique in the best way.",
    "You have a beautiful mindset.",
    "You are capable of amazing things.",
    "You deserve all the success coming your way."
];

const victimCardCompliments = [
    "You deserve better than the way people treat you.",
    "Your heart is too pure for this world.",
    "People often misunderstand your kindness.",
    "You always give more than you receive.",
    "You care deeply, even when others don’t.",
    "You’ve been strong through so much.",
    "Not everyone appreciates your value, but that’s their loss.",
    "You stay kind despite everything you’ve faced.",
    "Your loyalty is rare.",
    "You deserve the same effort you give others.",
    "You hide your pain with a smile.",
    "You’ve handled situations that would break most people.",
    "Your feelings are deeper than people realize.",
    "You always try to make others happy first.",
    "Even after disappointments, you still have a good heart.",
    "You are emotionally stronger than people think.",
    "You keep going no matter how hard life gets.",
    "People are lucky to have someone like you.",
    "Your patience and understanding are unmatched.",
    "One day people will realize your true worth."
];


const recommendations = [
    "Take breaks, but never quit.",
    "Start learning one new skill today.",
    "Drink more water and sleep on time.",
    "Read books that improve your mindset.",
    "Focus on consistency, not perfection.",
    "Spend less time comparing yourself to others.",
    "Exercise regularly for a healthy body and mind.",
    "Learn from mistakes instead of fearing them.",
    "Keep your circle small and supportive.",
    "Save money before spending it.",
    "Practice coding daily to improve faster.",
    "Stay away from unnecessary negativity.",
    "Believe in long-term growth.",
    "Listen more and speak wisely.",
    "Take care of your mental health.",
    "Invest time in self-improvement.",
    "Avoid procrastination and start now.",
    "Be confident but stay humble.",
    "Set goals and track your progress.",
    "Enjoy the journey, not just the result."
];

const predictions = [
    "A surprising opportunity is coming your way.",
    "You will achieve something you once thought was impossible.",
    "Someone important will appreciate your efforts soon.",
    "A positive change is about to happen in your life.",
    "Your hard work will start showing results.",
    "You may reconnect with an old friend soon.",
    "A new skill will open doors for you.",
    "Happiness will come from unexpected places.",
    "You are closer to success than you realize.",
    "A big decision will lead you toward growth.",
    "Good news is waiting for you.",
    "You will inspire someone without realizing it.",
    "Your confidence will grow stronger this year.",
    "A lucky moment is approaching.",
    "You will soon overcome a challenge that worries you.",
    "An exciting journey or experience awaits you.",
    "Your patience will finally pay off.",
    "A meaningful connection will enter your life.",
    "You are entering a phase of personal growth.",
    "Something you wished for may happen sooner than expected."
];


const form = document.getElementById('astroForm');

form.addEventListener('submit', (e) => {

    e.preventDefault();

    const name =
        document.getElementById('name').value;

    const surname =
        document.getElementById('surname').value;

    const date = parseInt(
        document.getElementById('date').value
    );

    const month = parseInt(
        document.getElementById('month').value
    );

    const year = parseInt(
        document.getElementById('year').value
    );

    const text = `
Hi ${name} ${surname},

Your Zodiac Sign is:
${zodiacSigns[(month - 1) % 12]}

Your Compliment:
${compliments[(date - 1) % 20]}

Victim Card:
${victimCardCompliments[year % 20]}

Recommendation:
${recommendations[(date * month) % 20]}

Prediction:
${predictions[
        (name.length + surname.length) % 20
        ]}
`;

    document.getElementById('result')
        .textContent = text;

});
