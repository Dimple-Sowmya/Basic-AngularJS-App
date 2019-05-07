import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data = {
    title : '<h1>Hello World...!!!!</h1><script>alert("Attack")</script>'
  };
  onLogoClicked() {
    alert('Angular Core Deep Dive');
  }
  onKeyUp(newTitle) {
    this.data.title = newTitle;
  }
}
