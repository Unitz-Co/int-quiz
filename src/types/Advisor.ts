import Category from "./category"
import Service from "./Service"
import Skill from "./skill"

interface Advisor {
    sys: {
        id: string,
        publishedAt: string
    },
    status: string,
    displayName: string,
    email: string | null,
    phone: string | null,
    avatarUrl: {
        title: string,
        url: string
    } | null,
    categoriesCollection: {
        items: Category[]
    },
    skillsCollection: {
        items: Skill[]
    },
    servicesCollection: {
        items: Service[]
    }
}

export default Advisor;