import React,{ Component } from 'react';
import Filter from './Filter';
import TreeView from '../components/TreeView';

export default class InsBox extends Component{
	constructor(props){
		super(props);
		this.state = {
			query:'',
            filterData: this.props.data
		}
	}
	getData(queryText, data, queryResult){
		data.map((dataNode, i)=> {
			if(dataNode.node.description.indexOf(queryText)!=-1){
				queryResult.push(dataNode);
				return;
			}
			if(dataNode.node.children){
				this.getData(queryText, dataNode.node.children, queryResult);
			}
		})
	}
	doSearch(queryText, data){
		var queryResult = [];
		this.getData(queryText, data, queryResult)
		this.setState({
			query: queryText,
			filterData: queryResult
		})
	}
	render(){
		return(	
			<div>
				<Filter query={this.state.query} doSearch= {(e)=>this.doSearch(e,this.props.data)} />
				<TreeView data={this.state.filterData} />
			</div>
		)
	}
}
