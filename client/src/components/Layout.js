import React from 'react'
import Toolbar from './Toolbar/Toolbar'
import classes from './Layout.module.css'

const Layout = ({ children }) => (
    <div className={classes.layout}>
        <Toolbar />
        <main className={classes.main}>
            {children}
        </main>
    </div>
)

export default Layout