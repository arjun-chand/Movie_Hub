import React, { useEffect, useState } from 'react';
import LoadingBar from 'react-top-loading-bar';
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';
import MoviesItem from './MoviesItem';
import PropTypes from 'prop-types';
import { getPost } from '../services/MovieService';



const Movies = (props) => {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const getMovies = async () =>{

   try {
    const response  = await getPost();
    setMovie(response.data);
   } catch (error) {
    
   }
  }
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const updateMovies = async () => {
    props.setProgress(10);
    let url = `http://localhost:8000/api?category=${props.category}&page=${page}&pageSize=${props.pageSize}`;

    setLoading(false);
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
    // updateMovies();
    // // eslint-disable-next-line
    getMovies();
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
        <h1 className="text-center" style={{ margin: '35px 0px marginTop', marginTop: '100px' }}>MoviesHub - Top {capitalizeFirstLetter(props.category)} Movies</h1>
        {/* {LoadingBar && <Spinner />} */}
        {movie && (
          <InfiniteScroll
            dataLength={movie.length}
            next={fetchMoreData}
            hasMore={movie.length !== totalResults}
            loader={<Spinner />}
          >
            <div className="container">
              <div className="row">
                {movie.map((element,index) => {
                  return (
                    <div className="col-md-3 my-4 " key={element.url}>
                      <MoviesItem
                        index={index}
                        title={element.title ? element.title : ""}
                        description={element.description ? element.description : ""}
                        imageUrl={element.image}
                        date={element.publishedAt}
                        category = {element.category}
                        source={element.source}
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
