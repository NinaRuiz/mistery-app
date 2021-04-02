import { TestBed } from '@angular/core/testing';

import { NotesDatabaseService } from './notes-database.service';

describe('NotesDatabaseService', () => {
  let service: NotesDatabaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotesDatabaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
