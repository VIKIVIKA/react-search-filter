import {GET_TREEDATA} from '../actions/filterTreeData';
import {GET_INITIALDATA} from '../actions/getTree';

const treeData = (state = [],action)=>{
	switch(action.type){
		case 'GET_INITIALDATA':
			return {...state,treeResp: action.payload};
		case 'GET_TREEDATA':
			return {...state,treeResp: action.payload};
		default:
			return state
	}
}

export default treeData;

