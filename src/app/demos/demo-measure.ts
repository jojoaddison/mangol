import { Component, OnInit } from '@angular/core';

import * as ol from 'openlayers';

@Component({
  selector: 'mangol-demo-measure',
  template: `
      <mangol [config]="config"></mangol>
    `
})
export class DemoMeasureComponent implements OnInit {

  config: any;

  public ngOnInit(): any {
    this.config = {
      map: {
        renderer: 'canvas',
        target: 'demo-measure',
        view: {
          projection: 'EPSG:900913',
          center: ol.proj.fromLonLat([19.3956393810065, 47.168464955013], 'EPSG:900913'),
          zoom: 7
        },
        layers: [
          {
            type: 'layer',
            name: 'OpenStreetMap layer',
            layer: new ol.layer.Tile({
              source: new ol.source.OSM()
            })
          }
        ]
      },
      sidebar: {
        collapsible: true,
        opened: true,
        toolbar: {
          measure: {
            active: true,
            disabled: false
          }
        }
      }
    };
  }

}
