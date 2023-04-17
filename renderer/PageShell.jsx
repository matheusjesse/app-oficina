import React from 'react'
import './PageShell.css'
import { PageContextProvider } from './usePageContext'
import DataProvider from '../context/DataProvider'

export { PageShell }

function PageShell({ pageContext, children }) {
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
          <DataProvider>
            <Content>{children}</Content>
          </DataProvider>
      </PageContextProvider>
    </React.StrictMode>
  )
}

function Content({ children }) {
  return (
    <div>
      {children}
    </div>
  )
}

