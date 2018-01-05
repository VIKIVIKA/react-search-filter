import axios from 'axios';
import {UpdateJson} from '../../libs/UpdateJson';
const GET_INITIALDATA = "GET_INITIALDATA";

export function getInitialTreeData(){
	return (dispatch) => {
		const request = axios.get('/app/data/data.json');
		request.then(({data})=>{
						dispatch({type:GET_INITIALDATA,payload: data});
					}).catch(function (error) {
						console.log(error);
					})
	}
}

