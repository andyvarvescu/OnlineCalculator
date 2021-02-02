import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import toJSON from 'enzyme-to-json'
import App from '../App'
import NavigationItem from '../components/Toolbar/NavigationItem'

describe('Components rendering', () => {
    it("renders without crashing", () => {
        const wrapper = shallow(
            <Router>
                <App />
            </Router>
        )
        expect(toJSON(wrapper)).toMatchSnapshot()
    })
})
