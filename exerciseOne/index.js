var creditCard = "12345678909";
var creditCardMin = "123456";
function hideCard(card) {
    if (card.length < 7) {
        return card;
    }
    else {
        var hideNumCard = [];
        for (var i = 0; i < card.length; i++) {
            if (i === 0) {
                hideNumCard.push(card[i]);
            }
            else if (i < card.length - 4) {
                hideNumCard.push("𝘹");
            }
            else {
                hideNumCard.push(card[i]);
            }
        }
        console.log(hideNumCard.join(""))
        return hideNumCard.join("");
    }
}
hideCard(creditCard);

module.exports = hideCard
