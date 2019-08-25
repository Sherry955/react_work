import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';


class FinalCode extends React.Component{
    constructor(props){
        super(props);
        this.state = {'final_code':'', 'min':1, 'max':100, 'msg':'', 'answer':''}

        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount(){
        //初始最終密碼
        const final_num = Math.floor(Math.random()*100)+1;      
        this.setState({final_code:final_num})
    }


    handleChange(e){
        const input_num = parseInt(e.target.value);
        if(input_num == this.state.final_code){
            this.setState({msg:'恭喜猜中號碼了!', answer: input_num})  
        } else if(input_num < this.state.final_code){
            this.setState({min:input_num})   
        }else{
            this.setState({max:input_num})   
        } 
    }   

    render(){
        return(
            <div className="App">
                <header className="App-header">
                <h1>終極密碼 <span style={{color:'red'}}>{this.state.answer}</span> </h1> 
                <h2>密碼介於: {this.state.min | 0} ~ {this.state.max | 0} </h2>
                <h3>{this.state.msg}</h3>
                <input type="text" placeholder="請輸入密碼" onBlur={this.handleChange}/>
                </header>
            </div>
        )
    }
}

export {FinalCode}