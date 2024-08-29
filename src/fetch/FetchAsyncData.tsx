// 1. fetch api
// 1.1 비동기로 동작한다.
// 1.2 Promise...then 방식으로 동작하는 방식
// 1.2.1 pending, fulfilled(이행), rejected(실패) 세 가지 상태를 가진다.

// 1.3 async, await 방식으로 동작하는 방식

import { useFetch } from "../hooks/useFetch";

// 2. axios library
// 3. ... 데이터 통신 라이브러리
const FetchAsyncData = () => {
  const { data, isLoading, isError, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts",
    []
  );

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>Error... {error}</h1>;
  }

  return (
    <>
      <h1>FetchData Component</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
};
export default FetchAsyncData;
