import {Customer} from './customer.ts';
import {City} from './city.ts';

export interface CustomerRelation {
  customer: Customer;
  city: City;
}

export type CustomerRelations = CustomerRelation[];
