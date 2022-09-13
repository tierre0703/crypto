import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Observable, skipUntil, Subscription, take } from 'rxjs';
import { CryptoService } from '../shared/service/crypto.service';
import { Icrypto } from './crypto-data-component-datasource';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { User } from '../shared/user';
import { AuthService } from '../shared/service/auth.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'jquery';

@Component({
  selector: 'app-crypto-data-component',
  templateUrl: './crypto-data-component.component.html',
  styleUrls: ['./crypto-data-component.component.css'],
})
export class CryptoDataComponentComponent implements OnInit, OnDestroy {
  Title = 'Crypto';
  errorMessage = '';
  sub: Subscription | undefined;
  userSub: Subscription | undefined;
  subLog: Subscription | undefined;

  displayedColumns: string[] = [
    'market_cap_rank',
    'image',
    'name',
    'current_price',
    'high_24h',
    'low_24h',
    'total_volume',
    'favorite',
  ];
  dataSource!: MatTableDataSource<Icrypto>;
  id = '';
  watchList: string[] = [];
  
  constructor(
    private cryptoDataService: CryptoService,
    private router: Router,
    public auth: AuthService
  ) {}

  @ViewChild(MatSort)
  sort!: MatSort;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngOnInit(): void {
    // if not logged In, redirect to login page
    // add subscription
    this.sub = this.cryptoDataService.getCrypto().subscribe((stream) => {
      this.dataSource = new MatTableDataSource(stream);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });

    this.userSub = this.auth.userInfo$.subscribe((user) =>
    {
      this.watchList = user?.watch_list || [];
    })
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
    this.userSub?.unsubscribe();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getCrypto(): void {
    this.router
      .navigateByUrl('/', { skipLocationChange: true })
      .then(() => this.router.navigate(['/crypto/' + 'bitcoin']));
  }

  addWatch(id: string) {
    if(this.watchList.indexOf(id) === -1){
      this.watchList.push(id);
    }
    // set User state in auth service
  }

  removeWatch(id: string) {
    const index = this.watchList.indexOf(id);
    if(index > -1){
      this.watchList.splice(index, 1);
    }
    // set User state in auth service
  }
}
