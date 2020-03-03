import { Component, OnInit } from '@angular/core';
import { DataGridTemplateComponent } from 'src/app/templates/data-grid.template.component';
import { Movie } from 'src/models/entities/Movie';

@Component({
  selector: 'app-movies-grid',
  templateUrl: './movies-grid.component.html',
  styleUrls: ['./movies-grid.component.less']
})
export class MoviesGridComponent
  extends DataGridTemplateComponent<Movie>
  implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
