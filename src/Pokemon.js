import React,{useEffect,useState} from 'react'
import axios from 'axios'
import Card from './Card';
function Pokemon() {
    let intialUrl='https://pokeapi.co/api/v2/pokemon';
    const[pokeData,setPokeData]=useState([]);
    const[loading,setLoading]=useState(true);
    const[url,setUrl]=useState(intialUrl);
    const[next,setNext]=useState();
    const[previous,setPrevious]=useState();

const pokeFun=async()=>{
setLoading(true)
const res =await axios.get(url);
  console.log(res.data.results) 
  setNext(res.data.next);
  setPrevious(res.data.previous);
  getPokemon(res.data.results);
  setLoading(false);
  console.log(pokeData);

}

const getPokemon =async (res)=>{
res.map(async(r)=>{
  const Result = await axios.get(r.url);
  setPokeData(state=>{
    state=[...state,Result.data];
    return state;
  });
  })
}

useEffect(()=>{
    pokeFun();
},[url])

const nextPage=()=>{
  setPokeData([]);
  setUrl(next);
}
const prevPage=()=>{
  setPokeData([]);
  setUrl(previous);
}
  return (
    <>
    <div class="form-group row">
      <div class="col-md-1">
        <button onClick={nextPage}>Next</button>
       {previous?<button onClick={prevPage}>previous</button>:null}

      </div>
      <div class="col-md-8">
  <Card pokeData={pokeData} loading={loading}/>
  </div>
  </div>
    </>
  )
}

export default Pokemon
