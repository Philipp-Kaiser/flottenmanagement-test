import Vehicle from "../../types/Vehicle";
import VehicleType from "../../types/VehicleTypes";

interface Props {
  vehicles: Vehicle[];
  vehicleTypes: VehicleType[];
}

export default function Home({ vehicles, vehicleTypes }: Props) {
  return (
    <ul className='m-12'>
      {vehicleTypes.map((type) => (
        <li key={type._id} className='mb-8 border-b flex'>
          <span className=' basis-9/12'>{type.name}</span>
          <ul className='flex flex-col basis-4/12'>
            {vehicles
              .filter((vehicle) => vehicle.fahrzeugtyp == type._id)
              .map((vehicle) => (
                <>
                  <li key={vehicle._id}>{vehicle.name}</li>
                  <br />
                </>
              ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}