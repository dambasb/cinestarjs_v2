import axios from 'axios'
import {
  GET_POPULAR_MOVIES,
  GET_ACTION_MOVIES,
  GET_ADVENTURE_MOVIES,
  GET_COMEDY_MOVIES,
  GET_DOCUMENTARY_MOVIES,
  GET_DRAMA_MOVIES,
  GET_FAMILY_MOVIES,
  GET_FANTASY_MOVIES,
  GET_HORROR_MOVIES,
  GET_MYSTERY_MOVIES,
  GET_ROMANCE_MOVIES,
  GET_SCIENCE_FICTION_MOVIES,
  MOVIE_ERROR,
} from '../constants/moviesConstants'

const { REACT_APP_MY_ENV } = process.env

/**
 * TODO Change axios link
 *
 */
export const getPopularMovies = () => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/discover/Movies?api_key=${REACT_APP_MY_ENV}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&primary_release_year=2022&with_genres=Action&with_watch_monetization_types=flatrate`
    )

    dispatch({ type: GET_POPULAR_MOVIES, payload: res.data.results })
  } catch (err) {
    dispatch({
      type: MOVIE_ERROR,
      payload: `Something is wrong with Public Reducer`,
    })
  }
}

/**
 *  @status Public
 *
 *  @description GET all Action Movies
 *
 */

export const getActionMovies = () => async (dispatch) => {
  const genre = 'Action'
  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${REACT_APP_MY_ENV}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&primary_release_year=2022&with_genres=${genre}&with_watch_monetization_types=flatrate`
    )

    dispatch({ type: GET_ACTION_MOVIES, payload: res.data.results })
  } catch (err) {
    dispatch({
      type: MOVIE_ERROR,
      payload: `Something is wrong with ${genre} Reducer`,
    })
  }
}

/**
 *  @status Public
 *
 *  @description Get all Adventure Movies
 *
 */

export const getAdventureMovies = () => async (dispatch) => {
  const genre = 'Adventure'
  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${REACT_APP_MY_ENV}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&primary_release_year=2022&with_genres=${genre}&with_watch_monetization_types=flatrate`
    )

    dispatch({ type: GET_ADVENTURE_MOVIES, payload: res.data.results })
  } catch (err) {
    dispatch({
      type: MOVIE_ERROR,
      payload: `Something is wrong with ${genre} Reducer`,
    })
  }
}

/**
 *  @status Public
 *
 *  @description Get all Comedy Movies
 *
 */

export const getComedyMovies = () => async (dispatch) => {
  const genre = 'Comedy'
  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${REACT_APP_MY_ENV}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&primary_release_year=2022&with_genres=${genre}&with_watch_monetization_types=flatrate`
    )

    dispatch({ type: GET_COMEDY_MOVIES, payload: res.data.results })
  } catch (err) {
    dispatch({
      type: MOVIE_ERROR,
      payload: `Something is wrong with ${genre} Reducer`,
    })
  }
}

/**
 *  @status Public
 *
 *  @description Get all Documentary Movies
 *
 */

export const getDocumentaryMovies = () => async (dispatch) => {
  const genre = 'Documentary'
  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${REACT_APP_MY_ENV}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&primary_release_year=2022&with_genres=${genre}&with_watch_monetization_types=flatrate`
    )

    dispatch({ type: GET_DOCUMENTARY_MOVIES, payload: res.data.results })
  } catch (err) {
    dispatch({
      type: MOVIE_ERROR,
      payload: `Something is wrong with ${genre} Reducer`,
    })
  }
}

/**
 *  @status Public
 *
 *  @description Get all Drama Movies
 *
 */

export const getDramaMovies = () => async (dispatch) => {
  const genre = 'Drama'
  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${REACT_APP_MY_ENV}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&primary_release_year=2022&with_genres=${genre}&with_watch_monetization_types=flatrate`
    )

    dispatch({ type: GET_DRAMA_MOVIES, payload: res.data.results })
  } catch (err) {
    dispatch({
      type: MOVIE_ERROR,
      payload: `Something is wrong with ${genre} Reducer`,
    })
  }
}

/**
 *  @status Public
 *
 *  @description Get all Family Movies
 *
 */

export const getFamilyMovies = () => async (dispatch) => {
  const genre = 'Family'
  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${REACT_APP_MY_ENV}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&primary_release_year=2022&with_genres=${genre}&with_watch_monetization_types=flatrate`
    )

    dispatch({ type: GET_FAMILY_MOVIES, payload: res.data.results })
  } catch (err) {
    dispatch({
      type: MOVIE_ERROR,
      payload: `Something is wrong with ${genre} Reducer`,
    })
  }
}

/**
 *  @status Public
 *
 *  @description Get all Fantasy Movies
 *
 */

export const getFantasyMovies = () => async (dispatch) => {
  const genre = 'Fantasy'
  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${REACT_APP_MY_ENV}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&primary_release_year=2022&with_genres=${genre}&with_watch_monetization_types=flatrate`
    )

    dispatch({ type: GET_FANTASY_MOVIES, payload: res.data.results })
  } catch (err) {
    dispatch({
      type: MOVIE_ERROR,
      payload: `Something is wrong with ${genre} Reducer`,
    })
  }
}

/**
 *  @status Public
 *
 *  @description Get all Horror Movies
 *
 */

export const getHorrorMovies = () => async (dispatch) => {
  const genre = 'Horror'
  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${REACT_APP_MY_ENV}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&primary_release_year=2022&with_genres=${genre}&with_watch_monetization_types=flatrate`
    )

    dispatch({ type: GET_HORROR_MOVIES, payload: res.data.results })
  } catch (err) {
    dispatch({
      type: MOVIE_ERROR,
      payload: `Something is wrong with ${genre} Reducer`,
    })
  }
}

/**
 *  @status Public
 *
 *  @description Get all Mystery Movies
 *
 */

export const getMysteryMovies = () => async (dispatch) => {
  const genre = 'Mystery'
  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${REACT_APP_MY_ENV}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&primary_release_year=2022&with_genres=${genre}&with_watch_monetization_types=flatrate`
    )

    dispatch({ type: GET_MYSTERY_MOVIES, payload: res.data.results })
  } catch (err) {
    dispatch({
      type: MOVIE_ERROR,
      payload: `Something is wrong with ${genre} Reducer`,
    })
  }
}

/**
 *  @status Public
 *
 *  @description Get all Romance Movies
 *
 */

export const getRomanceMovies = () => async (dispatch) => {
  const genre = 'Romance'
  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${REACT_APP_MY_ENV}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&primary_release_year=2022&with_genres=${genre}&with_watch_monetization_types=flatrate`
    )

    dispatch({ type: GET_ROMANCE_MOVIES, payload: res.data.results })
  } catch (err) {
    dispatch({
      type: MOVIE_ERROR,
      payload: `Something is wrong with ${genre} Reducer`,
    })
  }
}

/**
 *  @status Public
 *
 *  @description Get all Science Fiction Movies
 *
 */

export const getScienceFictionMovies = () => async (dispatch) => {
  const genre = 'Science Fiction'
  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${REACT_APP_MY_ENV}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&primary_release_year=2022&with_genres=${genre}&with_watch_monetization_types=flatrate`
    )

    dispatch({ type: GET_SCIENCE_FICTION_MOVIES, payload: res.data.results })
  } catch (err) {
    dispatch({
      type: MOVIE_ERROR,
      payload: `Something is wrong with ${genre} Reducer`,
    })
  }
}
