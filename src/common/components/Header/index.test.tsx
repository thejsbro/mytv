import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import {Header} from '.'
import {renderWithRedux} from 'common/test-utils/renderWithRedux'

  test('can render with redux with defaults', () => {
    const {getByTestId} = renderWithRedux(
      <Header />,
    )
    expect(getByTestId('header')).toHaveTextContent('RakutenTV')
  })

  test('can render with redux custom', () => {
    const {getByTestId} = renderWithRedux(
      <Header />, {initialState: {header: {title: 'customHeader'}}}
    )
    expect(getByTestId('header')).toHaveTextContent('customHeader')
  })