import Ember from 'ember';
var {$} = Ember;
export default Ember.Route.extend({
  model:function(){
    var sum = 0;
    var promise1 = $.ajax({
        type:'get',
        url: 'http://localhost:3000/tweets/hilary'
      }).done(function(json){
        for(var i = 0 ; i < json.length; i++){
          sum = sum+ json[i].friends_count;
        }
        console.log(sum);
        return sum;
        });

    var trumpsum = 0;
    var promise2 = $.ajax({
        type:'get',
        url: 'http://localhost:3000/tweets/trump'
      }).done(function(json){
        for(var i = 0 ; i < json.length; i++){
          trumpsum = trumpsum+ json[i].friends_count;
        }
        return trumpsum;
        });

    var promises = {
      hilarysearch: promise1,
      trumpsearch: promise2,
    };

    return Ember.RSVP.hash(promises).then(function(hash){
      console.log(sum);
      console.log(trumpsum);
      var results = [];
      var titles = ["name", "count"];
      results.push(titles);
      var hilary = ["Hilary", sum];
      var trump = ["Trump", trumpsum];
      results.push(hilary);
      results.push(trump);
      return results;
    });
  }
});
