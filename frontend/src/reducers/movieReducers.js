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

/**
 *  Popular MOVIES reducer
 */

export const popularMoviesReducer = (
  state = {
    popularMovies: [],
  },

  action
) => {
  const { type, payload } = action
  switch (type) {
    case GET_POPULAR_MOVIES:
      return { popularMovies: payload }
    case MOVIE_ERROR:
      return {
        ...state,
        error: payload,
      }
    default:
      return state
  }
}

/**
 *  Action MOVIES reducer
 */

export const actionMoviesReducer = (
  state = {
    actionMovies: [],
  },

  action
) => {
  const { type, payload } = action
  switch (type) {
    case GET_ACTION_MOVIES:
      return { actionMovies: payload }
    case MOVIE_ERROR:
      return {
        ...state,
        error: payload,
      }
    default:
      return state
  }
}

/**
 *  Adventure MOVIES reducer
 */

export const adventureMoviesReducer = (
  state = {
    adventureMovies: [],
  },

  action
) => {
  const { type, payload } = action
  switch (type) {
    case GET_ADVENTURE_MOVIES:
      return { adventureMovies: payload }
    case MOVIE_ERROR:
      return {
        ...state,
        error: payload,
      }
    default:
      return state
  }
}

/**
 *  Comedy MOVIES reducer
 */

export const comedyMoviesReducer = (
  state = {
    comedyMovies: [],
  },

  action
) => {
  const { type, payload } = action
  switch (type) {
    case GET_COMEDY_MOVIES:
      return { comedyMovies: payload }
    case MOVIE_ERROR:
      return {
        ...state,
        error: payload,
      }
    default:
      return state
  }
}

/**
 *  Documentary MOVIES reducer
 */

export const documentaryMoviesReducer = (
  state = {
    documentaryMovies: [],
  },

  action
) => {
  const { type, payload } = action
  switch (type) {
    case GET_DOCUMENTARY_MOVIES:
      return { documentaryMovies: payload }
    case MOVIE_ERROR:
      return {
        ...state,
        error: payload,
      }
    default:
      return state
  }
}

/**
 *  Drama MOVIES reducer
 */

export const dramaMoviesReducer = (
  state = {
    dramaMovies: [],
  },

  action
) => {
  const { type, payload } = action
  switch (type) {
    case GET_DRAMA_MOVIES:
      return { dramaMovies: payload }
    case MOVIE_ERROR:
      return {
        ...state,
        error: payload,
      }
    default:
      return state
  }
}

/**
 *  Family MOVIES reducer
 */

export const familyMoviesReducer = (
  state = {
    familyMovies: [],
  },

  action
) => {
  const { type, payload } = action
  switch (type) {
    case GET_FAMILY_MOVIES:
      return { familyMovies: payload }
    case MOVIE_ERROR:
      return {
        ...state,
        error: payload,
      }
    default:
      return state
  }
}

/**
 *  Fantasy MOVIES reducer
 */

export const fantasyMoviesReducer = (
  state = {
    fantasyMovies: [],
  },

  action
) => {
  const { type, payload } = action
  switch (type) {
    case GET_FANTASY_MOVIES:
      return { fantasyMovies: payload }
    case MOVIE_ERROR:
      return {
        ...state,
        error: payload,
      }
    default:
      return state
  }
}

/**
 *  Horror MOVIES reducer
 */

export const horrorMoviesReducer = (
  state = {
    horrorMovies: [],
  },

  action
) => {
  const { type, payload } = action
  switch (type) {
    case GET_HORROR_MOVIES:
      return { horrorMovies: payload }
    case MOVIE_ERROR:
      return {
        ...state,
        error: payload,
      }
    default:
      return state
  }
}

/**
 *  Mystery MOVIES reducer
 */

export const mysteryMoviesReducer = (
  state = {
    mysteryMovies: [],
  },

  action
) => {
  const { type, payload } = action
  switch (type) {
    case GET_MYSTERY_MOVIES:
      return { mysteryMovies: payload }
    case MOVIE_ERROR:
      return {
        ...state,
        error: payload,
      }
    default:
      return state
  }
}

/**
 *  Romance MOVIES reducer
 */

export const romanceMoviesReducer = (
  state = {
    romanceMovies: [],
  },

  action
) => {
  const { type, payload } = action
  switch (type) {
    case GET_ROMANCE_MOVIES:
      return { romanceMovies: payload }
    case MOVIE_ERROR:
      return {
        ...state,
        error: payload,
      }
    default:
      return state
  }
}

/**
 *  Science Fiction MOVIES reducer
 */

export const scienceFictionMoviesReducer = (
  state = {
    scienceFictionMovies: [],
  },

  action
) => {
  const { type, payload } = action
  switch (type) {
    case GET_SCIENCE_FICTION_MOVIES:
      return { scienceFictionMovies: payload }
    case MOVIE_ERROR:
      return {
        ...state,
        error: payload,
      }
    default:
      return state
  }
}
