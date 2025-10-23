let firstCard = 6
let secondCard = 9
let sum = firstCard + secondCard

if (sum < 21) {
    console.log('Do you want an additional card')
} else if (sum === 21) {
    console.log('Congrats you have blackjack')
} else {
    console.log('Womp Womp')
}