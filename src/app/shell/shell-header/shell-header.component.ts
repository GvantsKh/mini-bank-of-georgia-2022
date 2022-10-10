import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../shared/auth/auth.service';

@Component({
  selector: 'bg-shell-header',
  templateUrl: './shell-header.component.html',
  styleUrls: ['./shell-header.component.scss']
})
export class ShellHeaderComponent implements OnInit {

  isActive = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  activated(){
    this.isActive === true ? this.isActive = false : this.isActive = true;
  }

  logout(){
    this.authService.logout();
  }

}
