import Logo from "../../../assets/venda-stock-logotipo.png";

const Header = () => {

    return (
        <div className="bg-blue-500">
            <div className="my-container flex justify-between h-14 items-center">
                <img src={Logo} alt="Logotipo" className="object-cover h-7"/>

                <button className="p-5  text-white h-10 flex justify-center items-center">
                    Registar-se
                </button>
             </div>
        </div>
        
    );

}

export default Header;