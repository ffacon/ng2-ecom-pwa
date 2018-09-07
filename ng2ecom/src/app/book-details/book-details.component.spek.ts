/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookDetailsComponent } from './book-details.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { MockRouter, MockActivatedRoute } from '../test/mocks/route';
import { ActivatedRouteStub } from '../test/mocks/activated-route-stub';

import { NewsService } from '../services/news.service';
import { UserService } from '../services/user.service';
import { BooksService } from '../services/books.service';
import { LocalStorageService } from '../services/local-Storage.service';
import { Book } from '../beans/book';
import { BuyZoneComponent } from '../buy-zone/buy-zone.component';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('BookDetailsComponent', () => {
  let component: BookDetailsComponent;
  let fixture: ComponentFixture<BookDetailsComponent>;
  let expectedbook: Book;

  let mockUserService: UserService;
  let mockBooksService: BooksService;
  let activatedRoute: ActivatedRouteStub;

  function createRouterSpy() {
    return jasmine.createSpyObj('Router', ['navigate']);
  }
  function createUserServiceSpy() {
    return jasmine.createSpyObj('UserService', ['login']);
  }
  function createBooksServiceSpy() {
    return jasmine.createSpyObj('BooksService', ['getBooks']);
  }

  beforeEach(async(() => {

    mockUserService = createUserServiceSpy();
    mockBooksService = createBooksServiceSpy();
    activatedRoute = new ActivatedRouteStub({'id': 1});
    const routerSpy = createRouterSpy();

    TestBed.configureTestingModule({
      declarations: [ BookDetailsComponent,
                      BuyZoneComponent ],
      imports: [ FormsModule, ReactiveFormsModule, RouterTestingModule, HttpClientTestingModule, HttpClientModule ],
      providers: [
        UserService,
        BooksService,
        LocalStorageService,
        {provide: UserService, useValue: mockUserService},
        {provide: BooksService, useValue: mockBooksService},
        {provide: ActivatedRoute, useValue: activatedRoute},
        {provide: Router, useValue: routerSpy},
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDetailsComponent);
    component = fixture.componentInstance;
    expectedbook = {
     'id': 1,	'name': 'AngularJS', 'author': 'Brad Green, Shyam Seshadri', 'price': 15.34,
     'description': 'Description...', 'category': 'book', 'isNew': false, 'comments': [	]
    };
    component.book = expectedbook;
  });

  it('should create', () => {
    expect(component).toBeDefined();
    expect(component).toBeTruthy();
  });

  it('should display the proprety of book ', () => {
    expect(component.book.name).toContain('AngularJS');
    expect(component.book.isNew).toBe(false);
    expect(component.book.price).toEqual(15.34);
  })
});


