import {Button, Text, View} from 'react-native';
import {useForm} from 'react-hook-form';
import {Payload} from '../../interfaces/payload.ts';
import {useState} from 'react';
import Input from '../molecule/Input.tsx';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import {createCustomer} from '../../api/financial-chanllenge.ts';
import {ErrorResponse} from '../../interfaces/error.ts';
import {formatDateToBack} from '../../helps/date.ts';

const Form = () => {
  const [message, setMessage] = useState('');

  const {control, handleSubmit, watch, reset} = useForm<Payload>();

  const queryClient = useQueryClient();

  const {mutate} = useMutation({
    mutationFn: async (data: Payload) => await createCustomer(data),
    onSuccess: async () => {
      await queryClient.refetchQueries({queryKey: ['customers']});
      reset();
      setMessage('Usuario creado correctamente');
    },
    onError: err => {
      const errors = err as unknown as ErrorResponse;
      setMessage(errors?.response?.data?.errors[0]?.message || '');
    },
  });

  const onSubmit = (data: Payload) => {
    mutate({...data, birth_date: formatDateToBack(data.birth_date)});
  };

  return (
    <View>
      <Input
        name="first_name"
        placeholder="Nombre"
        watch={watch}
        control={control}
      />

      <Input
        name="last_name"
        placeholder="Apellido"
        watch={watch}
        control={control}
      />

      <Input name="dni" placeholder="DNI" watch={watch} control={control} />

      <Input
        name="birth_date"
        placeholder="Fecha de nacimiento"
        watch={watch}
        control={control}
      />

      <Input name="gender" placeholder="Sexo" watch={watch} control={control} />

      <Input
        name="city"
        placeholder="Id de la ciudad"
        watch={watch}
        control={control}
      />

      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
      {message && message !== '' && (
        <Text style={{color: 'red', textAlign: 'center', fontWeight: 'bold'}}>
          {message}
        </Text>
      )}
    </View>
  );
};
export default Form;
