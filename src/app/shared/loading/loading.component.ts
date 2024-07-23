import { Component, inject, OnInit } from '@angular/core';
import { LoadingService } from '../../core/services/loading.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports:[CommonModule],
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {
  loadingService = inject(LoadingService);
  loading$ = this.loadingService.loading$;
  

  ngOnInit(): void {
  }
}
