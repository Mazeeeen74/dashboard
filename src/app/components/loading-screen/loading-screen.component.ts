import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'app-loading-screen',
  standalone: false,
  templateUrl: './loading-screen.component.html',
  styleUrl: './loading-screen.component.scss'
})
export class LoadingScreenComponent implements OnInit{
 public isLoading :boolean = false;
  
  /*----------  Constructor  ----------*/
  constructor(private loadingService: LoadingService) {

  }    
  /*----------  Loading Screen  ----------*/
  ngOnInit(): void {
    this.loadingService.isLoading$.subscribe(isLoading => this.isLoading = isLoading);
    
  }
}
