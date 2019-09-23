import React from 'react';
import {withLoader} from './withLoader';
import {renderWithRedux} from 'common/test-utils/renderWithRedux';
import {render, cleanup} from '@testing-library/react'

afterEach(cleanup)

class MockApp extends React.Component<{loading: boolean}> {
    render () {
      return (
        <p>
          Test App
        </p>
      )
    }
  }

const MockWithHOC = (withLoader(MockApp))

test('can render when loading', () => {
    const { container, getByTestId } = renderWithRedux(
        <MockWithHOC loading={true} />)
        
    expect(getByTestId('loading')).toBeInTheDocument()
    expect(container).toMatchSnapshot()
})

test('can render when loaded', () => {
    const { container, getByText } = renderWithRedux(
        <MockWithHOC loading={false} />)

    expect(getByText(/Test App/i)).toBeInTheDocument()

    expect(container).toMatchSnapshot()
})
