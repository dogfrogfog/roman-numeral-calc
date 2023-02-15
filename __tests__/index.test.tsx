import { render } from '@testing-library/react'

import Home from '@/pages/index'

describe('Component: Home page', () => {
  it('renders component correctly', () => {
    const { container } = render(<Home />)

    expect(container).toMatchSnapshot()
  })
})
