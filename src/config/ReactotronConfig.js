import Reactotron from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';


if(__DEV__) {

    const tron = Reactotron
    .configure({
        host:'192.168.0.104' // host da maquina no caso de usar o aparelho fisico
    }) // controla conecção e configuração de conexão
    .useReactNative() // adiciona plugins do react native
    .use(reactotronRedux())
    .connect() // conecta

    tron.clear();
    console.tron = tron;
}
