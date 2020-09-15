import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatOptionSelectionChange } from '@angular/material/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Enrollee } from '../interface/enrollee';
import { ClientEnrolleeService } from '../service/client-enrollee.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {

  public enrolleeName: string;
  public enrolleeActive: boolean;
  public enrolleeDOB: string;
  public enrollee: Enrollee;
  public showErr: string = '';

  constructor( @Inject(MAT_DIALOG_DATA) public data: any, private enrolleeService: ClientEnrolleeService, private dialogRef: MatDialogRef<any>) { }

  ngOnInit(): void {
    this.enrolleeService.getEnrollee(this.data.id).subscribe((res) => {
      this.enrollee = {...res, img: this.data.img};
      this.enrolleeName = this.enrollee.name
      this.enrolleeActive = this.enrollee.active
    })
  }


  close(): void {
    const updatedEnrollee: Enrollee = {
      id: this.enrollee.id,
      active: this.enrolleeActive as boolean,
      name: this.enrolleeName,
      dateOfBirth: this.enrolleeDOB ? this.enrolleeDOB : this.enrollee.dateOfBirth
    }
    this.enrolleeService.updateEnrollee(updatedEnrollee.id, updatedEnrollee).subscribe((res) => {
      this.enrolleeService.fetchEnrolleeDate$.next(true);
      this.dialogRef.close()
    }, (err) => {
      this.showErr = err.error;
    }
    );   
  }

}
