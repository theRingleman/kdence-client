import { Injectable } from '@angular/core';
import {
  CreateHouseholdDto,
  HouseholdsEntity,
} from '../+state/households.models';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { householdsRoute } from '@kdence-client/core/constants';

@Injectable({
  providedIn: 'any',
})
export class HouseholdsService {
  constructor(private http: HttpClient) {}

  createHousehold(dto: CreateHouseholdDto): Observable<HouseholdsEntity> {
    return this.http.post<HouseholdsEntity>(householdsRoute(), dto);
  }

  getHousehold(id: number): Observable<HouseholdsEntity> {
    return this.http.get<HouseholdsEntity>(`${householdsRoute()}/${id}`);
  }

  getHouseholds(): Observable<HouseholdsEntity> {
    return this.http.get<HouseholdsEntity>(`${householdsRoute()}`);
  }
}
