import Reflux from 'reflux'
import myActions from '../actions/myFirstActions'
import _ from 'underscore'

export default Reflux.createStore({
  init(){
    this.objs = [];
    this.currId = 0;
    this.listenToMany(myActions);
  },
  onAdd(obj){
    obj.id = this.currId++;
    this.objs.push(obj);
    // trigger an update
    this.trigger(this.objs)
  },
  onRemove(id){
    this.objs = _.without(
      this.objs,
      _.findWhere(
        this.objs,
        {id}
      )
    );
    this.trigger(this.objs);
  }
})