import { Observable } from 'rxjs';
import { Descriptable } from 'src/models/Descriptable';
import { Movie } from 'src/models/entities/Movie';

export interface MovieDialogData {
  movie: Movie;
  genreList: Observable<Descriptable[]>;
  statusesList: Observable<Descriptable[]>;
}
