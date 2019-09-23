import React from 'react'
import {withRouter} from 'react-router'
import {Router, Switch} from 'react-router-dom'
import {createMemoryHistory} from 'history'
import {render, fireEvent} from '@testing-library/react'
import {Routes} from './routes';

function renderWithRouter(
    ui: JSX.Element,
    {route = '/', history = createMemoryHistory({initialEntries: [route]})}: any = {},
  ) {
    return {
      ...render(<Router history={history}>{ui}</Router>),
      history,
    }
  }

test('full app rendering/navigating', () => {
    const {container, getByText, getByTestId} = renderWithRouter(<Routes />)
    expect(getByTestId('movies-main')).toBeDefined
    // fireEvent.click(getByTestId('go-to-list-of-movies-0'))
    // expect(getByTestId('list-of-movies')).toBeDefined
  })