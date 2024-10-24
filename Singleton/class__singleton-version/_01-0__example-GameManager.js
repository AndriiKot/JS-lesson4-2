class GameManager {
  constructor() {
    if (!GameManager.instance) {
      this.score = 0;
      GameManager.instance = this;
    }
    return GameManager.instance;
  }

  addScore(points) {
    this.score += points;
  }

  getScore() {
    return this.score;
  }
}

const gameManager1 = new GameManager();
const gameManager2 = new GameManager();

gameManager1.addScore(10);
console.log(gameManager2.getScore()); // 10, обе переменные ссылаются на один и тот же экземпляр

const instance1 = new GameManager();
const instance2 = new GameManager();

console.log(instance1 === instance2); // true
