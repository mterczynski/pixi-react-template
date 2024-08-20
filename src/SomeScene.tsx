import { Container, Graphics, Text } from '@pixi/react';
import React from 'react';
import './App.css';

export const SomeScene = () => {
    return (
        <>
            <Graphics
                draw={(g) => {
                    g.clear();
                    g.beginFill(0xffffff);
                    g.drawRect(0, 150, 1200, 400);
                    g.endFill();
                }}
            />

            <Container x={150} y={150}>
                <Text text="Edit this text in SomeScene.tsx"></Text>
            </Container>
        </>
    );
};
