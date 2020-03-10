import { Injectable } from '@angular/core';
import { DataInMemoryService } from '../data.in-memory.abstract.service';
import { Movie } from 'src/models/entities/Movie';

export const MOCK_MOVIES: Partial<Movie>[] = [
  {
    id: 1,
    title: 'Akira',
    releaseYear: 1988,
    images: []
  }, {
    id: 2,
    title: 'No te Metas con Zohan',
    releaseYear: 2008,
    images: []
  }, {
    id: 3,
    title: 'Megamente',
    releaseYear: 2010,
    images: []
  }, {
    id: 4,
    title: 'Los Vengadores',
    releaseYear: 2012,
    images: []
  }, {
    id: 5,
    title: 'Monsters Inc.',
    releaseYear: 2001,
    images: []
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
