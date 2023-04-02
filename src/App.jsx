import './App.css';
import { CardCollection } from './components/CardCollection';
import Header from './components/Header';
import React from 'react'
import { useState,useEffect} from 'react';
import axios from 'axios';
import List from './components/List';
import Main from './components/Main';
function App() {
  
  const[listData,setListData]=useState([])
  const[selectedContent,setSelectedContent]=useState(3)
  useEffect(()=>{
    const getMyNfts = async () =>{
      const openseaData=await axios.get('https://testnets-api.opensea.io/assets?asset_contract_address=0x26EFCcCff6D7185e3cDebD769FA3AAc678103119&order_direction=asc')
      console.log(openseaData.data.assets)
      setListData(openseaData.data.assets)
    }
    return getMyNfts()
  },[]) 
  return (
    <div className='app'>
    <Header/>
    {listData.length>0 && (
      <>
      <Main listData={listData} selectedContent={selectedContent}/>
      <List listData={listData} setSelectedContent={setSelectedContent}/>
      </>
    )
    }
      </div>
    
  );
}

export default App;
