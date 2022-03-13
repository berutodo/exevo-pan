import { screen, fireEvent } from '@testing-library/react'
import { renderWithProviders } from 'utils/test'
import SpritePortrait from '..'

describe('<SpritePortrait />', () => {
  test('should render correctly with src', () => {
    renderWithProviders(
      <SpritePortrait alt="Red skull" width={32} height={32} src="a" />,
    )

    const imgElement = screen.getByAltText('Red skull')
    const loadingElement = screen.getByRole('alert')

    expect(imgElement).toHaveStyle('opacity: 0')
    expect(loadingElement).toBeVisible()

    fireEvent.load(imgElement)
    expect(imgElement).toHaveStyle('opacity: 1')
    expect(loadingElement).not.toBeVisible()
  })
})
