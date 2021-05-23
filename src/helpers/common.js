/* Props fake in context */
import React from "react";
import Alert from "../components/Alert/Alert";
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

export const alertContext = { status: null };
export const AlertContext = React.createContext(AlertContext);

export const menuTop = [
    { label: 'Dashboard', icon: <MailIcon />, url: '/dashboard' }
];
export const menuBottom = [
    { label: 'Settings', icon: <MailIcon /> }
];


/**
 * Set Alert Context
 * @param {*} status 
 */
export function setAlertContext(status) {
    return (
        <AlertContext.Consumer>
            { value => value.status = status }
        </AlertContext.Consumer>
    );
}

/**
 * Open Alert Context
 * @param {*} status 
 */
export function openAlertContext(status) {
    return (
        <AlertContext.Consumer>
            { value => value.status !== null && <Alert status={status}/> }
        </AlertContext.Consumer>
    );
}

/**
 * isTrue: Value of Boolean
 * @param {*} value: value by string 
 */
export function isTrue (value) {
    return value === 'true' ? true : false;
}

/**
 * responseJson: response data json
 * @param {*} data: response json  
 */
export function responseJson(data) {
    if (data.status === 200) return data.json();
    else return null;
}

