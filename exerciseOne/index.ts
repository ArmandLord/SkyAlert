const creditCard: string = "12345678909";
const creditCardMin: string = "123456";

function hideCard(card: string) {
  if (card.length < 7) {
    return card;
  } else {
      
    let hideNumCard: Array<string> = [];

    for (let i: number = 0; i < card.length; i++) {
      if (i === 0) {
        hideNumCard.push(card[i]);
      } else if (i < card.length - 4) {
        hideNumCard.push("𝘹");
      } else {
        hideNumCard.push(card[i]);
      }
    }
    return hideNumCard.join("");
  }
}

hideCard(creditCard);
