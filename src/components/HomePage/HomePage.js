import React from 'react'
import useDocumentTitle from '../../hooks/useDocumentTitle'
import Intro from '../Intro/Intro'
import Services from '../Services/Services'

const HomePage = () => {
    useDocumentTitle('Ehsan academy | Home')
    return (
        <div>
            <Intro />
            <Services />
        </div>
    )
}

export default HomePage
