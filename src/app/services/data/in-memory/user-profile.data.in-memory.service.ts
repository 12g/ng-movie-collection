import { Injectable } from '@angular/core';
import { DataInMemoryService } from '../data.in-memory.abstract.service';
import { UserProfile } from 'src/models/entities/UserProfile';

export const MOCK_USERS: Partial<UserProfile>[] = [
  {
    id: 1,
    name: 'Elias58'
  },
  {
    id: 2,
    name: 'Fulano24'
  },
  {
    id: 3,
    name: 'SalonAniki'
  }
];

@Injectable()
export class UserProfileDataInMemoryService
  extends DataInMemoryService<UserProfile> {

  constructor() {
    super();
    this.items = MOCK_USERS.map(u => Object.assign(new UserProfile(), u));
  }
}
