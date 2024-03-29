import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { AddprojectComponent } from '../Project/addproject.component';
import { ViewProjectComponent } from '../Project/view-project.component';
import { AdduserComponent } from '../User/adduser.component';
import { AddtaskComponent } from './addtask.component';
import { ViewtaskComponent } from './viewtask.component';
import { UpdateComponent } from './update.component';
import { ViewUserComponent } from '../User/view-user.component';
import { UserFilterPipe } from '../user-filter.pipe';
import { ProjectfilterPipe } from '../projectfilter.pipe';

describe('AddtaskComponent', () => {
  let component: AddtaskComponent;
  let fixture: ComponentFixture<AddtaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddprojectComponent, ViewProjectComponent, AdduserComponent, AddtaskComponent, ViewtaskComponent, UpdateComponent, ViewUserComponent, UserFilterPipe, ProjectfilterPipe]
      ,imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
