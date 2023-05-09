
const validate = (input) => {
    let errors = {};

    if(input.name) {
        if(input.name === "" || input.name[0].trim().length === 0){
            errors.name = "Ingresar un nombre"
        }
    }
    if(input.image) {
        if(input.name === "" || input.name[0].trim().length === 0){
            errors.name = "Ingresar una imagen"
        }
    }
    if(input.description) {
        if(input.name === "" || input.name[0].trim().length === 0){
            errors.name = "Ingresar una descripcion"
        }
    }

    return errors;
};

export default validate;

