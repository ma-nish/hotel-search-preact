/** @jsx h */
import { h, createContext, FunctionComponent, JSX } from "preact";
import { useState } from "preact/hooks";
import { HolidayData, HolidaysContextType } from "../types/booking";


interface BaseHolidaysProps {
  children?: JSX.Element;
}

export const HolidayContext = createContext<HolidaysContextType | null>(null)

const HolidayProvider: FunctionComponent<BaseHolidaysProps> = ({ children }) => {
  const [holidays, setHolidays] = useState<HolidayData[]>([]);

  const saveHolidays = (option: HolidayData[]) => {
    setHolidays([...option]);
  };

  return <HolidayContext.Provider value={{ holidays, saveHolidays }}>{children}</HolidayContext.Provider>;
};

export default HolidayProvider;