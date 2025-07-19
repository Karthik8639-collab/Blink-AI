
// AI Message Engine (Phase 2 MVP)

const messages = {
    youth: [
        "Blink for me, cutie! 😉 Your eyes are begging for attention.",
        "A quick blink and I’ll send you a virtual wink. 😏",
        "Don’t let me fall for your unblinking stare – blink those pretty eyes!",
        "Hey superstar, your eyes need a coffee break – blink it out. ☕😉"
    ],
    adult: [
        "Healthy eyes are happy eyes – blink to refresh your focus.",
        "Your eyes are working hard. Show them some love with a blink.",
        "A little blink can boost your energy. Try it now!",
        "Blinking keeps your eyes as sharp as your mind."
    ],
    generic: [
        "Don’t forget to blink – your eyes will thank you!",
        "A blink a day keeps the dryness away. 😉",
        "Your eyes are your window to the world. Keep them happy!",
        "Blinks are like hugs for your eyes – give them a few now!"
    ]
};

function getAIMessage(ageGroup = "generic") {
    const category = messages[ageGroup] || messages.generic;
    return category[Math.floor(Math.random() * category.length)];
}

export { getAIMessage };
