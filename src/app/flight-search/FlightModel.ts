export class FlightModel{

    private airline: String;
    private fromLocation: String;
    private toLocation :String;
    private flightName :String;

    public getairline(): String {
        return this.airline;
    }
    public setairline(value: String) {
        this.airline = value;
    }

    public getfromLocation(): String {
        return this.fromLocation;
    }
    public setfromLocation(value: String) {
        this.fromLocation = value;
    }

    public gettoLocation(): String {
        return this.toLocation;
    }
    public settoLocation(value: String) {
        this.toLocation = value;
    }

    public getflightName(): String {
        return this.flightName;
    }
    public setflightName(value: String) {
        this.flightName = value;
    }

    constructor(airline: String,fromLocation: String,toLocation :String,flightName :String){
        this.airline=airline;
        this.fromLocation=fromLocation;
        this.toLocation=toLocation;
        this.flightName=flightName;
    }
    


}