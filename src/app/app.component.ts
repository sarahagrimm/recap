import { Component } from '@angular/core';

class CarBrand{
  protected make: string;
  constructor(make: string){
    console.log(this.make);
    this.make = make;
  }
}
class  Car extends CarBrand{
  constructor(public make: string, public model: string, public year: string){
    super(make);
  }

  getDetails(){
    return (this.make, this.model, this.year);
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  ford: CarBrand = new CarBrand('Ford');
  dodge: CarBrand = new CarBrand('Dodge');
  honda: Car = new Car ('Honda', 'Civic', 1989);
}
