import styles from "./ShowCars.module.css";

const ShowCars = ({carList}) => {

    console.log(carList);
  return (
    <div>
        <p className={styles["subtitle"]}>Os itens desta lista foram estilizados com css scoped.</p>
        <ul className={styles["car_list"]}>
            <li>
                <p>Modelo</p>
                <p>Marca</p>
                <p>Cor</p>
            </li>
            {carList.map((car, index) => (
                /* Eu achei que já pudesse executar js aqui */
                <li key={index}>
                    <p>{car.model}</p>
                    <p>{car.brand}</p>
                    <p>{car.color}</p>
                </li>
            ))}
        </ul>
    </div>
  )
}
export default ShowCars