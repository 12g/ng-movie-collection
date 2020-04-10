import { Movie } from 'src/models/entities/Movie';
import { MoviesService } from './movies.service';

export abstract class MovieInteractor {

  protected abstract svc: MoviesService;

  public onClickView(movie: Movie): void {
    this.svc.updateMovie(movie).subscribe();
  }

  public onClickDelete(movie: Movie): void {
    this.svc.deleteMovie(movie).subscribe();
  }
}
