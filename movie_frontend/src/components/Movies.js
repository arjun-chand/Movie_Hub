import React, { useEffect, useState } from 'react';
import LoadingBar from 'react-top-loading-bar';
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';
import MoviesItem from './MoviesItem';
import PropTypes from 'prop-types';

const Movies = (props) => {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const updateMovies = async () => {
    props.setProgress(10);
    let url = `http://localhost:8000/api?category=${props.category}&page=${page}&pageSize=${props.pageSize}`;

    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);

    let parsedData = await data.json();
    props.setProgress(70);

    setMovie(parsedData.movie);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  }

  useEffect(() => {
    updateMovies();
    // eslint-disable-next-line
  }, []);

  const fetchMoreData = async () => {
    let nextPage = page + 1;
    let url = `http://localhost:8000/api?category=${props.category}&page=${page}&pageSize=${props.pageSize}`;
    setPage(nextPage);

    let data = await fetch(url);
    let parsedData = await data.json();

    setMovie(movie.concat(parsedData.movie));
    setTotalResults(parsedData.totalResults);
  };

  return (
    <div>
      <>
        <h1 className="text-center" style={{ margin: '35px 0px marginTop', marginTop: '100px' }}>NewsDragon - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
        {LoadingBar && <Spinner />}
        {movie && (
          <InfiniteScroll
            dataLength={movie.length}
            next={fetchMoreData}
            hasMore={movie.length !== totalResults}
            loader={<Spinner />}
          >
            <div className="container">
              <div className="row">
                {!loading && movie.map((element) => {
                  return (
                    <div className="col-md-4" key={element.url}>
                      <MoviesItem
                        title={element.title ? element.title : ""}
                        description={element.description ? element.description : ""}
                        imageUrl={element.urlToImage}
                        director={element.director}
                        date={element.publishedAt}
                        source={element.source.name}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </InfiniteScroll>
        )}
      </>

    </div>
  )
}

Movies.defaultProps = {
  pageSize: 1,
  category: 'entertainment'
}

Movies.propTypes = {
  pageSize: PropTypes.number,
  category: PropTypes.string
}

export default Movies;
