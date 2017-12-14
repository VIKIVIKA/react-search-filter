import React,{Component} from 'react';
import TreeView from '../components/TreeView';

export default class Filter extends Component{
	constructor(props){
		super(props);
		this.state = {
			filteredData : this.props.treeData,
			inputValue: ''
		};
	}
	inpVal(e){
		this.setState({inputValue: e.target.value})
	}
	render(){
		return(
			<div className="text-center">
				<label>
					<h1>Redux Search tree</h1>
				<input className="myCustInpt" onChange={(e)=>{this.inpVal(e)}} type="text" value={this.state.inputValue} ref="searchArg"/>
				<button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onClick={(e)=>this.props.getTreeData(e, this.refs.searchArg.value)}>Filter</button>	
				</label>			
			</div>
		)
	}
}
