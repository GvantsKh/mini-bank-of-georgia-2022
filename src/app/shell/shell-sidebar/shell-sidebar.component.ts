import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../shared/auth/auth.service';

@Component({
  selector: 'bg-shell-sidebar',
  templateUrl: './shell-sidebar.component.html',
  styleUrls: ['./shell-sidebar.component.scss']
})
export class ShellSidebarComponent implements OnInit {

  name;
  username;
  image;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {

    this.authService.user.subscribe((userData) => {
      this.image = userData.image;
      this.username = userData.username;
      this.name = userData.name;
    });
  }

}
