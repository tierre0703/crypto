import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DetailComponent } from '../detail.component';
import { CryptoService } from '../shared/service/crypto.service';
import { cryptoInfo } from './cryptoinfo';

@Component({
  selector: 'app-crypto-info',
  templateUrl: './crypto-info.component.html',
  styleUrls: ['./crypto-info.component.css'],
})
export class CryptoInfoComponent implements OnInit {
  data!: cryptoInfo;
  sub!: Subscription;
  id = this.idLog.id;

  constructor(
    private cryptoService: CryptoService,
    private idLog: DetailComponent
  ) {}

  ngOnInit(): void {
    this.sub = this.cryptoService
      .getThisCrypto(String(this.id))
      .subscribe((stream) => {
        this.data = stream;
      });
  }
}
