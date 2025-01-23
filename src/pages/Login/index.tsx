import Logo from "./../../assets/venda-stock-logotipo.png";
import { useForm } from "react-hook-form";

const Login = () => {

    const {register, handleSubmit} = useForm();

    const getDataOnSubmit = async (data: any) =>{
        console.log(data)
    }

    return(
        <div className="flex flex-col h-screen">
            <div className="bg-blue-600">
                <div className="my-container">

                    <header className="flex justify-between items-center h-16">
                        <img src={Logo} alt="Logo" />

                        <button className="text-white border rounded py-2 px-4 hover:bg-white hover:text-blue-600 transition cursor-pointer">
                            Registar-se
                        </button>
                    </header>

                </div>
            </div>

            <div className="bg-zinc-200 flex-1">
                <div className="my-container grid place-items-center h-full">

                    <div className="bg-white p-10 rounded flex flex-col max-h-[500px] h-full">
                        <div className="flex-1">
                            <header className="border-b border-zinc-300 pb-4 space-y-1 mb-4">
                                <h1 className="uppercase text-blue-600 font-bold text-center text-2xl">Login</h1>
                                <p className="text-center text-blue-950 text-sm">Insira as suas credenciais de acesso ao sistema</p>
                            </header>  


                            <form onSubmit={handleSubmit(getDataOnSubmit)} action="" className="flex flex-col">
                                <label htmlFor="" className="text-blue-800 text-sm mb-3">Email:</label>
                                
                                <input {...register("email")} type="text" className="h-10 bg-zinc-100 border border-zinc-300 outline-0 px-4 rounded text-zinc-800" />

                                <label htmlFor="" className="text-blue-800 text-sm my-3">Password:</label>
                                <input {...register("password")} type="password" className="h-10 bg-zinc-100 border border-zinc-300 outline-0 px-4 rounded text-zinc-800"/>

                                <div className="flex items-center justify-center">
                                    <button className="bg-blue-500 h-10 text-white w-fit px-10 rounded mt-4">
                                        Entrar
                                    </button>

                                </div>
                            </form>
                        </div>

                        <div>
                            <p className="text-sm text-zinc-700 text-center">Recuperar as minhas credenciais de acesso</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        
        
    );
}

export default Login;