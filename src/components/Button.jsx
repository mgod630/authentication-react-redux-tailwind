const Button = (props) => {
    return (
        <button
            onClick={props.onClick}
            type="submit"
            className="my-3 font-semibold rounded bg-white px-4 py-2 text-slate-700 hover:text-black hover:bg-slate-100"
        >
            {props.text}
        </button>
    );
};
export default Button;
