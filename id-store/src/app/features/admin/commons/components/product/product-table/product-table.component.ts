import { Component, OnInit, ViewChild, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss']
})
export class ProductTableComponent implements OnChanges {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  displayedColumns: string[] = ['code', 'name', 'description', 'price', 'stock', 'maker', 'actions'];
  dataSource: MatTableDataSource<Product[]> = new MatTableDataSource([]);

  @Input() products: Product[] = [];
  @Output() edit: EventEmitter<string> = new EventEmitter<string>();
  @Output() remove: EventEmitter<string> = new EventEmitter<string>();

  ngOnChanges(changes: SimpleChanges): void {
    if (changes?.products.currentValue) {
      this.dataSource = new MatTableDataSource(changes.products.currentValue);
      this.dataSource.paginator = this.paginator;
    }
  }

}
