import { NgModule } from '@angular/core';
import { MovieDataInMemoryService } from './in-memory/movie.data.in-memory.service';
import { UserProfileDataInMemoryService } from './in-memory/user-profile.data.in-memory.service';
import { SERVICE_ALIASES } from './service-aliases';

@NgModule({
  providers: [
    { provide: SERVICE_ALIASES.movies, useClass: MovieDataInMemoryService },
    { provide: SERVICE_ALIASES.users, useClass: UserProfileDataInMemoryService }
  ]
})
export class InternalDataModule { }
