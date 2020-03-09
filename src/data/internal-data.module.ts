import { NgModule } from '@angular/core';
import { MovieDataInMemoryService } from './in-memory/movie.data.in-memory.service';
import { UserProfileDataInMemoryService } from './in-memory/user-profile.data.in-memory.service';



@NgModule({
  providers: [
    MovieDataInMemoryService,
    UserProfileDataInMemoryService
  ]
})
export class InternalDataModule { }
