const Login = () => {
    return (
        <div className="login">
            <h2>Login</h2>
            <form>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" required />                    
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" required />
                </div>
                <button>Login</button>
            </form>
            <a href="/register">Register</a>
        </div>
    )
}

export default Login;