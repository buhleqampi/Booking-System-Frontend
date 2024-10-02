
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../../services/service/service.service';
import { Service } from '../../interfaces/services';

@Component({
  selector: 'app-service-detail',
  templateUrl: './single-service.component.html',
  styleUrls: ['./single-service.component.css']
})
export class SingleServiceComponent implements OnInit {
  serviceId: string;
  service: any;

  constructor(
    private route: ActivatedRoute,
    private serviceService: ServiceService
  ) {
    this.serviceId = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.fetchService();
  }


  fetchService(): void {
    this.serviceService.getServiceById(this.serviceId).subscribe(
      (data) => {
        console.log(data.service)
        this.service = data.service;
      },
      (error) => {
        console.error('Error fetching service details:', error);
      }
    );
  }
}
