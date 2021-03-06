const vehicleList = [
  {
    id: 1,
    year: 2007,
    make: 'Honda',
    model: 'Fit LX',
    new: false,
  },
  {
    id: 2,
    year: 2020,
    make: 'Ford',
    model: 'Focus DX',
    new: true,
  },
  {
    id: 3,
    year: 2018,
    make: 'Honda',
    model: 'Ridgeline DX',
    new: false,
  },
  {
    id: 4,
    year: 2016,
    make: 'Ford',
    model: 'Explorer LX',
    new: false,
  },
]

const useVehicles = (vehicles = [1], currentPackage) => {

  const getVehicles = () => {
    return vehicleList.filter(v => vehicles.includes(v.id))
  }

  return {
    vehicles: getVehicles(),
  }
}

export default useVehicles