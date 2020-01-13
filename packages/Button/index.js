import EchoButton from './src/Button';

EchoButton.install = Vue => {
  Vue.component(EchoButton.name, EchoButton);
}
export default EchoButton;