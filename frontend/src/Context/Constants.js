

export const apiURL = 
    process.env.NODE_ENV !== "Production" 
    ? "http://localhost:5000/api"
    : "some Deployed URL"; 

export const LOCAL_STORAGE_TOKEN_NAME = 'user__'

