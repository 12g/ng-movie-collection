import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { LBL_TITLE, LBL_AUTHOR, LBL_DATE_CREATED, LBL_ANSWERS_COUNT } from 'src/text/es/labels';
import { DataGridTemplateComponent } from 'src/app/templates/data-grid.template.component';
import { Movie } from 'src/models/entities/Movie';
import { MoviesService } from 'src/app/services/movies/movies.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.less']
})
export class CollectionViewerListComponent
  extends DataGridTemplateComponent<Movie>
  implements OnInit {

    @ViewChild('table', { static: true }) public table: MatTable<Movie>;
    public tableColumns: string[];

    public get labelTitle(): string { return LBL_TITLE; }
    public get labelAuthor(): string { return LBL_AUTHOR; }
    public get labelDateCreated(): string { return LBL_DATE_CREATED; }
    public get labelAnswersCount(): string { return LBL_ANSWERS_COUNT; }

    constructor(
      protected svc: MoviesService
    ) {
      super();
      this.tableColumns = [ 'title', 'author', 'dateCreated', 'answersCount' ];
    }

    ngOnInit() {
    }

    public onClickView(movie: Movie): void {
      this.svc.openMovieDialogFor(movie);
    }

}
