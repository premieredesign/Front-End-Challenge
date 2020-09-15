import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { Enrollee } from '../interface/enrollee';
import { ModalComponent } from '../modal/modal.component';
import { ClientEnrolleeService } from '../service/client-enrollee.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit, OnDestroy {

  public enrollees: any[];
  public enrolleeWithPic: any;
  public showModal: boolean = false;
  public id: string;
  public fetchEnrollee$: Subscription;

  constructor(private enrolleeService: ClientEnrolleeService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getEnrolleeData();
    this.enrolleeService.fetchEnrolleeDate$.subscribe((fetchDataAgain) => {
      if (fetchDataAgain) {
        this.getEnrolleeData();
      }
    })
  }

  ngOnDestroy():void {
    if (this.fetchEnrollee$) {
      this.fetchEnrollee$.unsubscribe();
    }
  }




  buildEnrolleeClass(item, triggerUpdateAnimation?:boolean):any {
    return {
      'enrollee-badge': item.active === true,
      'enrollee-badge-not-active': item.active !== true,
      'enrollee-badge-update': triggerUpdateAnimation === true
    };
  }

  getEnrolleeData(): void {
    this.enrolleeService.getEnrollees()
    .subscribe((data: Enrollee[]) => {
      data.map((item, idx) => {
        const enr = this.enrolleeService.enrolleeImgs.filter((x) => x.id === item.id);
        item['img'] = enr[0]?.img
      })
      this.enrollees = data;
    })
  }

  updateEnrollee(item: Enrollee, idx):void {
    this.id = item.id;
    this.showModal = !this.showModal;
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '500px',
      height: '45%',
      data: {
        id: item.id,
        img: this.enrollees[idx].img
      }
    });
  }
}
