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
    popularMOVIES: [],
  },

  action
) => {
  const { type, payload } = action
  switch (type) {
    case GET_POPULAR_MOVIES:
      return { MOVIES: payload }
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
    actionMOVIES: [],
  },

  action
) => {
  const { type, payload } = action
  switch (type) {
    case GET_ACTION_MOVIES:
      return { MOVIES: payload }
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
    adventureMOVIES: [],
  },

  action
) => {
  const { type, payload } = action
  switch (type) {
    case GET_ADVENTURE_MOVIES:
      return { MOVIES: payload }
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
    comedyMOVIES: [],
  },

  action
) => {
  const { type, payload } = action
  switch (type) {
    case GET_COMEDY_MOVIES:
      return { MOVIES: payload }
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
    documentaryMOVIES: [],
  },

  action
) => {
  const { type, payload } = action
  switch (type) {
    case GET_DOCUMENTARY_MOVIES:
      return { MOVIES: payload }
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
    dramaMOVIES: [],
  },

  action
) => {
  const { type, payload } = action
  switch (type) {
    case GET_DRAMA_MOVIES:
      return { MOVIES: payload }
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
    familyMOVIES: [],
  },

  action
) => {
  const { type, payload } = action
  switch (type) {
    case GET_FAMILY_MOVIES:
      return { MOVIES: payload }
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
    fantasyMOVIES: [],
  },

  action
) => {
  const { type, payload } = action
  switch (type) {
    case GET_FANTASY_MOVIES:
      return { MOVIES: payload }
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
    horrorMOVIES: [],
  },

  action
) => {
  const { type, payload } = action
  switch (type) {
    case GET_HORROR_MOVIES:
      return { MOVIES: payload }
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
    mysteryMOVIES: [],
  },

  action
) => {
  const { type, payload } = action
  switch (type) {
    case GET_MYSTERY_MOVIES:
      return { MOVIES: payload }
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
    romanceMOVIES: [],
  },

  action
) => {
  const { type, payload } = action
  switch (type) {
    case GET_ROMANCE_MOVIES:
      return { MOVIES: payload }
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
    scienceFictionMOVIES: [],
  },

  action
) => {
  const { type, payload } = action
  switch (type) {
    case GET_SCIENCE_FICTION_MOVIES:
      return { MOVIES: payload }
    case MOVIE_ERROR:
      return {
        ...state,
        error: payload,
      }
    default:
      return state
  }
}
