import HttpRequest from './http-request.ts';
import {Response} from './response.ts';
import {GenericResponse} from '../interfaces/htt-response.ts';
import {
  CustomerRelation,
  CustomerRelations,
} from '../interfaces/customerrelation.ts';
import {AxiosError} from 'axios';
import {PayloadRelation} from '../interfaces/payload.ts';

class FinancialChallenge extends HttpRequest {
  async createCustomer(customer: PayloadRelation) {
    this.configRequest({endpoint: 'compartamos'});

    const response = await this.post<GenericResponse<CustomerRelation>>(
      customer,
    );

    return new Response(response.data.data);
  }

  async updatedCustomer(id: number, customer: PayloadRelation) {
    try {
      this.configRequest({
        endpoint: `compartamos/${id}`,
      });

      return await this.put(customer);
    } catch (error) {
      return new Response({}, error as AxiosError);
    }
  }

  async deleteCustomer(customerId: number, cityId: number) {
    this.configRequest({
      endpoint: `compartamos/customers/${customerId}/cities/${cityId}`,
    });

    return await this.delete();
  }

  async getCustomerById(id: number) {
    try {
      this.configRequest({
        endpoint: `compartamos/customers/${id}`,
      });

      const response = await this.get<GenericResponse<CustomerRelation>>();

      return new Response(response.data.data);
    } catch (error) {
      return new Response({}, error as AxiosError);
    }
  }

  async getAllCustomers() {
    try {
      this.configRequest({endpoint: 'compartamos/customers'});

      const response = await this.get<GenericResponse<CustomerRelations>>();

      return new Response(response.data.data);
    } catch (error) {
      return new Response([], error as AxiosError);
    }
  }
}

export default FinancialChallenge;
