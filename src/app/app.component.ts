import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  posts = [
      {
          title: "Mon premier post",
          content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n" +
          "    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n" +
          "    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n" +
          "    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n" +
          "    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n" +
          "    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          loveIts: 1,
          created_at: new Date()
      },
      {
          title: "Mon deuxième post",
          content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n" +
          "    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n" +
          "    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n" +
          "    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n" +
          "    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n" +
          "    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          loveIts: -1,
          created_at: new Date()
      },
      {
          title: "Encore un post",
          content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n" +
          "    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n" +
          "    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n" +
          "    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n" +
          "    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n" +
          "    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          loveIts: 0,
          created_at: new Date()
      }
  ];
}
