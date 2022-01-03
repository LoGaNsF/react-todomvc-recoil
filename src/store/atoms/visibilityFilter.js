import { atom } from "recoil";
import { SHOW_ALL } from "../constants/FilterTypes";

export const visibilityFilter = atom({
  key: "visibilityFilter",
  default: SHOW_ALL,
});
