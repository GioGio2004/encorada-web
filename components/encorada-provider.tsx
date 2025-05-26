// "use client"

// import { initialize, setVariable, getVariable, removeVariable, variableExists, clearVariables } from "encorada"
// import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

// // Define the context type with all Encorada functions
// type EncoradaContextType = {
//   isInitialized: boolean
//   error: string | null
//   // Include all Encorada functions
//   setVariable: typeof setVariable
//   getVariable: typeof getVariable
//   removeVariable: typeof removeVariable
//   variableExists: typeof variableExists
//   clearVariables: typeof clearVariables
// }

// // Create the context with default values
// const EncoradaContext = createContext<EncoradaContextType | null>(null)

// // Provider props
// interface EncoradaProviderProps {
//   children: ReactNode
// }

// export function EncoradaProvider({ children }: EncoradaProviderProps) {
//   const [isInitialized, setIsInitialized] = useState(false)
//   const [error, setError] = useState<string | null>(null)

//   // Initialize Encorada when the provider mounts
//   useEffect(() => {
//     // Use the environment variable for the secret key
//     const key = process.env.ENCORADA_SECRET_KEY

//     if (!key) {
//       setError("Missing secret key. Please set ENCORADA_SECRET_KEY in your .env.local file.")
//       return
//     }

//     // Initialize Encorada with the secret key
//     initialize(key)
//       .then((success) => {
//         if (success) {
//           setIsInitialized(true)
//         } else {
//           setError("Failed to initialize Encorada")
//         }
//       })
//       .catch((err) => {
//         console.error("Encorada initialization error:", err)
//         setError(`Error initializing Encorada: ${err.message}`)
//       })
//   }, [])

//   // Create the context value with all Encorada functions
//   const contextValue: EncoradaContextType = {
//     isInitialized,
//     error,
//     setVariable,
//     getVariable,
//     removeVariable,
//     variableExists,
//     clearVariables,
//   }

//   return <EncoradaContext.Provider value={contextValue}>{children}</EncoradaContext.Provider>
// }

// // Custom hook to use Encorada
// export function useEncorada() {
//   const context = useContext(EncoradaContext)

//   if (!context) {
//     throw new Error("useEncorada must be used within an EncoradaProvider")
//   }

//   return context
// }
