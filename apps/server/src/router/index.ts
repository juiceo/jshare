import { contract } from "@jshare/api-contract";
import { initServer } from "@ts-rest/express";
import { profiles } from "./profiles";

const s = initServer();

export const router = s.router(contract, {
    profiles: profiles(s),
});
