const Button = ({ onClickHandler, value, title }) => {
    return (
        <button
            onClick={onClickHandler}
            value={value}
            className="border px-3 py-1 rounded-md"
        >
            {title}
        </button>
    );
};

export default Button;
