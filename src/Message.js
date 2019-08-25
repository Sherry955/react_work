import React from 'react';

//留言板
var count = 0;
function addUserInfo(user_name, msg){  
    var userInfo = JSON.parse(localStorage.getItem('userIfo'))|| [];
    var idx = count+1;
    var user = {
        id : idx,
        username: user_name,
        msg : msg,
        time : new Date().toISOString().slice(0, 19)
    }
    userInfo.push(user);
    localStorage.setItem('userIfo', JSON.stringify(userInfo));
    count = idx;
}

class Message extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name:'',
            msg:'',
            datas:[]
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handleMsg = this.handleMsg.bind(this);
    }

    componentDidMount(){
        var userobj = JSON.parse(localStorage.getItem('userIfo')) || [];
        this.setState({datas:userobj}) 
    }

    handleChange(){
        addUserInfo(this.state.name, this.state.msg);     
        var userobj = JSON.parse(localStorage.getItem('userIfo'));
        this.setState({datas:userobj}) 
    }

    handleName(e){
        const input_name = e.target.value;
        this.setState({name:input_name}) 
    }

    handleMsg(e){
        const input_msg = e.target.value;
        this.setState({msg:input_msg}) 
    }  

    render(){      
        const style1 = {
            margin:'0px auto',
            align:'center',
            height:'100px'
          };
        return(          
            <div style={style1}>
               <input type='text' onBlur={this.handleName} placeholder="請輸入名字"/>
               <input type='text'onBlur={this.handleMsg} placeholder="請輸入訊息"/>
               <button onClick={this.handleChange}>送出</button>
               <br/>
                {this.state.datas.map(data => {
                    return  <div key={data.id}><hr></hr>留言時間: {data.time}<br/>留言人: {data.username}<br/> 留言訊息:{data.msg}</div>
                })}
            </div>
        )
    }
}


export {Message}