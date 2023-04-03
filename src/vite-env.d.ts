f/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_SIGNUP_URL: string
    readonly VITE_SIGNIN_URL: string
    // more env variables...
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}