import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  @Input() userName: string;

  constructor() { }

  ngOnInit(): void {
  }

}
