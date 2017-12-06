import React,{Component} from 'react';

export default class TreeView extends Component{
	constructor(props){
		super(props)
	}
	render(){
		let appendChild = (childNode) =>{
			return childNode.map((chldNode,i) => {
				return(
						<div key={i}>
						{
							chldNode.node.children ?
								<ul key={chldNode.node.id}>
									{chldNode.node.description}
									{appendChild(chldNode.node.children)}
								</ul>
							:
								<li key={chldNode.node.id}>
									{chldNode.node.description}
								</li>
						}
				</div>
				)})
		}
		return(
			<div>
				{appendChild(this.props.data)}
			</div>
		)
	}
}
