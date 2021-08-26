import { Component } from '@angular/core';
import { MetaTagServiceService } from './services/meta-tag-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private readonly metaTagServiceService: MetaTagServiceService) {

  }

  ngOnInit(): void {

    /**
     * initializing the default meta tags
     */
    this.metaTagServiceService.initDefaultMetaInformation();

  }

}
