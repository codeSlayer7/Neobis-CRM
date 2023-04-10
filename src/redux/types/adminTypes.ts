export interface UserData{
    handleClose?: () => void ;
    data: { 
        email: string,
        password: string,
        phoneNumber: string,
        firstName: string,
        lastName: string
    };

}

