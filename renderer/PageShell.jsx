import React from 'react'
import './PageShell.css'
import { PageContextProvider } from './usePageContext'
// import { Link } from './Link'

export { PageShell }

function PageShell({ pageContext, children }) {
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
          <Content>{children}</Content>
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

