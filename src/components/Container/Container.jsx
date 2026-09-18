import './Container.css'

const Container = ({ children }) => {
    return (
        <div className="mrContainer">
            {children}
        </div>
    )
}

export default Container