import React from 'react';

export function Example1(props){
    console.log('props', props);
    return <p
    style={{color: props.color, backgroundColor: props.bgColor}}
    >{props.text}</p>
}

export function Example2(props){
    return <p
    style={{color: props.color, backgroundColor: props.bgColor}}
    >hey!!!!!!!!</p>
}

export function Example3(params){
    return (
        <div className="examplex">
            <Wrapper>
                <Example1 color="red" bgColor="yellow" text="Hola amigos xD"/>
                <Example2 color= "black" bgColor="green"/>
            </Wrapper>
        </div>
    );
}

export function Wrapper(props) {
    console.log('wrapper.props', props);
    return <div style={props.styles}>
        <p> Componentes</p>
            {props.children}
    </div>
}

export default Example3;