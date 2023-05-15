
const validate = (form) => {
    let error = {};
    //let validUrl = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png|jpeg)/;

    
    if (form.name === "" || !form.name?.trim()) {
        error.name = "This field cannot be empty";
    }
    if (form.name?.length >= 20) {
        error.name = "Your choice of a name is too long";
    }
    //-------------------------------------------------------------------------------------------------------

    if (form.description === "" || !form.description?.trim()) {
        error.description = "This field cannot be empty";
    }
    if (form.description?.length && form.description?.length <= 20) {
        error.description = "This field must have at least 20 characters";
    }
    if (form.description?.length >= 200) {
        error.description = "This field cannot be longer than 500 characters";
    }
    //-------------------------------------------------------------------------------------------------------

    if (!form.released?.length) {
        error.released = "This field cannot be empty";
    }
    if (
        !/^\d{4}-(0?[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01])$/.test(form.released)
    ) {
        error.released = "Choose a valid date";
    }
    //-------------------------------------------------------------------------------------------------------
    if (form.rating === "" || !form.rating?.trim()) {
        error.rating = "This field cannot be empty";
    }
    if (form.rating < 1 || form.rating > 5) {
        error.rating = "Rating must be between 1 and 5";
    }


    return error;
};


export default validate;
