import React, {useState} from 'react';
import {checkWinner} from './CheckWinner';
import Board from './Board';
import {Box} from "@mui/material";

const styles = {
    textGame: {
        width: 556,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 32,
        fontWeight: 700,
        color: '#fff',
        margin: '0 auto',
        marginBottom: 10
    },
    restartGame: {
        width: 230,
        height: 45,
        padding: 0,
        color: '#151515',
        fontSize: 28,
        fontWeight: 700,
        marginBottom: 20,
        borderRadius: 5,
        border: '2px solid #151515',
        boxShadow: '10px 10px 40px #787878'
    },
    drawInGame: {
        fontSize: 30,
        fontWeight: 700,
        color: '#fff',
        marginBottom: 10
    }
}

const defaultSquares = [Array(9).fill(null)];

const TicTacToe = () => {
    const [squares, setSquares] = useState(defaultSquares);
    const [squareNumber, setSquareNumber] = useState(0);
    const [turn, setTurn] = useState(true);
    const winner = checkWinner(squares[squareNumber]);

    const handleClick = (number) => {
        const sliceSquares = squares.slice(0, squareNumber + 1);
        const currentElement = sliceSquares[squareNumber];
        const square = [...currentElement];

        if (winner || square[number]) return;

        square[number] = turn ? '×' : '○';
        setSquares([...sliceSquares, square]);
        setSquareNumber(sliceSquares.length);
        setTurn(!turn);
    };

    const RestartGame = () => {
        setSquares(defaultSquares);
        setSquareNumber(0);
        setTurn(true);
    };

    return (
        <>
            <Box style={styles.textGame}>
                {winner && 'Winner: ' + winner}
                {(!winner && squares.length < 10) && 'Turn: ' + (turn ? '×' : '○')}
                {(!winner && squares.length === 10) && 'Draw!'}
            </Box>
            {(winner || squares.length === 10) && (
                <button style={styles.restartGame} onClick={RestartGame}> Restart Game </button>
            )}
            <Board squares={squares[squareNumber]} onClick={handleClick}/>
        </>
    );
};

export default TicTacToe;