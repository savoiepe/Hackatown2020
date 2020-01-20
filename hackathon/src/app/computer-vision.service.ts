import { Injectable } from '@angular/core';
// @ts-ignore
import { PredictionAPIClient } from '@azure/cognitiveservices-customvision-prediction';

@Injectable({
  providedIn: 'root'
})
export class ComputerVisionService {
  predictionKey: string;
  predictionEndpoint: string;
  predictionName: string;
  predictionId: string;
  predictor: PredictionAPIClient;

  // key: 0b6634daa04c4a50b1729a84c21f7194
  // endpoint: https://southcentralus.api.cognitive.microsoft.com/
  // id: ed7680b9-9e10-4e05-82de-9e4fde6b89cf
  // name: Iteration5
  constructor() {
    this.predictionKey = '0b6634daa04c4a50b1729a84c21f7194';
    this.predictionEndpoint = 'https://southcentralus.api.cognitive.microsoft.com/';
    this.predictionName = 'Iteration7';
    this.predictionId = 'ed7680b9-9e10-4e05-82de-9e4fde6b89cf';
    this.predictor = new PredictionAPIClient(this.predictionKey, this.predictionEndpoint);
  }

  // url exemple :  https://media1.ledevoir.com/images_galerie/nwd_721247_562241/image.jpg
  async predict(imageData) {
    let yeetableboiii = await this.predictor.detectImageWithNoStore(this.predictionId, this.predictionName, imageData);
    return yeetableboiii.predictions;
  }
}