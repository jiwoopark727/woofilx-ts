import { useEffect, useState } from 'react';

const ErrorEx = () => {
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(false);
  useEffect(()=>{
    const fetchData = async ()=>{
      try{
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        if(!res.ok){
          throw new Error("ok Error");
        }
        const data = await res.json();
        setData(data);
      } catch(error){
        setIsError(true);
        // throw new Error("catch Error");
      }
    }
    fetchData();
  },[])

  if(isError) {
    throw new Error('Outside Error!');
  }

  return (
    <>
      <div>Error Component</div>
      { data && data?.map((item:any) => <h1>item.title</h1>)}
    </>
  )
}
export default ErrorEx;