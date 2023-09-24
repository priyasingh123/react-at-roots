
import ContactUs from '../components/ContactUs'
import {render, screen} from '@testing-library/react'

describe ("ContactUs Component", ()=> {
    test ('renders correctly', () => {
        //this is rendered onto jsdom
        render (<ContactUs/>)
        const heading = screen.getByRole('heading')
        expect(heading).toBeInTheDocument()
    })
})