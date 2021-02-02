import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import NavigationItem from '../../components/Toolbar/NavigationItem'

it("renders the right text received", () => {
    const wrapper = mount(
        <Router>
            <NavigationItem link="/">
                Calculator
            </NavigationItem>
        </Router>
    )
    const link = wrapper.find('NavLink')
    expect(link.text()).toBe("Calculator")
})
