import { Component, OnInit } from '@angular/core';
import { BlacklistService } from '../../services/blacklist.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit{

  public isBlack!: boolean;

  constructor(private bkService: BlacklistService){}

  ngOnInit(): void {
      this.isBlack = this.bkService.isBlackListed('kalul');
  }
}
