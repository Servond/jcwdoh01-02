interface IPlayer extends IItem {
  name: string;

  hit: (power: number) => void;
  useItem: (item: IItem) => void;
  showStatus: () => void;
}

interface IItem {
  health: number;
  power: number;
}

interface IShooting {
  player1: IPlayer;
  player2: IPlayer;

  getRandomItem: () => IItem;
  start: () => void;
}

class Player implements IPlayer {
  name: string;
  health: number = 100;
  power: number = 10;

  constructor(name: string) {
    this.name = name;
  }

  hit(power: number) {
    this.health -= power;
  }

  useItem(item: IItem) {
    this.health += item.health;
    this.power += item.power;
  }

  showStatus() {
    return `${this.name} (health: ${this.health}, power: ${this.power})\n`;
  }
}

class Shooting implements IShooting {
  player1: IPlayer;
  player2: IPlayer;

  constructor(player1: string, player2: string) {
    this.player1 = new Player(player1);
    this.player2 = new Player(player2);
  }

  getRandomItem() {
    const item: number[] = [0, 10];

    return {
      health: item[Math.round(Math.random())],
      power: item[Math.round(Math.random())],
    };
  }

  #checkHealth(player: IPlayer) {
    return player.health <= 0;
  }

  start() {
    let turn: number = 1;
    let message: string = "";
    while (true) {
      // PLAYER 1
      // SHOW STATUS PLAYER
      message += `\n==== TURN ${turn} ====\n`;
      message += `\n${this.player1.name} TURN\n`;
      message += this.player1.showStatus();

      // USE ITEM
      this.player1.useItem(this.getRandomItem());

      // HIT
      this.player2.hit(this.player1.power);
      message += `${this.player1.name} HIT ${this.player2.name} WITH ${this.player1.power} DAMAGE\n`;

      // CHECK PLAYER HEALTH
      if (this.#checkHealth(this.player1)) {
        message += `${this.player1.name} WIN`;
        return message;
      }

      // PLAYER 2
      // SHOW STATUS PLAYER
      message += `\n${this.player2.name} TURN\n`;
      message += this.player2.showStatus();

      // USE ITEM
      this.player2.useItem(this.getRandomItem());

      // HIT
      this.player1.hit(this.player2.power);
      message += `${this.player2.name} HIT ${this.player1.name} WITH ${this.player2.power} DAMAGE\n`;

      // CHECK PLAYER HEALTH
      if (this.#checkHealth(this.player2)) {
        message += `${this.player2.name} WIN`;
        return message;
      }

      turn++;
    }
  }
}

const shooting = new Shooting("Budi", "John");
console.log(shooting.start());
