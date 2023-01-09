import React from 'react'
import { MdEmail, MdLock } from 'react-icons/md';
import { useNavigate} from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { Button } from '../../components/button';
import { Header } from '../../components/header';
import { Input } from '../../components/input';

import { Column, Container, CriarText, EsqueciText, Row, SubtitleLogin, Title, TitleLogin, Wrapper } from './styles';

const schema = yup.object({
    email: yup.string().email('E-mail não é válido').required('Campo obrigatório'),
    password: yup.string().min(4, 'Senha deve ter pelo menos 4 caracteres').required('Campo obrigatório'),
  }).required();

const Login = () => {

    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors } } = useForm ({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });

    const onSubmit = async (formData) => {
        try{
            if(formData.email && formData.password){
                navigate('/feed') 
                return
            }
            alert('Usuário ou senha inválido.')
        }catch(e){
            alert('Houve um erro.')
        }
    };
    return (
        <>
            <Header />
            <Container>
                <Column>
                    <Title>
                       A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
                    </Title>
                </Column>
                <Column>
                    <Wrapper>
                        <TitleLogin>Faça login</TitleLogin>
                        <SubtitleLogin>Faça seu login e make the change.</SubtitleLogin>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input name="email" errorMessage={errors.email?.message} control={control} placeholder="E-mail" leftIcon={<MdEmail />} />
                            <Input name="password" errorMessage={errors.password?.message} control={control} placeholder="Senha" type="password" leftIcon={<MdLock />} />
                            <Button title="Entrar" variant="secondary" type="submit"/>
                        </form>
                        <Row>
                            <EsqueciText>Esqueci minha senha</EsqueciText>
                            <CriarText>Criar Conta</CriarText>
                        </Row>
                    </Wrapper>
                </Column>
            </Container>
        </>
    )
}

export { Login }