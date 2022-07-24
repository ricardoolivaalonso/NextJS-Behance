import styled from "styled-components"
import { queries } from "../00-settings/Queries"
import { useSession } from "next-auth/react"
import { useState } from "react"


const Banner = styled.div`
    height: 265px;
    width: 100%;
    position: relative;

    background-color: #6145ff;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position: top center;
    background-size: cover;

    @media screen and (max-width: ${queries.mq3}){
        height: 175px;
	}

    &::after{
        content: '';
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        background-image: linear-gradient(to bottom, rgba(var(--black), .6), transparent 40%);
        backdrop-filter: blur(10px) grayscale(45%);
    }
`

export const BannerSection = () => {
    const { data, status } = useSession()

    if(status === 'authenticated'){
        return <Banner style={{backgroundImage: `url(${data.user.image})`}}/>
    }
  
    return <Banner />
}