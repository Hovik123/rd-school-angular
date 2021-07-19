abstract class Player {
  abstract life: number;
  abstract name: string;
}

export class Ranger extends Player {
  private intervalId: any = null;
  private _life: number = 100;

  constructor(public name: string, public age: number) {
    super();
    console.info(`Ranger with name:${name} and age ${age} was created`);
  }

  set life(life: number) {
    if (life < this.life) {
      this._life = life;
    } else {
      this._life -= 1;
    }
    if (life < 0) {
      this._life = 0;
    }
    console.info(`life for ranger ${this.name} equal to ${this._life}`);
  }

  get life() {
    return this._life;
  }

  fight() {
    this.intervalId = setInterval(() => {
      this.life = Math.floor(Math.random() * 100) + 1;
    }, 1000);
  }

  finish() {
    console.log(`Ranger ${this.name} finished his fighting life equal to ${this.life}`);
    clearInterval(this.intervalId);
  }
}
