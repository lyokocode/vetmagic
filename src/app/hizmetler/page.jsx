import { Card, Detail, Hero } from '@/components'

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
            <Card />

        </section>
    )
}

export default Hizmetler