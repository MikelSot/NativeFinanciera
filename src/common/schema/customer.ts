import {Payload} from '../interfaces/payload.ts';
import {UseFormWatch} from 'react-hook-form';

export const validate = (name: string, watch: UseFormWatch<Payload>) => {
  const errors: Record<string, {field: string; message: string}> = {
    first_name: {
      field: 'first_name',
      message: validateNames(watch('first_name')),
    },
    last_name: {
      field: 'last_name',
      message: validateNames(watch('last_name')),
    },
    dni: {
      field: 'dni',
      message: validateDni(watch('dni')),
    },
    birth_date: {
      field: 'birth_date',
      message: validateBirthDate(watch('birth_date')),
    },
    gender: {
      field: 'gender',
      message: validateGender(watch('gender')),
    },
    city: {
      field: 'city',
      message: validateCity(watch('city')),
    },
  };

  return errors[name];
};

const validateNames = (first_name: string): string => {
  if (!first_name || first_name === '') {
    return 'El nombre es requerido';
  }

  return '';
};

const validateDni = (dni: string): string => {
  if (!dni || dni === '') {
    return 'El DNI es requerido';
  }

  if (!/^\d{8}$/.test(dni)) {
    return 'El DNI debe tener 8 dígitos y ser numero';
  }

  return '';
};

const validateBirthDate = (birth_date: string): string => {
  if (!birth_date || birth_date === '') {
    return 'La fecha de nacimiento es requerida';
  }

  if (!/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/.test(birth_date)) {
    return 'La fecha de nacimiento debe tener el formato dd/mm/yyyy';
  }

  return '';
};

const validateGender = (gender: string): string => {
  if (!gender || gender === '') {
    return 'La fecha de nacimiento es requerida';
  }

  if (!/^[MF]$/.test(gender)) {
    return 'El género debe ser M o F';
  }

  return '';
};

const validateCity = (city: string): string => {
  if (!city || city === '') {
    return 'El id de la ciudad es requerida';
  }

  if (!/^[0-9]+$/.test(city)) {
    return 'La ciudad debe ser un número';
  }

  return '';
};
