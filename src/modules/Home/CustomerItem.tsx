import {Text, TouchableOpacity, View} from 'react-native';
import {CustomerRelation} from '../../common/interfaces/customerrelation.ts';

const CustomerItem = (props: CustomerRelation) => {
  const {customer} = props;

  return (
    <TouchableOpacity>
      <Text style={{flex: 1, color: 'white'}}>
        {customer.first_name} {customer.last_name}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomerItem;
