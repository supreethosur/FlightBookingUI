export class FlightModel{

    private _flightId: Number;
    public get flightId(): Number {
        return this._flightId;
    }
    public set flightId(value: Number) {
        this._flightId = value;
    }
  
	private _journeyId: Number;
    public get journeyId(): Number {
        return this._journeyId;
    }
    public set journeyId(value: Number) {
        this._journeyId = value;
    }
    
	private _flightName: String; 
    public get flightName(): String {
        return this._flightName;
    }
    public set flightName(value: String) {
        this._flightName = value;
    }
   
	private _airline: String;
    public get airline(): String {
        return this._airline;
    }
    public set airline(value: String) {
        this._airline = value;
    }
    
   
	private _departureDate: String;
    public get departureDate(): String {
        return this._departureDate;
    }
    public set departureDate(value: String) {
        this._departureDate = value;
    }
   
	private _departureTime: String;
    public get departureTime(): String {
        return this._departureTime;
    }
    public set departureTime(value: String) {
        this._departureTime = value;
    }
    
	private _arrivalDate: String;
    public get arrivalDate(): String {
        return this._arrivalDate;
    }
    public set arrivalDate(value: String) {
        this._arrivalDate = value;
    }
    
	private _arrivalTime: String;
    public get arrivalTime(): String {
        return this._arrivalTime;
    }
    public set arrivalTime(value: String) {
        this._arrivalTime = value;
    }
    
	private _fromLocation: String;
    public get fromLocation(): String {
        return this._fromLocation;
    }
    public set fromLocation(value: String) {
        this._fromLocation = value;
    }
    
	private _toLocation: String;
    public get toLocation(): String {
        return this._toLocation;
    }
    public set toLocation(value: String) {
        this._toLocation = value;
    }
    
	private _businessSeats: Number;
    public get businessSeats(): Number {
        return this._businessSeats;
    }
    public set businessSeats(value: Number) {
        this._businessSeats = value;
    }
    
	private _nonBusinessSeats: Number;
    public get nonBusinessSeats(): Number {
        return this._nonBusinessSeats;
    }
    public set nonBusinessSeats(value: Number) {
        this._nonBusinessSeats = value;
    }
    
	private _scheduleType: String;
    public get scheduleType(): String {
        return this._scheduleType;
    }
    public set scheduleType(value: String) {
        this._scheduleType = value;
    }
    
	private _amount: Number;
    public get amount(): Number {
        return this._amount;
    }
    public set amount(value: Number) {
        this._amount = value;
    }
    


constructor(airline: String,fromLocation: String,toLocation :String,flightName :String ,journeyId :Number,departureDate:String,departureTime:String,arrivalDate:String,arrivalTime:String,businessSeats:Number,nonBusinessSeats:Number,amount:Number){
        this.airline=airline;
        this.fromLocation=fromLocation;
        this.toLocation=toLocation;
        this.flightName=flightName;
        this.journeyId=journeyId;
        this.departureDate=departureDate;
        this.departureTime=departureTime;
        this.arrivalDate=arrivalDate;
        this.arrivalTime=arrivalTime;
        this.businessSeats=businessSeats;
        this.nonBusinessSeats=nonBusinessSeats;
        this.amount=amount;
    }







    // private airline: String;
    // private fromLocation: String;
    // private toLocation :String;
    // private flightName :String;
    // private journeyId :String;

    // public getairline(): String {
    //     return this.airline;
    // }
    // public setairline(value: String) {
    //     this.airline = value;
    // }

    // public getfromLocation(): String {
    //     return this.fromLocation;
    // }
    // public setfromLocation(value: String) {
    //     this.fromLocation = value;
    // }

    // public gettoLocation(): String {
    //     return this.toLocation;
    // }
    // public settoLocation(value: String) {
    //     this.toLocation = value;
    // }

    // public getflightName(): String {
    //     return this.flightName;
    // }
    // public setflightName(value: String) {
    //     this.flightName = value;
    // }
    // public getjourneyId(): String {
    //     return this.journeyId;
    // }
    // public setjourneyId(value: String) {
    //     this.journeyId = value;
    // }

    // constructor(airline: String,fromLocation: String,toLocation :String,flightName :String ,journeyId :String){
    //     this.airline=airline;
    //     this.fromLocation=fromLocation;
    //     this.toLocation=toLocation;
    //     this.flightName=flightName;
    //     this.journeyId=journeyId;
    // }
    


}