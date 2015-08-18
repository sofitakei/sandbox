import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'button',
	click(){
		this.sendAction('press', this.get('value'));
	}
});
