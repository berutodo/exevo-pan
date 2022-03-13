import { screen } from '@testing-library/react'
import { renderWithProviders } from 'utils/test'
import CoinsPayment from '..'
import { calculatePrice, readablePrice } from '../../../../utils'
import { mockedFormValues } from './mock'

jest.mock('../../../../contexts/Form', () => ({
  useForm: () => mockedFormValues,
}))

const DAYS_COUNT = mockedFormValues.selectedDates.length

describe('<CoinsPayment />', () => {
  test('should render all data correctly', () => {
    renderWithProviders(<CoinsPayment />)

    expect(
      screen.getByText(
        readablePrice.full.TIBIA_COINS(
          calculatePrice(DAYS_COUNT, 'TIBIA_COINS').totalPrice,
        ),
        { exact: false },
      ),
    ).toBeInTheDocument()
    expect(screen.getByText('Ksu', { exact: false })).toBeInTheDocument()
    expect(screen.getByText('Bubble', { exact: false })).toBeInTheDocument()
  })
})
