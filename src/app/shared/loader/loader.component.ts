import { Component, OnInit } from '@angular/core';
import {LoaderService} from './loader.service';

@Component({
  selector: 'bg-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  constructor(public loaderService: LoaderService) { }

  ngOnInit(): void {
  }

}
