interface Skill {
  sys: {
    id: string
  }
  displayName: string
}

interface Service {
  sys: {
    id: string
  }
  name: string
}

interface Category {
  sys: {
    id: string
    publishedAt: Date
  }
  displayName: string
  avatarUrl: {
    title: string
    url: string
  }
}

export interface Advisor {
  sys: {
    id: string
    publishedAt: Date
  }
  displayName: string
  email: string
  phone: string
  status: "online" | "offline"
  avatarUrl: {
    title: string
    url: string
  }
  categoriesCollection: {
    items: Category[]
  }
  skillsCollection: {
    items: Skill[]
  }
  servicesCollection: {
    items: Service[]
  }
}