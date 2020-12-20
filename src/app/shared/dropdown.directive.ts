import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  toggle = false;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('click') toggleMenu(): void {
    this.toggle = !this.toggle;
    const nextEl = this.elRef.nativeElement.nextElementSibling;
    if (this.toggle) {
      this.renderer.addClass(nextEl, 'show');
    } else {
      this.renderer.removeClass(nextEl, 'show');
    }
  }
}
