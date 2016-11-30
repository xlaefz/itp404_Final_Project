import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about-me');
  this.route('about');
  this.route('political-interest');
  this.route('contact');
  this.route('dongers');
  this.route('coffee-tracker');
});

export default Router;
