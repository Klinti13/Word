import { words } from "./words"

export function getRandomWord() {
    const randomIndex = Math.floor(Math.random() * words.length)
    return words[randomIndex]
}

export function getFarewellText() {
    const options = [
        `Farewell`,
        `Adios`,
        `R.I.P`,
        `We'll miss you!`,
        `Oh no !`,
        `Gone but not forgotten!`,
        `Off into the sunset! `
    ];

    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}
export function getPositiveText() {
    const positiveOptions = [
        `Keep it going!`,
        `You guessed the word!`,
        `Oh yes!`,
        `Find the next one!`,

    ];


    const randomIndex = Math.floor(Math.random() * positiveOptions.length);
    return positiveOptions[randomIndex];
}