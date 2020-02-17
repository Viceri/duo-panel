import { Component, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'duo-panel',
  template: `
    <div class="duo-panel" [ngClass]="{
      'hover': withHover,
      'shadow': withShadow
    }">
    <div class="left" [ngStyle]="{
        'background-color': leftPanelColor
      }">
      <div class="header" *ngIf="!withoutTitle">
        {{ title?.left }}
      </div>

      <div class="v-spacer-20" *ngIf="!withoutTitle"></div>

      <div class="left-content">
        <ng-content select="[left]"></ng-content>
      </div>
    </div>

    <div class="right" [ngStyle]="{
        'background-color': rightPanelColor
      }">
      <div class="header" *ngIf="!withoutTitle">
        {{ title?.right }}
      </div>

      <div class="v-spacer-20" *ngIf="!withoutTitle"></div>

      <div class="right-content">
        <ng-content select="[right]"></ng-content>
      </div>
    </div>
  </div>
  `,
  styles: [
    `
    .duo-panel {
      position: relative;
      display: flex;
      flex-direction: row;
      overflow-x: hidden;
      overflow-y: hidden;

      padding: 0;

      width: 100%;
      min-height: 300px;

      background: #fff;
      border-radius: 2px;
    }
    .shadow {
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
      transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    }
    .hover:hover {
      box-shadow: 0 3px 5px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    }
    .left {
      z-index: 0;
      width: 40%;
      padding: 25px;
    }
    .left-content {
      display: flex;
      flex-direction: row;
      min-height: 100%;
      min-width: 100%;
    }

    .right {
      z-index: 2;
      width: 60%;
      padding: 25px;
      background-color: #f5f5f8;
    }

    .header {
      font-weight: bold;
      font-style: normal;
      font-size: 16px;
      color: #666;
    }

    .v-spacer-20 {
      display: inline-block;
      width: 100%;
      height: 20px;
    }

    /* Responsividade */

    @media screen and (max-width: 768px) {
      .duo-panel {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 0;

        background: #fff;
        border-radius: 2px;
      }

      .left {
        z-index: 0;
        min-width: 100%;
        min-height: 50%;
        padding: 25px;
      }

      .profile {
        display: flex;
        flex-direction: row;
        height: 100%;
      }

      .right {
        z-index: 2;
        min-width: 100%;
        min-height: 100%;
        padding: 25px;
        background-color: #f5f5f8;
      }
    }
    `
  ]
})
export class DuoPanelComponent {

  @Input() title = {
    left: 'Painel direito',
    right: 'Painel esquerdo'
  };
  @Input() withoutTitle = false;
  @Input() withShadow = false;
  @Input() withHover = false;
  @Input() leftPanelColor = '#ffffff';
  @Input() rightPanelColor = '#f5f5f8';

  constructor() { }

}
