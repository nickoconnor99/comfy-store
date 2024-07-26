import { useNavigation } from "react-router-dom";

const SubmitBtn = ({ text }) => {
    const navigation = useNavigation()
    const isSubmitting = navigation.isSubmitting === 'submitting'
    return (
        <button type='submit' className='btn btn-primary btn-block text-transform: uppercase' disabled={isSubmitting}>
            {isSubmitting ? <div>
                <span className="loading loading-spinner">sending...</span>
            </div> :
                text || 'submit'
            }
        </button>

    )
}

export default SubmitBtn
