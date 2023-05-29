// Path: script.js
// Aritficial Incremental Game

var game = {
  // Variables
  money: 0,
  moneyPerClick: 1,
  moneyPerSecond: 1/60,

  targetFPS: 120,

  // Functions
  // This function handles the clicking of the money button
  click: function() {
    this.money += this.moneyPerClick;
    this.updateDisplay();
  },

  // This function updates the money display
  updateDisplay: function() {
    document.getElementById("money").innerHTML = this.money;
  },

  // This function handles passive income
  incrementMoney: function() {
    this.money += this.moneyPerSecond / this.targetFPS;
    this.updateDisplay();
  },

  // This function represents the game loop where you can add various game events
  gameLoop: function() {
    setInterval(() => {
      this.incrementMoney(); // this adds passive income
      // you can add more game events here
    }, 1000 / this.targetFPS);
  }
};
