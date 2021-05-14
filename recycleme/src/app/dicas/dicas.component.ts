import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-dicas',
  templateUrl: './dicas.component.html',
  styleUrls: ['./dicas.component.css']
})
export class DicasComponent implements OnInit {

  constructor(
    public auth: AuthService
  ) { }

  ngOnInit(){
    window.scroll(0, 0);
  }

}
