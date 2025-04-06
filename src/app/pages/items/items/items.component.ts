import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ApiServiceService } from '../../../services/api-service.service';
import { LoadingService } from '../../../services/loading.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { formatDate } from '@angular/common';


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
  public selectedItem : any ;
  public isOpened : boolean = false
  public startDate !: Date 
  public endDate !: Date 


/*----------  NgOnInit  ----------*/
  ngOnInit(): void {
    this.getproducts();

  }


/*----------  Constructor  ----------*/
constructor(
  private apiservice : ApiServiceService, 
  private loading : LoadingService , 
  private modal : NgbModal
){ }


/*----------  Generating a random date  ----------*/
generateRandomDate(start: Date, end: Date): Date {
  const timestamp = start.getTime() + Math.random() * (end.getTime() - start.getTime());
  return new Date(timestamp);
}



/*----------  get all products  ----------*/
getproducts(){
  this.loading.show();
  this.apiservice.getAllProducts().subscribe({ 
    next:(res) => {
      this.products = res 
      const randomDate = this.generateRandomDate(new Date(2023, 0, 1), new Date()) 
      this.products = this.products.map((product: any) => ({
        ...product,
        date: formatDate(randomDate, 'yyyy-MM-dd', 'en-US'),
        
      }));
      
      this.loading.hide();
      console.log(this.products)
    }, 
    error(err) {
      console.log("Error in fetching",err)
    },
  }
  )
}


/*----------  open modal  ----------*/
details(content: any , row : any){
  this.modal.open(content , {ariaLabelledBy: 'modal-basic-title' , size : 'lg' , centered : true});
  this.selectedItem = row 
  this.isOpened = true
  console.log(this.selectedItem)
}


/*----------  Delete Product  ----------*/
deleteProduct(id : number){
  // deleteing product and updating id
  // since delete api is not working
 this.products = this.products.filter((item : any) => item.id !== id).
 map((item : any , index : number) => ({...item , id : index + 1}));
//  In casing deleting from the popup
 if(this.isOpened == true){ 
  this.modal.dismissAll();
  this.isOpened = false
}



}


/*----------  Filter using date  ----------*/
onDateChange() {
  // Filter logic for date range
  if (this.startDate && this.endDate) {
    // Ensure that startDate and endDate are Date objects
    const start = this.startDate;
    const end = this.endDate;

    // Filter products based on the date range
    this.products = this.products.filter((product: any) => {
      var productDate = new Date(product.date); // Assuming product.date is a string

      // Check if the product's date is within the range
      return productDate >= start && productDate <= end;
    });

    // Optionally, log the filtered products to check the result
    console.log(start)
    console.log(end)
    console.log(this.products); // Log the filtered products after the operation
  }
}



}