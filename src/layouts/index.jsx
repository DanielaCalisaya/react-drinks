/* import React from 'react' */
import { Container } from 'react-bootstrap'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import styles from './index.module.css'
import PropTypes from 'prop-types'

export const MainLayout = ({children}) => {
  return (
    <div className={styles.main}>
        <Header/>
            <Container className='mt-5'>
                {children}
            </Container>
        <Footer/>
    </div>
  )
}

MainLayout.protTypes = {
    children : PropTypes.node.isRequired
}