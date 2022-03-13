import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnChanges,
  OnInit,
  Renderer2,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class appDropdownDirective implements OnInit, OnChanges {
  @Input() appDropdown: boolean;
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {}
  ngOnChanges(changes: SimpleChanges): void {
    if (this.appDropdown) {
      this.renderer.addClass(this.elRef.nativeElement, 'open');
    } else {
      this.renderer.removeClass(this.elRef.nativeElement, 'open');
    }
  }
}
