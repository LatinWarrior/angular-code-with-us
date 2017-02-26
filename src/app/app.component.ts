import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <h1>{{name}}</h1>
  <fieldset>    
    <img [src]="image" />
  </fieldset>
  <label [style.color]="color">Favorite Color:</label>
  <button (click)="clicked()">Toggle Color</button>
  <select (change)="colorChange($event.target.value)">
    <option>red</option>
    <option>blue</option>
    <option>green</option>
  </select>
  <div [hidden]="hideAddress">
    <div>
      <label for="street">Street</label>
      <input type="text" id="street" value="{{street}}" />
    </div>
    <div>
      <label for="city">City</label>
      <input type="text" id="city" value="{{city}}" />
    </div>
    <div>
      <label for="region">Region</label>
      <select (change)="regionChange($event.target.value)">
        <option>East</option>
        <option>North</option>
        <option>South</option>
        <option>West</option>
      </select>
      <p>{{name}} is in the {{region}} region</p>
    </div>
  </div>
  <div>
    <button (click)="addressClick()">{{hideAddress ? 'Show' : 'Hide'}} Address</button>
  </div>
  `,
})
export class AppComponent {
  name = 'Some Guy';
  image = 'favicon.ico';
  color = 'red';
  street = "123 Main Street";
  city = "Austin";
  region = "East";
  hideAddress = false;

  regionChange(region: string) {
    this.region = region;
  }

  addressClick() {
    this.hideAddress = !this.hideAddress;
  }

  clicked() {
    this.color = this.color === 'red' ? 'blue' : 'red';
  }

  colorChange(color: string) {
    this.color = color;
  }
}
