import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-semantics-game-panel',
  templateUrl: './semantics-game-panel.component.html',
  styleUrls: ['./semantics-game-panel.component.scss'],
})
export class SemanticsGamePanelComponent implements OnInit {
  q1 = [];
  q2 = [];
  q3 = [];
  constructor() {
  }

  ngOnInit() {}
}
