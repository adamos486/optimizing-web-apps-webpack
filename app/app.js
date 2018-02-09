import "!!tee-loader?label=inline-after!babel-loader!tee-loader?label-before!./klondike/scoring.js";
import "./klondike/klondike.js";
import "./klondike/board.js";
import "./klondike/game.js";
import "./cards/cards.js";

angular.module("solitaire", ["klondike", "ngDraggable"]);
