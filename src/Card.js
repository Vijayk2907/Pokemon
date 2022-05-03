import React,{useState} from 'react'

function Card({pokeData},{loading}) {

const[count,setCount] = useState(0)
  return (   
    <div>
      <div class="form-group row">
        <div class="col-md-4"></div>
      {pokeData.length>19?
      <div class="card col-md-2 alert alert-dark">
      <img src={pokeData[count].sprites.front_default} class="card-img-top"  alt="..."/>
      <div class="card-body">
        <h5 class="card-title">{pokeData[count].name}</h5>
       {count<19? <span onClick={()=>setCount(count+1)}class="badge rounded-pill bg-primary">next</span>:''}
       {count>1?<span onClick={()=>setCount(count-1)}class="badge rounded-pill bg-danger">previous</span>:''}
      </div>
    </div>:<div class="spinner-border m-5" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
}
</div>
    </div>
  
  )
}

export default Card
