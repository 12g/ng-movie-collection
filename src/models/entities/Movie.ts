import { AbstractEntity } from '../AbstractEntity';
import { Person } from './Person';
import { Image } from '../Image';
import { Descriptable } from '../Descriptable';

export class Movie
  extends AbstractEntity {

  id: number;
  public title: string;
  public releaseYear: number;
  public cast: Partial<Person>[];
  public director: Partial<Person>;
  public images: Image[];
  public status: Partial<Descriptable>;
  public datesViewed: Date[] = [];
  public genres: Partial<Descriptable>[];

  public get timesViewed(): number { return this.datesViewed.length; }
}
