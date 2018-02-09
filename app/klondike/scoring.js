const numeral = require("numeral");

class Scoring {
  constructor() {
    this.score = 0;
  }

  newGame() {
    this.score = 1000;
  };

  tableauCardTurnedUp() {
    this.score += 5;
  };

  dropped(source, destination) {
    this.score += scoreForMoving(source, destination) || 0;
  };

  wasteRecycled() {
    this.score = Math.max(this.score - 100, 0);
  };

  formattedScore() {
    return numeral(this.score).format('0,0');
  }
}

function scoreForMoving(source, destination) {
  if (destination.name === "TableauPile") {
    if (source.name === "FoundationPile") {
      return -15;
    }
    return 5;
  }
  if (destination.name === "FoundationPile") {
    if (source.name === "TableauPile" || source.name === "WastePile") {
      return 10;
    }
  }
}

console.log(ENV_IS);
if (ENV_IS_DEVELOPMENT) {
  console.log("[scoring] was evaluated");
}

if (module.hot) {
  //module can update itself.
  module.hot.accept(console.log.bind(console));
  const doc = angular.element(document);
  const injector = doc.injector();
  if (injector) {
    const actualService = injector.get("scoring");
    const newScoringService = new Scoring();
    Object.keys(actualService)
      .filter(key => typeof actualService[key] === "function")
      .forEach(key => actualService[key] = newScoringService[key]);
    doc.find("html").scope().$apply();
    console.info("[scoring] Hot Swapped!!");
  }
}

angular.module("klondike.scoring", [])
  .service("scoring", [Scoring]);
