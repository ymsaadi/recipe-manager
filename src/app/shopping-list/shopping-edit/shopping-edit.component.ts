import {Component, OnInit, Output, EventEmitter, ViewChild, ElementRef} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  onAddItem(): void{
    this.ingredientAdded.emit(new Ingredient(this.nameInputRef.nativeElement.value, this.amountInputRef.nativeElement.value));
  }

}
