const styles = {
    width: 186,
    height: 186,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#242424',
    fontSize: 200,
    color: '#fff',
    border: '2px solid #151515',
    borderRadius: 0,
    boxShadow: '-10px -10px 20px #3a3a3a',
    padding: 0
};

const Square = ({square, onClick}) => (
    <button style={styles} onClick={onClick}>
        {square}
    </button>
);

export default Square;