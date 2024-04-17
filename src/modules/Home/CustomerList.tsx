import {FlatList, StyleSheet, Text, View} from 'react-native';
import {useQuery} from '@tanstack/react-query';
import {getAllCustomers} from '../../common/api/financial-chanllenge.ts';
import CustomerItem from './CustomerItem.tsx';
import {ActivityIndicator, MD2Colors} from 'react-native-paper';

const CustomerList = () => {
  const {
    data: customerRelations = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['customers'],
    queryFn: getAllCustomers,
  });

  console.log(customerRelations);
  console.log(isLoading);
  console.log(isError, 'is e');

  if (isLoading) {
    return (
      <View>
        <ActivityIndicator animating={true} color={MD2Colors.red800} />
      </View>
    );
  }

  if (!customerRelations) {
    return (
      <View>
        <Text>No hay clientes</Text>
      </View>
    );
  }

  return (
    <View>
      <FlatList
        data={customerRelations}
        keyExtractor={item => item.customer.dni}
        renderItem={({item}) => <CustomerItem {...item} />}
        ListHeaderComponent={() => (
          <Text style={styles.title}>Lista de clientes</Text>
        )}
        contentContainerStyle={styles.contentContainerStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainerStyle: {
    padding: 15,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: 'black',
    marginBottom: 15,
  },
});

export default CustomerList;
