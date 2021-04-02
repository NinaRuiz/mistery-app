import { Injectable } from '@angular/core';
import {NotesDatabaseService} from '../notes-database/notes-database.service';
import {ConfigurationModel} from '../../models/configuration-model';
import Dexie, {PromiseExtended} from 'dexie';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationDataService {

  table: Dexie.Table<ConfigurationModel, number>;

  constructor(
    private notesDatabaseService: NotesDatabaseService
  ) {
    this.table = this.notesDatabaseService.table('configuration');
  }

  createConfiguration(configuration: ConfigurationModel): PromiseExtended<number> {
    return this.table.add(configuration);
  }

  getConfiguration(): PromiseExtended<ConfigurationModel[]> {
    return this.table.toArray();
  }
}
