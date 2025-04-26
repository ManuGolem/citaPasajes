export function Horarios() {
    return (
        <div>
            <h1>A donde te llevamos?</h1>
            <form className="flex flex-col">
                <label>
                    Origen
                    <input type="search"></input>
                </label>
                <label>
                    Destino
                    <input type="search"></input>
                </label>
                <label>
                    Fecha
                    <input type="date"></input>
                </label>
                <label>
                    Cantidad de asientos
                    <input type="number"></input>
                </label>
            </form>
        </div>
    );
}
