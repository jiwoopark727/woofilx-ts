import { useEffect, useState } from 'react';

const FetchData = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [IsError, setIsError] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(()=>{
    const controller = new AbortController()
    const signal = controller.signal;
    //왜 json이 response 객체에 없는데 어케 쓰냐 그 response객체가
    //가지고 있는 내재적잠재적인 포로토타입 객체에 json이 있다
    //json은 또 promise를 반환하니까 또 한버 then을 써야 원하는 data를 바들수 있따
  const fetchData = async() => { 
    setIsLoading(true);
    setIsError(false);
    setError(null);

    try{
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          signal
        }
      )

      if(!response.ok){
        throw new Error('데이터를 불러오는데 실패');
      }

      const data = await response.json()
      setData(data);

      } catch(error){
        if(error instanceof Error && error.name === "AbortError") return;
        setError(error instanceof Error ? error.message : 'unknown error')
        setIsError(true)
      }finally{
        if(!signal.aborted){
          setIsLoading(false)
        }
      }
    }
  }, [])
  
  if(isLoading) {
    return <h1>Loading..</h1>
  }

  if(IsError) {
    return <h1>Error..{error}</h1>
  }

  return (
    <>
      <div>FetchData Component</div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  )
}
export default FetchData;