import axios from 'axios';

const GET_TREEDATA = "GET_TREEDATA";
export function getTreeData(){
	return (dispatch) => {
		var request = axios.get('/app/data/data.json');
		request.then(({data})=>{
						dispatch({type:GET_TREEDATA,payload: data});
					}).catch(function (error) {
						console.log(error);
					})
	}
}
