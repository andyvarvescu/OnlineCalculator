import NavigationItems from './NavigationItems'
import classes from './Toolbar.module.css'

const Toolbar = () => (
    <header className={classes.Toolbar}>
        <nav>
            <NavigationItems />
        </nav>
    </header>
)

export default Toolbar