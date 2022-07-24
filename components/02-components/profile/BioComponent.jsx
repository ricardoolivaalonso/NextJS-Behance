import styled from "styled-components"
import { queries } from "../../00-settings/Queries"
import { FontBody } from "../../00-settings/Mixins"
import { useSession } from "next-auth/react"

const Bio = styled.div`
    display: grid;
    justify-items: center;
    gap: 5px;
`
const BioImage = styled.img`
    width: 110px;
    height: 110px;
    border-radius: 50%;

    @media screen and (max-width: ${queries.mq3}){
        margin-top: -100px;
        outline: 8px solid rgba(var(--white), 1);
	}
`
const BioName = styled.h1`
    ${FontBody(24, 'rgb(25, 25, 25)', 500)};
`
const BioCareer = styled.p`
    ${FontBody()};
`
const BioWebsite = styled.a`
    ${FontBody()};
    line-height: .8;
    border-bottom: 1px solid rgba(var(--gray), 1);
`
const BioCountry= styled.a`
    ${FontBody()};
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    gap: 5px;
    margin-top: var(--padding);

    & svg {
        width: 8px;
        opacity: .5;
    }
`

export const BioComponent = () => {
    const { data, status } = useSession()
    console.log(data, status)
    
    return(
        <Bio>
            { status === 'authenticated' ? <BioImage src={data.user.image}/> : <BioImage src="assets/images/avatar.jpeg"/> }
            <BioName>
                { status === 'authenticated' ? data.user.name : 'Ana Sacareno' }
            </BioName>
            <BioCareer>UX/UI Developer | Frontend Developer</BioCareer>
            <BioWebsite>
                { status === 'authenticated' ? `${data.user.name.split(' ').join('').toLowerCase()}.com` : 'anasacareno.com' }
            </BioWebsite>
            <BioCountry>
                <svg viewBox="-4808 -20688 14.286 20">
                    <path d="M-4800.857-20688a7.143 7.143 0 0 0-7.143 7.143c0 5.714 7.143 12.857 7.143 12.857s7.143-7.143 7.143-12.857a7.142 7.142 0 0 0-7.143-7.143zm0 10a2.857 2.857 0 1 1 2.857-2.859 2.858 2.858 0 0 1-2.857 2.859z" />
                </svg>
                Sydney, Australia
            </BioCountry>
        </Bio>
    )
}