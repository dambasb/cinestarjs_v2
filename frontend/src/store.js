import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
  popularMoviesReducer,
  actionMoviesReducer,
  adventureMoviesReducer,
  comedyMoviesReducer,
  documentaryMoviesReducer,
  dramaMoviesReducer,
  familyMoviesReducer,
  fantasyMoviesReducer,
  horrorMoviesReducer,
  mysteryMoviesReducer,
  romanceMoviesReducer,
  scienceFictionMoviesReducer,
} from './reducers/movieReducers'

const reducer = combineReducers({
  popularMovies: popularMoviesReducer,
  actionMovies: actionMoviesReducer,
  adventureMovies: adventureMoviesReducer,
  comedyMovies: comedyMoviesReducer,
  documentaryMovies: documentaryMoviesReducer,
  dramaMovies: dramaMoviesReducer,
  familyMovies: familyMoviesReducer,
  fantasyMovies: fantasyMoviesReducer,
  horrorMovies: horrorMoviesReducer,
  mysteryMovies: mysteryMoviesReducer,
  romanceMovies: romanceMoviesReducer,
  scienceFictionMovies: scienceFictionMoviesReducer,
})

const initialState = {}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
