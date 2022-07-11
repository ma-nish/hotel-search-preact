/** @jsx h */
import { h, render } from "preact"
import App from "./components/app/app.component";
import HolidayProvider from "./context/holidayContext";

declare let window: Window;

const root: HTMLElement = document.getElementById('searchAppTarget')
const target: HTMLElement = document.querySelector('.renderTarget')

render(<HolidayProvider><App /></HolidayProvider>, root, target)