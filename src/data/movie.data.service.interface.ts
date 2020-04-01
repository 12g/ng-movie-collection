import { Observable } from 'rxjs';
import { Descriptable } from 'src/models/Descriptable';
import { Movie } from 'src/models/entities/Movie';
import { DataService } from './data.service.interface';

export interface MovieDataService
  extends DataService<Movie> {

  readGenres(): Observable<Descriptable[]>;
  readStatuses(): Observable<Descriptable[]>;
}
