"use client";

import { useEffect } from "react";
import {Crisp} from "crisp-sdk-web";

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("37fcd946-24ae-434a-8374-bd0ea52bc615");
    }, []);

    return null;
}