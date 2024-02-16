import { Detail, Hero, WorkList } from '@/components'

const Hizmetler = () => {
    return (
        <section>
            <Hero
                src="/hero4.jpg"
                title="Vet Magic"
            />
            <Detail
                title="Hizmetlerimiz"
                description="Öne çıkan hizmetlerimiz"

            />
            <WorkList />

        </section>
    )
}

export default Hizmetler