import React from "react";

function useLocalStorage(itemName, initialValue) {

  const [state, dispatch] = React.useReducer(reducer, initialState({ initialValue }))
  const {
    sincronizedItem,
    loading,
    error,
    item,
  } = state

  // const [sincronizedItem, setSincronizedItem] = React.useState(true);
  // const [loading, setLoading] = React.useState(true);
  // const [error, setError] = React.useState(false);
  // const [item, setItem] = React.useState(initialValue);
  const onError = (error) => dispatch({ type: actionTypes.error, payload: error })
  const onSuccess = (item) => dispatch({ type: actionTypes.success, payload: item })
  const onSave = (item) => dispatch({ type: actionTypes.save, payload: item })
  const onSincronize = () => dispatch({ type: actionTypes.sincronize })

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }
        onSuccess(parsedItem)
        // setItem(parsedItem);
        // setLoading(false);
        // setSincronizedItem(true);
      } catch (e) {
        onError(e)
        // setError(e);
      }
    }, 3000);
  }, [sincronizedItem]);

  const saveItem = (newItem) => {
    try {
      const stringifiedItems = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItems);
      onSave(newItem)
      //setItem(newItem);
    } catch (e) {
      onError(e)
    }
  };

  const sincronizeITem = () => {
    onSincronize()
    // setLoading(true)
    // setSincronizedItem(false)
  }

  return {
    item,
    saveItem,
    loading,
    error,
    sincronizeITem
  };
}

const initialState = ({ initialValue }) => ({
  sincronizedItem: true,
  loading: true,
  error: false,
  item: initialValue
})
const actionTypes = {
  error: 'ERROR',
  success: 'SUCCESS',
  save: 'SAVE',
  sincronize: 'SINCRONIZE',

}
const reducerObject = (state, payload) => ({
  [actionTypes.error]: {
    ...state,
    error: true
  },
  [actionTypes.success]: {
    ...state,
    error: false,
    loading: false,
    sincronizedItem: true,
    item: payload
  },
  [actionTypes.save]: {
    ...state,
    item: payload
  },
  [actionTypes.sincronize]: {
    ...state,
    sincronizedItem: false,
    loading: true,
  }
})

const reducer = (state, action) => {
  return reducerObject(state, action.payload)[action.type] || state
}

export { useLocalStorage };
