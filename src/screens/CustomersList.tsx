import {StyleSheet, Text, View} from 'react-native';

interface Props {
  name?: string;
}

const CustomersList = ({name = 'world'}: Props) => {
  return (
    <View style={styles.container}>
      <Text numberOfLines={1} style={styles.title}>
        List Customers, {name}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 45,
    textAlign: 'center',
    color: 'black',
    padding: 20,
  },
});

export default CustomersList;
