export interface PartyComposition {
  adults: number;
  childAges: number[];
  infants: number;
}

export interface BookingRequest {
  bookingType: string;
  location: string;
  departureDate: string;
  duration: number;
  gateway: string;
  partyCompositions: PartyComposition[];
}

export interface BookingResponse {
  holidays: Holiday[];
}

export interface Holiday {
  totalPrice: number;
  pricePerPerson: number;
  flyingClubMiles: number;
  virginPoints: number;
  tierPoints: number;
  departureDate: string;
  selectedDate: string;
  hotel: Hotel;
}

export interface Hotel {
  id: string;
  name: string;
  boardBasis: string;
  content: HotelContent;
}

export interface HotelContent {
  name: string;
  vRating: number | string;
  hotelDescription: string;
  atAGlance: string[];
  parentLocation: string;
  images: HotelImage[];
  holidayType: string[];
  boardBasis: string[];
  hotelLocation: string[];
  accommodationType: string[];
  hotelFacilities: string[];
  starRating: number | string;
  propertyType: string;
}

export interface HotelImage {
  RESULTS_CAROUSEL: Image;
}

export interface Image {
  url: string;
}

export interface HolidayData {
  departureDate: string;
  deposit: number;
  depositPerPerson: number;
  flyingClubMiles: number;
  locationWidened?: boolean;
  pricePerPerson: number;
  selectedDate: string;
  tierPoints: number;
  totalPrice: number;
  virginPoints: number;
  webDiscount: number;
  hotel: {
    id: string;
    boardBasis: string;
    name: string;
    tripAdvisor: {
      numReviews: number;
      ratingImageUrl: string;
    };
    content: any;
  };
}

export type HolidaysContextType = {
  holidays: HolidayData[];
  saveHolidays: (holiday: HolidayData[]) => void;
};
