import { Component, OnInit } from '@angular/core';
import { MetaTagServiceService } from '../services/meta-tag-service.service';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html'
})
export class PageTwoComponent implements OnInit {

  private readonly data = {
    id: 2,
    name: 'two',
    imageUrl: 'https://vetexpert.eu/sklep/391-home_default/urinovet-cat-dilution-preparat-na-uklad-moczowy-dla-kotow.jpg',
    type: ['strawberry', 'banana', 'carrot']
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
