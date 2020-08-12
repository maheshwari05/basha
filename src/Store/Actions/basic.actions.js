import sentences from "../reducers/sentences.reducer";
import _ from 'lodash';
export const SELECTED = 'SELECTED';
export const CLICKED = 'CLICKED';
export const GET_RESULT  = 'GET RESULT';
export const RESET = 'RESET';

export function setSelected(sentence) {
	const data = sentence.split(' ');
	return dispatch =>{
		return dispatch({
			type: SELECTED,
			payload:data
		});
	}
}

export function clickHandel(word){
	return (dispatch, getState) => {
		const temp = getState().basic;
		console.log(temp);
		if(temp.clicked){
			const clic = [...temp.clicked]
			clic.push(word);
			return dispatch({
				type:CLICKED,
				payload:clic
			})
		}else{
			return dispatch({
				type:CLICKED,
				payload:[word]
			})
		}
	  }
}


export function check(){
	return (dispatch,getState) =>{
		const temp = getState().basic;
		if(!temp.clicked){
			return dispatch({
				type:GET_RESULT,
				payload:false
			})
		}
		temp.selected.some((item,i)=>{
			if(temp.clicked[i] && item !== temp.clicked[i]){
				return dispatch({
					type:GET_RESULT,
					payload:false
				})
			}
			if(temp.clicked[i] && i === temp.selected.length - 1){
				return dispatch({
					type:GET_RESULT,
					payload:true
				})
			}
		})
		
	}
}

export function resetThis(){
	return dispatch=>{
		return dispatch({
			type:RESET
		})
	}
}