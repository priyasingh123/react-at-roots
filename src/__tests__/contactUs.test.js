
import ContactUs from '../components/ContactUs'
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'

describe ("ContactUs Component", ()=> {
    test ('renders correctly', () => {
        //this is rendered onto jsdom
        render (<ContactUs/>)
        const heading = screen.getByRole('heading', {
            name: 'Contact Us'
        })

        //assertion
        expect(heading).toBeInTheDocument()
    })
})