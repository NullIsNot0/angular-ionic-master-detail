import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemService, Item } from '../../providers/item-service';

@Component({
  selector: 'app-page-detail',
  templateUrl: './detail.html',
  styleUrls: ['./detail.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DetailComponent {

  private item: Item;

  constructor(private route: ActivatedRoute, private itemService: ItemService) {

  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter');
    console.log('this.route.snapshot', this.route.snapshot);
    const itemId = this.route.snapshot.paramMap.get('id');
    console.log('itemId', itemId);
    this.item = this.itemService.getItem(itemId);
  }
}
