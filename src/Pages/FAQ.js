import React from "react";
import { HiOutlineDocumentAdd } from "react-icons/hi"

export function FAQ() {
    return (
        <>
            <h1>F.A.Q.</h1>
            <h5>Where do I create list of tasks</h5>
            <p>Use the <HiOutlineDocumentAdd /> icon on the main page and add tassk one by one</p>
            <h5>Where is the "Complete Task" button?</h5>
            <p>There is none. The Tasks are supposed to be recurring</p>
            <h5>What is the meaning of the colors?</h5>
            <p>You define it. You have 4 slots and each tasks can have one color (or tag) assigned for better filtering or orientation.</p>
            <h5>I still don't get it. What is it good for?</h5>
            <p>Treat this as a gentle reminder of important but not urgent tasks.</p>
            <h5>Do you have an example?</h5>
            <p>Sure. You can use this for tasks like</p>
            <ul>
                <li>Breathe with your nose</li>
                <li>Think about something nice</li>
                <li>Say something nice to your close ones</li>
                <li>Come up with a fun game for your kids</li>
            </ul>
            <p>You know, the personal development stuff we all like to read about but we never do...</p>
        </>
    )
}