import BottomNavBar from "../components/BottomNavBar"

const styles = {
    mainContainer: {
        maxWidth: '600px',
        display: "flex",
        flexDirection: "column",
        height: "85vh",
        overflow: "hidden",
        margin: '0 auto'
    }
}

export function Layout({ children }) {
    return (
        <div>
            <div style={styles.mainContainer}>
                {children}
            </div>
            <BottomNavBar />
        </div>
    )
}