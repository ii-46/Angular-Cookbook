import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { BucketService } from 'src/app/services/bucket.service';
import { Fruit } from '../../../constants/fruit';
import { IFruit } from '../../../interfaces/fruit.interface';
import { ANIMATIONS } from '../../../constants/animations';
import { addItemToBucket, removeItemFromBucket } from 'src/app/store/app.actions';
import { AppState } from 'src/app/store/app.reducer';

@Component({
  selector: 'app-bucket',
  templateUrl: './bucket.component.html',
  styleUrls: ['./bucket.component.scss'],
  animations: [ANIMATIONS.LIST_ANIMATION],
})
export class BucketComponent implements OnInit {
  bucket$: Observable<IFruit[]>;
  selectedFruit: Fruit = '' as null;
  fruits: string[] = Object.values(Fruit);
  constructor(private bucketService: BucketService, private store: Store<AppStore>) {}

  ngOnInit(): void {
    this.bucket$ = this.bucketService.bucket$;
    this.bucketService.loadItems();
  }

  addSelectedFruitToBucket() {
    const newItem: IFruit = {
      id: Date.now(),
      name: this.selectedFruit,
    };
    this.bucketService.addItem(newItem);
  }
  deleteFromBucket(fruit: IFruit) {
    this.bucketService.removeItem(fruit);
  }
}
