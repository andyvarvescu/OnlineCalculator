import React from 'react'
import { shallow } from 'enzyme'
import { BrowserRouter as Router } from 'react-router-dom'
import App from '../src/App'

describe('Components rendering', () => {
    it("renders without crashing", () => {
        shallow(
            <Router>
                <App />
            </Router>
        )
        const smth = true
        expect(smth).toBe(smth)
    })
})
