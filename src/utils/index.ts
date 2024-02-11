import { Car } from "@/types/component-types";

export const fetchCarsApi = async () => {
    const baseUrl =
        "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla";
    const options = {
        method: "GET",
        headers: {
            "X-RapidAPI-Key":
                "bdd8143ef4msh2952f04934e35d0p140ac4jsn3f951a7716b2",
            "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
        },
    };

    try {
        const response = await fetch(baseUrl, options);
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
        return JSON.stringify(error);
    }
};

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age

    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;

    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

    return rentalRatePerDay.toFixed(0);
};

export const generateCarImageUrl = (car: Car, angle?: string) => {};
