import { BannerSection } from "../../components/01-sections/BannerSection";
import { HeaderSection } from "../../components/01-sections/HeaderSection";
import { MainSection } from "../../components/01-sections/MainSection";
import { ProjectsSection } from "../../components/01-sections/ProjectsSection";
import { getSession } from "next-auth/react"

export default function ExplorePage({session}){
    return(
        <>
            <HeaderSection />
            <BannerSection />
            <MainSection grid="1">
                <ProjectsSection path="explore"/>
            </MainSection>
        </>
    )
}

export const getServerSideProps = async(context) => {
	const session = await getSession(context) 

	if (!session) {
		return {
			redirect: {
				destination: '/home',
				permanent: false,
			},
		}
	}

	return {
		props: {
			session
		}
	}
}