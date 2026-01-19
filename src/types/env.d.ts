interface ImportMetaEnv {
  VITE_WHATSAPP_PHONE: any;
  readonly VITE_BOOK_CONSULTATION_ENDPOINT: string;
  readonly VITE_BASE_URL: string
  readonly VITE_BASE_HOST: string

  readonly VITE_BOOK_CONSULTATION_ENDPOINT: string
  readonly VITE_GET_BOOKED_CONSULTATION_ENDPOINT: string
  readonly VITE_UPDATE_CONSULTATION_ENDPOINT: string
  readonly VITE_SEND_ENQUIRY_ENDPOINT: string
  readonly VITE_GET_ENQUIRIES_ENDPOINT: string
  readonly VITE_UPDATE_ENQUIRY_ENDPOINT: string
  readonly VITE_BOOK_TOUR_ENDPOINT: string
  readonly VITE_GET_TOURS_ENDPOINT: string
  readonly VITE_UPDATE_TOUR_ENDPOINT: string
  readonly VITE_CREATE_USER_ENDPOINT: string
  readonly VITE_REGISTER_USER_ENDPOINT: string
  readonly VITE_LOGIN_USER_ENDPOINT: string
  readonly VITE_DEACTIVATE_USER_ENDPOINT: string
  readonly VITE_GET_USERS_ENDPOINT: string
  readonly VITE_LOGOUT_ENDPOINT: string

  readonly VITE_WHATSAPP_PHONE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}