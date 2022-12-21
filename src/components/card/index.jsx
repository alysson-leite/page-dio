import React from "react";
import { FiThumbsUp } from 'react-icons/fi'

import { CardContainer, Content, HasInfo, ImageBackground, PostInfo, UserInfo, UserPicture } from './styles'

const Card = () => {
    return (
        <CardContainer>
            <ImageBackground src="https://static.vecteezy.com/system/resources/previews/003/181/992/non_2x/cyber-hacker-attack-background-skull-vector.jpg"/>
            <Content>
                <UserInfo>
                    <UserPicture src="https://avatars.githubusercontent.com/u/106327205?v=4"/>
                    <div>
                        <h4>Alysson Leite</h4>
                        <p>Há 8 minutos</p>
                    </div>
                </UserInfo>
                <PostInfo>
                    <h4>Projeto do Bootcamp Orange Tech</h4>
                    <p>Projeto feito envolvendo HTML, CSS, Javascript e React, no bootcamp Orange Tech da DIO... <strong>Saiba Mais</strong></p>
                </PostInfo>
                <HasInfo>
                    <h4>#HTML #CSS #Javascript #ReactJS</h4>
                    <p>
                        <FiThumbsUp />25
                    </p>
                </HasInfo>
            </Content>
        </CardContainer>
    )
}

const Card2 = () => {
    return (
        <CardContainer>
            <ImageBackground src="https://raw.githubusercontent.com/alysson-leite/mini-portfolio/main/.github/mini-portfolio.jpg"/>
            <Content>
                <UserInfo>
                    <UserPicture src="https://avatars.githubusercontent.com/u/106327205?v=4"/>
                    <div>
                        <h4>Alysson Leite</h4>
                        <p>Há 2 horas</p>
                    </div>
                </UserInfo>
                <PostInfo>
                    <h4>Projeto Mini Portfólio</h4>
                    <p>Projeto de um mini-portfólio feito na Mapa Dev Week dos gêmeos Ricardo e Cadu, do Dev em Dobro... <strong>Saiba Mais</strong></p>
                </PostInfo>
                <HasInfo>
                    <h4>#HTML #CSS #Javascript</h4>
                    <p>
                        <FiThumbsUp />17
                    </p>
                </HasInfo>
            </Content>
        </CardContainer>
    )
}

const Card3 = () => {
    return (
        <CardContainer>
            <ImageBackground src="https://raw.githubusercontent.com/alysson-leite/projeto-pokemon-slider/main/.github/pokemon.png"/>
            <Content>
                <UserInfo>
                    <UserPicture src="https://avatars.githubusercontent.com/u/106327205?v=4"/>
                    <div>
                        <h4>Alysson Leite</h4>
                        <p>Há 5 horas</p>
                    </div>
                </UserInfo>
                <PostInfo>
                    <h4>Projeto Pokémon Slider</h4>
                    <p>Projeto de um carrossel de imagens de Pokémons, com descrição e HP de cada um, como uma Pokédex... <strong>Saiba Mais</strong></p>
                </PostInfo>
                <HasInfo>
                    <h4>#HTML #CSS #Javascript</h4>
                    <p>
                        <FiThumbsUp />30
                    </p>
                </HasInfo>
            </Content>
        </CardContainer>
    )
}

const Card4 = () => {
    return (
        <CardContainer>
            <ImageBackground src="https://raw.githubusercontent.com/alysson-leite/landing-page-com-grid/main/.github/xyz.png"/>
            <Content>
                <UserInfo>
                    <UserPicture src="https://avatars.githubusercontent.com/u/106327205?v=4"/>
                    <div>
                        <h4>Alysson Leite</h4>
                        <p>Há 6 horas</p>
                    </div>
                </UserInfo>
                <PostInfo>
                    <h4>Projeto Landing Page</h4>
                    <p>Projeto construído como desafio no módulo de CSS Avançado do curso de Front-end do DEVQUEST.... <strong>Saiba Mais</strong></p>
                </PostInfo>
                <HasInfo>
                    <h4>#HTML #CSS</h4>
                    <p>
                        <FiThumbsUp />10
                    </p>
                </HasInfo>
            </Content>
        </CardContainer>
    )
}



export { Card, Card2, Card3, Card4 }
