import { screen, waitForElementToBeRemoved } from '@testing-library/react'
import { renderWithProviders, setup } from 'utils/test'
import userEvent from '@testing-library/user-event'
import PurchaseForm from '..'

setup.fetch().mockResolvedValue({
  json: async () => ({
    id: 'payment-uuid',
  }),
  status: 200,
} as any)

describe('<PurchaseForm />', () => {
  test('form should work correctly', async () => {
    renderWithProviders(<PurchaseForm />)

    const submitButton = screen.getByRole('button', { name: 'Confirm' })
    expect(submitButton).toBeDisabled()
    userEvent.type(screen.getByLabelText('Sending coins character'), 'Arieswar')

    expect(submitButton).toBeEnabled()
    userEvent.click(submitButton)

    await waitForElementToBeRemoved(screen.getByLabelText('Loading'))

    expect(screen.getByText('payment-uuid')).toBeInTheDocument()
    expect(screen.getByText('Arieswar'))

    userEvent.click(screen.getByRole('button', { name: /Edit your order/gi }))

    expect(screen.getByLabelText('Sending coins character')).toBeInTheDocument()
    expect(screen.getByText('Arieswar')).toBeInTheDocument()
  })
})
