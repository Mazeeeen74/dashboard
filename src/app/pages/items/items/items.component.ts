import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ApiServiceService } from '../../../services/api-service.service';
import { LoadingService } from '../../../services/loading.service';

@Component({
  selector: 'app-items',
  standalone: false,
  templateUrl: './items.component.html',
  styleUrl: './items.component.scss' , 
  encapsulation : ViewEncapsulation.None
})
export class ItemsComponent implements OnInit {
  public products:any;
  public basicSelectedOption = 10 ;


/*----------  NgOnInit  ----------*/
  ngOnInit(): void {
    this.getproducts();

  }


/*----------  Constructor  ----------*/
constructor(
  private apiservice : ApiServiceService, 
  private loading : LoadingService
){ }


/*----------  get all products  ----------*/
getproducts(){
  this.loading.show();
  this.apiservice.getAllProducts().subscribe({ 
    next:(res) => {
      this.products = res 

      this.loading.hide();
      console.log(this.products)
    }, 
    error(err) {
      console.log("Error in fetching",err)
    },
  }
  )
}


}
