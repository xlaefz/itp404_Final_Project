import Ember from 'ember';

export default Ember.Controller.extend({
  options: {
      title: 'Twitter Influence',
      height: 600,
      width: 600,

      animation: {
        startup: true,
        easing: 'inAndOut',
      },
    },
});
