import Ember from 'ember';
var {$} = Ember;
import ENV from 'ember-blog/config/environment'
import ENV2 from 'ember-blog/config/environment'
import ENV3 from 'ember-blog/config/environment'

export default Ember.Route.extend({

  model:function(){
    var label = [];
    var label1 = [];
    var label2 = [];

    var montrealdata = [];
    var ladata = [];
    var nydata = [];

    var promise1 = $.ajax({
      type:'get',
      url: 'https://jason-zheng-api.herokuapp.com/coffee/montreal'
    }).done(function(json){
      var labele = json.map(function(obj){
        return [obj.id, obj.rating];
        //  return [obj.id, obj.rating, getRandomColor()];
      });
        label.push(labele);
        montrealdata.push(["Coffee Shops", "Ratings"]);
        for(var i = 0 ; i < 4; i++){
          montrealdata.push(label[0][i]);
        }
        return labele;
      });

      var promise2 = $.ajax({
        type:'get',
        url: 'https://jason-zheng-api.herokuapp.com/coffee/losangeles'
      }).done(function(json){
        var labele = json.map(function(obj){
          return [obj.id, obj.rating];
          //  return [obj.id, obj.rating, getRandomColor()];
        });
          label1.push(labele);
          ladata.push(["Coffee Shops", "Ratings"]);
          for(var i = 0 ; i < 4; i++){
            ladata.push(label1[0][i]);
          }
          return labele;
        });

        var promise3 = $.ajax({
          type:'get',
          url: 'https://jason-zheng-api.herokuapp.com/coffee/newyork'
        }).done(function(json){
          var labele = json.map(function(obj){
            return [obj.id, obj.rating];
            //  return [obj.id, obj.rating, getRandomColor()];
          });
            label2.push(labele);
            nydata.push(["Coffee Shops", "Ratings"]);
            for(var i = 0 ; i < 4; i++){
              nydata.push(label2[0][i]);
            }
            return labele;
          });
      var promises = {
        montreal: promise1,
        la: promise2,
        ny: promise3,
      };
      return Ember.RSVP.hash(promises).then(function(){
        // console.log(hash);
        var JZreturnthis = {
          montreal: montrealdata,
          la: ladata,
          ny: nydata,
        };
        return JZreturnthis;
      });
    },
    afterModel: function(posts) {
      console.log(posts);
    }
});
