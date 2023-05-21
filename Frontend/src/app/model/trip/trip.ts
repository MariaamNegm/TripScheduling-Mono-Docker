import { Station } from "../station/station";

export class Trip {

        id?: number;
        start_time?: string; 
        end_time?: string; 
        from_station?: Station; 
        to_station?: Station; 
        name?: string;
        fromid?: number;
        toid?: number;
        
}
