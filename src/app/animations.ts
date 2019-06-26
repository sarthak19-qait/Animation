import { trigger, transition, animate, style } from "@angular/animations";
import { leave } from "@angular/core/src/profile/wtf_impl";

export let slide = trigger('slide',[
    transition(':enter',[
        style({transform:'translateX(-10px)'}),
        animate(500)
    ]),
    transition(':leave',[
        animate(500,style({transform: 'translateX(-100%)'}))
    ])
])

export let fade = trigger('fade',[
    transition('void => *',[
      style({opacity:0}),
      animate(2000)
    ]),
    transition('* => void',[
      animate(2000,style({opacity:0}))
    ])
  ])