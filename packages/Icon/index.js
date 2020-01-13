import EchoIcon from './src/Icon.vue';

/* istanbul ignore next */
EchoIcon.install = function(Vue) {
  Vue.component(EchoIcon.name, EchoIcon);
};

export default EchoIcon;
