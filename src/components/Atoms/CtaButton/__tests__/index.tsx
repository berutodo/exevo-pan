import { render, screen } from '@testing-library/react'
import CtaButton from '..'

describe('<CtaButton />', () => {
  test('it renders correctly', () => {
    render(<CtaButton data-testid="testid" />)
    expect(screen.getByTestId('testid')).toBeInTheDocument()
  })
})
