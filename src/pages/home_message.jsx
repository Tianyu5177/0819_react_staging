import React, { Component } from 'react'
import Detail from './message_detail'
import {Link,Route} from 'react-router-dom'

export default class HomeMessage extends Component {

	state = {
    messages: []
  }

	componentDidMount () {
    // 模拟发送ajax请求
    setTimeout(() => {
      const data = [
        {id: 1, title: '消息1'},
        {id: 2, title: '消息2'},
        {id: 3, title: '消息3'},
      ]
      this.setState({
        messages: data
      })
    }, 1000)
	}
	
	pushShow = (id)=>{
		this.props.history.push(`/home/message/detail/${id}`)
	}

	replaceShow = (id)=>{
		this.props.history.replace(`/home/message/detail/${id}`)
	}


	render() {
		return (
			<div>
				<ul>
					{
						this.state.messages.map((message)=>{
							return (
								<li key={message.id}>
									<Link to={`/home/message/detail/${message.id}`}>{message.title}</Link>&nbsp;&nbsp;
									<button onClick={()=>{this.pushShow(message.id)}}>push查看</button>
									<button onClick={()=>{this.replaceShow(message.id)}}>replace查看</button>
								</li>
							)
						})
					}
				</ul>
				<hr/>
				<Route path="/home/message/detail/:id" component={Detail} />
				<hr/>
			</div>
		)
	}
}
