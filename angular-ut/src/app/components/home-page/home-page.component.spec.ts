import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageComponent } from './home-page.component';
import { BlacklistService } from '../../services/blacklist.service';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;
  let blacklistService: BlacklistService;
  let htmlElement: DebugElement

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomePageComponent);
    blacklistService = TestBed.inject(BlacklistService);
    component = fixture.componentInstance;
    fixture.detectChanges();
    htmlElement = fixture.debugElement;
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show white', () => {

    spyOn(blacklistService, 'isBlackListed');
    component.isBlack = false;

    fixture.detectChanges(); // trigger CD before reading html content
    htmlElement = fixture.debugElement;
    const textElement = htmlElement.query(By.css('#text'));
    expect(textElement.nativeElement.textContent).toEqual('White');
  });


  it('should show black', () => {

    spyOn(blacklistService, 'isBlackListed');
    component.isBlack = true;

    fixture.detectChanges(); // trigger CD before reading html content
    htmlElement = fixture.debugElement;
    const textElement = htmlElement.query(By.css('#text'));
    expect(textElement.nativeElement.textContent).toEqual('Black');
  });

});
