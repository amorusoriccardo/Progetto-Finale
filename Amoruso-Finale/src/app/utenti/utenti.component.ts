import { Component, OnInit, Input } from '@angular/core';
import{ Utenti} from '../utenti';
@Component({
  selector: 'app-utenti',
  templateUrl: './utenti.component.html',
  styleUrls: ['./utenti.component.css']
})
export class UtentiComponent implements OnInit {
  @Input() lista: Utenti;
  constructor() { }

  ngOnInit() {
  }

}
