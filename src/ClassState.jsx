  import React, {Component} from 'react';
import { Loading } from './Loading';

const SECURITY_CODE = 'paradigma';


export class ClassState extends Component{
  constructor(props) {
    super(props)
    
    this.state = {
      value: '',
      error: false,
      loading: false
    }
  }

  // componentWillMount(){
  // UNSAFE_componentWillMount(){
  //   console.log('componentWillMount')
  // }
  // componentWillUnmount(){
  //   console.log('componentWillUnmount')
  // }
  // componentDidMount(){
  //   console.log('componentDidMount')   
  // }
  componentDidUpdate(){
    console.log('actualización');
    if (!!this.state.loading) {
      setTimeout(()=>{
        console.log('start validation');

        if (SECURITY_CODE === this.state.value ) {
          this.setState({error:false, loading:false})
        }else{
          this.setState({error:true, loading:false})
        }

        console.log('finish validation');
      }, 3000)
    }
  }
  render () {
    const {name} = this.props
    const {error, loading, value} = this.state;
    return (
      <div>
        <h2>Eliminar {name}</h2>
        <p>Introduce el código de comprobación</p>

        {(error && !loading )&& (
          <p>Error: El código es incorrecto</p>
        )}
        {loading && (
          <Loading/>
        )}
        
        <input
        value={value}
        onChange={(e)=>this.setState({value: e.target.value})}
        type="text" 
        placeholder='Aquí el código'
        />
        <button
        onClick={()=>this.setState({loading: !loading})}
        >Comprobar</button>

      </div>
    )
  }
}