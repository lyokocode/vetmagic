import { Detail, Hero } from '@/components'

const Blog = () => {
    return (
        <section>
            <Hero
                src="/hero3.jpg"
                title="Vet Magic"
            />
            <Detail
                title="Bloglarımız"
                description="Blog yazılarımız"

            />
        </section>
    )
}

export default Blog