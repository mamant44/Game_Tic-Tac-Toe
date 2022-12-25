import Square from './Square';
import {Box} from "@mui/material";

const styles = {
    width: 556,
    height: 556,
    display: 'grid',
    gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)',
    border: '2px solid #151515',
    boxShadow: '10px 10px 20px #3a3a3a',
    margin: '0 auto'
};

const Board = ({squares, onClick}) => (
    <Box style={styles}>
        {squares.map((square, number) => (
            <Square key={number} square={square} onClick={() => onClick(number)}/>
        ))}
    </Box>
);

export default Board;