const emailRegExr = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g

export const validate = (form, setErrors) => {
    const error = {}

    if(form.name.trim() === '') {
        error.name = 'Please enter a name'
    } else if (form.name.trim().length < 2){
        error.name = 'Please enter a name that is at least 2 characters long'
    }

    if(form.email.trim() === '') {
        error.email = 'Please enter an email address'
    } else if (!emailRegExr.test(form.email)){
        error.email = 'Please enter a valid email address'
    }

    if(form.message.trim() === '') {
        error.message = 'Please enter a message'
    }

    if(form.address.trim() === '') {
        error.message = 'Please enter a shipping address'
    }

    setErrors(error)

    return Object.keys(error).length <= 0
}