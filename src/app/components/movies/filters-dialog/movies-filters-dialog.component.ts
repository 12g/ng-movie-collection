import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { LBL_NAME, LBL_DEVICE_FILTERS, LBL_UPDATE, LBL_NO_FILTER } from 'src/text/es/labels';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-movies-filters-dialog',
  templateUrl: './movies-filters-dialog.component.html',
  styleUrls: ['./movies-filters-dialog.component.less']
})
export class MoviesFiltersDialogComponent
  implements OnInit {

  public filterForm: FormGroup;
  public years$: Observable<number[]>;

  public get keywords() { return this.filterForm.get('keywords') as FormControl; }

  public get labelKeywords(): string { return LBL_NAME; }
  public get labelDeviceFilters(): string { return LBL_DEVICE_FILTERS; }
  public get labelUpdateFilters(): string { return LBL_UPDATE; }
  public get labelOmitFilter(): string { return LBL_NO_FILTER; }


  constructor(
    protected fb: FormBuilder,
  ) {
    this.years$ = of(this.generateYears(1950, 2020));
  }

  ngOnInit(): void {
  }

  protected generateYears(start: number, end: number): number[] {
    const years: number[] = [];

    for (let y = start; y < end; y++) {
      years.push(y);
    }

    return years;
  }

}
