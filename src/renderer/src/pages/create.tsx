
export function Create() {

    const doc = {
        name: "Pablo Mosconi",
        email: "pablo@teste.com",
        phone: "54991663743",
        address: "Rua X, centro",
        role: "Frontend",
        status: true
    }
    
    async function handleAddCustomer() {
        const response = await window.api.addCustomer(doc)
        console.log(response)
    }

    return (
        <div className="flex-1 flex flex-col py-12 px-10 gap-8 overflow-y-auto">
            <section className="flex flex-1 flex-col items-center">
                <h1 className="text-white text-xl lg:text-3xl font-semibold">
                    Cadastrar novo cliente
                </h1>

                <form className="w-full max-w-96 mt-4">
                    <div className="mb-2">
                        <label className="text-lg">Nome:</label>
                        <input
                            type="text"
                            placeholder="Digite o nome do cliente..."
                            className="w-full h-9 rounded text-black px-2"
                        />
                    </div>

                    <div className="mb-2">
                        <label className="text-lg">Endereço:</label>
                        <input
                            type="text"
                            placeholder="Digite o endereço..."
                            className="w-full h-9 rounded text-black px-2"
                        />
                    </div>

                    <div className="mb-2">
                        <label className="text-lg">Email:</label>
                        <input
                            type="text"
                            placeholder="Digite o email do cliente..."
                            className="w-full h-9 rounded text-black px-2"
                        />
                    </div>

                    <div className="mb-2">
                        <label className="text-lg">Telefone:</label>
                        <input
                            type="text"
                            placeholder="Digite o telefone do cliente..."
                            className="w-full h-9 rounded text-black px-2"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="text-lg">Cargo:</label>
                        <input
                            type="text"
                            placeholder="Digite o cargo do cliente..."
                            className="w-full h-9 rounded text-black px-2"
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-blue-500 rounded flex items-center justify-center w-full h-9"
                    >
                        Cadastrar
                    </button>
                </form>
            </section>
        </div>
    )
}