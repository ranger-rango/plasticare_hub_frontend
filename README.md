# Plasticare Hub Frontend  

## System Setup Guidlines  
  Fork the reposisotry.  
  Make it private.  
### Prerequisites  
  1. You have pnpm installed. (npm can also be used, by first deleting the tsconfig.json)  
### Configuration Files  
#### Configuring the .env.production file  
  1. Edit the .env.production file.  
  2. Edit the variables in the "{}" as needed, as shown below  
  ```bash
      VITE_BASE_URL=/api
      VITE_BASE_HOST={render-backend-url/api}

      VITE_BOOK_CONSULTATION_ENDPOINT=/consultation/book
      VITE_GET_BOOKED_CONSULTATION_ENDPOINT=/consultations
      VITE_UPDATE_CONSULTATION_ENDPOINT=/consultation
      VITE_SEND_ENQUIRY_ENDPOINT=/free-enquiry
      VITE_GET_ENQUIRIES_ENDPOINT=/free-enquiries
      VITE_UPDATE_ENQUIRY_ENDPOINT=/free-enquiry
      VITE_BOOK_TOUR_ENDPOINT=/facility-tours/book
      VITE_GET_TOURS_ENDPOINT=/facility-tours
      VITE_UPDATE_TOUR_ENDPOINT=/facility-tour
      VITE_CREATE_USER_ENDPOINT=/uam/user
      VITE_REGISTER_USER_ENDPOINT=/uam/auth/register
      VITE_LOGIN_USER_ENDPOINT=/uam/auth/login
      VITE_DEACTIVATE_USER_ENDPOINT=/uam/user/deactivate
      VITE_GET_USERS_ENDPOINT=/uam/users
      VITE_LOGOUT_ENDPOINT=/uam/auth/logout
  ```  

### Add Project to Vercel  
  1. Go to vercel.com, create an account if you don't have one.
  2. Click Add New, then project.  
  3. Add you github.  
  4. Modify the repository permissions to allow vercel accesss to the frontend repo.  
  5. Deploy.  
  6. If a custom domain is available, go to domains and link the domain (A domain can also be purchased).  

  Your frontend should be running at this point.  
  Have fun.  