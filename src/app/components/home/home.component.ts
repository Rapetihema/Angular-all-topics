import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
// interpolation method start
  
  interpolation="this is interpolation start like symbol of {{}}"
// interpolation method end 



//  one way class binding start
    
 devil="devil"

// one way class binding end


// two way class binding start
 required=true;
  rapeti={  
  hema:this.required,
  rapeti:this.required
}           
// two way class binding end



// //  two way style binding

 darling={

  'text-align': 'center',
 'color': 'red',
  'background-color': 'yellow',
'font-size':'30px',
height:'50px',

}
// two way event binding start
  honey=""
 fun(){ this.honey="event binding works  properly"


 }
// two way event binding end


/* this is one way binding interpolation start */
  x={
   laxmi:this.required,
   jagga:this.required,
   }
/* this is one way binding interpolation end */


// ng model two way data binding start 

 siri=""

// ng model two way data binding end



// ng-Switchcase method start
 
 rao="1"

// ng-switchCase  method end



// ng for method start
 z=['a','b','c','d' ]
// ng for method end


//  ngFor object method start 
 b=
 {
  name:"hema",
 "course":"ui developer",
 "place":"chodavaram",}
 
//  ngFor object method start  


// nested ngFor object method start 
 y=[{
   name:"hema",
   age:"23",
   place:"chodavaram",},
  { name:"hema",
   age:"23",
   place:"chodavaram",}



 
]




// nested ngFor object method end

}

