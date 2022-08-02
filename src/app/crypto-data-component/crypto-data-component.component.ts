import {  Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CryptoService } from '../shared/crypto.service';
import { Icrypto } from './crypto-data-component-datasource';


@Component({
  selector: 'app-crypto-data-component',
  templateUrl: './crypto-data-component.component.html',
  styleUrls: ['./crypto-data-component.component.css']
})
export class CryptoDataComponentComponent implements OnInit, OnDestroy {
  Title:string ="Crypto";
  errorMessage:string='';
  sub: Subscription|undefined;

  cryptoList:Icrypto [] =[];
  



  constructor(private cryptoDataService: CryptoService) {}

  ngOnInit():void{
    this.sub = this.cryptoDataService.getCrypto().subscribe({
      next: cryptoList=>{
        this.cryptoList = cryptoList;
      },
      error:err => this.errorMessage = err
    });

  }
  ngOnDestroy():void{
    this.sub?.unsubscribe();
  }


}
