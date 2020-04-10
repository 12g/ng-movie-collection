import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Descriptable } from 'src/models/Descriptable';
import { Movie } from 'src/models/entities/Movie';
import { DataInMemoryService } from '../data.in-memory.abstract.service';
import { MovieDataService } from '../movie.data.service.interface';

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

export const MOCK_MOVIE_GENRES: Descriptable[] = [
  {
    id: 1,
    name: 'Comedia'
  }, {
    id: 2,
    name: 'Acción'
  }, {
    id: 3,
    name: 'Animación'
  }, {
    id: 4,
    name: 'Drama'
  }, {
    id: 5,
    name: 'Terror'
  }, {
    id: 6,
    name: 'Thriller'
  }
];

export const MOCK_MOVIE_STATUSES: Descriptable[] = [
  {
    id: 'P',
    name: 'Por adquirir'
  }, {
    id: 'A',
    name: 'Adquirida'
  }, {
    id: 'S',
    name: 'Adquirida con subtitulos'
  }, {
    id: 'V',
    name: 'Vista'
  }
];

@Injectable()
export class MovieDataInMemoryService
  extends DataInMemoryService<Movie>
  implements MovieDataService {

  constructor() {
    super();
    this.items = MOCK_MOVIES.map(u => Object.assign(new Movie(), u));
  }

  protected filterItems(filter: any): Set<Movie> {
    let matchingItems = this.items;
    const filterAsNumber = Number(filter);
    if (isNaN(filterAsNumber)) {

      matchingItems = matchingItems.filter(
        mov => (
          mov.title.toUpperCase().includes(filter.toUpperCase()) ||
          (mov.cast && mov.cast.some(p => p.name.toUpperCase().includes(filter.toUpperCase))) ||
          (mov.status?.name && mov.status.name === filter)
        )
      );
    } else {
      matchingItems = matchingItems.filter(
        mov => (
          mov.title.toUpperCase().includes(filter.toUpperCase()) ||
          mov.releaseYear === filterAsNumber
        )
      );
    }

    const uniqueItems = new Set<Movie>();
    for (const item of matchingItems) {
      uniqueItems.add(item);
    }
    return uniqueItems;
  }

  public readGenres(): Observable<Descriptable[]> {
    return of(MOCK_MOVIE_GENRES);
  }
  public readStatuses(): Observable<Descriptable[]> {
    return of(MOCK_MOVIE_STATUSES);
  }
}
