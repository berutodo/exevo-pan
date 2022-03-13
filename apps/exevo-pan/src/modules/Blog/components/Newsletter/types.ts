export type RegisterStatus = {
  status: RequestStatus
  message?: string
}

export type UseNewsletterState = {
  request: RegisterStatus
  register: (email: string, locale: string) => Promise<void>
}
