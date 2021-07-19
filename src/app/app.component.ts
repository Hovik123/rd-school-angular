import {Component} from '@angular/core';
import {Ranger} from "./rangers.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'basic-app';
  finish = false;
  start = false;
  rangers: Ranger[] = [];

  setupRanger(name: string, age: number) {
    this.rangers.push(new Ranger(name, age))
  }

  onFightStart() {
    this.start = true;
    this.rangers.forEach((ranger) => {
      ranger.fight();
    });
  }

  onFinish() {
    setTimeout(() => {
      this.start = false;
      this.finish = false;
      this.rangers.forEach((ranger) => {
        ranger.finish();
      });
      const sortRangers = (a: Ranger, b: Ranger) => b.life - a.life;
      let winner: Ranger = this.rangers.sort(sortRangers)[0];
      console.info(`winner is ${winner.name}`);
    }, 3000);
  }
}
