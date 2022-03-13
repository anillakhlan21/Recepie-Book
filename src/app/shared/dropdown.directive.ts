import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})
export class appDropdownDirective implements OnInit{
    constructor(private elRef:ElementRef){
    }
    ngOnInit(): void {
        // this.elRef.nativeElement.class
    }
}