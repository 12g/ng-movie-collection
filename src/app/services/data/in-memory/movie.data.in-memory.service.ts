import { Injectable } from '@angular/core';
import { DataInMemoryService } from '../data.in-memory.abstract.service';
import { Movie } from 'src/models/entities/Movie';

export const MOCK_MOVIES: Partial<Movie>[] = [
  {
    id: 1,
    title: 'Akira'
  }, {
    id: 2,
    title: 'No te Metas con Zohan'
  }, {
    id: 3,
    title: 'Megamente'
  }, {
    id: 4,
    title: 'Los Vengadores'
  }, {
    id: 5,
    title: 'Monsters Inc.'
  }
];

@Injectable()
export class MovieDataInMemoryService
  extends DataInMemoryService<Movie> {

  constructor() {
    super();
    this.items = MOCK_MOVIES.map(u => Object.assign(new Movie(), u));
  }
}
