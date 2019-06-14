import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ReportComponent } from '../report/report.component';



@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {

  constructor(private modalService : NgbModal) { }

  ngOnInit() {
  }

  report()
  {
    const modal = this.modalService.open(ReportComponent);
  }

}
