import { AppDispatch } from "../..";
import UserService from "../../../api/UserService";
import { IEvent } from "../../../models/IEvent";
import { IUser } from "../../../models/IUser";
import { EventActionEnum, SetEventsAction, SetGuestsAction } from "./types";

export const EvenActionCreators = {
    setGuests: (payload: IUser[]): SetGuestsAction => ({
        type: EventActionEnum.SET_GUESTS,
        payload,
    }),
    setEvents: (payload: IEvent[]): SetEventsAction => ({
        type: EventActionEnum.SET_EVENTS,
        payload,
    }),
    fetchGuests: (): any => async (dispatch: AppDispatch) => {
        try {
            const response = await UserService.getUsers();
            dispatch(EvenActionCreators.setGuests(response.data));
        } catch (e) {}
    },
    createEvent:
        (event: IEvent): any =>
        async (dispatch: AppDispatch) => {
            try {
                const events = localStorage.getItem("events") || "[]";
                const json = JSON.parse(events) as IEvent[];
                json.push(event);
                dispatch(EvenActionCreators.setEvents(json));
                localStorage.setItem("events", JSON.stringify(json));
            } catch (e) {}
        },
    fetchEvents:
        (username: string): any =>
        async (dispatch: AppDispatch) => {
            try {
                const events = localStorage.getItem("events") || "[]";
                const json = JSON.parse(events) as IEvent[];
                const currentUserEvents = json.filter(
                    (ev) => ev.author === username || ev.guest === username
                );
                dispatch(EvenActionCreators.setEvents(currentUserEvents));
            } catch (e) {}
        },
};
