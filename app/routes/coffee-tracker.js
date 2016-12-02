import Ember from 'ember';

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

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
      url: 'http://localhost:3000/coffee/montreal'
    }).done(function(json){
      var labele = json.map(function(obj){
        return [obj.id, obj.rating];
        //  return [obj.id, obj.rating, getRandomColor()];
      });
        label.push(labele);
        montrealdata.push(["Coffee Shops", "Ratings"]);
        var arraylength = label[0].length;
        for(var i = 0 ; i < 4; i++){
          montrealdata.push(label[0][i]);
        }
        return labele;
      });

      var promise2 = $.ajax({
        type:'get',
        url: 'http://localhost:3000/coffee/losangeles'
      }).done(function(json){
        var labele = json.map(function(obj){
          return [obj.id, obj.rating];
          //  return [obj.id, obj.rating, getRandomColor()];
        });
          label1.push(labele);
          ladata.push(["Coffee Shops", "Ratings"]);
          var arraylength = label1[0].length;
          for(var i = 0 ; i < 4; i++){
            ladata.push(label1[0][i]);
          }
          return labele;
        });

        var promise3 = $.ajax({
          type:'get',
          url: 'http://localhost:3000/coffee/newyork'
        }).done(function(json){
          var labele = json.map(function(obj){
            return [obj.id, obj.rating];
            //  return [obj.id, obj.rating, getRandomColor()];
          });
            label2.push(labele);
            nydata.push(["Coffee Shops", "Ratings"]);
            var arraylength = label2[0].length;
            for(var i = 0 ; i < 4; i++){
              nydata.push(label2[0][i]);
            }
            return labele;
          });
      var promises = {
        montreal: montrealdata,
        la: ladata,
        ny: nydata,
      }
      return Ember.RSVP.hash(promises).then(function(hash){
        // console.log(hash);
        return hash;
      });
    },
    afterModel: function(posts, transition) {
      console.log(posts)
    }
});
