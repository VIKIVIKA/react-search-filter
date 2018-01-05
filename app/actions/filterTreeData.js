import axios from 'axios';
import {UpdateJson} from '../../libs/UpdateJson';
const GET_TREEDATA = "GET_TREEDATA";

export function getTreeData(e, inpValue){
	return (dispatch) => {
		const request = axios.get('/app/data/data.json');
		request.then(({data})=>{
					let updatedData = UpdateJson(data, inpValue);
						dispatch({type:GET_TREEDATA,payload: updatedData});
					}).catch(function (error) {
						console.log(error);
					})
	}
}
