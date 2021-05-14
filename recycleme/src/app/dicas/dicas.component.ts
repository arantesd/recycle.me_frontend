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
<<<<<<< HEAD
    window.scroll(0, 0);
=======
    window.scroll(0,0)
>>>>>>> 84aaf6c08184d3003cf9d14615edf638c9f134b5
  }

}
