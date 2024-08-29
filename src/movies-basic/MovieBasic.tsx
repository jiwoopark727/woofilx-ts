
import { NowPlaying, NowPlayingUrl, options, PopularUrl, UpcomingUrl } from "../api/tmdb";
import { useFetch } from "../hooks/useFetch";
import MovieArea from "./MovieArea";
import MovieHeader from "./MovieHeader";
import MovieMain from "./MovieMain";
import { TMDBDataType } from '../types/movie';
import MovieSkeloton from './MovieSkeloton';

export default function MovieBasic() {
  // nowPlaying: 현재 상영중인 영화 목록
  // [] 는 초기데이터
  const {
    data: { results: nowPlaying },
    isLoading: isNowPlayingLoading,
    isError: isNowPlayingError,
  } = useFetch<TMDBDataType>(NowPlayingUrl, { results: [] }, options);

  // popular : 인기 있는 영화 목록
  const {
    data: { results: popular },
    isLoading: isPopularLoading,
    isError: isPopularError,
  } = useFetch<TMDBDataType>(PopularUrl, { results: [] }, options);


  // Upcoming :개봉 예정 영화
  const {
    data: { results: upcoming },
    isLoading: isUpcomingLoading,
    isError: isUpcomingError,
  } = useFetch<TMDBDataType>(UpcomingUrl, { results: [] }, options);

  // if (isNowPlayingLoading || isPopularLoading || isUpcomingLoading) return <div>Loading...</div>;
  if (isNowPlayingError || isPopularError || isUpcomingError) return <div>Error...</div>;

  return (
    <>
      {/* 헤더 */}
      <MovieHeader />
      {/* 메인 */}
      <MovieMain />
      {/* 무비 에어리어 */}
      {
        isNowPlayingLoading ? <MovieSkeloton title="Now Playing"/> : <MovieArea movies={nowPlaying} title="Now Playing"/>
      }
      {/* 무비 에어리어 */}
      {
        isPopularLoading ? <MovieSkeloton title="Popular"/> : <MovieArea movies={popular} title="Popular"/>
      }
      {/* 무비 에어리어 */}
      {
        isUpcomingLoading ? <MovieSkeloton title="Upcoming"/> : <MovieArea movies={upcoming} title="Upcoming"/>
      }
    </>
  );
}
