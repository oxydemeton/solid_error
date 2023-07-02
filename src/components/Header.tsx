import { Component, JSX } from "solid-js";

export const Header: Component = () => {
    return (
        <header>
        <h1>Header</h1>
        </header>
    );
}
export const UseHeader: Component<{children: JSX.Element}> = (props) => {
    return <>
        <header>
        <h1>Header</h1>
        </header>
        <main>
            {props.children}
        </main>
    </>;
}