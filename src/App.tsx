import MovieBasic from './movies-basic/MovieBasic';
import ErrorEx from './components/error/ErrorEx';
import ErrorBoundary from './components/error/ErrorBoundary';
const App = () => {
  return (
    <>
      {/* <ErrorBoundary fallback={<h1>Error!</h1>}>
        <ErrorEx/>
      </ErrorBoundary> */}
      <MovieBasic/>
      {/* <FetchData/> */}
    </>
  )
}
export default App;