import Button from "../components/Button";

const Recommended = ({ handleClick }) => {
    return (
        <div className="py-5">
            <p className="text-2xl font-bold py-5">Recommended</p>
            <div className="flex flex-row gap-3 flex-wrap pb-5">
                <Button
                    onClickHandler={handleClick}
                    value=""
                    title="All Products"
                />
                <Button
                    onClickHandler={handleClick}
                    value="Nike"
                    title="Nike"
                />
                <Button
                    onClickHandler={handleClick}
                    value="Adidas"
                    title="Adidas"
                />
                <Button
                    onClickHandler={handleClick}
                    value="Puma"
                    title="Puma"
                />
                <Button
                    onClickHandler={handleClick}
                    value="Vans"
                    title="Vans"
                />
            </div>
        </div>
    );
};

export default Recommended;
