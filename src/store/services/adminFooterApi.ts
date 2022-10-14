import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import {url} from "../url/url";

export const FooterQueryApi = createApi({
    reducerPath: "FooterQueryApi",
    baseQuery: fetchBaseQuery(
        {
            baseUrl:url,
            headers: {
                "Access-Control-Allow-Origin": "*"
            }
        }),
    endpoints: (build) => ({
        addFooter: build.mutation({
            query: (body) => ({
                url: "/footers",
                method: "POST",
                body,
                headers: {
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibG9naW4iOiJUaW11ckBnbWFpbC5jb20iLCJpYXQiOjE2NjIwMjQzMTUsImV4cCI6MTY2MjAyNzkxNX0.h98NlLJnW2V90JCAg93AkDT9Sl-PrGP3a51dLU_RI04"
                }
            }),
        }),
    }),
});

export const { useAddFooterMutation } = FooterQueryApi;