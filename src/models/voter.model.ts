export interface  Voter {
    voter : {
        dni: number; 
        name: string;       
        lastname: string;   
        email: string;      
        password: string; 
        _id?: string;
        emailConfirm?: boolean;
        passwordConfirm?: boolean;
         isVote?: boolean;
    }
}