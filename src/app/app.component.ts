import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit , AfterViewInit {
  
  value ='';
  form : FormGroup = new FormGroup({})

  url = 'http://localhost:3000/controls';
 
  formData1 !:any [];
  constructor (private http :HttpClient, private fb: FormBuilder){}
  
  ngAfterViewInit(): void {
      console.log(this.formData1);
  }
  
  ngOnInit(): void {
  this.http.get(this.url).subscribe((formData: any)=>{
     this.formData1 = formData   
    console.log(this.formData1);


    formData.forEach((e:any) => {
      console.log(">>>>>>>>",e);      
      this.form.addControl(e.name, this.fb.control(e.value, Validators.required))
    })
    
  })
    

 console.log(this.form);
}

onSubmit(){
 console.log(this.form.value)
}


}
