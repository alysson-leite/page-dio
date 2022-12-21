import React from 'react'
import { Header } from '../../components/header'
import { Card, Card2, Card3, Card4 } from '../../components/card'
import { UserInfo } from '../../components/UserInfo'

import { Container, Column, Title, TitleHighlight } from './styles'


const Feed = () => {
    return (
        <>
            <Header autenticado={true} />
            <Container>
                <Column flex={3}>
                    <Title>Feed</Title>
                    <Card />
                    <Card2 />
                    <Card3 />
                    <Card4 />
                </Column>
                <Column flex={1}>
                    <TitleHighlight># Ranking TOP 5 da semana</TitleHighlight>
                    <UserInfo percentual={90} nome="Alysson Leite" image="https://avatars.githubusercontent.com/u/106327205?v=4"/>
                    <UserInfo percentual={80} nome="Pablo Henrique" image="https://avatars.githubusercontent.com/u/45184516?v=4"/>
                    <UserInfo percentual={55} nome="João Dev" image="https://w7.pngwing.com/pngs/525/108/png-transparent-hacker-computer-cybersecurity-fraud-laptop-hacking-thumbnail.png"/>
                    <UserInfo percentual={50} nome="Lindinha" image="https://www.tecgirl.com.br/wp-content/uploads/2016/06/lindinha-programadora-min.png"/>
                    <UserInfo percentual={30} nome="Francisgleydson" image="https://i.uai.com.br/iOgn40z5Q0Oh-1A7H0ctcE8hxC8=/1200x1200/smart/imgsapp2.uai.com.br/app/noticia_133890394703/2022/08/09/296277/francisgleydisson-edmilson-filho-em-cine-holliudy_1_51563.jpg"/>
                </Column>
            </Container>
        </>
    )
}

export { Feed }