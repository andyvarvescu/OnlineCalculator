import NavigationItem from './NavigationItem'
import classes from './NavigationItems.module.css'

const NavigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact>Calculator</NavigationItem>
        <NavigationItem link="/history">History</NavigationItem>
    </ul>
)

export default NavigationItems