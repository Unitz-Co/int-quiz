import {
    GET_SUMMARY,
    GET_ADVISOR
} from "../apis";

import { responseJson } from "../helpers/common.js";

/**
 * createAccessToken: Get Access Token
 */
export async function createAccessToken () {
    // const data = await fetch(GET_ACCSES_TOKEN, {
    //     method: 'POST',
    //     headers: {
    //         'Authorization': 'Basic Z28tY29yb25hLWFkbWluOjU1NzdZdnpVNGJLNjNhMVdJUTNaMDQzSA==',
    //         'Content-Type': 'application/json;charset=utf-8',
    //     },
    //     body: JSON.stringify({ 
    //         'Email':'stephgottsch@gmail.com', 
    //         'Subscription':'basic'
    //     })
    // });

    // return responseJson(data);
    return '5cf9dfd5-3449-485e-b5ae-70a60e997864';
}

export async function getAdvisorList () {
    await fetch(GET_ADVISOR, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        }
      })
        .then(response => response.json())
        .then(data => {
            return data;
        })
        .catch((error) => {
            return [];
        });
} 