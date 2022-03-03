export interface ItemsCategoriesCollection {
    "sys": {
        "id": string,
    },
    "displayName": string,
    "avatarUrl": {
        "title": string,
        "url": string,
    }
}
export interface ItemsSkillsCollection {
    "sys": {
        "id": string,
    },
    "displayName": string,
}
export interface ItemsServicesCollection {
    "sys": {
        "id": string,
    },
    "name": string,

}
export type StatusUser = "Online" | "Offline";

export interface ItemInterface {
    "sys": {
        "id": string,
        "publishedAt": string
    },
    "displayName": string,
    "status": StatusUser,
    "email": string,
    "phone": string,
    "avatarUrl": {
        "title": string,
        "url": string,
    },
    "categoriesCollection": {
        "items": ItemsCategoriesCollection[]
    },
    "skillsCollection": {
        "items": ItemsSkillsCollection[
        ]
    },
    "servicesCollection": {
        "items": ItemsServicesCollection[]
    }
}
export interface IAdvisorProfileCollection {
    "items": ItemInterface[]
}

export interface IData {
    "data": {
        "advisorProfileCollection": IAdvisorProfileCollection
    }
}
