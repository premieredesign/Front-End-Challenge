import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Enrollee } from '../interface/enrollee';

@Injectable({
  providedIn: 'root',
})
export class ClientEnrolleeService {
  private baseUrl = 'http://localhost:8080';
  public fetchEnrolleeDate$: Subject<any> = new Subject<any>();

  constructor(private http: HttpClient) {}

  public getEnrollees(): Observable<any> {
    return this.http.get(`${this.baseUrl}/enrollees`);
  }

  public getEnrollee(id): Observable<any> {
    return this.http.get(`${this.baseUrl}/enrollees/${id}`);
  }

  public updateEnrollee(id, payload): Observable<any> {
    return this.http.put(`${this.baseUrl}/enrollees/${id}`, payload);
  }

  public enrolleeImgs = [
    {
      id: 'e8637db3-3549-43ee-8e20-45b8fcb5a370',
      img: 'assets/img/reggie.jpeg',
    },
    {
      id: '8b8b9cf0-652e-4b82-a7ca-e9ed47e69be4',
      img: 'assets/img/hideki.jpeg',
    },
    {
      id: '4c5cca1c-18cd-4216-b4b5-4524d1bd135e',
      img: 'assets/img/chris.jpeg',
    },
    {
      id: '65f43b1d-6790-409f-a5b3-fd7d69fa36a6',
      img: 'assets/img/will.jpeg',
    },
    {
      id: 'bd804bcd-8123-4dee-b21b-a71fcffd7533',
      img: 'assets/img/masahiro.jpeg',
    },
    {
      id: 'ee6d3cab-e875-4220-9a5c-17c7c14353a2',
      img: 'assets/img/roberta.jpeg',
    },
    {
      id: 'a06be89b-78de-459b-a9b7-6f57319fec99',
      img: 'assets/img/ogden.jpeg',
    },
    {
      id: '36653835-fbe0-4c42-a93c-3e561823934f',
      img: 'assets/img/gabe.jpeg',
    },
    {
      id: 'ed9f9e35-9767-4586-a19b-903661aa859d',
      img: 'assets/img/todd.jpeg',
    },
    {
      id: 'f445416d-82c2-4acd-b371-35567d5fd757',
      img: 'assets/img/cliffy.jpeg',
    },
    {
      id: '994cd525-be92-4664-97c9-cb110772383f',
      img: 'assets/img/doug.jpeg',
    },
    {
      id: '2af2cd35-e3bc-47c2-9591-1edb0c1a0c90',
      img: 'assets/img/shigeru.jpeg',
    },
    {
      id: '2caf7c60-98bd-4592-971f-acbfd32dbafa',
      img: 'assets/img/mabel.jpeg',
    },
    {
      id: '0b0c9adc-f148-42ab-a8bf-3183da4bb879',
      img: 'assets/img/peter.jpeg',
    },
    {
      id: 'c478a933-37e0-4502-aafa-67e3fb7b7284',
      img: 'assets/img/kim.jpeg',
    },
    {
      id: '8e85cb7a-7f29-4cb7-9314-7e722e580205',
      img: 'assets/img/gunpei.jpeg',
    },
    {
      id: '89a0cd0525fb4b6ea8f8fc2187f690d0',
      img: 'assets/img/rand.jpeg',
    },
    {
      id: 'fe1636a3-4d23-4068-ba56-551fae06e29c',
      img: 'assets/img/jordan.jpeg',
    },
    {
      id: '90ba3d4b-e3bb-435e-92c1-094534d00c94',
      img: 'assets/img/dona.jpeg',
    },
    {
      id: 'd9bdeab0-735a-4742-9c46-cc4d5db37e0c',
      img: 'assets/img/william.jpeg',
    },
    {
      id: '45ebed1c-3782-4153-8ce1-83a0fda2b5d6',
      img: 'assets/img/james.jpeg',
    },
  ];
}
