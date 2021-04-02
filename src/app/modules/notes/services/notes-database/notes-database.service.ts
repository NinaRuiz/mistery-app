import { Injectable } from '@angular/core';
import Dexie from 'dexie';

@Injectable({
  providedIn: 'root'
})
export class NotesDatabaseService extends Dexie {

  constructor() {
    super('NotesDb');
    this.version(10).stores({
      configuration: '++id'
    });
  }
}
