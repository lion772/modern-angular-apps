import { TestBed } from '@angular/core/testing';
import { UniqueUsername } from './unique-username';
import { AuthService } from '../auth.service';

describe('UniqueUsername', () => {
  let uniqueUsername: UniqueUsername, authSpy: any;

  beforeEach(() => {
    authSpy = jasmine.createSpyObj('AuthService', ['setUsername']);
    TestBed.configureTestingModule({
      providers: [UniqueUsername, { provider: AuthService, useValue: authSpy }],
    });
    uniqueUsername = TestBed.inject(UniqueUsername);
  });
  it('should create an instance', () => {
    expect(uniqueUsername).toBeTruthy();
  });
});
