//  O Decorator input indica que as vaviáveis que são acopladas a ele 
//  podem ter seu valor alterado de fora do componente
import { Component, OnInit, Input, ContentChild, AfterContentInit } from '@angular/core';
import { NgModel } from '@angular/forms'

@Component({
  selector: 'mt-input',
  templateUrl: './input.component.html'
})
export class InputComponent implements OnInit, AfterContentInit {

  input: any
  @Input() label: string
  @Input() errorMessage: String
  @ContentChild(NgModel) model: NgModel

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    this.input = this.model
    if(this.input === undefined){
      throw new Error('Esse componente precisa ser usado com a diretiva NgModel')
    }
  }
}
