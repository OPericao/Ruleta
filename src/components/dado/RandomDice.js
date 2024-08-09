const randomDice = (dice) => {
    const random = Math.floor(Math.random() * 6) + 1;
    rollDice(random, dice);
};

const rollDice = (random, dice) => {
    dice.style.animation = 'dice2-rolling 4s';

    setTimeout(() => {
        switch (random) {
            case 1:
                dice.style.transform = 'rotateX(0deg) rotateY(0deg)';
                break;
            case 6:
                dice.style.transform = 'rotateX(180deg) rotateY(0deg)';
                break;
            case 2:
                dice.style.transform = 'rotateX(-90deg) rotateY(0deg)';
                break;
            case 5:
                dice.style.transform = 'rotateX(90deg) rotateY(0deg)';
                break;
            case 3:
                dice.style.transform = 'rotateX(0deg) rotateY(90deg)';
                break;
            case 4:
                dice.style.transform = 'rotateX(0deg) rotateY(-90deg)';
                break;
            default:
                break;
        }
        dice.style.animation = 'none';
    }, 4050);
};

const addDiceRollEvent = (dice, rollBtn) => {
    rollBtn.addEventListener('click', () => randomDice(dice));
};

export { addDiceRollEvent };
