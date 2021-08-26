import { registerLocaleData } from '@angular/common';
import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class MetaTagServiceService {

  private readonly appTitle = 'Mrs. Awesome app';
  private readonly appDescription = 'some random text';

  constructor(private readonly meta: Meta, private readonly title: Title) { }

  /**
   * 
   */
  initDefaultMetaInformation() {

    this.title.setTitle(this.appTitle);

    this.meta.addTags([

      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Abraham Lincoln' },

    ]);

  }

  /**
   * 
   */
  updateMetaInfoFormPage(data: any): void {

    this.meta.updateTag(

      { name: 'description', content: data.description }

    );

    this.meta.updateTag(

      { name: 'keywords', content: data.keywords }

    );

  }

  /**
   * 
   */
  setTitle(): void {

  }

  /**
   * 
   */
  setMetaData(data?: any): void {

    const title = data ? `# ${data.id}: ${data.name}` : this.appTitle;
    const description = data ? `Description # ${data.id}: ${data.name}` : this.appDescription;
    const image = data ? data.imageUrl : '';
    const keywords = data ? `${data.id}: ${data.name}, ${data.type[0]}, ${data.type[1]},` : this.appTitle;

    const tags = [

      { name: 'description', content: description },
      { name: 'keywords', content: keywords },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:image', content: image },
      { name: 'twitter:title', content: title },
      { name: 'og:description', content: description },
      { name: 'og:title', content: title },    
      { name: 'og:image', content: image }

    ]

    tags.forEach(tag => this.meta.updateTag(tag));

  }

}
