import {Alert, Platform} from 'react-native';

const server =
  Platform.OS === 'ios' ? 'http://localhost:3000' : 'http://10.0.2.2:3000';

function showError(err) {
  let errorMessage = 'Ocorreu um Problema!';
  if (err.response && err.response.data && err.response.data.error) {
    errorMessage = err.response.data.error;
  }
  Alert.alert('Ops! Ocorreu um Problema!', `Mensagem: ${errorMessage}`);
}

function showSuccess(msg) {
  Alert.alert('Sucesso!', msg);
}

export {server, showError, showSuccess};
