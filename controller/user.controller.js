

export const userRegister = async (req, res) => {

    const { name, email, password } = req.body;
    try {
        res.json({
            name,
            email,
            password
        });
    } catch (error) {
        console.error(error.message);
    }
}

export const userLogin = async (req, res) => {
    try {
        console.log('Success');
    } catch (error) {
        console.error(error.message);
    }
}