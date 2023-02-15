import { render, fireEvent } from '@testing-library/react'

import InputSection from '@/components/InputSection'

const setInputValueMock = jest.fn()

describe('Component: InputSection', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders component correctly', () => {
    const { container } = render(
      <InputSection
        setInputValue={setInputValueMock}
        inputValue={33}
      />)

    expect(container.querySelector('h3')).toBeVisible()
    expect(container.querySelector('input')).toHaveValue(33)
    expect(setInputValueMock).not.toHaveBeenCalled()
  })

  describe('input change event', () => {
    it('should call setInputValue, because value is the range', () => {
      const { container } = render(<InputSection setInputValue={setInputValueMock} />)
      const inputElement = container.querySelector('input') as HTMLInputElement

      fireEvent.change(inputElement, { target: { value: '999' } })
      expect(setInputValueMock).toHaveBeenNthCalledWith(1, 999)
    })

    it('should NOT call setInputValue, because value out of the range', () => {
      const { container } = render(<InputSection setInputValue={setInputValueMock} />)
      const inputElement = container.querySelector('input') as HTMLInputElement

      fireEvent.change(inputElement, { target: { value: '1000000' } })
      expect(setInputValueMock).not.toHaveBeenCalled()
    })

    it('should call setInputValue when input is empty', () => {
      const { container } = render(<InputSection setInputValue={setInputValueMock} inputValue={99} />)
      const inputElement = container.querySelector('input') as HTMLInputElement

      fireEvent.change(inputElement, { target: { value: '' } })
      expect(setInputValueMock).toHaveBeenNthCalledWith(1, undefined)
    })
  })
})
