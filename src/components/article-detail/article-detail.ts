import { Component } from '@angular/core';

/*
  Generated class for the ArticleDetail component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'article-detail',
  templateUrl: 'article-detail.html'
})
export class ArticleDetail{

  article: any = {
    content: " Nulla velit justo, eleifend quis felis in, sodales sagittis orci. Pellentesque eget risus tellus. Aenean a efficitur nisl. Curabitur sed porttitor lacus, at aliquet orci. Phasellus at mi vel risus tempus gravida vestibulum at nisl. Cras aliquam ultrices augue in ultricies. In quis suscipit sapien. Maecenas sagittis non ipsum quis pellentesque. Fusce ac nulla varius, efficitur tortor at, pharetra erat. Nam finibus enim a velit efficitur sagittis. Pellentesque facilisis metus dignissim, tristique dui vitae, consectetur orci. In aliquam vestibulum mauris eu auctor. Aliquam viverra, nulla id congue pulvinar, risus libero venenatis mi, non lobortis lacus neque sed dui. Aliquam semper condimentum iaculis. Nulla facilisi. Pellentesque molestie commodo tortor, dignissim iaculis sapien placerat nec. Praesent gravida justo mi, a facilisis sem tincidunt et. Nam dignissim ut libero eget mollis. Morbi pharetra sagittis ligula ut varius. Duis ornare purus in nunc pharetra, at finibus ante lobortis. Duis sollicitudin nibh justo, eu efficitur nisi ultrices non. Donec velit metus, blandit vel ligula a, efficitur viverra ex. Nam vitae gravida dui, quis vehicula nisl. Ut maximus porta dui, eu pulvinar metus scelerisque ac. Cras maximus vitae libero a maximus. Proin volutpat nisi ante, sit amet rutrum turpis vestibulum sed. Mauris ligula nisl, pellentesque sit amet mollis in, ultrices id lorem. Aliquam eu volutpat eros. Sed sed condimentum neque. Fusce malesuada auctor quam ac elementum. Phasellus nec quam metus. Sed iaculis turpis magna, posuere elementum dolor viverra ut.",
    title: "Title",
    author: "Author",
    tag: "Component, Ionic v2, Typescript" 
  }
    

  constructor() {
    console.log('Hello ArticleDetail Component');
  }

}
