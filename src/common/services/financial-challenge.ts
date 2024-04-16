import HttpRequest from './http-request.ts';
import {Response} from './response.ts';
import {Customer} from '../interfaces/customer.ts';
import {GenericResponse} from '../interfaces/htt-response.ts';
import {
  CustomerRelation,
  CustomerRelations,
} from '../interfaces/customerrelation.ts';
import {AxiosError} from 'axios';

class FinancialChallenge extends HttpRequest {
  async createCustomer(customer: Customer) {
    try {
      this.configRequest({endpoint: 'compartamos'});

      const response = await this.post<GenericResponse<CustomerRelation>>(
        customer,
      );

      return new Response(response.data.data);
    } catch (error) {
      return new Response([], error as AxiosError);
    }
  }

  async updatedCustomer(customer: Customer) {
    try {
      this.configRequest({
        endpoint: `compartamos/${customer.id}`,
      });

      return await this.put(customer);
    } catch (error) {
      return new Response({}, error as AxiosError);
    }
  }

  async deleteCustomer(customerId: number, cityId: number) {
    try {
      this.configRequest({
        endpoint: `compartamos/customers/${customerId}/cities/${cityId}`,
      });

      return await this.delete();
    } catch (error) {
      return new Response({}, error as AxiosError);
    }
  }

  async getCustomerById(id: number) {
    try {
      this.configRequest({
        endpoint: `compartamos/customers/${id}`,
      });

      const response = await this.get<GenericResponse<CustomerRelation>>();

      return new Response(response.data.data);
    } catch (error) {
      return new Response([], error as AxiosError);
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
