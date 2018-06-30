"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_binding_1 = require("prisma-binding");
/**
 * Type Defs
*/
const typeDefs = `type AggregateReview {
  count: Int!
}

type AggregateReviewVotes {
  count: Int!
}

type AggregateUfvClass {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

scalar DateTime

enum Department {
  Depto__de_Economia_Rural
  Depto__de_Engenharia_Agricola
  Depto__de_Engenharia_Florestal
  Depto__de_Fitopatologia
  Depto__de_Fitotecnia
  Depto__de_Solos
  Depto__de_Zootecnia
  Depto__de_Biologia_Animal
  Depto__de_Biologia_Geral
  Depto__de_Biologia_Vegetal
  Depto__de_Bioquimica_e_Biologia_Molecular
  Depto__de_Educacao_Fisica
  Depto__de_Entomologia
  Depto__de_Microbiologia
  Depto__de_Medicina_e_Enfermagem
  Depto__de_Nutricaoo_e_Saude
  Depto__de_Veterinaria
  Depto__de_Arquitetura_e_Urbanismo
  Depto__de_Engenharia_Civil
  Depto__de_Engenharia_Eletrica
  Depto__de_Engenharia_de_Producao_e_Mecanica
  Depto__de_Estatistica
  Depto__de_Fisica
  Depto__de_Informatica
  Depto__de_Matematica
  Depto__de_Quimica
  Depto__de_Tecnologia_de_Alimentos
  Depto__de_Administracao_e_Contabilidade
  Depto__de_Artes_e_Humanidades
  Depto__de_Ciencias_Sociais
  Depto__de_Comunicacao_Social
  Depto__de_Direito
  Depto__de_Economia
  Depto__de_Economia_Domestica
  Depto__de_Educacao
  Depto__de_Geografia
  Depto__de_Historia
  Depto__de_Letras
}

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Mutation {
  createUser(data: UserCreateInput!): User!
  createReviewVotes(data: ReviewVotesCreateInput!): ReviewVotes!
  createReview(data: ReviewCreateInput!): Review!
  createUfvClass(data: UfvClassCreateInput!): UfvClass!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateReviewVotes(data: ReviewVotesUpdateInput!, where: ReviewVotesWhereUniqueInput!): ReviewVotes
  updateReview(data: ReviewUpdateInput!, where: ReviewWhereUniqueInput!): Review
  updateUfvClass(data: UfvClassUpdateInput!, where: UfvClassWhereUniqueInput!): UfvClass
  deleteUser(where: UserWhereUniqueInput!): User
  deleteReviewVotes(where: ReviewVotesWhereUniqueInput!): ReviewVotes
  deleteReview(where: ReviewWhereUniqueInput!): Review
  deleteUfvClass(where: UfvClassWhereUniqueInput!): UfvClass
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  upsertReviewVotes(where: ReviewVotesWhereUniqueInput!, create: ReviewVotesCreateInput!, update: ReviewVotesUpdateInput!): ReviewVotes!
  upsertReview(where: ReviewWhereUniqueInput!, create: ReviewCreateInput!, update: ReviewUpdateInput!): Review!
  upsertUfvClass(where: UfvClassWhereUniqueInput!, create: UfvClassCreateInput!, update: UfvClassUpdateInput!): UfvClass!
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  updateManyReviewVoteses(data: ReviewVotesUpdateInput!, where: ReviewVotesWhereInput): BatchPayload!
  updateManyReviews(data: ReviewUpdateInput!, where: ReviewWhereInput): BatchPayload!
  updateManyUfvClasses(data: UfvClassUpdateInput!, where: UfvClassWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  deleteManyReviewVoteses(where: ReviewVotesWhereInput): BatchPayload!
  deleteManyReviews(where: ReviewWhereInput): BatchPayload!
  deleteManyUfvClasses(where: UfvClassWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""An object with an ID"""
interface Node {
  """The id of the object."""
  id: ID!
}

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: String

  """When paginating forwards, the cursor to continue."""
  endCursor: String
}

type Query {
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  reviewVoteses(where: ReviewVotesWhereInput, orderBy: ReviewVotesOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ReviewVotes]!
  reviews(where: ReviewWhereInput, orderBy: ReviewOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Review]!
  ufvClasses(where: UfvClassWhereInput, orderBy: UfvClassOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [UfvClass]!
  user(where: UserWhereUniqueInput!): User
  reviewVotes(where: ReviewVotesWhereUniqueInput!): ReviewVotes
  review(where: ReviewWhereUniqueInput!): Review
  ufvClass(where: UfvClassWhereUniqueInput!): UfvClass
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  reviewVotesesConnection(where: ReviewVotesWhereInput, orderBy: ReviewVotesOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ReviewVotesConnection!
  reviewsConnection(where: ReviewWhereInput, orderBy: ReviewOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ReviewConnection!
  ufvClassesConnection(where: UfvClassWhereInput, orderBy: UfvClassOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UfvClassConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type Review implements Node {
  id: ID!
  useful: ReviewUseful!
  easy: ReviewEasy!
  description: String!
  anonymous: Boolean!
  recommended: Boolean!
  teacher: String!
  score: Int!
  classReviewed(where: UfvClassWhereInput): UfvClass!
  reviewer(where: UserWhereInput): User!
  votes(where: ReviewVotesWhereInput, orderBy: ReviewVotesOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ReviewVotes!]
  createdAt: DateTime!
  updatedAt: DateTime!
}

"""A connection to a list of items."""
type ReviewConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [ReviewEdge]!
  aggregate: AggregateReview!
}

input ReviewCreateInput {
  useful: ReviewUseful!
  easy: ReviewEasy!
  description: String!
  anonymous: Boolean!
  recommended: Boolean!
  teacher: String!
  score: Int
  classReviewed: UfvClassCreateOneWithoutReviewsInput!
  reviewer: UserCreateOneWithoutReviewsInput!
  votes: ReviewVotesCreateManyWithoutReviewInput
}

input ReviewCreateManyWithoutClassReviewedInput {
  create: [ReviewCreateWithoutClassReviewedInput!]
  connect: [ReviewWhereUniqueInput!]
}

input ReviewCreateManyWithoutReviewerInput {
  create: [ReviewCreateWithoutReviewerInput!]
  connect: [ReviewWhereUniqueInput!]
}

input ReviewCreateOneWithoutVotesInput {
  create: ReviewCreateWithoutVotesInput
  connect: ReviewWhereUniqueInput
}

input ReviewCreateWithoutClassReviewedInput {
  useful: ReviewUseful!
  easy: ReviewEasy!
  description: String!
  anonymous: Boolean!
  recommended: Boolean!
  teacher: String!
  score: Int
  reviewer: UserCreateOneWithoutReviewsInput!
  votes: ReviewVotesCreateManyWithoutReviewInput
}

input ReviewCreateWithoutReviewerInput {
  useful: ReviewUseful!
  easy: ReviewEasy!
  description: String!
  anonymous: Boolean!
  recommended: Boolean!
  teacher: String!
  score: Int
  classReviewed: UfvClassCreateOneWithoutReviewsInput!
  votes: ReviewVotesCreateManyWithoutReviewInput
}

input ReviewCreateWithoutVotesInput {
  useful: ReviewUseful!
  easy: ReviewEasy!
  description: String!
  anonymous: Boolean!
  recommended: Boolean!
  teacher: String!
  score: Int
  classReviewed: UfvClassCreateOneWithoutReviewsInput!
  reviewer: UserCreateOneWithoutReviewsInput!
}

enum ReviewEasy {
  E0
  E1
  E2
  E3
  E4
  E5
}

"""An edge in a connection."""
type ReviewEdge {
  """The item at the end of the edge."""
  node: Review!

  """A cursor for use in pagination."""
  cursor: String!
}

enum ReviewOrderByInput {
  id_ASC
  id_DESC
  useful_ASC
  useful_DESC
  easy_ASC
  easy_DESC
  description_ASC
  description_DESC
  anonymous_ASC
  anonymous_DESC
  recommended_ASC
  recommended_DESC
  teacher_ASC
  teacher_DESC
  score_ASC
  score_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ReviewPreviousValues {
  id: ID!
  useful: ReviewUseful!
  easy: ReviewEasy!
  description: String!
  anonymous: Boolean!
  recommended: Boolean!
  teacher: String!
  score: Int!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type ReviewSubscriptionPayload {
  mutation: MutationType!
  node: Review
  updatedFields: [String!]
  previousValues: ReviewPreviousValues
}

input ReviewSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [ReviewSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [ReviewSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ReviewSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: ReviewWhereInput
}

input ReviewUpdateInput {
  useful: ReviewUseful
  easy: ReviewEasy
  description: String
  anonymous: Boolean
  recommended: Boolean
  teacher: String
  score: Int
  classReviewed: UfvClassUpdateOneWithoutReviewsInput
  reviewer: UserUpdateOneWithoutReviewsInput
  votes: ReviewVotesUpdateManyWithoutReviewInput
}

input ReviewUpdateManyWithoutClassReviewedInput {
  create: [ReviewCreateWithoutClassReviewedInput!]
  connect: [ReviewWhereUniqueInput!]
  disconnect: [ReviewWhereUniqueInput!]
  delete: [ReviewWhereUniqueInput!]
  update: [ReviewUpdateWithWhereUniqueWithoutClassReviewedInput!]
  upsert: [ReviewUpsertWithWhereUniqueWithoutClassReviewedInput!]
}

input ReviewUpdateManyWithoutReviewerInput {
  create: [ReviewCreateWithoutReviewerInput!]
  connect: [ReviewWhereUniqueInput!]
  disconnect: [ReviewWhereUniqueInput!]
  delete: [ReviewWhereUniqueInput!]
  update: [ReviewUpdateWithWhereUniqueWithoutReviewerInput!]
  upsert: [ReviewUpsertWithWhereUniqueWithoutReviewerInput!]
}

input ReviewUpdateOneWithoutVotesInput {
  create: ReviewCreateWithoutVotesInput
  connect: ReviewWhereUniqueInput
  delete: Boolean
  update: ReviewUpdateWithoutVotesDataInput
  upsert: ReviewUpsertWithoutVotesInput
}

input ReviewUpdateWithoutClassReviewedDataInput {
  useful: ReviewUseful
  easy: ReviewEasy
  description: String
  anonymous: Boolean
  recommended: Boolean
  teacher: String
  score: Int
  reviewer: UserUpdateOneWithoutReviewsInput
  votes: ReviewVotesUpdateManyWithoutReviewInput
}

input ReviewUpdateWithoutReviewerDataInput {
  useful: ReviewUseful
  easy: ReviewEasy
  description: String
  anonymous: Boolean
  recommended: Boolean
  teacher: String
  score: Int
  classReviewed: UfvClassUpdateOneWithoutReviewsInput
  votes: ReviewVotesUpdateManyWithoutReviewInput
}

input ReviewUpdateWithoutVotesDataInput {
  useful: ReviewUseful
  easy: ReviewEasy
  description: String
  anonymous: Boolean
  recommended: Boolean
  teacher: String
  score: Int
  classReviewed: UfvClassUpdateOneWithoutReviewsInput
  reviewer: UserUpdateOneWithoutReviewsInput
}

input ReviewUpdateWithWhereUniqueWithoutClassReviewedInput {
  where: ReviewWhereUniqueInput!
  data: ReviewUpdateWithoutClassReviewedDataInput!
}

input ReviewUpdateWithWhereUniqueWithoutReviewerInput {
  where: ReviewWhereUniqueInput!
  data: ReviewUpdateWithoutReviewerDataInput!
}

input ReviewUpsertWithoutVotesInput {
  update: ReviewUpdateWithoutVotesDataInput!
  create: ReviewCreateWithoutVotesInput!
}

input ReviewUpsertWithWhereUniqueWithoutClassReviewedInput {
  where: ReviewWhereUniqueInput!
  update: ReviewUpdateWithoutClassReviewedDataInput!
  create: ReviewCreateWithoutClassReviewedInput!
}

input ReviewUpsertWithWhereUniqueWithoutReviewerInput {
  where: ReviewWhereUniqueInput!
  update: ReviewUpdateWithoutReviewerDataInput!
  create: ReviewCreateWithoutReviewerInput!
}

enum ReviewUseful {
  U0
  U1
  U2
  U3
  U4
  U5
}

type ReviewVotes implements Node {
  id: ID!
  review(where: ReviewWhereInput): Review!
  user(where: UserWhereInput): User!
  type: ReviewVotesTypes!
}

"""A connection to a list of items."""
type ReviewVotesConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [ReviewVotesEdge]!
  aggregate: AggregateReviewVotes!
}

input ReviewVotesCreateInput {
  type: ReviewVotesTypes!
  review: ReviewCreateOneWithoutVotesInput!
  user: UserCreateOneWithoutVotesInput!
}

input ReviewVotesCreateManyWithoutReviewInput {
  create: [ReviewVotesCreateWithoutReviewInput!]
  connect: [ReviewVotesWhereUniqueInput!]
}

input ReviewVotesCreateManyWithoutUserInput {
  create: [ReviewVotesCreateWithoutUserInput!]
  connect: [ReviewVotesWhereUniqueInput!]
}

input ReviewVotesCreateWithoutReviewInput {
  type: ReviewVotesTypes!
  user: UserCreateOneWithoutVotesInput!
}

input ReviewVotesCreateWithoutUserInput {
  type: ReviewVotesTypes!
  review: ReviewCreateOneWithoutVotesInput!
}

"""An edge in a connection."""
type ReviewVotesEdge {
  """The item at the end of the edge."""
  node: ReviewVotes!

  """A cursor for use in pagination."""
  cursor: String!
}

enum ReviewVotesOrderByInput {
  id_ASC
  id_DESC
  type_ASC
  type_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type ReviewVotesPreviousValues {
  id: ID!
  type: ReviewVotesTypes!
}

type ReviewVotesSubscriptionPayload {
  mutation: MutationType!
  node: ReviewVotes
  updatedFields: [String!]
  previousValues: ReviewVotesPreviousValues
}

input ReviewVotesSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [ReviewVotesSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [ReviewVotesSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ReviewVotesSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: ReviewVotesWhereInput
}

enum ReviewVotesTypes {
  Agree
  Disagree
}

input ReviewVotesUpdateInput {
  type: ReviewVotesTypes
  review: ReviewUpdateOneWithoutVotesInput
  user: UserUpdateOneWithoutVotesInput
}

input ReviewVotesUpdateManyWithoutReviewInput {
  create: [ReviewVotesCreateWithoutReviewInput!]
  connect: [ReviewVotesWhereUniqueInput!]
  disconnect: [ReviewVotesWhereUniqueInput!]
  delete: [ReviewVotesWhereUniqueInput!]
  update: [ReviewVotesUpdateWithWhereUniqueWithoutReviewInput!]
  upsert: [ReviewVotesUpsertWithWhereUniqueWithoutReviewInput!]
}

input ReviewVotesUpdateManyWithoutUserInput {
  create: [ReviewVotesCreateWithoutUserInput!]
  connect: [ReviewVotesWhereUniqueInput!]
  disconnect: [ReviewVotesWhereUniqueInput!]
  delete: [ReviewVotesWhereUniqueInput!]
  update: [ReviewVotesUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [ReviewVotesUpsertWithWhereUniqueWithoutUserInput!]
}

input ReviewVotesUpdateWithoutReviewDataInput {
  type: ReviewVotesTypes
  user: UserUpdateOneWithoutVotesInput
}

input ReviewVotesUpdateWithoutUserDataInput {
  type: ReviewVotesTypes
  review: ReviewUpdateOneWithoutVotesInput
}

input ReviewVotesUpdateWithWhereUniqueWithoutReviewInput {
  where: ReviewVotesWhereUniqueInput!
  data: ReviewVotesUpdateWithoutReviewDataInput!
}

input ReviewVotesUpdateWithWhereUniqueWithoutUserInput {
  where: ReviewVotesWhereUniqueInput!
  data: ReviewVotesUpdateWithoutUserDataInput!
}

input ReviewVotesUpsertWithWhereUniqueWithoutReviewInput {
  where: ReviewVotesWhereUniqueInput!
  update: ReviewVotesUpdateWithoutReviewDataInput!
  create: ReviewVotesCreateWithoutReviewInput!
}

input ReviewVotesUpsertWithWhereUniqueWithoutUserInput {
  where: ReviewVotesWhereUniqueInput!
  update: ReviewVotesUpdateWithoutUserDataInput!
  create: ReviewVotesCreateWithoutUserInput!
}

input ReviewVotesWhereInput {
  """Logical AND on all given filters."""
  AND: [ReviewVotesWhereInput!]

  """Logical OR on all given filters."""
  OR: [ReviewVotesWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ReviewVotesWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  type: ReviewVotesTypes

  """All values that are not equal to given value."""
  type_not: ReviewVotesTypes

  """All values that are contained in given list."""
  type_in: [ReviewVotesTypes!]

  """All values that are not contained in given list."""
  type_not_in: [ReviewVotesTypes!]
  review: ReviewWhereInput
  user: UserWhereInput
}

input ReviewVotesWhereUniqueInput {
  id: ID
}

input ReviewWhereInput {
  """Logical AND on all given filters."""
  AND: [ReviewWhereInput!]

  """Logical OR on all given filters."""
  OR: [ReviewWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ReviewWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  useful: ReviewUseful

  """All values that are not equal to given value."""
  useful_not: ReviewUseful

  """All values that are contained in given list."""
  useful_in: [ReviewUseful!]

  """All values that are not contained in given list."""
  useful_not_in: [ReviewUseful!]
  easy: ReviewEasy

  """All values that are not equal to given value."""
  easy_not: ReviewEasy

  """All values that are contained in given list."""
  easy_in: [ReviewEasy!]

  """All values that are not contained in given list."""
  easy_not_in: [ReviewEasy!]
  description: String

  """All values that are not equal to given value."""
  description_not: String

  """All values that are contained in given list."""
  description_in: [String!]

  """All values that are not contained in given list."""
  description_not_in: [String!]

  """All values less than the given value."""
  description_lt: String

  """All values less than or equal the given value."""
  description_lte: String

  """All values greater than the given value."""
  description_gt: String

  """All values greater than or equal the given value."""
  description_gte: String

  """All values containing the given string."""
  description_contains: String

  """All values not containing the given string."""
  description_not_contains: String

  """All values starting with the given string."""
  description_starts_with: String

  """All values not starting with the given string."""
  description_not_starts_with: String

  """All values ending with the given string."""
  description_ends_with: String

  """All values not ending with the given string."""
  description_not_ends_with: String
  anonymous: Boolean

  """All values that are not equal to given value."""
  anonymous_not: Boolean
  recommended: Boolean

  """All values that are not equal to given value."""
  recommended_not: Boolean
  teacher: String

  """All values that are not equal to given value."""
  teacher_not: String

  """All values that are contained in given list."""
  teacher_in: [String!]

  """All values that are not contained in given list."""
  teacher_not_in: [String!]

  """All values less than the given value."""
  teacher_lt: String

  """All values less than or equal the given value."""
  teacher_lte: String

  """All values greater than the given value."""
  teacher_gt: String

  """All values greater than or equal the given value."""
  teacher_gte: String

  """All values containing the given string."""
  teacher_contains: String

  """All values not containing the given string."""
  teacher_not_contains: String

  """All values starting with the given string."""
  teacher_starts_with: String

  """All values not starting with the given string."""
  teacher_not_starts_with: String

  """All values ending with the given string."""
  teacher_ends_with: String

  """All values not ending with the given string."""
  teacher_not_ends_with: String
  score: Int

  """All values that are not equal to given value."""
  score_not: Int

  """All values that are contained in given list."""
  score_in: [Int!]

  """All values that are not contained in given list."""
  score_not_in: [Int!]

  """All values less than the given value."""
  score_lt: Int

  """All values less than or equal the given value."""
  score_lte: Int

  """All values greater than the given value."""
  score_gt: Int

  """All values greater than or equal the given value."""
  score_gte: Int
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  classReviewed: UfvClassWhereInput
  reviewer: UserWhereInput
  votes_every: ReviewVotesWhereInput
  votes_some: ReviewVotesWhereInput
  votes_none: ReviewVotesWhereInput
}

input ReviewWhereUniqueInput {
  id: ID
}

type Subscription {
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  reviewVotes(where: ReviewVotesSubscriptionWhereInput): ReviewVotesSubscriptionPayload
  review(where: ReviewSubscriptionWhereInput): ReviewSubscriptionPayload
  ufvClass(where: UfvClassSubscriptionWhereInput): UfvClassSubscriptionPayload
}

type UfvClass implements Node {
  id: ID!
  cod: String!
  name: String!
  optional: Boolean!
  department: Department!
  useful: Float!
  easy: Float!
  recommended: Int!
  reviews(where: ReviewWhereInput, orderBy: ReviewOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Review!]
}

"""A connection to a list of items."""
type UfvClassConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [UfvClassEdge]!
  aggregate: AggregateUfvClass!
}

input UfvClassCreateInput {
  cod: String!
  name: String!
  optional: Boolean!
  department: Department!
  useful: Float
  easy: Float
  recommended: Int
  reviews: ReviewCreateManyWithoutClassReviewedInput
}

input UfvClassCreateOneWithoutReviewsInput {
  create: UfvClassCreateWithoutReviewsInput
  connect: UfvClassWhereUniqueInput
}

input UfvClassCreateWithoutReviewsInput {
  cod: String!
  name: String!
  optional: Boolean!
  department: Department!
  useful: Float
  easy: Float
  recommended: Int
}

"""An edge in a connection."""
type UfvClassEdge {
  """The item at the end of the edge."""
  node: UfvClass!

  """A cursor for use in pagination."""
  cursor: String!
}

enum UfvClassOrderByInput {
  id_ASC
  id_DESC
  cod_ASC
  cod_DESC
  name_ASC
  name_DESC
  optional_ASC
  optional_DESC
  department_ASC
  department_DESC
  useful_ASC
  useful_DESC
  easy_ASC
  easy_DESC
  recommended_ASC
  recommended_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type UfvClassPreviousValues {
  id: ID!
  cod: String!
  name: String!
  optional: Boolean!
  department: Department!
  useful: Float!
  easy: Float!
  recommended: Int!
}

type UfvClassSubscriptionPayload {
  mutation: MutationType!
  node: UfvClass
  updatedFields: [String!]
  previousValues: UfvClassPreviousValues
}

input UfvClassSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [UfvClassSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [UfvClassSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UfvClassSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UfvClassWhereInput
}

input UfvClassUpdateInput {
  cod: String
  name: String
  optional: Boolean
  department: Department
  useful: Float
  easy: Float
  recommended: Int
  reviews: ReviewUpdateManyWithoutClassReviewedInput
}

input UfvClassUpdateOneWithoutReviewsInput {
  create: UfvClassCreateWithoutReviewsInput
  connect: UfvClassWhereUniqueInput
  delete: Boolean
  update: UfvClassUpdateWithoutReviewsDataInput
  upsert: UfvClassUpsertWithoutReviewsInput
}

input UfvClassUpdateWithoutReviewsDataInput {
  cod: String
  name: String
  optional: Boolean
  department: Department
  useful: Float
  easy: Float
  recommended: Int
}

input UfvClassUpsertWithoutReviewsInput {
  update: UfvClassUpdateWithoutReviewsDataInput!
  create: UfvClassCreateWithoutReviewsInput!
}

input UfvClassWhereInput {
  """Logical AND on all given filters."""
  AND: [UfvClassWhereInput!]

  """Logical OR on all given filters."""
  OR: [UfvClassWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UfvClassWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  cod: String

  """All values that are not equal to given value."""
  cod_not: String

  """All values that are contained in given list."""
  cod_in: [String!]

  """All values that are not contained in given list."""
  cod_not_in: [String!]

  """All values less than the given value."""
  cod_lt: String

  """All values less than or equal the given value."""
  cod_lte: String

  """All values greater than the given value."""
  cod_gt: String

  """All values greater than or equal the given value."""
  cod_gte: String

  """All values containing the given string."""
  cod_contains: String

  """All values not containing the given string."""
  cod_not_contains: String

  """All values starting with the given string."""
  cod_starts_with: String

  """All values not starting with the given string."""
  cod_not_starts_with: String

  """All values ending with the given string."""
  cod_ends_with: String

  """All values not ending with the given string."""
  cod_not_ends_with: String
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  optional: Boolean

  """All values that are not equal to given value."""
  optional_not: Boolean
  department: Department

  """All values that are not equal to given value."""
  department_not: Department

  """All values that are contained in given list."""
  department_in: [Department!]

  """All values that are not contained in given list."""
  department_not_in: [Department!]
  useful: Float

  """All values that are not equal to given value."""
  useful_not: Float

  """All values that are contained in given list."""
  useful_in: [Float!]

  """All values that are not contained in given list."""
  useful_not_in: [Float!]

  """All values less than the given value."""
  useful_lt: Float

  """All values less than or equal the given value."""
  useful_lte: Float

  """All values greater than the given value."""
  useful_gt: Float

  """All values greater than or equal the given value."""
  useful_gte: Float
  easy: Float

  """All values that are not equal to given value."""
  easy_not: Float

  """All values that are contained in given list."""
  easy_in: [Float!]

  """All values that are not contained in given list."""
  easy_not_in: [Float!]

  """All values less than the given value."""
  easy_lt: Float

  """All values less than or equal the given value."""
  easy_lte: Float

  """All values greater than the given value."""
  easy_gt: Float

  """All values greater than or equal the given value."""
  easy_gte: Float
  recommended: Int

  """All values that are not equal to given value."""
  recommended_not: Int

  """All values that are contained in given list."""
  recommended_in: [Int!]

  """All values that are not contained in given list."""
  recommended_not_in: [Int!]

  """All values less than the given value."""
  recommended_lt: Int

  """All values less than or equal the given value."""
  recommended_lte: Int

  """All values greater than the given value."""
  recommended_gt: Int

  """All values greater than or equal the given value."""
  recommended_gte: Int
  reviews_every: ReviewWhereInput
  reviews_some: ReviewWhereInput
  reviews_none: ReviewWhereInput
}

input UfvClassWhereUniqueInput {
  id: ID
  cod: String
}

enum UfvCourses {
  Agronegocio
  Agronomia
  Cooperativismo
  Engenharia_Agricola_e_Ambiental
  Engenharia_Florestal
  Zootecnia
  Bioquimica
  Ciencias_Biologicas__Bacharelado_Licenciatura_
  Educacao_Fisica__Bacharelado_Licenciatura_
  Enfermagem
  Licenciatura_em_Ciencias_Biologicas__Noturno_
  Medicina
  Medicina_Veterinaria
  Nutricao
  Arquitetura_e_Urbanismo
  Ciencia_da_Computacaoo
  Ciencia_e_Tecnologia_de_Laticinios
  Engenharia_Ambiental
  Engenharia_Civil
  Engenharia_de_Agrimensura_e_Cartografica
  Engenharia_de_Alimentos
  Engenharia_de_Producao
  Engenharia_Eletrica
  Engenharia_Mecanica
  Engenharia_Quimica
  Fisica__Bacharelado_Licenciatura_
  Licenciatura_em_Fisica
  Licenciatura_em_Matematica
  Licenciatura_em_Quimica
  Matematica__Bacharelado_Licenciatura_
  Quimica__Bacharelado_Licenciatura_
  Administracao
  Ciencias_Contabeis
  Ciencias_Economicas
  Ciencias_Sociais__Bacharelado_Licenciatura_
  Comunicacao_Social___Jornalismo
  Danca__Bacharelado_Licenciatura_
  Direito
  Economia_Domestica
  Educacao_do_Campo
  Educacao_Infantil
  Geografia__Bacharelado_Licenciatura_
  Historia__Bacharelado_Licenciatura_
  Letras
  Pedagogia
  Secretariado_Executivo_Trilingue___Portugues__Frances_e_Ingles
  Servico_Social
}

enum UfvYears {
  Y19201
  Y19211
  Y19221
  Y19231
  Y19241
  Y19251
  Y19261
  Y19271
  Y19281
  Y19291
  Y19301
  Y19311
  Y19321
  Y19331
  Y19341
  Y19351
  Y19361
  Y19371
  Y19381
  Y19391
  Y19401
  Y19411
  Y19421
  Y19431
  Y19441
  Y19451
  Y19461
  Y19471
  Y19481
  Y19491
  Y19501
  Y19511
  Y19521
  Y19531
  Y19541
  Y19551
  Y19561
  Y19571
  Y19581
  Y19591
  Y19601
  Y19611
  Y19621
  Y19631
  Y19641
  Y19651
  Y19661
  Y19671
  Y19681
  Y19691
  Y19701
  Y19711
  Y19721
  Y19731
  Y19741
  Y19751
  Y19761
  Y19771
  Y19781
  Y19791
  Y19801
  Y19811
  Y19821
  Y19831
  Y19841
  Y19851
  Y19861
  Y19871
  Y19881
  Y19891
  Y19901
  Y19911
  Y19921
  Y19931
  Y19941
  Y19951
  Y19961
  Y19971
  Y19981
  Y19991
  Y20001
  Y20011
  Y20021
  Y20031
  Y20041
  Y20051
  Y20061
  Y20071
  Y20081
  Y20091
  Y20101
  Y20111
  Y20121
  Y20131
  Y20141
  Y20151
  Y20161
  Y20171
  Y20181
}

type User implements Node {
  id: ID!
  facebookId: String!
  name: String!
  course: UfvCourses!
  year: UfvYears!
  rate: UserRate!
  reviews(where: ReviewWhereInput, orderBy: ReviewOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Review!]
  votes(where: ReviewVotesWhereInput, orderBy: ReviewVotesOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ReviewVotes!]
  createdAt: DateTime!
  updatedAt: DateTime!
}

"""A connection to a list of items."""
type UserConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  facebookId: String!
  name: String!
  course: UfvCourses!
  year: UfvYears!
  rate: UserRate
  reviews: ReviewCreateManyWithoutReviewerInput
  votes: ReviewVotesCreateManyWithoutUserInput
}

input UserCreateOneWithoutReviewsInput {
  create: UserCreateWithoutReviewsInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutVotesInput {
  create: UserCreateWithoutVotesInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutReviewsInput {
  facebookId: String!
  name: String!
  course: UfvCourses!
  year: UfvYears!
  rate: UserRate
  votes: ReviewVotesCreateManyWithoutUserInput
}

input UserCreateWithoutVotesInput {
  facebookId: String!
  name: String!
  course: UfvCourses!
  year: UfvYears!
  rate: UserRate
  reviews: ReviewCreateManyWithoutReviewerInput
}

"""An edge in a connection."""
type UserEdge {
  """The item at the end of the edge."""
  node: User!

  """A cursor for use in pagination."""
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  facebookId_ASC
  facebookId_DESC
  name_ASC
  name_DESC
  course_ASC
  course_DESC
  year_ASC
  year_DESC
  rate_ASC
  rate_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  facebookId: String!
  name: String!
  course: UfvCourses!
  year: UfvYears!
  rate: UserRate!
  createdAt: DateTime!
  updatedAt: DateTime!
}

enum UserRate {
  Iniciante
  Confiavel
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [UserSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UserWhereInput
}

input UserUpdateInput {
  facebookId: String
  name: String
  course: UfvCourses
  year: UfvYears
  rate: UserRate
  reviews: ReviewUpdateManyWithoutReviewerInput
  votes: ReviewVotesUpdateManyWithoutUserInput
}

input UserUpdateOneWithoutReviewsInput {
  create: UserCreateWithoutReviewsInput
  connect: UserWhereUniqueInput
  delete: Boolean
  update: UserUpdateWithoutReviewsDataInput
  upsert: UserUpsertWithoutReviewsInput
}

input UserUpdateOneWithoutVotesInput {
  create: UserCreateWithoutVotesInput
  connect: UserWhereUniqueInput
  delete: Boolean
  update: UserUpdateWithoutVotesDataInput
  upsert: UserUpsertWithoutVotesInput
}

input UserUpdateWithoutReviewsDataInput {
  facebookId: String
  name: String
  course: UfvCourses
  year: UfvYears
  rate: UserRate
  votes: ReviewVotesUpdateManyWithoutUserInput
}

input UserUpdateWithoutVotesDataInput {
  facebookId: String
  name: String
  course: UfvCourses
  year: UfvYears
  rate: UserRate
  reviews: ReviewUpdateManyWithoutReviewerInput
}

input UserUpsertWithoutReviewsInput {
  update: UserUpdateWithoutReviewsDataInput!
  create: UserCreateWithoutReviewsInput!
}

input UserUpsertWithoutVotesInput {
  update: UserUpdateWithoutVotesDataInput!
  create: UserCreateWithoutVotesInput!
}

input UserWhereInput {
  """Logical AND on all given filters."""
  AND: [UserWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  facebookId: String

  """All values that are not equal to given value."""
  facebookId_not: String

  """All values that are contained in given list."""
  facebookId_in: [String!]

  """All values that are not contained in given list."""
  facebookId_not_in: [String!]

  """All values less than the given value."""
  facebookId_lt: String

  """All values less than or equal the given value."""
  facebookId_lte: String

  """All values greater than the given value."""
  facebookId_gt: String

  """All values greater than or equal the given value."""
  facebookId_gte: String

  """All values containing the given string."""
  facebookId_contains: String

  """All values not containing the given string."""
  facebookId_not_contains: String

  """All values starting with the given string."""
  facebookId_starts_with: String

  """All values not starting with the given string."""
  facebookId_not_starts_with: String

  """All values ending with the given string."""
  facebookId_ends_with: String

  """All values not ending with the given string."""
  facebookId_not_ends_with: String
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  course: UfvCourses

  """All values that are not equal to given value."""
  course_not: UfvCourses

  """All values that are contained in given list."""
  course_in: [UfvCourses!]

  """All values that are not contained in given list."""
  course_not_in: [UfvCourses!]
  year: UfvYears

  """All values that are not equal to given value."""
  year_not: UfvYears

  """All values that are contained in given list."""
  year_in: [UfvYears!]

  """All values that are not contained in given list."""
  year_not_in: [UfvYears!]
  rate: UserRate

  """All values that are not equal to given value."""
  rate_not: UserRate

  """All values that are contained in given list."""
  rate_in: [UserRate!]

  """All values that are not contained in given list."""
  rate_not_in: [UserRate!]
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  reviews_every: ReviewWhereInput
  reviews_some: ReviewWhereInput
  reviews_none: ReviewWhereInput
  votes_every: ReviewVotesWhereInput
  votes_some: ReviewVotesWhereInput
  votes_none: ReviewVotesWhereInput
}

input UserWhereUniqueInput {
  id: ID
  facebookId: String
}
`;
exports.Prisma = prisma_binding_1.makePrismaBindingClass({ typeDefs });