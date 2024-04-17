import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {CustomerRelation} from '../../common/interfaces/customerrelation.ts';

const CustomerItem = (props: CustomerRelation) => {
  const {customer} = props;

  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.8}>
      <View>
        <Text style={styles.text}>
          {customer.first_name} {customer.last_name} - {customer.dni}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 14,
    borderRadius: 21,
    marginBottom: 10,
    backgroundColor: 'white',
  },
  text: {
    fontSize: 16,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
});

export default CustomerItem;
