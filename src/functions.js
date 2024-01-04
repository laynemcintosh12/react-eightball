function randomAns (Answers) {
    const randomIdx = Math.floor(Math.random() * Answers.length);
    return Answers[randomIdx];
}


export {randomAns};