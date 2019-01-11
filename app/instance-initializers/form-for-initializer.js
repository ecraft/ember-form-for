import config from '../config/environment';
import { assign } from '@ember/polyfills';
import { set } from '@ember/object';

const DEFAULT_CONFIG = {
  buttonClasses: ['form-button'],
  fieldClasses: ['form-field', 'form-group'],
  fieldHasErrorClasses: ['form-field--has-errors'],
  errorClasses: ['form-field--errors', 'invalid-feedback'],
  hintClasses: ['form-field--hint', 'form-text', 'text-muted'],
  inputClasses: ['form-field--control', 'form-control'],
  labelClasses: ['form-field--label', 'form-control-label'],
  resetClasses: ['form-button--reset'],
  submitClasses: ['form-button--submit']
};

export function initialize(application) {
  let formForConfig = assign(DEFAULT_CONFIG, config['ember-form-for']);
  let configService = application.lookup('service:ember-form-for/config');

  Object.keys(formForConfig).forEach((key) => {
    set(configService, key, formForConfig[key]);
  });
}

export default {
  name: 'form-for-initializer',
  initialize
};
