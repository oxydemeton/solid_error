import { createResource } from "solid-js";

export const [resource] = createResource(async ()=>{
    return await fetch('https://jsonplaceholder.typicode.com/todos/1').then(res => res.json()).then(res => JSON.stringify(res))
})