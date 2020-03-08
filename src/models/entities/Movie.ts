import { AbstractEntity } from '../AbstractEntity';
import { Documentable } from '../Documentable';
import { Person } from './Person';
import { Image } from '../Image';

export class Movie
  extends AbstractEntity {

  id: number;
  public title: string;
  public releaseYear: number;
  public cast: Partial<Person>[];
  public director: Partial<Person>;
  public images: Image[];
}
