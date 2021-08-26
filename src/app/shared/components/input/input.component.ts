import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputComponent),
    multi: true
  }]
})
export class InputComponent implements ControlValueAccessor, OnInit {

  @Input() type: string = 'text';
  @Input() placeholder: string = '';

  private _value: any;

  set value(value: any) {
    this._value = value;
    this.updateValue(value);
  }

  get value(): any {
    return this._value;
  }

  constructor() { }

  ngOnInit(): void {
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

  writeValue(outsideValue: number) {
    this.value = outsideValue;
  }

  updateValue(insideValue: number) {
    this.onChange(insideValue);
    this.onTouched();
  }

  private onChange = (value: any) => {};
  private onTouched = () => {};
}
