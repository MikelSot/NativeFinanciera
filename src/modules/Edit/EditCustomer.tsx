import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {Params} from '../../../App.tsx';
import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import {
  deleteCustomer,
  getCustomerById,
  updatedCustomer,
} from '../../common/api/financial-chanllenge.ts';
import {Button, Text, View} from 'react-native';
import {
  ActivityIndicator,
  MD2Colors,
  Button as ButtonPressable,
} from 'react-native-paper';
import Input from '../../common/components/molecule/Input.tsx';
import {useState} from 'react';
import {useForm} from 'react-hook-form';
import {Payload} from '../../common/interfaces/payload.ts';
import {ErrorResponse} from '../../common/interfaces/error.ts';
import {formatDateToBack, formatDateToFront} from '../../common/helps/date.ts';
import {CustomerRelation} from '../../common/interfaces/customerrelation.ts';

const EditCustomer = () => {
  const [message, setMessage] = useState('');

  const params = useRoute<RouteProp<Params, 'Actualizar'>>().params;

  const navigation = useNavigation<NavigationProp<Params>>();

  console.log(params.id);

  const {
    data: customerRelation = {} as CustomerRelation,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['customers', params.id],
    queryFn: () => getCustomerById(params.id),
  });

  const {control, handleSubmit, watch} = useForm<Payload>();

  const queryClient = useQueryClient();

  const {mutate} = useMutation({
    mutationFn: async (data: Payload) => await updatedCustomer(params.id, data),
    onSuccess: async () => {
      await queryClient.refetchQueries({queryKey: ['customers']});
      setMessage('Actualizo correctamente');
    },
    onError: err => {
      const errors = err as unknown as ErrorResponse;
      setMessage(errors?.response?.data?.errors[0]?.message || '');
    },
  });

  const {mutate: mutateDelete} = useMutation({
    mutationFn: () => deleteCustomer(params.id, customerRelation?.city?.id),
    onSuccess: async () => {
      await queryClient.refetchQueries({queryKey: ['customers']});

      navigation.navigate('Home');
    },
    onError: () => {
      setMessage('Upps ocuurio un erro inesperado');
    },
  });

  const onSubmit = (data: Payload) => {
    mutate({...data, birth_date: formatDateToBack(data.birth_date)});
  };

  const onDelete = () => {
    mutateDelete();
  };

  if (isLoading) {
    return (
      <View>
        <ActivityIndicator animating={true} color={MD2Colors.red800} />
      </View>
    );
  }

  if (!customerRelation || isError) {
    return (
      <View>
        <Text>No hay clientes</Text>
      </View>
    );
  }

  const {customer, city} = customerRelation as CustomerRelation;

  return (
    <View>
      <View>
        <Input
          name="first_name"
          placeholder="Nombre"
          watch={watch}
          control={control}
          defaultValue={customer.first_name}
        />

        <Input
          name="last_name"
          placeholder="Apellido"
          watch={watch}
          control={control}
          defaultValue={customer.last_name}
        />

        <Input
          name="dni"
          placeholder="DNI"
          watch={watch}
          control={control}
          defaultValue={customer.dni}
        />

        <Input
          name="birth_date"
          placeholder="Fecha de nacimiento"
          watch={watch}
          control={control}
          defaultValue={formatDateToFront(customer.birth_date)}
        />

        <Input
          name="gender"
          placeholder="Sexo"
          watch={watch}
          control={control}
          defaultValue={customer.gender}
        />

        <Input
          name="city"
          placeholder="Id de la ciudad"
          watch={watch}
          control={control}
          defaultValue={city.id.toString()}
        />

        <Button title="Submit" onPress={handleSubmit(onSubmit)} />
        {message && message !== '' && (
          <Text style={{color: 'red', textAlign: 'center', fontWeight: 'bold'}}>
            {message}
          </Text>
        )}
      </View>
      <ButtonPressable mode="contained" onPress={onDelete}>
        Eliminar
      </ButtonPressable>
    </View>
  );
};

export default EditCustomer;
