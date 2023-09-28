import User from "../components/User"
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'

describe ('User Component renders correctly', () => {
    test ('heading renders correctly', () => {
        render (<User/>);
        const heading  = screen.getByRole('heading', {
            name: 'Priya Singh'
        })
        expect(heading).toBeInTheDocument()
    })

})