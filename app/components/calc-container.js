import Ember from 'ember';
import numbers from '../utils/numbers'
import getOperators from '../utils/get-operators'
export default Ember.Component.extend({
classNames: ['calculator'],
numbers: numbers(10),
operators: getOperators(),
expression: '',
result: 0,
actions:{
	inputNumber(number){
		let expression = this.get('expression');
		this.set('expression', expression + number);
	},
	doSomething(operator){
		let expression = this.get('expression');
		let endsWithOperator = this.get('operators').reduce((prev, current, index,array)=>{ return prev || expression.endsWith(current);}, false);
		if(expression && !endsWithOperator){
			this.set('expression', expression + operator);
		}
	},
	clearInput(){
		this.set('expression', '');
	},
	evaluateExpression(){
		let expression = this.get('expression');

		try{
			let answer = eval(expression);
			this.set('expression', '');
			this.set('result', answer);
		}catch(e){
			//do nothing
		}
		
	
	}
}

});
