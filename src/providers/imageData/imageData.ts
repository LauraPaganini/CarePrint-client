import { Injectable } from '@angular/core';

import { ImageData } from '../../models/imageData';
import { Api } from '../api/api';

@Injectable()
export class ImageDataService {

  constructor(public api: Api) { }

  query(params?: any) {
    // return this.api.get('/items', params);
  }


}
