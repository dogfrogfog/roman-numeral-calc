import { render } from '@testing-library/react'

import OutputSection from '@/components/OutputSection'

describe('Component: OutputSection', () => {
  it('renders component correctly', () => {
    const { container } = render(<OutputSection romanNumber='XX' />)

    expect(container).toMatchSnapshot()
  })
})
