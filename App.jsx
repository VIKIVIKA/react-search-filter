import React,{PropTypes} from 'react'
import InsBox from './app/containers/InsBox'

export default class App extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			tableData: [
				{
					node: {
						"id":1,
						"description":"test1",
						"children":[
							{
								node:{
									"id": "1_1",
									"description":"test1.1",
									"children":[
										{
											node:{
												"id": "1_1_1",
												"description":"test1.1.1"
											}
										}
									]
								}
							}
						]
					}
				},
				{
					node: {
						"id":2,
						"description":"test2",
						"children":[
							{
								node:{
									"id": "2_1",
									"description":"test2.1",
									"children":[
										{
											node:{
												"id": "2_1_1",
												"description":"test2.1.1"
											}
										}
									]
								}
							},
							{
								node:{
									"id": "2_1",
									"description":"test2.2",
									"children":[
										{
											node:{
												"id": "2_1_2",
												"description":"test2.2.1"
											}
										}
									]
								}
							}
						]
					}
				}
			]
		}
	}
	render(){
		return (
			<div>
				<InsBox data={this.state.tableData}/>
			</div>
	)}
}
