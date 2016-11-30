import Ember from 'ember';

export default Ember.Controller.extend({
  options: {
      title: 'How I spend my days',
      height: 300,
      width: 400,

      animation: {
        startup: true,
        easing: 'inAndOut',
      },
    },
});
