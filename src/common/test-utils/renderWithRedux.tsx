import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import {render} from '@testing-library/react'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from 'common/reducers'

export function renderWithRedux(
    ui: JSX.Element,
    {initialState, store = createStore(reducers, initialState)}: any = {},
  ) {
    return {
      ...render(<Provider store={store}>{ui}</Provider>),
      store,
    }
  }