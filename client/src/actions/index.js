export const spellsHasErrored = () => ({
  type: 'SPELLS_HAS_ERRORED'
})

export const spellsIsLoading = () => ({
  type: 'SPELLS_IS_LOADING'
})

export const spellsFetchDataSuccess = (items) => ({
  type: 'SPELLS_FETCH_DATA_SUCCESS',
  items
})

export function spellsFetchData(url) {
  return (dispatch) => {
    dispatch(spellsIsLoading());
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        dispatch(spellsIsLoading())
        return response;
      })
      .then((response) => response.json())
      .then((items) => dispatch(spellsFetchDataSuccess(items)))
      .catch(() => dispatch(spellsHasErrored()))
  }
}