
const FormInput = ({ label, name, type, defaultValue }) => {
    return (
        <div className='form-control '>
            <label className='label'>
                <span className='label-text capitalize'>{label}</span>
            </label>
            <input
                type={type}
                name={name}
                defaultValue={defaultValue}
                className='input input-bordered '
            />
        </div>
    );
};
//     <label className="form-control">
//         <div className="label">
//             <span className="label-text">{label}</span>
//         </div>
//         <input type={type}
//             name={name}
//             defaultValue={defaultValue}
//             className="input input-bordered" />
//     </label>
// )


export default FormInput



