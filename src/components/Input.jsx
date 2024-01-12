const Input = ({ handleChange, value, title, name }) => {
    return (
        <div className="flex flex-col gap-3">
            <div>
                <input
                    type="radio"
                    name={name}
                    onChange={handleChange}
                    value={value}
                />
                <label className="px-3">{title}</label>
            </div>
        </div>
    );
};

export default Input;
