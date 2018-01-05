import React,{ Component } from 'react';
import Filter from './Filter';
import TreeView from '../components/TreeView';
import {connect} from 'react-redux';
import {getTreeData} from '../actions/filterTreeData';
import {getInitialTreeData} from '../actions/getTree';

class InsBox extends Component{
	constructor(props){
		super(props);
		this.state = {
			query:'',
            filterData: []
		}
	}	
	
	componentDidMount(){
		this.props.getInitialTreeData();
	}

	componentWillReceiveProps(nextProps){
		if(nextProps){
			this.setState({filterData: nextProps.TreeResp.treeResp})
		}
	}

	render(){
		return(	
			<div className="mainCont">
				<Filter getTreeData= {(e,val)=>this.props.getTreeData(e,val)} />
				<TreeView data={this.state.filterData} />
			</div>
		)
	}
}


function mapStateToProps(state){
	return {
		TreeResp: state.treeResp
	}
}

export default connect(mapStateToProps, {getTreeData,getInitialTreeData})(InsBox)
