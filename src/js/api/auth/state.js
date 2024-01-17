import { load } from "../../storage/load";

export const checkLoginStatus = () => Boolean(load("accessToken"));

export const checkManagerStatus = () => Boolean(load("managerState"));
