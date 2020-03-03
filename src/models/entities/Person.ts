import { AbstractEntity } from '../AbstractEntity';
import { Image } from '../Image';

export class Person
  extends AbstractEntity {

  public name: string;
  public born?: Date;
  public died?: Date;
  public photo: Image;
  public more: string;
}
