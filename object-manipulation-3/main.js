console.log('Lodash is loaded:', typeof _ !== 'undefined');

function playersProfile(playerName) {
  var playerHand = {
    playerName: playerName,
    hand: null,
    total: 0
  };
  return playerHand;
}

var allCardRanks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king', 'ace'];
var allCardSuits = ['clubs', 'diamonds', 'hearts', 'spades'];

function createDeck(cardRank, cardValue, cardSuit) {
  var cardObj = {
    cardRank: cardRank,
    cardValue: cardValue,
    cardSuit: cardSuit
  };
  return cardObj;
}

var cardDeck = [];

for (var i = 0; i < allCardSuits.length; i++) {
  for (var e = 0; e < allCardRanks.length; e++) {
    var cardSuit = allCardSuits[i];
    var cardRank = allCardRanks[e];
    var cardValue = allCardRanks[e];
    if (_.isString(allCardRanks[e])) {
      if (allCardRanks[e].length >= 4) {
        cardValue = 10;
      } else {
        cardValue = 11;
      }
    }
    cardDeck.push(createDeck(cardRank, cardValue, cardSuit));
  }
}

var players = [];

function createPlayers(playerNames) {
  for (var i = 0; i < playerNames.length; i++) {
    players.push(playersProfile(playerNames[i]));
  }
}

function playGame(Names, numberOfgames) {
  createPlayers(Names);
  for (var games = 0; games < numberOfgames; games++) {
    _.shuffle(cardDeck);
    var sample = _.sampleSize(cardDeck, 8);
    for (var i = 0; i < players.length; i++) {
      var twoCards = _.pullAt(sample, [0, 1]);
      players[i].hand = twoCards;
      players[i].total = _.sumBy(twoCards, 'cardValue');
    }
    console.log('winnner:', findWinner());
  }
}

function findWinner() {
  var winner = {
    name: null,
    total: 0
  };
  for (var i = 0; i < players.length; i++) {
    if (players[i].total > winner.total) {
      winner.name = players[i].playerName;
      winner.total = players[i].total;
    }
  }
  return winner.name;
}

playGame(['Gon', 'Killua', 'Leorio', 'Kurapika'], 1);
