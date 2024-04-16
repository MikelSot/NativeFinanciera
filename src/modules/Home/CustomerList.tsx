import {FlatList, StyleSheet, Text, View} from 'react-native';
import {useQuery} from '@tanstack/react-query';
import {getAllCustomers} from '../../common/api/financial-chanllenge.ts';
import CustomerItem from './CustomerItem.tsx';

const CustomerList = () => {
  const {data: customerRelations = []} = useQuery({
    queryKey: ['todos'],
    queryFn: getAllCustomers,
  });

  if (!customerRelations) return null;

  return (
    <FlatList
      data={customerRelations}
      keyExtractor={item => item.customer.dni}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({item}) => <CustomerItem {...item} />}
      ListHeaderComponent={() => (
        <Text style={styles.title}>Lista de clientes</Text>
      )}
      contentContainerStyle={styles.contentContainerStyle}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9E9Ef',
  },
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
