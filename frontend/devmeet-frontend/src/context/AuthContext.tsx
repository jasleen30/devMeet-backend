import {createContext, useContext, useEffect, useState, type FC, type ReactNode} from 'react';

interface UserType {
    firstName: string,
    lastName: string,
    email: string,
}

interface AuthType {
    user: UserType | null;
    login: (user:UserType) => void;
    logout: () => void;
    isAuthenticated: boolean;
    isLoading: boolean;
}

export const AuthContext = createContext<AuthType | undefined>(undefined);

export const AuthProvider:FC<{children:ReactNode}> = ({children}) => {
    const [user, setUser] = useState<UserType | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() =>{
        async function fetchUser() {
            setIsLoading(true);
           const userData = await localStorage.getItem('user');
        if(userData) {
            setUser(JSON.parse(userData));
        }
                    setIsLoading(false);

        }
        fetchUser();
    },[]);

    const login = (user:UserType) => {

        setUser(user);
        localStorage.setItem('user', JSON.stringify(user));
        setIsLoading(false);
    }

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
    }
    return (
      <AuthContext.Provider value={{user, login,logout, isAuthenticated:!!user, isLoading}}>{children}</AuthContext.Provider>
    )
}

// created custom hook
export const useAuth =()=>{

    const context = useContext(AuthContext)

    if(context==undefined) {
        throw new Error("Context undefined")
    }
    return context
}