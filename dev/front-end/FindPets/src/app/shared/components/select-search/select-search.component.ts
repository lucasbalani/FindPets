import { Component, ContentChild, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, TemplateRef, ViewChild } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { MatOption } from '@angular/material/core';
import { MatSelect } from '@angular/material/select';
import { SearchOption } from '../../pipes/search-pipe/search.model';
import { SearchPipe } from '../../pipes/search-pipe/search.pipe';

@Component({
  selector: 'up-select-search',
  templateUrl: './select-search.component.html',
  styleUrls: ['./select-search.component.scss']
})
export class SelectSearchComponent implements OnInit, OnChanges, OnDestroy {

  formControl: FormControl = new FormControl();

  filterControl: FormControl = new FormControl();

  filteredList: SearchOption[] = [];

  subscription!: any;

  justOpened: boolean = true;

  oldValue: any;

  @Input() label!: string;
  @Input() required: boolean = false;
  @Input() showDefaultOption: boolean = true;
  @Input() disableDefaultOption: boolean = true;
  @Input() showNone: boolean = false;
  @Input() defaultOptionText: string = 'Selecione';
  @Input() list: SearchOption[] = [];
  @Input() searchText!: string;
  @Input() control!: AbstractControl | null;
  @Input() multiple: boolean = false;
  @Input() showOkButton: boolean = true;
  @Input() okButtonText: string = 'Ok';
  @Input() flat: boolean = false;

  @Output() selectChange: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild('select', { static: false }) select!: MatSelect;
  @ViewChild('searchInput', { static: false }) searchInput!: ElementRef;

  @ContentChild('optionTemplate') optionTemplate?: TemplateRef<any>;

  pipe!: SearchPipe;

  constructor(
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes['list']) {
      this.list = changes['list'].currentValue;

      if (!changes['list'].firstChange) {
        this.setValue();
      }
    }

    if (changes && changes['control']) {
      if (!changes['control'].firstChange) {
        this.toggleDisabled();

        this.formControl.setValue(this.control?.value);
      }
    }
  }

  ngOnInit(): void {
    this.toggleDisabled();

    this.pipe = new SearchPipe();

    this.setValue();

    if (!this.control)
      throw new Error("Parameter Control is required")

    this.subscription = this.control.valueChanges.subscribe((value: any) => {
      this.formControl.setValue(value);

      if (!this.oldValue)
        this.oldValue = value;
    });

    this.oldValue = this.control.value;
  }

  ngOnDestroy(): void {
    if (this.subscription)
      this.subscription.unsubscribe();
  }

  toggleDisabled() {
    if (this.control && this.control.disabled)
      this.formControl.disable();
    else
      this.formControl.enable();
  }

  onSearchTextChange(value: any): void {
    if (value && !this.multiple) {

      setTimeout(() => {
        let option: MatOption | undefined = this.select.options.get(!this.showDefaultOption && this.disableDefaultOption ? 1 : 2);

        if (option) {
          option.select();
        }
      });
    }
  }

  onSelectionChange(value: any) {
    if (this.multiple && (!value[0] && value.length) && !this.disableDefaultOption) {
      (<any[]>value).splice(0, 1);

      value = this.list.map(x => x.value);
    }

    if (this.control)
      this.control.setValue(value);

    this.selectChange.emit(value);

    this.justOpened = false;

    if (this.multiple && (!value[0] && value.length))
      this.select.close();
  }

  keyPressed(event: KeyboardEvent): void {
    if (event.key == "Escape" && this.oldValue) {
      this.formControl.setValue(this.oldValue);

      this.onSelectionChange(this.oldValue);
    }

    if (event.key != "Escape" && event.key != "Enter" && event.key != "NumpadEnter" && event.key != "ArrowDown" && event.key != "ArrowUp") {
      event.stopPropagation();
    }

    if (!this.justOpened && (event.key == "Enter" || event.key == "NumpadEnter")) {
      setTimeout(() => {
        this.onSelectionChange((<MatOption>this.select.selected)?.value);

        this.select.close();
      });
    }
  }

  selectTriggered(opened: boolean): void {
    if (opened) {
      this.justOpened = true;

      if (this.searchInput) {
        setTimeout(() => {
          this.searchInput.nativeElement.focus();
        });
      }
    }
    else {
      this.searchText = "";
      this.select.focus();
    }
  }

  okButtonClicked(): void {
    this.select.close();
  }

  private setValue(): void {
    if (this.control)
      if (this.formControl.value != this.control.value) {
        this.formControl.setValue(this.control.value ?? '');
      }
  }

  getTitle() {
    if (this.list)
      return this.list.find(x => x.value == this.control?.value)?.text ?? '';

    return '';
  }

  clear(event: Event): void {
    if (this.multiple) {
      event.stopPropagation();

      if (this.control)
        this.control.setValue([]);

      this.formControl.setValue([]);

      this.selectChange.emit([]);
    }
  }

}
