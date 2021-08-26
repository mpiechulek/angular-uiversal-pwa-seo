import { Component, OnInit } from '@angular/core';
import { MetaTagServiceService } from '../services/meta-tag-service.service';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html'
})
export class PageOneComponent implements OnInit {

  private readonly data = {
    id: 1,
    name: 'one',
    imageUrl: 'https://vetexpert.eu/sklep/391-home_default/urinovet-cat-dilution-preparat-na-uklad-moczowy-dla-kotow.jpg',
    type: ['apple', 'melon', 'kiwi']
  }
  
  constructor(private readonly metaTagServiceService: MetaTagServiceService) {

  }

  ngOnInit(): void {

    /**
     * initializing the default meta tags
     */
    this.metaTagServiceService.setMetaData(this.data);

  }

}
