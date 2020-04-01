import { Movie } from 'src/models/entities/Movie';
import { MoviesService } from '../movies.service';

export interface MovieDialogData {
  svc: MoviesService;
  movie: Movie;
}
