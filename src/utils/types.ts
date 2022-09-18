type DataType = {
  advisorProfileCollection: AdvisorCollectionType;
};

type CollectionType<T> = {
  items: Array<T>;
};

type AdvisorCollectionType = CollectionType<AdvisorType>;
type CategoryCollectionType = CollectionType<CategoryType>;
type SkillCollectionType = CollectionType<SkillType>;
type ServiceCollectionType = CollectionType<ServiceType>;

type AdvisorType = {
  sys: SysType;
  displayName: string;
  email: string | null;
  phone: string | null;
  avatarUrl: AvatarUrlType | null;

  categoriesCollection: CategoryCollectionType;
  skillsCollection: SkillCollectionType;
  servicesCollection: ServiceCollectionType;
};

type AvatarUrlType = {
  title: string;
  url: string;
};

type SysType = {
  id: string;
  publishedAt?: string;
};

type CategoryType = {
  sys: SysType;
  displayName: string;
  avatarUrl: AvatarUrlType | null;
};

type SkillType = {
  sys: SysType;
  displayName: string;
};

type ServiceType = {
  sys: SysType;
  name: string;
};

export type {
  DataType,
  AdvisorCollectionType,
  AdvisorType,
  AvatarUrlType,
  CategoryCollectionType,
  CategoryType,
  CollectionType,
  ServiceCollectionType,
  ServiceType,
  SkillCollectionType,
  SkillType,
  SysType,
};
