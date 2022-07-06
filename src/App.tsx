import React, { useEffect, useState } from 'react';
import './App.css';
import { connect, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchProductsThunk, filterProductsThunk } from './store/actions/produtcts.action'

function App({products, isFetching, errorMessage, fetchProductsThunk: any, filterProductsThunk} :any) {
  const dispatch = useDispatch()

  const [estadoInput, setEstadoInput] = useState('')

  useEffect(()=>{
    // console.log("aaaaaaaa")
    fetchProductsThunk()(dispatch)
    // console.log("depois")
  })

  const handleClick = () =>{
    if(!estadoInput){
      fetchProductsThunk()(dispatch)
    }

    filterProductsThunk(estadoInput)(dispatch)
    setEstadoInput('')

  }

  return (
    <div className="App">
      <input type="text" placeholder='Filtro' value={estadoInput} onChange={(e)=> setEstadoInput(e.target.value)} />
      <button onClick={handleClick}>Pesquisar</button>
      {isFetching ? <p>Carregando...</p> : <p>Não está carregando</p>}
      <ol>
      {products ? products.map((produto:any) =>{
          return <li key={produto.id}>{produto.title}</li>
        }) : <></>}
      </ol>
      {errorMessage ? <span>{errorMessage}</span> : <></>}
    </div>
  );
}

const mapStateToProps = (store: any) => ({
  products: store.products,
  isFetching: store.isFetching,
  errorMessage: store.errorMessage
});

const mapDispatchToProps = (dispatch: any) => bindActionCreators(
  { fetchProductsThunk, filterProductsThunk },
  dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(App);
