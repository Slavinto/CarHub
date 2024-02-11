import { NextRequest } from "next/server";
import { fetchCarsApi } from "@/utils";

export async function GET(request: NextRequest) {
    const url = new URL(request.url);
    console.log({ ...url.searchParams });
    const manufacturer = url.searchParams.get("manufacturer");
    const carModel = url.searchParams.get("car-model");
    console.log(manufacturer, carModel);

    let query = "?";
    if (manufacturer) {
        query += `make=${manufacturer}`;
    }
    if (carModel) {
        query += manufacturer ? `&model=${carModel}` : `model=${carModel}`;
    }
    console.log(query);

    const data = await fetchCarsApi(query);

    return Response.json({
        data,
        message: "success",
    });
}
