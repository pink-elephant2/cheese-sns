import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopComponent } from './top.component';
import { PhotoCardModule } from 'shared/component';

describe('TopComponent', () => {
  let component: TopComponent;
  let fixture: ComponentFixture<TopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        PhotoCardModule
      ],
      declarations: [TopComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
