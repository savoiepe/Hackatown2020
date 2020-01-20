import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DrawService {
  constructor() { }

  draw(predictions:Object[]){

    let svgElem = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgElem.setAttribute('width', '650');
    svgElem.setAttribute('height', '700');
    let svgNS = svgElem.namespaceURI;

    for (let i=0; i<predictions.length; i++){
      let w = 650 * predictions[i]["boundingBox"]["width"] as unknown;
      let x = 650 * (1 - predictions[i]["boundingBox"]["left"] - predictions[i]["boundingBox"]["width"]) as unknown;
      let y = ((500 * predictions[i]["boundingBox"]["top"]) as number + 120) as unknown;
      let h = 500 * predictions[i]["boundingBox"]["height"] as unknown;
      let tag = predictions[i]["tagName"] as unknown;

      let s1 = x as string;
      let s2 = y as string;
      let s3 = w as string;
      let s4 = h as string;

      let labelX = ((x as number) + (w as number) / 15 * 14) as unknown as string;
      let labelY = ((y as number) + (h as number) / 15 * 1) as unknown as string;
      let labelW = 110 as unknown as string;
      let labelH = 40 as unknown as string;

      let textX = ((labelX as unknown as number) + 15 ) as unknown as string;
      let textY = ((labelY as unknown as number) + 27 ) as unknown as string;

      if (predictions[i]["probability"] >= 0.70){
        let rect = document.createElementNS(svgNS,'rect');
        rect.setAttribute('x', s1);
        rect.setAttribute('y', s2);
        rect.setAttribute('width', s3);
        rect.setAttribute('height', s4);
        rect.setAttribute('fill','transparent');
        rect.setAttribute('stroke','black');
        rect.setAttribute('stroke-width', '4px');

        let label = document.createElementNS(svgNS,'rect');
        label.setAttribute('x', labelX);
        label.setAttribute('y', labelY);
        label.setAttribute('rx', '7');
        label.setAttribute('ry', '7');
        label.setAttribute('width', labelW);
        label.setAttribute('height', labelH);
        label.setAttribute('fill-opacity', '0.5')

        let text = document.createElementNS(svgNS, 'text');
        text.setAttribute('x', textX);
        text.setAttribute('y', textY);
        text.setAttribute('fill', 'white')
        text.setAttribute('font-size', '24')
        text.textContent = tag as string;

        console.log(tag)

        if(tag == "bouteille"){
          rect.setAttribute('stroke', 'blue');
          label.setAttribute('fill', 'blue')
        }else if (tag == "cannette"){
          rect.setAttribute('stroke', 'purple');
          label.setAttribute('fill', 'purple')
        }else if (tag == "chips"){
          rect.setAttribute('stroke', 'red');
          label.setAttribute('fill', 'red')
        }

        svgElem.appendChild(rect);
        svgElem.appendChild(label);
        svgElem.appendChild(text);
      }

    }

    let svg = document.getElementById('svgContainer');
    while(svg.firstChild){
      svg.removeChild(svg.firstChild);
    }
    console.log(svg);
    svg.appendChild(svgElem);

  }

}
