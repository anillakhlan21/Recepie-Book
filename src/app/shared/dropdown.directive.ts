import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})
export class appDropdownDirective implements OnInit,OnChanges{
    @Input() appDropdown:boolean = false;
    constructor(private elRef:ElementRef){
    }
    
    ngOnInit(): void {
        
    }
    ngOnChanges(changes: SimpleChanges): void {
        let myTag = this.elRef.nativeElement;
        console.log(myTag.classList);
        
        if(!myTag.classList.contains('open') && this.appDropdown){
            // console.log(this.appDropdown);
            myTag.classList.add('open')
        }else if(myTag.classList.contains('open') && this.appDropdown){
            myTag.classList.remove('open');
        }
    }
}