import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { Tweet } from '../../shared/models/tweet.model';
import { createReducer, on, Action } from '@ngrx/store';
import * as TweetActions from './tweets.actions';
import { TweetState } from './tweets.model';

/**
 *  Step 1/4, define the Entity State model
 *
 * An entity is a dictonary
 * entity has 2 properties:
 *
 *  entities
 *  ids (correspdong to the entities's key)
 */
export interface TweetEntityState extends EntityState<Tweet> {
  lastUpdated: number,
  error: boolean,
  errorMsg: string,
  loading: boolean,
}


/**
 * Step 2/4, Create the Entity Adapter
 *
 * Optional:
 * Create the adapter it lets u define a selectId if the id field is not named "id", also
   can define a sortComparer field

   Default sort order will be sorted on the "id"
 */

export function selectTweetId(t: Tweet): string {
  //In this case this would be optional since primary key is id
  return t.id;
}

export function sortByAuthorName(a: Tweet, b: Tweet): number {
  if (a.userName > b.userName) {
    return 1;
  }
  return -1;
}
export const adapter = createEntityAdapter<Tweet>({
  selectId: selectTweetId,
  sortComparer: sortByAuthorName,
});



/**
 * Step 3/4
 *
 * Create the initital state with adapter
 */
export const initialTweetState = adapter.getInitialState({
  // additional entity state properties
  loading: false,
  error: false,
  errorMsg: null,
  lastUpdated: 0,
});


/**
 * Step 4/4
 *
 * Create the reducers
 *
 *
 *  addOne: Add one entity to the collection.
    addMany: Add multiple entities to the collection.

    setAll: Replace current collection with provided collection.
    setOne: Add or Replace one entity in the collection.

    removeOne: Remove one entity from the collection.
    removeMany: Remove multiple entities from the collection, by id or by predicate.
    removeAll: Clear entity collection.

    updateOne: Update one entity in the collection. Supports partial updates.
    updateMany: Update multiple entities in the collection. Supports partial updates.

    upsertOne: Add or Update one entity in the collection. Supports partial updates.
    upsertMany: Add or Update multiple entities in the collection. Supports partial updates.

    mapOne: Update one entity in the collection by defining a map function.
    map: Update multiple entities in the collection by defining a map function, similar to Array.map.
 */
export const tweetsEntityReducer = createReducer(
  initialTweetState,

  on(TweetActions.getAllTweetsStart, (state) => {
    return  {
      ...state,
      loading: true,
      error: false,
      errorMsg: null,
    }
  }),

  on(TweetActions.getAllTweetsSuccess, (state, { allTweets }) => {
    const dateTime = new Date().getTime();

    return adapter.setAll(allTweets, {
      ...state,
      loading: false,
      error: false,
      lastUpdated: dateTime
    });
  }),

  on(TweetActions.postTweetStart, (state, { tweetToPost }) => {
    return adapter.upsertOne(tweetToPost, state);
  }),

  on(TweetActions.editTweetStart, (state, { update }) => {
    return adapter.updateOne(update, state)
  }),
)

/**
 * Export function
 *
 * @param state
 * @param action
 */
export function tweetsReducer(state: TweetEntityState | undefined, action: Action) {
  return tweetsEntityReducer(state, action);
}
