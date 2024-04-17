import FinancialChallenge from '../services/financial-challenge.ts';
import {Payload, PayloadRelation} from '../interfaces/payload.ts';

const service = new FinancialChallenge();

export const createCustomer = async (payload: Payload) => {
  const data: PayloadRelation = {
    customer: payload,
    city: {
      id: parseInt(payload.city),
    },
  };

  const response = await service.createCustomer(data);

  return response.data;
};

export const updatedCustomer = async (id: number, payload: Payload) => {
  const data: PayloadRelation = {
    customer: payload,
    city: {
      id: parseInt(payload.city),
    },
  };

  const response = await service.updatedCustomer(id, data);

  return response.data;
};

export const deleteCustomer = async (customerId: number, cityId: number) => {
  console.log('customerId, cityId');
  console.log(customerId, cityId)

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
