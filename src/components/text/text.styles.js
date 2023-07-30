import {StyleSheet} from 'react-native';

const textstyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  textInput: {
    borderRadius: 10,
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 150,
  },
  headline: {
    color: 'purple',
    fontSize: 30,
  },
});

export default textstyles;
