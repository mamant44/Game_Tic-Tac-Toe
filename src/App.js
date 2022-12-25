import {Box, Typography} from "@mui/material";
import TicTacToe from "./TicTacToe";

const styles = {
    gameWrapper: {
        height: 850,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: "url(/background.jpg)"
    },
    gameTitle: {
        color: '#fff',
        fontWeight: 700,
        fontSize: 40,
        marginTop: 5
    }
}

function App() {

    return (
        <Box style={styles.gameWrapper}>
            <Typography style={styles.gameTitle}> Tic-Tac-Toe </Typography>
            <TicTacToe/>
        </Box>

    );
}

export default App;