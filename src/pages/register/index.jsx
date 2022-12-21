// import { useNavigate } from "react-router-dom";
import React from 'react';
import { MdEmail, MdLock } from 'react-icons/md';
import { BsFillPersonFill } from 'react-icons/bs'
import { useNavigate} from 'react-router-dom';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { Button } from '../../components/button';
import { RegisterContainer, SubTitle, AlreadyHaveAcount, Column, LoginHighLight, TextContent, TitleRegister, Wrapper } from "./styles";
import { Input } from '../../components/input';

import { Header } from '../../components/header';

const schema = yup.object({
    name: yup.string().min(4, 'Nome deve ter pelo menos 4 caracteres').required('Campo obrigatório'),
    email: yup.string().email('E-mail não é válido').required('Campo obrigatório'),
    password: yup.string().min(4, 'Senha deve ter pelo menos 4 caracteres').required('Campo obrigatório'), 
     }).required();

const Register = () => {
    const navigate = useNavigate();

    const { control, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema),
        mode: "onChange",
    });

    const onSubmit = async (formData) => {
        try{
            if(formData.name && formData.email && formData.password){
                navigate('/login') 
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
            <RegisterContainer>
                <Column>
                    <TitleRegister>
                    A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
                    </TitleRegister>
                </Column>
                <Column>
                    <Wrapper>
                        <TitleRegister>Comece agora grátis</TitleRegister>
                        <SubTitle>Crie sua conta e make the change.</SubTitle>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input name="name" leftIcon={<BsFillPersonFill />} control={control} placeholder="Nome completo" errorMessage={errors.name?.message} />
                            <Input name="email" leftIcon={<MdEmail />} control={control} errorMessage={errors.email?.message} placeholder="E-mail" />
                            <Input name="password" leftIcon={<MdLock />} control={control} placeholder="Senha" errorMessage={errors.password?.message} type="password" />
                            <Button type="submit" title="Criar minha conta" variant="secondary" />
                        </form>
                        <TextContent>
                            Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.
                        </TextContent>
                        <AlreadyHaveAcount>Já tenho uma conta. <LoginHighLight>Fazer Login.</LoginHighLight></AlreadyHaveAcount>
                    </Wrapper>
                </Column>
            </RegisterContainer>
        </>
    )

}

export { Register }