import { Detail, Hero } from '@/components'
import React from 'react'

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
        </section>
    )
}

export default Hizmetler