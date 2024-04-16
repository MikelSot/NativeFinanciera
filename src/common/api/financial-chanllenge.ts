import FinancialChallenge from '../services/financial-challenge.ts';
import {Customer} from '../interfaces/customer.ts';

const service = new FinancialChallenge();

export const createCustomer = async (payload: Customer) => {
  const response = await service.createCustomer(payload);

  return response.data;
};

export const updatedCustomer = async (payload: Customer) => {
  const response = await service.updatedCustomer(payload);

  return response.data;
};

export const deleteCustomer = async (customerId: number, cityId: number) => {
  const response = await service.deleteCustomer(customerId, cityId);

  return response.data;
};

export const getCustomerById = async (id: number) => {
  const response = await service.getCustomerById(id);

  return response.data;
};

export const getAllCustomers = async () => {
  const response = await service.getAllCustomers();

  return response.data;
};
