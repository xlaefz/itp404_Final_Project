import Ember from 'ember';

export default Ember.Route.extend({

  model:function(){
    var label = [];
    var data = [];
    var promise = $.ajax({
      type:'get',
      url: 'http://localhost:3000/coffee/montreal'
    }).done(function(json){
      var labele = json.map(function(obj){
         return [obj.id, obj.rating];
      });
        label.push(labele);
        data.push(["Coffee Shops", "Ratings"]);
        var arraylength = label[0].length;
        for(var i = 0 ; i < arraylength; i++){
          data.push(label[0][i]);
        }
        return labele;
      });
      console.log(data);
      return data;
    }
});
