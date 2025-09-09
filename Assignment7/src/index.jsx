 const getPosts =  async()=>{
const response = await fetch("https://my-json-server.typicode.com/FreSauce/json-ipl/data",{method :"GET",});
return await response.json();
}

export default getPosts;