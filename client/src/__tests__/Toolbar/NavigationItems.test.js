import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import NavigationItems from '../../components/Toolbar/NavigationItems'

describe("navigation items rendering", () => {
    const wrapper = mount(
        <Router>
            <NavigationItems />
        </Router>
    )

    it("must render the right navigation titles", () => {
        const firstNavItem = wrapper.find('NavLink').at(0)
        const secondNavItem = wrapper.find('NavLink').at(1)

        expect(firstNavItem.text()).toBe("Calculator")
        expect(secondNavItem.text()).toBe("History")
    })

    it("must point to the right URLs", () => {
        expect(wrapper.find('NavigationItem').at(0).prop("link")).toBe("/")
        expect(wrapper.find('NavigationItem').at(1).prop("link")).toBe("/history")
    })
})
