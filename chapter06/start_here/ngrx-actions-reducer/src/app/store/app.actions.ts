import { createAction, props } from "@ngrx/store";
import { IFruit } from "../interfaces/fruit.interface";


export const addItemToBucket = createAction(
    "[bucket] Add Item",
    props<IFruit>()
)

export const removeItemFromBucket = createAction(
    "[bucket] Remove Item",
    props<IFruit>()
)