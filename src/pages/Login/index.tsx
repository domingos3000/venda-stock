import Logo from "./../../assets/venda-stock-logotipo.png";


const Login = () => {

    return(
        <div className="bg-blue-600">
            <div className="my-container">

                <header className="flex justify-between items-center h-14">
                    <img src={Logo} alt="Logo" />

                    <button className="text-white border rounded py-2 px-4 hover:bg-white hover:text-blue-600 transition cursor-pointer">
                        Registar-se
                    </button>
                </header>

            </div>
        </div>
    );
}

export default Login;