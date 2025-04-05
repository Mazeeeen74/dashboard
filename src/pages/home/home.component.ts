import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../app/services/api-service.service';
import { LoadingService } from '../../app/services/loading.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  totalRevenuOptions: any;
  dailyRevenueOptions: any;



  
  /*----------  Constructor  ----------*/
  constructor(
    private apiServie : ApiServiceService ,
    private loading : LoadingService
  )
   { }   


  /*----------  NgOnInit  ----------*/
  ngOnInit(): void {
    this.totalRevenueChart();
    this.dailyRevenueChart();
    this.getproducts();
  }

  /*----------  Total Revenue Chart  ----------*/
  totalRevenueChart() {
    this.totalRevenuOptions = {
      series: [
        {
          name: "Total Revenue",
          data: [32000, 45000, 38000, 50000, 47000, 53000, 60000, 62000, 58000, 67000, 70000, 75000]
        }
      ],
      chart: {
        type: "line",
        height: 350
      },
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],

    }
  }


  /*----------  Daily Revenu Chart  ----------*/
  dailyRevenueChart() {
    this.dailyRevenueOptions = {
      series: [{
        name: 'Revenue',
        data: [1200, 1500, 1100, 1800, 1700, 2000, 2200] 
      }],
      chart: {
        type: 'bar',
        height: 350,
        toolbar: {
          show: false
        }
      },
      title: {
        text: 'Daily Revenue',
        align: 'left',
        style: {
          fontSize: '16px',
          fontWeight: 'bold'
        }
      },
    }


  }

  
  /*----------  Get all products  ----------*/
  getproducts() {
    this.loading.show();
    this.apiServie.getAllProducts().subscribe({
      next: (res) => {
        this.loading.hide();
      } , 
      error: (err) => {
        this.loading.hide();
        console.log("error",err)
      }
    })
  }
  
}
