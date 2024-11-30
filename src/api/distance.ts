/**
 * Convert degrees to radians.
 * @param deg - Degrees to convert.
 * @returns Radians.
 */
function deg2rad(deg: number): number {
    return deg * (Math.PI / 180);
  }
  
  /**
   * Convert kilometers to miles.
   * @param km - Kilometers to convert.
   * @returns Miles.
   */
  function kmToMiles(km: number): number {
    return km * 0.621371;
  }
  
  /**
   * Get latitude and longitude from an address.
   * @param address - The address to geocode.
   * @returns A Promise that resolves to an object containing latitude and longitude.
   */
  export async function getLatLongFromAddress(address: string): Promise<{ lat: number; lon: number }> {
    const url = `https://geocode.maps.co/search?q=${address}&api_key=667ef1741c1fc644172402icg005d42`;
  
    try {
      const response = await fetch(url, { method: 'POST' });
      if (response.ok) {
        const json = await response.json();
        const data = {
          lat: parseFloat(json[0].lat),
          lon: parseFloat(json[0].lon),
        };
        console.log(data);
        return data;
      } else {
        console.error(`Request failed with status: ${response.status}`);
        return { lat: 0, lon: 0 };
      }
    } catch (error) {
      console.error(`Request failed: ${error}`);
      return { lat: 0, lon: 0 };
    }
  }
  
  /**
   * Calculate the distance between two coordinates.
   * @param lat1 - Latitude of the first point.
   * @param long1 - Longitude of the first point.
   * @param lat2 - Latitude of the second point.
   * @param long2 - Longitude of the second point.
   * @returns Distance in miles.
   */
  export function getDistanceFromLatLong(
    lat1: number,
    long1: number,
    lat2: number,
    long2: number
  ): number {
    const R = 6371; // Radius of the Earth in kilometers
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(long2 - long1);
  
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distanceInKm = R * c; // Distance in kilometers
  
    return kmToMiles(distanceInKm);
  }
  