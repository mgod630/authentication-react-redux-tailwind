const Input = (props) => {
    return (
        <input
            type={props.type}
            placeholder={props.name}
            value={props.value}
            onChange={props.onChange}
            className="rounded my-4 py-2 px-3 w-auto sm:w-64 text-center"
        />
    );
};
export default Input;
