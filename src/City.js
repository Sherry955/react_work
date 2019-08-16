import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';


class CityList extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return(           
          <tbody>
              <tr><td bgcolor="red">{this.props.name}</td></tr>
              <tr>
              {this.props.towns.map(town => {
                  return <td key={town.id}>{town.name} <font color="yellow">{town.postal}</font></td>
              })}
              </tr>
         </tbody>
        )
    }
}

class City extends React.Component {
    constructor(props){
        super(props);
        this.state = {citys : []}
    }
    componentDidMount() {
        fetch('https://works.ioa.tw/weather/api/all.json')
        .then(response => response.json())
        .then(data => {
          // Do something with the result
            this.setState({   
              citys: data
            })
        })
    }
  
    render() {
      return (
        <div className="App">
          <header className="App-header">
          <h1>郵遞區號</h1>
          <table>
            {this.state.citys.map(city => {
              return <CityList key={city.id} towns={city.towns} name={city.name}/>
            })}
          </table>
          </header>
        </div>
      )
    }
  }


export {City}