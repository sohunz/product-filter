const Button = ({ onClickHandler, value, title }) => {
    return (
        <button
            onClick={onClickHandler}
            value={value}
            className="border border-orange-500 px-3 py-1 rounded-md hover:bg-orange-500 hover:text-white hover:border-none"
        >
            {title}
        </button>
    );
};

export default Button;
