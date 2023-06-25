import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Card } from 'src/app/Card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() data: Card[] = [];
  @Input() sectionTitle: string = "";
  constructor() {}

  ngOnInit(): void {}
}
