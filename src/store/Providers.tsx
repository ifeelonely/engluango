'use client';

import { Provider } from 'react-redux';
import { store } from './store';

interface ProvidersInt {
  children: React.ReactNode;
}

export function Providers({children}: ProvidersInt) {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}