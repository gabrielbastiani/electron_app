import { FormEvent, useRef } from "react"

export function Create() {

    const nameRef = useRef<HTMLInputElement | null>(null);
    const emailRef = useRef<HTMLInputElement | null>(null);
    const addressRef = useRef<HTMLInputElement | null>(null);
    const phoneRef = useRef<HTMLInputElement | null>(null);
    const roleRef = useRef<HTMLInputElement | null>(null);
    
    async function handleAddCustomer(e: FormEvent) {
        e.preventDefault();

        /* const response = await window.api.addCustomer(doc)
        console.log(response) */
    }

    return (
        <div className="flex-1 flex flex-col py-12 px-10 gap-8 overflow-y-auto">
            <section className="flex flex-1 flex-col items-center">
                <h1 className="text-white text-xl lg:text-3xl font-semibold">
                    Cadastrar novo cliente
                </h1>

                <form className="w-full max-w-96 mt-4" onSubmit={handleAddCustomer}>
                    <div className="mb-2">
                        <label className="text-lg">Nome:</label>
                        <input
                            type="text"
                            placeholder="Digite o nome do cliente..."
                            className="w-full h-9 rounded text-black px-2"
                            ref={nameRef}
                        />
                    </div>

                    <div className="mb-2">
                        <label className="text-lg">Endereço:</label>
                        <input
                            type="text"
                            placeholder="Digite o endereço..."
                            className="w-full h-9 rounded text-black px-2"
                            ref={addressRef}
                        />
                    </div>

                    <div className="mb-2">
                        <label className="text-lg">Email:</label>
                        <input
                            type="text"
                            placeholder="Digite o email do cliente..."
                            className="w-full h-9 rounded text-black px-2"
                            ref={emailRef}
                        />
                    </div>

                    <div className="mb-2">
                        <label className="text-lg">Telefone:</label>
                        <input
                            type="text"
                            placeholder="Digite o telefone do cliente..."
                            className="w-full h-9 rounded text-black px-2"
                            ref={phoneRef}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="text-lg">Cargo:</label>
                        <input
                            type="text"
                            placeholder="Digite o cargo do cliente..."
                            className="w-full h-9 rounded text-black px-2"
                            ref={roleRef}
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