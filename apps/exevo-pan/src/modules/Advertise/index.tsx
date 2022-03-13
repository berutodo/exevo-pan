import { useTranslations } from 'contexts/useTranslation'
import NextLink from 'next/link'
import { routes } from 'Constants'
import { FormProvider, useForm } from './contexts/Form'
import {
  AuctionSearch,
  AdConfiguration,
  Checkout,
  CharacterCard,
  PaymentDetails,
} from './components'
import * as S from './styles'

const FAQ_SLUG = 'how-highlighting-works'

const Form = (): JSX.Element => {
  const {
    translations: { advertise },
  } = useTranslations()

  const { currentStep, finished, dispatch } = useForm()

  const setStep = (newStep: number) => {
    if (newStep < currentStep && !finished)
      dispatch({ type: 'SET_STEP', newStep })
  }

  const stepItems = [
    { title: advertise.StepItems.Select, onClick: setStep },
    { title: advertise.StepItems.Configure, onClick: setStep },
    { title: advertise.StepItems.Checkout },
  ]

  const FormSteps = [
    <AuctionSearch />,
    <AdConfiguration />,
    <Checkout />,
    <PaymentDetails />,
  ]

  return (
    <>
      <S.Title>
        {advertise.FAQText}{' '}
        <NextLink href={`${routes.BLOG}/${FAQ_SLUG}`}>FAQ</NextLink>
      </S.Title>
      <S.Stepper
        steps={stepItems}
        currentStep={currentStep}
        finished={finished}
      />
      <S.FormStepsWrapper>
        {FormSteps[currentStep]}
        <CharacterCard />
      </S.FormStepsWrapper>
    </>
  )
}

const AdvertiseGrid = (): JSX.Element => (
  <FormProvider>
    <S.Wrapper>
      <Form />
    </S.Wrapper>
  </FormProvider>
)

export default AdvertiseGrid
