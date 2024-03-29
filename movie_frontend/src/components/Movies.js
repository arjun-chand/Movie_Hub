import React, { useEffect, useState } from 'react';
import LoadingBar from 'react-top-loading-bar';
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';
import MoviesItem from './MoviesItem';
import PropTypes from 'prop-types';

export const movieArray = [
   
  {id:2,title:'Gadar 2',description:'A Psyco man who go to pakistan everytime and beats all of them',date:'12 jan 2024',image:'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQMpcz8flcJfM9fXOQwqaXMgzrXYh4Wxagqn5Pfyj-3hN-nm2IO',category:'action',rating:'3',source:'UTV Movies'},
  {id:3,title:'Animal',description:'Overrated Movie based on burtal scenes',date:'21 Jan 2024',image:'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQxk9rkmGc2FQDNu5nyz0wtUKuEc6VNUoga2usbl1ziXrW26f_R',category:'action',rating:'4',source:'UTV Movies'},
  {id:4,title:'Zapatlela',description:"Don't try to watch it alone, always watch with someone because this movie is really scary",date:'25 Mar 2000',image:'https://m.media-amazon.com/images/M/MV5BN2FmZWQ5OGItZDk5Zi00NTUzLWE0YWItYjBlNzFiMzlmYWIzXkEyXkFqcGdeQXVyNjk0NTE3NDM@._V1_.jpg',category:'Horror',rating:'5',source:'UTV Movies'},
  {id:5,title:'Journey 2',description:'If you Smell, what the rock is cooking',date:'1 April 2014',image:'https://m.media-amazon.com/images/M/MV5BMjA5MTE1MjQyNV5BMl5BanBnXkFtZTcwODI4NDMwNw@@._V1_.jpg',category:'adventure',rating:'5',source:'UTV Movies'},
  {id:6,title:'Jumanji',description:'If you Smell, what the rock is cooking',date:'1 April 2014',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoV5wUrMTOyjk5c45SPYF0koj4MfN5oWLYq73XLVmoRvs52GcFjDsoeOT_CtWDsaUc4Vw&usqp=CAU',category:'adventure',rating:'5',source:'UTV Movies'},
  {id:7,title:'3 Idiots',description:'3 College friends giving life lessons',date:'12 Jan 2015',image:'https://m.media-amazon.com/images/M/MV5BNTkyOGVjMGEtNmQzZi00NzFlLTlhOWQtODYyMDc2ZGJmYzFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',category:'comedy',rating:' 4.5',source:'UTV Movies'},
  {id:8,title:'Notebook',description:"I don't know about this movie",date:'1 April 2023',image:'https://m.media-amazon.com/images/M/MV5BNzc3Mzg1OGYtZjc3My00Y2NhLTgyOWUtYjRhMmI4OTkwNDg4XkEyXkFqcGdeQXVyMTU3NDU4MDg2._V1_.jpg',category:'romance',rating:'2',source:'UTV Movies'},
  {id:9,title:'Yeh Jawani Hai Deewani',description:"I don't know about this movie",date:'21 May 2014',image:'https://filmfare.wwmindia.com/content/2021/aug/bollywood-romantic-movie-yeh-jawaani-hai-deewani.jpg',category:'romance',rating:'4',source:'UTV Movies'},
  {id:10,title:'I want to Eat Your Pencreas',description:"Best Romatic anime movie",date:'21 May 2022',image:'https://m.media-amazon.com/images/M/MV5BNDM4MWE3NGQtODlkYS00NWU5LTg3ZjMtMTEyNjljOWI4NWIxXkEyXkFqcGdeQXVyNzkzODk2Mzc@._V1_FMjpg_UX1000_.jpg',category:'romance',rating:'5',source:'UTV Movies'},
  {id:11,title:'Interstellar',description:"Astronaut in the ocean",date:'21 May 2022',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRE8xZbi8r7ImwqImi3Wow7AoKwATmbFldLmtbbu5O9w&s',category:'sifi',rating:'5',source:'UTV Movies'},
  {id:12,title:'Moonfall',description:"no words",date:'21 May 2022',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9gZEV7R7jgSWULYQDBJbu57XExrd-MtrqIlNzMiOJyA&s',category:'sifi',rating:'5',source:'UTV Movies'},
  {id:13,title:'Journey to the center of the Earth',description:"Best Romatic anime movie",date:'21 May 2008',image:'https://m.media-amazon.com/images/M/MV5BMTk1MzY1MzU1MF5BMl5BanBnXkFtZTcwOTQ2NjM3MQ@@._V1_FMjpg_UX1000_.jpg',category:'sifi',rating:'5',source:'UTV Movies'},
  {id:14,title:'The Meg 2',description:"American Movie",date:'21 May 2022',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS8ofhv20sJIHh-fKhU287g8PpHqxlt5NV7Y2vfbnE3A&s',category:'sifi',rating:'5',source:'UTV Movies'},
  {id:15,title:'Your Name',description:"Japanese Anime",date:'18 Nov 2021',image:'https://hips.hearstapps.com/hmg-prod/images/screen-shot-2023-04-18-at-1-03-20-pm-643ecd6628f9d.png',category:'anime',rating:'5',source:'UTV Movies'},
  {id:16,title:'Demon Slayer - The Roar of Victory',description:"Japanese Manga tail of Hashira's",date:' 12 Mar 2024',image:'https://m.media-amazon.com/images/M/MV5BNWFkNzI5NDQtY2QyZS00NGE2LWJiNDEtMTI5ZTFmNDE0ZjcwXkEyXkFqcGdeQXVyNjk1NzU1Mjk@._V1_.jpg',category:'anime',rating:'5',source:'UTV Movies'},
  {id:17,title:'Death Note',description:"Notes of Death",date:'5 April 2006',image:'https://m.media-amazon.com/images/M/MV5BNjRiNmNjMmMtN2U2Yi00ODgxLTk3OTMtMmI1MTI1NjYyZTEzXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg',category:'anime',rating:'5',source:'UTV Movies'},
  {id:18,title:'Naruto',description:"Story of a boy woh turned himself from most hatred person to most loved persson- Dattebayo",date:'21 May 2022',image:'https://m.media-amazon.com/images/M/MV5BZGFiMWFhNDAtMzUyZS00NmQ2LTljNDYtMmZjNTc5MDUxMzViXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg',category:'anime',rating:'5',source:'UTV Movies'},

]

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
  }, []);

  
  const fetchMoreData = async () => {
    let nextPage = page + 1;
    let url = `http://localhost:8000/api?category=${props.category}&page=${page}&pageSize=${props.pageSize}`;
    setPage(nextPage);

    let data = await fetch(url);
    let parsedData = await data.json();

    setMovie(movieArray.concat(parsedData.movie));
    setTotalResults(parsedData.totalResults);
  };

  return (
    <div>
      <>
        <h1 className="text-center" style={{ margin: '35px 0px marginTop', marginTop: '100px' }}>MoviesHub - Top {capitalizeFirstLetter(props.category)} Movies</h1>
        {/* {LoadingBar && <Spinner />} */}
        {movieArray && (
          <InfiniteScroll
            dataLength={movieArray.length}
            next={fetchMoreData}
            hasMore={movieArray.length !== totalResults}
            loader={<Spinner />}
          >
            <div className="container">
              <div className="row">
                {movieArray.map((element,index) => {
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
