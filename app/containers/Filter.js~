import React,{Component} from 'react';
import TreeView from '../components/TreeView'
class Filter extends Component{
	constructor(props){
		super(props);
		this.state = {
			filteredData : this.props.treeData,
			inputValue: ''
		};
	}
	doSearch(e){
		var query = this.state.inputValue;
		this.props.doSearch(query);
	}
	inpVal(e){
		this.setState({inputValue: e.target.value})
	}
	render(){
		return(
			<div>
				<input onChange={(e)=>{this.inpVal(e)}} type="text" value={this.state.inputValue} ref="searchArg"/>
				<button onClick={(e)=>{this.doSearch(e)}}>Search</button>
			</div>
		)
	}
}

export default Filter
