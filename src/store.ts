import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { usersApi } from './features/api/ApiSlice'

export const store = configureStore({
    reducer: {
        [usersApi.reducerPath]: usersApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(usersApi.middleware),
})

// dispatch does not take types for thunks into account and thus the return type is typed incorrectly. Please use the actual Dispatch type from the store as decsribed in the documentation. Ref: https://stackoverflow.com/questions/63811401/property-then-does-not-exist-on-type-asyncthunkaction-redux-toolkit
export const useAppDispatch: () => typeof store.dispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector

// Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>