import Ember from 'ember';
var {$} = Ember;
export default Ember.Route.extend({
  model:function(){
    var promise1 = $.ajax({
        type:'get',
        url: 'http://localhost:3000/tweets/hilary'
      });

    var promise2 = $.ajax({
        type:'get',
        url: 'http://localhost:3000/tweets/trump'
      });

    var promises = {
      hilarysearch: promise1,
      trumpsearch: promise2,
    };

    return Ember.RSVP.hash(promises).then(function(hash){
      console.log(hash);
      return hash;
    });
  }
});
