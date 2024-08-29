
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
        <div>
            <h1>Página NOVO CLIENTE!!!</h1>

            <button onClick={handleAddCustomer}>CADASTRAR</button>
        </div>
    )
}