import React, { Component } from 'react';

interface IContext {
    isAuth: Boolean,
    toggleAuth: () => void,
}

// Context creation
const AuthContext = React.createContext<IContext>({
    isAuth: false,
    toggleAuth: () => {},
});

// Inner component (new syntax of static property)
class Login extends Component {
    static contextType = AuthContext;
    context!: React.ContextType<typeof AuthContext>

    render() {
        const { toggleAuth, isAuth } = this.context;

        return (
            <button onClick={toggleAuth}>
                {!isAuth ? 'Login' : 'Logout'}
            </button>
        );
    }
}

// Inner component (old variant with Consumer)
const Profile: React.FC = (): React.ReactElement => (
    <AuthContext.Consumer>
        {({ isAuth }: IContext) => (
            <h1>{!isAuth ? 'Please log in' : 'You are logged in'}</h1>
        )}
    </AuthContext.Consumer>
);

// Root component
class Context extends Component<{}, { isAuth: Boolean }> {
    readonly state = {
        isAuth: false,
    };

    toggleAuth = () => {
        this.setState(({ isAuth }) => ({
            isAuth: !isAuth
        }));
    };

    render() {
        const { isAuth } = this.state;
        const context: IContext = { isAuth, toggleAuth: this.toggleAuth };

        return (
            <AuthContext.Provider value={context}>
                <Login />
                <Profile />
            </AuthContext.Provider>
        );
    }
}

export default Context;