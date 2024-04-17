import {StyleSheet, Text, TextInput, View} from 'react-native';
import {Control, Controller, UseFormWatch} from 'react-hook-form';
import {validate} from '../../schema/customer.ts';
import {Payload} from '../../interfaces/payload.ts';
import {useState} from 'react';

type props = {
  watch: UseFormWatch<Payload>;
  control: Control<Payload, any>;
  name: string;
  placeholder: string;
  defaultValue?: string;
};

const Input = ({control, watch, name, placeholder, defaultValue}: props) => {
  const [error, setError] = useState<{field: string; message: string}>({});

  return (
    <View>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={styles.input}
            placeholder={placeholder}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            defaultValue={defaultValue}
            onChange={() => setError(validate(name, watch))}
          />
        )}
        name={name as keyof Payload}
      />

      {error?.field === name && (
        <Text style={{color: 'red'}}>{error?.message}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    marginBottom: 10,
  },
});

export default Input;
