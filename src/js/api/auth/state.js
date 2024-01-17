import { load } from "../../storage/load";

export const isLoggedIn = () => Boolean(load("accessToken"));
