//Ver video 14
import React, { useEffect, useState } from 'react';
import { Loading } from './Loading';

const SECURITY_CODE = 'paradigma'


export function UseReducer({name}) {
  const [state, setState] = useState(reducer, initialState)

  const onConfirm = ()=>{
    setState({
      ...state, 
      loading:false,
      confirmed: true
    });
  };
  const onError = ()=>{
    setState({
      ...state, 
      loading:false, 
      error:true
    });
  };

  const onWrite = (newValue)=>{
    setState({
      ...state, 
      value: newValue
    });
  };
  const onCheck = ()=>{
    setState({
      ...state, 
      loading:true
    });
  };
  const onDelete = ()=>{
    setState({
      ...state, 
      deleted: true
    });
  };
  const onReset = ()=>{
    setState({
      ...state, 
      deleted: false ,
      confirmed: false,
      value: ''
    })
  }

  useEffect(()=>{
    console.log('Start Effect');
    
    if (!!state.loading) {
      setTimeout(()=>{
        console.log('start validation');
        
        if (state.value === SECURITY_CODE) {
          onConfirm();
        }else{
          onError();
        }
        
        console.log('finish validation');
      }, 3000)
    }
    
    console.log('End Effect');
  }, [state.loading])
  
  if (!state.deleted && !state.confirmed) {
    return (
    <div>
      <h2>Eliminar {name}</h2>
      <p>Introduce el código de comprobación</p>

      {(state.error && state.loading) && (
        <p>Error: El código es incorrecto</p>
      )}
      {state.loading && (
        <Loading />
      )}
      <input 
      value={state.value}
      type="text" 
      placeholder='Aquí el código'
      onChange={(event)=>{
        onWrite(event.target.value);
      }}
      />
      <button
      onClick={()=>{
        onCheck();
      }}
      >Comprobar</button>
    </div>
  )
  }else if (!!state.confirmed && !state.deleted){
    return (
      <React.Fragment>
        <p>Desea eliminar el UseState??</p>
        <button
        onClick={()=>{
          onDelete();
        }}
        >
          Confirmar
        </button>
        <button
        onClick={()=>{
          onReset();
        }}
        >
          Cancelar
        </button>

      </React.Fragment>
    )
  }else{
    return (
      <React.Fragment>
        <p>Eliminado con éxito</p>
        <button
        onClick={()=>{
          onReset();
        }}
        >
          Volver atrás
        </button>
      </React.Fragment>
    )
  }
}



const initialState = {
  value: '',
  loading: false,
  error: false,
  deleted: false,
  confirmed: false
};

// const reducer = (state, action)=>{
  
// }
const reducer = (state, action)=>{
  if (action.type === 'ERROR') {
    return {
      ...state,
      error: true,
      loading: false
    }
  }else if(action.type === 'CHECK') {
    return {
      ...state,
      loading: true
    }
  }else {
    return{
      ...initialState
    }
  }
}