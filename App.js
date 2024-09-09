import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style= {styles.header}>
        <Text>Texas Stock Rally</Text>
      </View>
      <View style= {styles.authentication}>
          <View style={styles.email}>
            <Text>Email</Text>
            <TextInput
            style={styles.emailInput}
            placeholder='enter email'>
            </TextInput>
          </View>
          <View style={styles.password}>
            <Text>Password</Text>
            <TextInput
            style={styles.passwordInput}
            placeholder='password'
            secureTextEntry>
            </TextInput>
          </View>
          <View>
          <TouchableOpacity>
            <Text>Forgot password</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttons}>
        <TouchableOpacity style={styles.login}>
          <Text>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signup}>
          <Text>Sign up</Text>
        </TouchableOpacity>
        </View>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {

  },
  authentication:{
    flex: 1
  },
  email:{
    flexDirection: 'row'
  },
  emailInput: {
    textAlign: 'center',
  },
  password: {
    flexDirection: 'row'
  },
  passwordInput:{
  textAlign: 'center'
  },
  buttons:{
    flex: 1,
    flexDirection: 'row'
  },
  login:{
    margin: 10
  },
  signup: {
    margin: 10
  },

});
