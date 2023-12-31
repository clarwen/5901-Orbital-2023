/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateStudySessionInput = {
  id?: string | null,
  time?: string | null,
  location?: string | null,
  todo?: string | null,
  studygroupID: string,
  date?: string | null,
};

export type ModelStudySessionConditionInput = {
  time?: ModelStringInput | null,
  location?: ModelStringInput | null,
  todo?: ModelStringInput | null,
  studygroupID?: ModelIDInput | null,
  date?: ModelStringInput | null,
  and?: Array< ModelStudySessionConditionInput | null > | null,
  or?: Array< ModelStudySessionConditionInput | null > | null,
  not?: ModelStudySessionConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type StudySession = {
  __typename: "StudySession",
  id: string,
  time?: string | null,
  location?: string | null,
  todo?: string | null,
  studygroupID: string,
  date?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateStudySessionInput = {
  id: string,
  time?: string | null,
  location?: string | null,
  todo?: string | null,
  studygroupID?: string | null,
  date?: string | null,
};

export type DeleteStudySessionInput = {
  id: string,
};

export type CreateCommentInput = {
  id?: string | null,
  content: string,
  userID: string,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelCommentConditionInput = {
  content?: ModelStringInput | null,
  userID?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelCommentConditionInput | null > | null,
  or?: Array< ModelCommentConditionInput | null > | null,
  not?: ModelCommentConditionInput | null,
};

export type Comment = {
  __typename: "Comment",
  id: string,
  content: string,
  userID: string,
  createdAt: string,
  updatedAt: string,
  Users?: ModelCommentUserConnection | null,
  Posts?: ModelCommentPostConnection | null,
};

export type ModelCommentUserConnection = {
  __typename: "ModelCommentUserConnection",
  items:  Array<CommentUser | null >,
  nextToken?: string | null,
};

export type CommentUser = {
  __typename: "CommentUser",
  id: string,
  commentId: string,
  userId: string,
  comment: Comment,
  user: User,
  createdAt: string,
  updatedAt: string,
};

export type User = {
  __typename: "User",
  id: string,
  name: string,
  username: string,
  occupation?: string | null,
  image: string,
  email: string,
  Posts?: ModelPostConnection | null,
  Messages?: ModelMessageConnection | null,
  ChatRooms?: ModelUserChatRoomConnection | null,
  FriendRequests?: Array< string | null > | null,
  friendrequests?: ModelFriendRequestConnection | null,
  StudyGroups?: ModelStudyGroupConnection | null,
  comments?: ModelCommentUserConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelPostConnection = {
  __typename: "ModelPostConnection",
  items:  Array<Post | null >,
  nextToken?: string | null,
};

export type Post = {
  __typename: "Post",
  id: string,
  content: string,
  image?: string | null,
  comment: number,
  userID: string,
  comments?: ModelCommentPostConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelCommentPostConnection = {
  __typename: "ModelCommentPostConnection",
  items:  Array<CommentPost | null >,
  nextToken?: string | null,
};

export type CommentPost = {
  __typename: "CommentPost",
  id: string,
  commentId: string,
  postId: string,
  comment: Comment,
  post: Post,
  createdAt: string,
  updatedAt: string,
};

export type ModelMessageConnection = {
  __typename: "ModelMessageConnection",
  items:  Array<Message | null >,
  nextToken?: string | null,
};

export type Message = {
  __typename: "Message",
  id: string,
  text: string,
  chatroomID: string,
  userID: string,
  createdAt: string,
  updatedAt: string,
};

export type ModelUserChatRoomConnection = {
  __typename: "ModelUserChatRoomConnection",
  items:  Array<UserChatRoom | null >,
  nextToken?: string | null,
};

export type UserChatRoom = {
  __typename: "UserChatRoom",
  id: string,
  chatRoomId: string,
  userId: string,
  chatRoom: ChatRoom,
  user: User,
  createdAt: string,
  updatedAt: string,
};

export type ChatRoom = {
  __typename: "ChatRoom",
  id: string,
  Messages?: ModelMessageConnection | null,
  users?: ModelUserChatRoomConnection | null,
  LastMessage?: Message | null,
  createdAt: string,
  updatedAt: string,
  chatRoomLastMessageId?: string | null,
};

export type ModelFriendRequestConnection = {
  __typename: "ModelFriendRequestConnection",
  items:  Array<FriendRequest | null >,
  nextToken?: string | null,
};

export type FriendRequest = {
  __typename: "FriendRequest",
  id: string,
  senderID: string,
  receiverID: string,
  status?: string | null,
  userID: string,
  createdAt: string,
  updatedAt: string,
};

export type ModelStudyGroupConnection = {
  __typename: "ModelStudyGroupConnection",
  items:  Array<StudyGroup | null >,
  nextToken?: string | null,
};

export type StudyGroup = {
  __typename: "StudyGroup",
  id: string,
  name?: string | null,
  icon?: string | null,
  members: Array< string | null >,
  userID: string,
  isActive?: boolean | null,
  Invitations?: ModelInvitationConnection | null,
  StudySessions?: ModelStudySessionConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelInvitationConnection = {
  __typename: "ModelInvitationConnection",
  items:  Array<Invitation | null >,
  nextToken?: string | null,
};

export type Invitation = {
  __typename: "Invitation",
  id: string,
  userID: string,
  status: string,
  studygroupID: string,
  createdAt: string,
  updatedAt: string,
};

export type ModelStudySessionConnection = {
  __typename: "ModelStudySessionConnection",
  items:  Array<StudySession | null >,
  nextToken?: string | null,
};

export type UpdateCommentInput = {
  id: string,
  content?: string | null,
  userID?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteCommentInput = {
  id: string,
};

export type CreateInvitationInput = {
  id?: string | null,
  userID: string,
  status: string,
  studygroupID: string,
};

export type ModelInvitationConditionInput = {
  userID?: ModelIDInput | null,
  status?: ModelStringInput | null,
  studygroupID?: ModelIDInput | null,
  and?: Array< ModelInvitationConditionInput | null > | null,
  or?: Array< ModelInvitationConditionInput | null > | null,
  not?: ModelInvitationConditionInput | null,
};

export type UpdateInvitationInput = {
  id: string,
  userID?: string | null,
  status?: string | null,
  studygroupID?: string | null,
};

export type DeleteInvitationInput = {
  id: string,
};

export type CreateStudyGroupInput = {
  id?: string | null,
  name?: string | null,
  icon?: string | null,
  members: Array< string | null >,
  userID: string,
  isActive?: boolean | null,
};

export type ModelStudyGroupConditionInput = {
  name?: ModelStringInput | null,
  icon?: ModelStringInput | null,
  members?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  isActive?: ModelBooleanInput | null,
  and?: Array< ModelStudyGroupConditionInput | null > | null,
  or?: Array< ModelStudyGroupConditionInput | null > | null,
  not?: ModelStudyGroupConditionInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateStudyGroupInput = {
  id: string,
  name?: string | null,
  icon?: string | null,
  members?: Array< string | null > | null,
  userID?: string | null,
  isActive?: boolean | null,
};

export type DeleteStudyGroupInput = {
  id: string,
};

export type CreateChatRoomInput = {
  id?: string | null,
  chatRoomLastMessageId?: string | null,
};

export type ModelChatRoomConditionInput = {
  and?: Array< ModelChatRoomConditionInput | null > | null,
  or?: Array< ModelChatRoomConditionInput | null > | null,
  not?: ModelChatRoomConditionInput | null,
  chatRoomLastMessageId?: ModelIDInput | null,
};

export type UpdateChatRoomInput = {
  id: string,
  chatRoomLastMessageId?: string | null,
};

export type DeleteChatRoomInput = {
  id: string,
};

export type CreateMessageInput = {
  id?: string | null,
  text: string,
  chatroomID: string,
  userID: string,
};

export type ModelMessageConditionInput = {
  text?: ModelStringInput | null,
  chatroomID?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelMessageConditionInput | null > | null,
  or?: Array< ModelMessageConditionInput | null > | null,
  not?: ModelMessageConditionInput | null,
};

export type UpdateMessageInput = {
  id: string,
  text?: string | null,
  chatroomID?: string | null,
  userID?: string | null,
};

export type DeleteMessageInput = {
  id: string,
};

export type CreateFriendRequestInput = {
  id?: string | null,
  senderID: string,
  receiverID: string,
  status?: string | null,
  userID: string,
};

export type ModelFriendRequestConditionInput = {
  senderID?: ModelIDInput | null,
  receiverID?: ModelIDInput | null,
  status?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelFriendRequestConditionInput | null > | null,
  or?: Array< ModelFriendRequestConditionInput | null > | null,
  not?: ModelFriendRequestConditionInput | null,
};

export type UpdateFriendRequestInput = {
  id: string,
  senderID?: string | null,
  receiverID?: string | null,
  status?: string | null,
  userID?: string | null,
};

export type DeleteFriendRequestInput = {
  id: string,
};

export type CreatePostInput = {
  id?: string | null,
  content: string,
  image?: string | null,
  comment: number,
  userID: string,
};

export type ModelPostConditionInput = {
  content?: ModelStringInput | null,
  image?: ModelStringInput | null,
  comment?: ModelIntInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelPostConditionInput | null > | null,
  or?: Array< ModelPostConditionInput | null > | null,
  not?: ModelPostConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdatePostInput = {
  id: string,
  content?: string | null,
  image?: string | null,
  comment?: number | null,
  userID?: string | null,
};

export type DeletePostInput = {
  id: string,
};

export type CreateUserInput = {
  id?: string | null,
  name: string,
  username: string,
  occupation?: string | null,
  image: string,
  email: string,
  FriendRequests?: Array< string | null > | null,
};

export type ModelUserConditionInput = {
  name?: ModelStringInput | null,
  username?: ModelStringInput | null,
  occupation?: ModelStringInput | null,
  image?: ModelStringInput | null,
  email?: ModelStringInput | null,
  FriendRequests?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type UpdateUserInput = {
  id: string,
  name?: string | null,
  username?: string | null,
  occupation?: string | null,
  image?: string | null,
  email?: string | null,
  FriendRequests?: Array< string | null > | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateCommentUserInput = {
  id?: string | null,
  commentId: string,
  userId: string,
};

export type ModelCommentUserConditionInput = {
  commentId?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  and?: Array< ModelCommentUserConditionInput | null > | null,
  or?: Array< ModelCommentUserConditionInput | null > | null,
  not?: ModelCommentUserConditionInput | null,
};

export type UpdateCommentUserInput = {
  id: string,
  commentId?: string | null,
  userId?: string | null,
};

export type DeleteCommentUserInput = {
  id: string,
};

export type CreateCommentPostInput = {
  id?: string | null,
  commentId: string,
  postId: string,
};

export type ModelCommentPostConditionInput = {
  commentId?: ModelIDInput | null,
  postId?: ModelIDInput | null,
  and?: Array< ModelCommentPostConditionInput | null > | null,
  or?: Array< ModelCommentPostConditionInput | null > | null,
  not?: ModelCommentPostConditionInput | null,
};

export type UpdateCommentPostInput = {
  id: string,
  commentId?: string | null,
  postId?: string | null,
};

export type DeleteCommentPostInput = {
  id: string,
};

export type CreateUserChatRoomInput = {
  id?: string | null,
  chatRoomId: string,
  userId: string,
};

export type ModelUserChatRoomConditionInput = {
  chatRoomId?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  and?: Array< ModelUserChatRoomConditionInput | null > | null,
  or?: Array< ModelUserChatRoomConditionInput | null > | null,
  not?: ModelUserChatRoomConditionInput | null,
};

export type UpdateUserChatRoomInput = {
  id: string,
  chatRoomId?: string | null,
  userId?: string | null,
};

export type DeleteUserChatRoomInput = {
  id: string,
};

export type ModelStudySessionFilterInput = {
  id?: ModelIDInput | null,
  time?: ModelStringInput | null,
  location?: ModelStringInput | null,
  todo?: ModelStringInput | null,
  studygroupID?: ModelIDInput | null,
  date?: ModelStringInput | null,
  and?: Array< ModelStudySessionFilterInput | null > | null,
  or?: Array< ModelStudySessionFilterInput | null > | null,
  not?: ModelStudySessionFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelCommentFilterInput = {
  id?: ModelIDInput | null,
  content?: ModelStringInput | null,
  userID?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelCommentFilterInput | null > | null,
  or?: Array< ModelCommentFilterInput | null > | null,
  not?: ModelCommentFilterInput | null,
};

export type ModelCommentConnection = {
  __typename: "ModelCommentConnection",
  items:  Array<Comment | null >,
  nextToken?: string | null,
};

export type ModelInvitationFilterInput = {
  id?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  status?: ModelStringInput | null,
  studygroupID?: ModelIDInput | null,
  and?: Array< ModelInvitationFilterInput | null > | null,
  or?: Array< ModelInvitationFilterInput | null > | null,
  not?: ModelInvitationFilterInput | null,
};

export type ModelStudyGroupFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  icon?: ModelStringInput | null,
  members?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  isActive?: ModelBooleanInput | null,
  and?: Array< ModelStudyGroupFilterInput | null > | null,
  or?: Array< ModelStudyGroupFilterInput | null > | null,
  not?: ModelStudyGroupFilterInput | null,
};

export type ModelChatRoomFilterInput = {
  id?: ModelIDInput | null,
  and?: Array< ModelChatRoomFilterInput | null > | null,
  or?: Array< ModelChatRoomFilterInput | null > | null,
  not?: ModelChatRoomFilterInput | null,
  chatRoomLastMessageId?: ModelIDInput | null,
};

export type ModelChatRoomConnection = {
  __typename: "ModelChatRoomConnection",
  items:  Array<ChatRoom | null >,
  nextToken?: string | null,
};

export type ModelMessageFilterInput = {
  id?: ModelIDInput | null,
  text?: ModelStringInput | null,
  chatroomID?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelMessageFilterInput | null > | null,
  or?: Array< ModelMessageFilterInput | null > | null,
  not?: ModelMessageFilterInput | null,
};

export type ModelFriendRequestFilterInput = {
  id?: ModelIDInput | null,
  senderID?: ModelIDInput | null,
  receiverID?: ModelIDInput | null,
  status?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelFriendRequestFilterInput | null > | null,
  or?: Array< ModelFriendRequestFilterInput | null > | null,
  not?: ModelFriendRequestFilterInput | null,
};

export type ModelPostFilterInput = {
  id?: ModelIDInput | null,
  content?: ModelStringInput | null,
  image?: ModelStringInput | null,
  comment?: ModelIntInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelPostFilterInput | null > | null,
  or?: Array< ModelPostFilterInput | null > | null,
  not?: ModelPostFilterInput | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  username?: ModelStringInput | null,
  occupation?: ModelStringInput | null,
  image?: ModelStringInput | null,
  email?: ModelStringInput | null,
  FriendRequests?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelCommentUserFilterInput = {
  id?: ModelIDInput | null,
  commentId?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  and?: Array< ModelCommentUserFilterInput | null > | null,
  or?: Array< ModelCommentUserFilterInput | null > | null,
  not?: ModelCommentUserFilterInput | null,
};

export type ModelCommentPostFilterInput = {
  id?: ModelIDInput | null,
  commentId?: ModelIDInput | null,
  postId?: ModelIDInput | null,
  and?: Array< ModelCommentPostFilterInput | null > | null,
  or?: Array< ModelCommentPostFilterInput | null > | null,
  not?: ModelCommentPostFilterInput | null,
};

export type ModelUserChatRoomFilterInput = {
  id?: ModelIDInput | null,
  chatRoomId?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  and?: Array< ModelUserChatRoomFilterInput | null > | null,
  or?: Array< ModelUserChatRoomFilterInput | null > | null,
  not?: ModelUserChatRoomFilterInput | null,
};

export type ModelSubscriptionStudySessionFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  time?: ModelSubscriptionStringInput | null,
  location?: ModelSubscriptionStringInput | null,
  todo?: ModelSubscriptionStringInput | null,
  studygroupID?: ModelSubscriptionIDInput | null,
  date?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStudySessionFilterInput | null > | null,
  or?: Array< ModelSubscriptionStudySessionFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionCommentFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  content?: ModelSubscriptionStringInput | null,
  userID?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCommentFilterInput | null > | null,
  or?: Array< ModelSubscriptionCommentFilterInput | null > | null,
};

export type ModelSubscriptionInvitationFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userID?: ModelSubscriptionIDInput | null,
  status?: ModelSubscriptionStringInput | null,
  studygroupID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionInvitationFilterInput | null > | null,
  or?: Array< ModelSubscriptionInvitationFilterInput | null > | null,
};

export type ModelSubscriptionStudyGroupFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  icon?: ModelSubscriptionStringInput | null,
  members?: ModelSubscriptionStringInput | null,
  userID?: ModelSubscriptionIDInput | null,
  isActive?: ModelSubscriptionBooleanInput | null,
  and?: Array< ModelSubscriptionStudyGroupFilterInput | null > | null,
  or?: Array< ModelSubscriptionStudyGroupFilterInput | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionChatRoomFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionChatRoomFilterInput | null > | null,
  or?: Array< ModelSubscriptionChatRoomFilterInput | null > | null,
};

export type ModelSubscriptionMessageFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  text?: ModelSubscriptionStringInput | null,
  chatroomID?: ModelSubscriptionIDInput | null,
  userID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionMessageFilterInput | null > | null,
  or?: Array< ModelSubscriptionMessageFilterInput | null > | null,
};

export type ModelSubscriptionFriendRequestFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  senderID?: ModelSubscriptionIDInput | null,
  receiverID?: ModelSubscriptionIDInput | null,
  status?: ModelSubscriptionStringInput | null,
  userID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionFriendRequestFilterInput | null > | null,
  or?: Array< ModelSubscriptionFriendRequestFilterInput | null > | null,
};

export type ModelSubscriptionPostFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  content?: ModelSubscriptionStringInput | null,
  image?: ModelSubscriptionStringInput | null,
  comment?: ModelSubscriptionIntInput | null,
  userID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionPostFilterInput | null > | null,
  or?: Array< ModelSubscriptionPostFilterInput | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  username?: ModelSubscriptionStringInput | null,
  occupation?: ModelSubscriptionStringInput | null,
  image?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  FriendRequests?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
};

export type ModelSubscriptionCommentUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  commentId?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionCommentUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionCommentUserFilterInput | null > | null,
};

export type ModelSubscriptionCommentPostFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  commentId?: ModelSubscriptionIDInput | null,
  postId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionCommentPostFilterInput | null > | null,
  or?: Array< ModelSubscriptionCommentPostFilterInput | null > | null,
};

export type ModelSubscriptionUserChatRoomFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  chatRoomId?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionUserChatRoomFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserChatRoomFilterInput | null > | null,
};

export type CreateStudySessionMutationVariables = {
  input: CreateStudySessionInput,
  condition?: ModelStudySessionConditionInput | null,
};

export type CreateStudySessionMutation = {
  createStudySession?:  {
    __typename: "StudySession",
    id: string,
    time?: string | null,
    location?: string | null,
    todo?: string | null,
    studygroupID: string,
    date?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateStudySessionMutationVariables = {
  input: UpdateStudySessionInput,
  condition?: ModelStudySessionConditionInput | null,
};

export type UpdateStudySessionMutation = {
  updateStudySession?:  {
    __typename: "StudySession",
    id: string,
    time?: string | null,
    location?: string | null,
    todo?: string | null,
    studygroupID: string,
    date?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteStudySessionMutationVariables = {
  input: DeleteStudySessionInput,
  condition?: ModelStudySessionConditionInput | null,
};

export type DeleteStudySessionMutation = {
  deleteStudySession?:  {
    __typename: "StudySession",
    id: string,
    time?: string | null,
    location?: string | null,
    todo?: string | null,
    studygroupID: string,
    date?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCommentMutationVariables = {
  input: CreateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type CreateCommentMutation = {
  createComment?:  {
    __typename: "Comment",
    id: string,
    content: string,
    userID: string,
    createdAt: string,
    updatedAt: string,
    Users?:  {
      __typename: "ModelCommentUserConnection",
      nextToken?: string | null,
    } | null,
    Posts?:  {
      __typename: "ModelCommentPostConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type UpdateCommentMutationVariables = {
  input: UpdateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type UpdateCommentMutation = {
  updateComment?:  {
    __typename: "Comment",
    id: string,
    content: string,
    userID: string,
    createdAt: string,
    updatedAt: string,
    Users?:  {
      __typename: "ModelCommentUserConnection",
      nextToken?: string | null,
    } | null,
    Posts?:  {
      __typename: "ModelCommentPostConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type DeleteCommentMutationVariables = {
  input: DeleteCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type DeleteCommentMutation = {
  deleteComment?:  {
    __typename: "Comment",
    id: string,
    content: string,
    userID: string,
    createdAt: string,
    updatedAt: string,
    Users?:  {
      __typename: "ModelCommentUserConnection",
      nextToken?: string | null,
    } | null,
    Posts?:  {
      __typename: "ModelCommentPostConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type CreateInvitationMutationVariables = {
  input: CreateInvitationInput,
  condition?: ModelInvitationConditionInput | null,
};

export type CreateInvitationMutation = {
  createInvitation?:  {
    __typename: "Invitation",
    id: string,
    userID: string,
    status: string,
    studygroupID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateInvitationMutationVariables = {
  input: UpdateInvitationInput,
  condition?: ModelInvitationConditionInput | null,
};

export type UpdateInvitationMutation = {
  updateInvitation?:  {
    __typename: "Invitation",
    id: string,
    userID: string,
    status: string,
    studygroupID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteInvitationMutationVariables = {
  input: DeleteInvitationInput,
  condition?: ModelInvitationConditionInput | null,
};

export type DeleteInvitationMutation = {
  deleteInvitation?:  {
    __typename: "Invitation",
    id: string,
    userID: string,
    status: string,
    studygroupID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateStudyGroupMutationVariables = {
  input: CreateStudyGroupInput,
  condition?: ModelStudyGroupConditionInput | null,
};

export type CreateStudyGroupMutation = {
  createStudyGroup?:  {
    __typename: "StudyGroup",
    id: string,
    name?: string | null,
    icon?: string | null,
    members: Array< string | null >,
    userID: string,
    isActive?: boolean | null,
    Invitations?:  {
      __typename: "ModelInvitationConnection",
      nextToken?: string | null,
    } | null,
    StudySessions?:  {
      __typename: "ModelStudySessionConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateStudyGroupMutationVariables = {
  input: UpdateStudyGroupInput,
  condition?: ModelStudyGroupConditionInput | null,
};

export type UpdateStudyGroupMutation = {
  updateStudyGroup?:  {
    __typename: "StudyGroup",
    id: string,
    name?: string | null,
    icon?: string | null,
    members: Array< string | null >,
    userID: string,
    isActive?: boolean | null,
    Invitations?:  {
      __typename: "ModelInvitationConnection",
      nextToken?: string | null,
    } | null,
    StudySessions?:  {
      __typename: "ModelStudySessionConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteStudyGroupMutationVariables = {
  input: DeleteStudyGroupInput,
  condition?: ModelStudyGroupConditionInput | null,
};

export type DeleteStudyGroupMutation = {
  deleteStudyGroup?:  {
    __typename: "StudyGroup",
    id: string,
    name?: string | null,
    icon?: string | null,
    members: Array< string | null >,
    userID: string,
    isActive?: boolean | null,
    Invitations?:  {
      __typename: "ModelInvitationConnection",
      nextToken?: string | null,
    } | null,
    StudySessions?:  {
      __typename: "ModelStudySessionConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateChatRoomMutationVariables = {
  input: CreateChatRoomInput,
  condition?: ModelChatRoomConditionInput | null,
};

export type CreateChatRoomMutation = {
  createChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    Messages?:  {
      __typename: "ModelMessageConnection",
      nextToken?: string | null,
    } | null,
    users?:  {
      __typename: "ModelUserChatRoomConnection",
      nextToken?: string | null,
    } | null,
    LastMessage?:  {
      __typename: "Message",
      id: string,
      text: string,
      chatroomID: string,
      userID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    chatRoomLastMessageId?: string | null,
  } | null,
};

export type UpdateChatRoomMutationVariables = {
  input: UpdateChatRoomInput,
  condition?: ModelChatRoomConditionInput | null,
};

export type UpdateChatRoomMutation = {
  updateChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    Messages?:  {
      __typename: "ModelMessageConnection",
      nextToken?: string | null,
    } | null,
    users?:  {
      __typename: "ModelUserChatRoomConnection",
      nextToken?: string | null,
    } | null,
    LastMessage?:  {
      __typename: "Message",
      id: string,
      text: string,
      chatroomID: string,
      userID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    chatRoomLastMessageId?: string | null,
  } | null,
};

export type DeleteChatRoomMutationVariables = {
  input: DeleteChatRoomInput,
  condition?: ModelChatRoomConditionInput | null,
};

export type DeleteChatRoomMutation = {
  deleteChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    Messages?:  {
      __typename: "ModelMessageConnection",
      nextToken?: string | null,
    } | null,
    users?:  {
      __typename: "ModelUserChatRoomConnection",
      nextToken?: string | null,
    } | null,
    LastMessage?:  {
      __typename: "Message",
      id: string,
      text: string,
      chatroomID: string,
      userID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    chatRoomLastMessageId?: string | null,
  } | null,
};

export type CreateMessageMutationVariables = {
  input: CreateMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type CreateMessageMutation = {
  createMessage?:  {
    __typename: "Message",
    id: string,
    text: string,
    chatroomID: string,
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateMessageMutationVariables = {
  input: UpdateMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type UpdateMessageMutation = {
  updateMessage?:  {
    __typename: "Message",
    id: string,
    text: string,
    chatroomID: string,
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteMessageMutationVariables = {
  input: DeleteMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type DeleteMessageMutation = {
  deleteMessage?:  {
    __typename: "Message",
    id: string,
    text: string,
    chatroomID: string,
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateFriendRequestMutationVariables = {
  input: CreateFriendRequestInput,
  condition?: ModelFriendRequestConditionInput | null,
};

export type CreateFriendRequestMutation = {
  createFriendRequest?:  {
    __typename: "FriendRequest",
    id: string,
    senderID: string,
    receiverID: string,
    status?: string | null,
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateFriendRequestMutationVariables = {
  input: UpdateFriendRequestInput,
  condition?: ModelFriendRequestConditionInput | null,
};

export type UpdateFriendRequestMutation = {
  updateFriendRequest?:  {
    __typename: "FriendRequest",
    id: string,
    senderID: string,
    receiverID: string,
    status?: string | null,
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteFriendRequestMutationVariables = {
  input: DeleteFriendRequestInput,
  condition?: ModelFriendRequestConditionInput | null,
};

export type DeleteFriendRequestMutation = {
  deleteFriendRequest?:  {
    __typename: "FriendRequest",
    id: string,
    senderID: string,
    receiverID: string,
    status?: string | null,
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePostMutationVariables = {
  input: CreatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type CreatePostMutation = {
  createPost?:  {
    __typename: "Post",
    id: string,
    content: string,
    image?: string | null,
    comment: number,
    userID: string,
    comments?:  {
      __typename: "ModelCommentPostConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePostMutationVariables = {
  input: UpdatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type UpdatePostMutation = {
  updatePost?:  {
    __typename: "Post",
    id: string,
    content: string,
    image?: string | null,
    comment: number,
    userID: string,
    comments?:  {
      __typename: "ModelCommentPostConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePostMutationVariables = {
  input: DeletePostInput,
  condition?: ModelPostConditionInput | null,
};

export type DeletePostMutation = {
  deletePost?:  {
    __typename: "Post",
    id: string,
    content: string,
    image?: string | null,
    comment: number,
    userID: string,
    comments?:  {
      __typename: "ModelCommentPostConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    name: string,
    username: string,
    occupation?: string | null,
    image: string,
    email: string,
    Posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    Messages?:  {
      __typename: "ModelMessageConnection",
      nextToken?: string | null,
    } | null,
    ChatRooms?:  {
      __typename: "ModelUserChatRoomConnection",
      nextToken?: string | null,
    } | null,
    FriendRequests?: Array< string | null > | null,
    friendrequests?:  {
      __typename: "ModelFriendRequestConnection",
      nextToken?: string | null,
    } | null,
    StudyGroups?:  {
      __typename: "ModelStudyGroupConnection",
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentUserConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    username: string,
    occupation?: string | null,
    image: string,
    email: string,
    Posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    Messages?:  {
      __typename: "ModelMessageConnection",
      nextToken?: string | null,
    } | null,
    ChatRooms?:  {
      __typename: "ModelUserChatRoomConnection",
      nextToken?: string | null,
    } | null,
    FriendRequests?: Array< string | null > | null,
    friendrequests?:  {
      __typename: "ModelFriendRequestConnection",
      nextToken?: string | null,
    } | null,
    StudyGroups?:  {
      __typename: "ModelStudyGroupConnection",
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentUserConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    username: string,
    occupation?: string | null,
    image: string,
    email: string,
    Posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    Messages?:  {
      __typename: "ModelMessageConnection",
      nextToken?: string | null,
    } | null,
    ChatRooms?:  {
      __typename: "ModelUserChatRoomConnection",
      nextToken?: string | null,
    } | null,
    FriendRequests?: Array< string | null > | null,
    friendrequests?:  {
      __typename: "ModelFriendRequestConnection",
      nextToken?: string | null,
    } | null,
    StudyGroups?:  {
      __typename: "ModelStudyGroupConnection",
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentUserConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCommentUserMutationVariables = {
  input: CreateCommentUserInput,
  condition?: ModelCommentUserConditionInput | null,
};

export type CreateCommentUserMutation = {
  createCommentUser?:  {
    __typename: "CommentUser",
    id: string,
    commentId: string,
    userId: string,
    comment:  {
      __typename: "Comment",
      id: string,
      content: string,
      userID: string,
      createdAt: string,
      updatedAt: string,
    },
    user:  {
      __typename: "User",
      id: string,
      name: string,
      username: string,
      occupation?: string | null,
      image: string,
      email: string,
      FriendRequests?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCommentUserMutationVariables = {
  input: UpdateCommentUserInput,
  condition?: ModelCommentUserConditionInput | null,
};

export type UpdateCommentUserMutation = {
  updateCommentUser?:  {
    __typename: "CommentUser",
    id: string,
    commentId: string,
    userId: string,
    comment:  {
      __typename: "Comment",
      id: string,
      content: string,
      userID: string,
      createdAt: string,
      updatedAt: string,
    },
    user:  {
      __typename: "User",
      id: string,
      name: string,
      username: string,
      occupation?: string | null,
      image: string,
      email: string,
      FriendRequests?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCommentUserMutationVariables = {
  input: DeleteCommentUserInput,
  condition?: ModelCommentUserConditionInput | null,
};

export type DeleteCommentUserMutation = {
  deleteCommentUser?:  {
    __typename: "CommentUser",
    id: string,
    commentId: string,
    userId: string,
    comment:  {
      __typename: "Comment",
      id: string,
      content: string,
      userID: string,
      createdAt: string,
      updatedAt: string,
    },
    user:  {
      __typename: "User",
      id: string,
      name: string,
      username: string,
      occupation?: string | null,
      image: string,
      email: string,
      FriendRequests?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCommentPostMutationVariables = {
  input: CreateCommentPostInput,
  condition?: ModelCommentPostConditionInput | null,
};

export type CreateCommentPostMutation = {
  createCommentPost?:  {
    __typename: "CommentPost",
    id: string,
    commentId: string,
    postId: string,
    comment:  {
      __typename: "Comment",
      id: string,
      content: string,
      userID: string,
      createdAt: string,
      updatedAt: string,
    },
    post:  {
      __typename: "Post",
      id: string,
      content: string,
      image?: string | null,
      comment: number,
      userID: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCommentPostMutationVariables = {
  input: UpdateCommentPostInput,
  condition?: ModelCommentPostConditionInput | null,
};

export type UpdateCommentPostMutation = {
  updateCommentPost?:  {
    __typename: "CommentPost",
    id: string,
    commentId: string,
    postId: string,
    comment:  {
      __typename: "Comment",
      id: string,
      content: string,
      userID: string,
      createdAt: string,
      updatedAt: string,
    },
    post:  {
      __typename: "Post",
      id: string,
      content: string,
      image?: string | null,
      comment: number,
      userID: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCommentPostMutationVariables = {
  input: DeleteCommentPostInput,
  condition?: ModelCommentPostConditionInput | null,
};

export type DeleteCommentPostMutation = {
  deleteCommentPost?:  {
    __typename: "CommentPost",
    id: string,
    commentId: string,
    postId: string,
    comment:  {
      __typename: "Comment",
      id: string,
      content: string,
      userID: string,
      createdAt: string,
      updatedAt: string,
    },
    post:  {
      __typename: "Post",
      id: string,
      content: string,
      image?: string | null,
      comment: number,
      userID: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUserChatRoomMutationVariables = {
  input: CreateUserChatRoomInput,
  condition?: ModelUserChatRoomConditionInput | null,
};

export type CreateUserChatRoomMutation = {
  createUserChatRoom?:  {
    __typename: "UserChatRoom",
    id: string,
    chatRoomId: string,
    userId: string,
    chatRoom:  {
      __typename: "ChatRoom",
      id: string,
      createdAt: string,
      updatedAt: string,
      chatRoomLastMessageId?: string | null,
    },
    user:  {
      __typename: "User",
      id: string,
      name: string,
      username: string,
      occupation?: string | null,
      image: string,
      email: string,
      FriendRequests?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserChatRoomMutationVariables = {
  input: UpdateUserChatRoomInput,
  condition?: ModelUserChatRoomConditionInput | null,
};

export type UpdateUserChatRoomMutation = {
  updateUserChatRoom?:  {
    __typename: "UserChatRoom",
    id: string,
    chatRoomId: string,
    userId: string,
    chatRoom:  {
      __typename: "ChatRoom",
      id: string,
      createdAt: string,
      updatedAt: string,
      chatRoomLastMessageId?: string | null,
    },
    user:  {
      __typename: "User",
      id: string,
      name: string,
      username: string,
      occupation?: string | null,
      image: string,
      email: string,
      FriendRequests?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserChatRoomMutationVariables = {
  input: DeleteUserChatRoomInput,
  condition?: ModelUserChatRoomConditionInput | null,
};

export type DeleteUserChatRoomMutation = {
  deleteUserChatRoom?:  {
    __typename: "UserChatRoom",
    id: string,
    chatRoomId: string,
    userId: string,
    chatRoom:  {
      __typename: "ChatRoom",
      id: string,
      createdAt: string,
      updatedAt: string,
      chatRoomLastMessageId?: string | null,
    },
    user:  {
      __typename: "User",
      id: string,
      name: string,
      username: string,
      occupation?: string | null,
      image: string,
      email: string,
      FriendRequests?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetStudySessionQueryVariables = {
  id: string,
};

export type GetStudySessionQuery = {
  getStudySession?:  {
    __typename: "StudySession",
    id: string,
    time?: string | null,
    location?: string | null,
    todo?: string | null,
    studygroupID: string,
    date?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListStudySessionsQueryVariables = {
  filter?: ModelStudySessionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStudySessionsQuery = {
  listStudySessions?:  {
    __typename: "ModelStudySessionConnection",
    items:  Array< {
      __typename: "StudySession",
      id: string,
      time?: string | null,
      location?: string | null,
      todo?: string | null,
      studygroupID: string,
      date?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type StudySessionsByStudygroupIDQueryVariables = {
  studygroupID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelStudySessionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type StudySessionsByStudygroupIDQuery = {
  studySessionsByStudygroupID?:  {
    __typename: "ModelStudySessionConnection",
    items:  Array< {
      __typename: "StudySession",
      id: string,
      time?: string | null,
      location?: string | null,
      todo?: string | null,
      studygroupID: string,
      date?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCommentQueryVariables = {
  id: string,
};

export type GetCommentQuery = {
  getComment?:  {
    __typename: "Comment",
    id: string,
    content: string,
    userID: string,
    createdAt: string,
    updatedAt: string,
    Users?:  {
      __typename: "ModelCommentUserConnection",
      nextToken?: string | null,
    } | null,
    Posts?:  {
      __typename: "ModelCommentPostConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type ListCommentsQueryVariables = {
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCommentsQuery = {
  listComments?:  {
    __typename: "ModelCommentConnection",
    items:  Array< {
      __typename: "Comment",
      id: string,
      content: string,
      userID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetInvitationQueryVariables = {
  id: string,
};

export type GetInvitationQuery = {
  getInvitation?:  {
    __typename: "Invitation",
    id: string,
    userID: string,
    status: string,
    studygroupID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListInvitationsQueryVariables = {
  filter?: ModelInvitationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListInvitationsQuery = {
  listInvitations?:  {
    __typename: "ModelInvitationConnection",
    items:  Array< {
      __typename: "Invitation",
      id: string,
      userID: string,
      status: string,
      studygroupID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type InvitationsByStudygroupIDQueryVariables = {
  studygroupID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelInvitationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type InvitationsByStudygroupIDQuery = {
  invitationsByStudygroupID?:  {
    __typename: "ModelInvitationConnection",
    items:  Array< {
      __typename: "Invitation",
      id: string,
      userID: string,
      status: string,
      studygroupID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStudyGroupQueryVariables = {
  id: string,
};

export type GetStudyGroupQuery = {
  getStudyGroup?:  {
    __typename: "StudyGroup",
    id: string,
    name?: string | null,
    icon?: string | null,
    members: Array< string | null >,
    userID: string,
    isActive?: boolean | null,
    Invitations?:  {
      __typename: "ModelInvitationConnection",
      nextToken?: string | null,
    } | null,
    StudySessions?:  {
      __typename: "ModelStudySessionConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListStudyGroupsQueryVariables = {
  filter?: ModelStudyGroupFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStudyGroupsQuery = {
  listStudyGroups?:  {
    __typename: "ModelStudyGroupConnection",
    items:  Array< {
      __typename: "StudyGroup",
      id: string,
      name?: string | null,
      icon?: string | null,
      members: Array< string | null >,
      userID: string,
      isActive?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type StudyGroupsByUserIDQueryVariables = {
  userID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelStudyGroupFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type StudyGroupsByUserIDQuery = {
  studyGroupsByUserID?:  {
    __typename: "ModelStudyGroupConnection",
    items:  Array< {
      __typename: "StudyGroup",
      id: string,
      name?: string | null,
      icon?: string | null,
      members: Array< string | null >,
      userID: string,
      isActive?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetChatRoomQueryVariables = {
  id: string,
};

export type GetChatRoomQuery = {
  getChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    Messages?:  {
      __typename: "ModelMessageConnection",
      nextToken?: string | null,
    } | null,
    users?:  {
      __typename: "ModelUserChatRoomConnection",
      nextToken?: string | null,
    } | null,
    LastMessage?:  {
      __typename: "Message",
      id: string,
      text: string,
      chatroomID: string,
      userID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    chatRoomLastMessageId?: string | null,
  } | null,
};

export type ListChatRoomsQueryVariables = {
  filter?: ModelChatRoomFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListChatRoomsQuery = {
  listChatRooms?:  {
    __typename: "ModelChatRoomConnection",
    items:  Array< {
      __typename: "ChatRoom",
      id: string,
      createdAt: string,
      updatedAt: string,
      chatRoomLastMessageId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetMessageQueryVariables = {
  id: string,
};

export type GetMessageQuery = {
  getMessage?:  {
    __typename: "Message",
    id: string,
    text: string,
    chatroomID: string,
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListMessagesQueryVariables = {
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMessagesQuery = {
  listMessages?:  {
    __typename: "ModelMessageConnection",
    items:  Array< {
      __typename: "Message",
      id: string,
      text: string,
      chatroomID: string,
      userID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type MessagesByChatroomIDQueryVariables = {
  chatroomID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type MessagesByChatroomIDQuery = {
  messagesByChatroomID?:  {
    __typename: "ModelMessageConnection",
    items:  Array< {
      __typename: "Message",
      id: string,
      text: string,
      chatroomID: string,
      userID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type MessagesByUserIDQueryVariables = {
  userID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type MessagesByUserIDQuery = {
  messagesByUserID?:  {
    __typename: "ModelMessageConnection",
    items:  Array< {
      __typename: "Message",
      id: string,
      text: string,
      chatroomID: string,
      userID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetFriendRequestQueryVariables = {
  id: string,
};

export type GetFriendRequestQuery = {
  getFriendRequest?:  {
    __typename: "FriendRequest",
    id: string,
    senderID: string,
    receiverID: string,
    status?: string | null,
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListFriendRequestsQueryVariables = {
  filter?: ModelFriendRequestFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFriendRequestsQuery = {
  listFriendRequests?:  {
    __typename: "ModelFriendRequestConnection",
    items:  Array< {
      __typename: "FriendRequest",
      id: string,
      senderID: string,
      receiverID: string,
      status?: string | null,
      userID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type FriendRequestsByUserIDQueryVariables = {
  userID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelFriendRequestFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type FriendRequestsByUserIDQuery = {
  friendRequestsByUserID?:  {
    __typename: "ModelFriendRequestConnection",
    items:  Array< {
      __typename: "FriendRequest",
      id: string,
      senderID: string,
      receiverID: string,
      status?: string | null,
      userID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPostQueryVariables = {
  id: string,
};

export type GetPostQuery = {
  getPost?:  {
    __typename: "Post",
    id: string,
    content: string,
    image?: string | null,
    comment: number,
    userID: string,
    comments?:  {
      __typename: "ModelCommentPostConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPostsQueryVariables = {
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPostsQuery = {
  listPosts?:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      id: string,
      content: string,
      image?: string | null,
      comment: number,
      userID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type PostsByUserIDQueryVariables = {
  userID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PostsByUserIDQuery = {
  postsByUserID?:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      id: string,
      content: string,
      image?: string | null,
      comment: number,
      userID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    name: string,
    username: string,
    occupation?: string | null,
    image: string,
    email: string,
    Posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    Messages?:  {
      __typename: "ModelMessageConnection",
      nextToken?: string | null,
    } | null,
    ChatRooms?:  {
      __typename: "ModelUserChatRoomConnection",
      nextToken?: string | null,
    } | null,
    FriendRequests?: Array< string | null > | null,
    friendrequests?:  {
      __typename: "ModelFriendRequestConnection",
      nextToken?: string | null,
    } | null,
    StudyGroups?:  {
      __typename: "ModelStudyGroupConnection",
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentUserConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name: string,
      username: string,
      occupation?: string | null,
      image: string,
      email: string,
      FriendRequests?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCommentUserQueryVariables = {
  id: string,
};

export type GetCommentUserQuery = {
  getCommentUser?:  {
    __typename: "CommentUser",
    id: string,
    commentId: string,
    userId: string,
    comment:  {
      __typename: "Comment",
      id: string,
      content: string,
      userID: string,
      createdAt: string,
      updatedAt: string,
    },
    user:  {
      __typename: "User",
      id: string,
      name: string,
      username: string,
      occupation?: string | null,
      image: string,
      email: string,
      FriendRequests?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCommentUsersQueryVariables = {
  filter?: ModelCommentUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCommentUsersQuery = {
  listCommentUsers?:  {
    __typename: "ModelCommentUserConnection",
    items:  Array< {
      __typename: "CommentUser",
      id: string,
      commentId: string,
      userId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CommentUsersByCommentIdQueryVariables = {
  commentId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCommentUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CommentUsersByCommentIdQuery = {
  commentUsersByCommentId?:  {
    __typename: "ModelCommentUserConnection",
    items:  Array< {
      __typename: "CommentUser",
      id: string,
      commentId: string,
      userId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CommentUsersByUserIdQueryVariables = {
  userId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCommentUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CommentUsersByUserIdQuery = {
  commentUsersByUserId?:  {
    __typename: "ModelCommentUserConnection",
    items:  Array< {
      __typename: "CommentUser",
      id: string,
      commentId: string,
      userId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCommentPostQueryVariables = {
  id: string,
};

export type GetCommentPostQuery = {
  getCommentPost?:  {
    __typename: "CommentPost",
    id: string,
    commentId: string,
    postId: string,
    comment:  {
      __typename: "Comment",
      id: string,
      content: string,
      userID: string,
      createdAt: string,
      updatedAt: string,
    },
    post:  {
      __typename: "Post",
      id: string,
      content: string,
      image?: string | null,
      comment: number,
      userID: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCommentPostsQueryVariables = {
  filter?: ModelCommentPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCommentPostsQuery = {
  listCommentPosts?:  {
    __typename: "ModelCommentPostConnection",
    items:  Array< {
      __typename: "CommentPost",
      id: string,
      commentId: string,
      postId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CommentPostsByCommentIdQueryVariables = {
  commentId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCommentPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CommentPostsByCommentIdQuery = {
  commentPostsByCommentId?:  {
    __typename: "ModelCommentPostConnection",
    items:  Array< {
      __typename: "CommentPost",
      id: string,
      commentId: string,
      postId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CommentPostsByPostIdQueryVariables = {
  postId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCommentPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CommentPostsByPostIdQuery = {
  commentPostsByPostId?:  {
    __typename: "ModelCommentPostConnection",
    items:  Array< {
      __typename: "CommentPost",
      id: string,
      commentId: string,
      postId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserChatRoomQueryVariables = {
  id: string,
};

export type GetUserChatRoomQuery = {
  getUserChatRoom?:  {
    __typename: "UserChatRoom",
    id: string,
    chatRoomId: string,
    userId: string,
    chatRoom:  {
      __typename: "ChatRoom",
      id: string,
      createdAt: string,
      updatedAt: string,
      chatRoomLastMessageId?: string | null,
    },
    user:  {
      __typename: "User",
      id: string,
      name: string,
      username: string,
      occupation?: string | null,
      image: string,
      email: string,
      FriendRequests?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUserChatRoomsQueryVariables = {
  filter?: ModelUserChatRoomFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserChatRoomsQuery = {
  listUserChatRooms?:  {
    __typename: "ModelUserChatRoomConnection",
    items:  Array< {
      __typename: "UserChatRoom",
      id: string,
      chatRoomId: string,
      userId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type UserChatRoomsByChatRoomIdQueryVariables = {
  chatRoomId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserChatRoomFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UserChatRoomsByChatRoomIdQuery = {
  userChatRoomsByChatRoomId?:  {
    __typename: "ModelUserChatRoomConnection",
    items:  Array< {
      __typename: "UserChatRoom",
      id: string,
      chatRoomId: string,
      userId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type UserChatRoomsByUserIdQueryVariables = {
  userId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserChatRoomFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UserChatRoomsByUserIdQuery = {
  userChatRoomsByUserId?:  {
    __typename: "ModelUserChatRoomConnection",
    items:  Array< {
      __typename: "UserChatRoom",
      id: string,
      chatRoomId: string,
      userId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateStudySessionSubscriptionVariables = {
  filter?: ModelSubscriptionStudySessionFilterInput | null,
};

export type OnCreateStudySessionSubscription = {
  onCreateStudySession?:  {
    __typename: "StudySession",
    id: string,
    time?: string | null,
    location?: string | null,
    todo?: string | null,
    studygroupID: string,
    date?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateStudySessionSubscriptionVariables = {
  filter?: ModelSubscriptionStudySessionFilterInput | null,
};

export type OnUpdateStudySessionSubscription = {
  onUpdateStudySession?:  {
    __typename: "StudySession",
    id: string,
    time?: string | null,
    location?: string | null,
    todo?: string | null,
    studygroupID: string,
    date?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteStudySessionSubscriptionVariables = {
  filter?: ModelSubscriptionStudySessionFilterInput | null,
};

export type OnDeleteStudySessionSubscription = {
  onDeleteStudySession?:  {
    __typename: "StudySession",
    id: string,
    time?: string | null,
    location?: string | null,
    todo?: string | null,
    studygroupID: string,
    date?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCommentSubscriptionVariables = {
  filter?: ModelSubscriptionCommentFilterInput | null,
};

export type OnCreateCommentSubscription = {
  onCreateComment?:  {
    __typename: "Comment",
    id: string,
    content: string,
    userID: string,
    createdAt: string,
    updatedAt: string,
    Users?:  {
      __typename: "ModelCommentUserConnection",
      nextToken?: string | null,
    } | null,
    Posts?:  {
      __typename: "ModelCommentPostConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnUpdateCommentSubscriptionVariables = {
  filter?: ModelSubscriptionCommentFilterInput | null,
};

export type OnUpdateCommentSubscription = {
  onUpdateComment?:  {
    __typename: "Comment",
    id: string,
    content: string,
    userID: string,
    createdAt: string,
    updatedAt: string,
    Users?:  {
      __typename: "ModelCommentUserConnection",
      nextToken?: string | null,
    } | null,
    Posts?:  {
      __typename: "ModelCommentPostConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnDeleteCommentSubscriptionVariables = {
  filter?: ModelSubscriptionCommentFilterInput | null,
};

export type OnDeleteCommentSubscription = {
  onDeleteComment?:  {
    __typename: "Comment",
    id: string,
    content: string,
    userID: string,
    createdAt: string,
    updatedAt: string,
    Users?:  {
      __typename: "ModelCommentUserConnection",
      nextToken?: string | null,
    } | null,
    Posts?:  {
      __typename: "ModelCommentPostConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnCreateInvitationSubscriptionVariables = {
  filter?: ModelSubscriptionInvitationFilterInput | null,
};

export type OnCreateInvitationSubscription = {
  onCreateInvitation?:  {
    __typename: "Invitation",
    id: string,
    userID: string,
    status: string,
    studygroupID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateInvitationSubscriptionVariables = {
  filter?: ModelSubscriptionInvitationFilterInput | null,
};

export type OnUpdateInvitationSubscription = {
  onUpdateInvitation?:  {
    __typename: "Invitation",
    id: string,
    userID: string,
    status: string,
    studygroupID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteInvitationSubscriptionVariables = {
  filter?: ModelSubscriptionInvitationFilterInput | null,
};

export type OnDeleteInvitationSubscription = {
  onDeleteInvitation?:  {
    __typename: "Invitation",
    id: string,
    userID: string,
    status: string,
    studygroupID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateStudyGroupSubscriptionVariables = {
  filter?: ModelSubscriptionStudyGroupFilterInput | null,
};

export type OnCreateStudyGroupSubscription = {
  onCreateStudyGroup?:  {
    __typename: "StudyGroup",
    id: string,
    name?: string | null,
    icon?: string | null,
    members: Array< string | null >,
    userID: string,
    isActive?: boolean | null,
    Invitations?:  {
      __typename: "ModelInvitationConnection",
      nextToken?: string | null,
    } | null,
    StudySessions?:  {
      __typename: "ModelStudySessionConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateStudyGroupSubscriptionVariables = {
  filter?: ModelSubscriptionStudyGroupFilterInput | null,
};

export type OnUpdateStudyGroupSubscription = {
  onUpdateStudyGroup?:  {
    __typename: "StudyGroup",
    id: string,
    name?: string | null,
    icon?: string | null,
    members: Array< string | null >,
    userID: string,
    isActive?: boolean | null,
    Invitations?:  {
      __typename: "ModelInvitationConnection",
      nextToken?: string | null,
    } | null,
    StudySessions?:  {
      __typename: "ModelStudySessionConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteStudyGroupSubscriptionVariables = {
  filter?: ModelSubscriptionStudyGroupFilterInput | null,
};

export type OnDeleteStudyGroupSubscription = {
  onDeleteStudyGroup?:  {
    __typename: "StudyGroup",
    id: string,
    name?: string | null,
    icon?: string | null,
    members: Array< string | null >,
    userID: string,
    isActive?: boolean | null,
    Invitations?:  {
      __typename: "ModelInvitationConnection",
      nextToken?: string | null,
    } | null,
    StudySessions?:  {
      __typename: "ModelStudySessionConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateChatRoomSubscriptionVariables = {
  filter?: ModelSubscriptionChatRoomFilterInput | null,
};

export type OnCreateChatRoomSubscription = {
  onCreateChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    Messages?:  {
      __typename: "ModelMessageConnection",
      nextToken?: string | null,
    } | null,
    users?:  {
      __typename: "ModelUserChatRoomConnection",
      nextToken?: string | null,
    } | null,
    LastMessage?:  {
      __typename: "Message",
      id: string,
      text: string,
      chatroomID: string,
      userID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    chatRoomLastMessageId?: string | null,
  } | null,
};

export type OnUpdateChatRoomSubscriptionVariables = {
  filter?: ModelSubscriptionChatRoomFilterInput | null,
};

export type OnUpdateChatRoomSubscription = {
  onUpdateChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    Messages?:  {
      __typename: "ModelMessageConnection",
      nextToken?: string | null,
    } | null,
    users?:  {
      __typename: "ModelUserChatRoomConnection",
      nextToken?: string | null,
    } | null,
    LastMessage?:  {
      __typename: "Message",
      id: string,
      text: string,
      chatroomID: string,
      userID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    chatRoomLastMessageId?: string | null,
  } | null,
};

export type OnDeleteChatRoomSubscriptionVariables = {
  filter?: ModelSubscriptionChatRoomFilterInput | null,
};

export type OnDeleteChatRoomSubscription = {
  onDeleteChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    Messages?:  {
      __typename: "ModelMessageConnection",
      nextToken?: string | null,
    } | null,
    users?:  {
      __typename: "ModelUserChatRoomConnection",
      nextToken?: string | null,
    } | null,
    LastMessage?:  {
      __typename: "Message",
      id: string,
      text: string,
      chatroomID: string,
      userID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    chatRoomLastMessageId?: string | null,
  } | null,
};

export type OnCreateMessageSubscriptionVariables = {
  filter?: ModelSubscriptionMessageFilterInput | null,
};

export type OnCreateMessageSubscription = {
  onCreateMessage?:  {
    __typename: "Message",
    id: string,
    text: string,
    chatroomID: string,
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateMessageSubscriptionVariables = {
  filter?: ModelSubscriptionMessageFilterInput | null,
};

export type OnUpdateMessageSubscription = {
  onUpdateMessage?:  {
    __typename: "Message",
    id: string,
    text: string,
    chatroomID: string,
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteMessageSubscriptionVariables = {
  filter?: ModelSubscriptionMessageFilterInput | null,
};

export type OnDeleteMessageSubscription = {
  onDeleteMessage?:  {
    __typename: "Message",
    id: string,
    text: string,
    chatroomID: string,
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateFriendRequestSubscriptionVariables = {
  filter?: ModelSubscriptionFriendRequestFilterInput | null,
};

export type OnCreateFriendRequestSubscription = {
  onCreateFriendRequest?:  {
    __typename: "FriendRequest",
    id: string,
    senderID: string,
    receiverID: string,
    status?: string | null,
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateFriendRequestSubscriptionVariables = {
  filter?: ModelSubscriptionFriendRequestFilterInput | null,
};

export type OnUpdateFriendRequestSubscription = {
  onUpdateFriendRequest?:  {
    __typename: "FriendRequest",
    id: string,
    senderID: string,
    receiverID: string,
    status?: string | null,
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteFriendRequestSubscriptionVariables = {
  filter?: ModelSubscriptionFriendRequestFilterInput | null,
};

export type OnDeleteFriendRequestSubscription = {
  onDeleteFriendRequest?:  {
    __typename: "FriendRequest",
    id: string,
    senderID: string,
    receiverID: string,
    status?: string | null,
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
};

export type OnCreatePostSubscription = {
  onCreatePost?:  {
    __typename: "Post",
    id: string,
    content: string,
    image?: string | null,
    comment: number,
    userID: string,
    comments?:  {
      __typename: "ModelCommentPostConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
};

export type OnUpdatePostSubscription = {
  onUpdatePost?:  {
    __typename: "Post",
    id: string,
    content: string,
    image?: string | null,
    comment: number,
    userID: string,
    comments?:  {
      __typename: "ModelCommentPostConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
};

export type OnDeletePostSubscription = {
  onDeletePost?:  {
    __typename: "Post",
    id: string,
    content: string,
    image?: string | null,
    comment: number,
    userID: string,
    comments?:  {
      __typename: "ModelCommentPostConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    username: string,
    occupation?: string | null,
    image: string,
    email: string,
    Posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    Messages?:  {
      __typename: "ModelMessageConnection",
      nextToken?: string | null,
    } | null,
    ChatRooms?:  {
      __typename: "ModelUserChatRoomConnection",
      nextToken?: string | null,
    } | null,
    FriendRequests?: Array< string | null > | null,
    friendrequests?:  {
      __typename: "ModelFriendRequestConnection",
      nextToken?: string | null,
    } | null,
    StudyGroups?:  {
      __typename: "ModelStudyGroupConnection",
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentUserConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    username: string,
    occupation?: string | null,
    image: string,
    email: string,
    Posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    Messages?:  {
      __typename: "ModelMessageConnection",
      nextToken?: string | null,
    } | null,
    ChatRooms?:  {
      __typename: "ModelUserChatRoomConnection",
      nextToken?: string | null,
    } | null,
    FriendRequests?: Array< string | null > | null,
    friendrequests?:  {
      __typename: "ModelFriendRequestConnection",
      nextToken?: string | null,
    } | null,
    StudyGroups?:  {
      __typename: "ModelStudyGroupConnection",
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentUserConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    username: string,
    occupation?: string | null,
    image: string,
    email: string,
    Posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    Messages?:  {
      __typename: "ModelMessageConnection",
      nextToken?: string | null,
    } | null,
    ChatRooms?:  {
      __typename: "ModelUserChatRoomConnection",
      nextToken?: string | null,
    } | null,
    FriendRequests?: Array< string | null > | null,
    friendrequests?:  {
      __typename: "ModelFriendRequestConnection",
      nextToken?: string | null,
    } | null,
    StudyGroups?:  {
      __typename: "ModelStudyGroupConnection",
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentUserConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCommentUserSubscriptionVariables = {
  filter?: ModelSubscriptionCommentUserFilterInput | null,
};

export type OnCreateCommentUserSubscription = {
  onCreateCommentUser?:  {
    __typename: "CommentUser",
    id: string,
    commentId: string,
    userId: string,
    comment:  {
      __typename: "Comment",
      id: string,
      content: string,
      userID: string,
      createdAt: string,
      updatedAt: string,
    },
    user:  {
      __typename: "User",
      id: string,
      name: string,
      username: string,
      occupation?: string | null,
      image: string,
      email: string,
      FriendRequests?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCommentUserSubscriptionVariables = {
  filter?: ModelSubscriptionCommentUserFilterInput | null,
};

export type OnUpdateCommentUserSubscription = {
  onUpdateCommentUser?:  {
    __typename: "CommentUser",
    id: string,
    commentId: string,
    userId: string,
    comment:  {
      __typename: "Comment",
      id: string,
      content: string,
      userID: string,
      createdAt: string,
      updatedAt: string,
    },
    user:  {
      __typename: "User",
      id: string,
      name: string,
      username: string,
      occupation?: string | null,
      image: string,
      email: string,
      FriendRequests?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCommentUserSubscriptionVariables = {
  filter?: ModelSubscriptionCommentUserFilterInput | null,
};

export type OnDeleteCommentUserSubscription = {
  onDeleteCommentUser?:  {
    __typename: "CommentUser",
    id: string,
    commentId: string,
    userId: string,
    comment:  {
      __typename: "Comment",
      id: string,
      content: string,
      userID: string,
      createdAt: string,
      updatedAt: string,
    },
    user:  {
      __typename: "User",
      id: string,
      name: string,
      username: string,
      occupation?: string | null,
      image: string,
      email: string,
      FriendRequests?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCommentPostSubscriptionVariables = {
  filter?: ModelSubscriptionCommentPostFilterInput | null,
};

export type OnCreateCommentPostSubscription = {
  onCreateCommentPost?:  {
    __typename: "CommentPost",
    id: string,
    commentId: string,
    postId: string,
    comment:  {
      __typename: "Comment",
      id: string,
      content: string,
      userID: string,
      createdAt: string,
      updatedAt: string,
    },
    post:  {
      __typename: "Post",
      id: string,
      content: string,
      image?: string | null,
      comment: number,
      userID: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCommentPostSubscriptionVariables = {
  filter?: ModelSubscriptionCommentPostFilterInput | null,
};

export type OnUpdateCommentPostSubscription = {
  onUpdateCommentPost?:  {
    __typename: "CommentPost",
    id: string,
    commentId: string,
    postId: string,
    comment:  {
      __typename: "Comment",
      id: string,
      content: string,
      userID: string,
      createdAt: string,
      updatedAt: string,
    },
    post:  {
      __typename: "Post",
      id: string,
      content: string,
      image?: string | null,
      comment: number,
      userID: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCommentPostSubscriptionVariables = {
  filter?: ModelSubscriptionCommentPostFilterInput | null,
};

export type OnDeleteCommentPostSubscription = {
  onDeleteCommentPost?:  {
    __typename: "CommentPost",
    id: string,
    commentId: string,
    postId: string,
    comment:  {
      __typename: "Comment",
      id: string,
      content: string,
      userID: string,
      createdAt: string,
      updatedAt: string,
    },
    post:  {
      __typename: "Post",
      id: string,
      content: string,
      image?: string | null,
      comment: number,
      userID: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUserChatRoomSubscriptionVariables = {
  filter?: ModelSubscriptionUserChatRoomFilterInput | null,
};

export type OnCreateUserChatRoomSubscription = {
  onCreateUserChatRoom?:  {
    __typename: "UserChatRoom",
    id: string,
    chatRoomId: string,
    userId: string,
    chatRoom:  {
      __typename: "ChatRoom",
      id: string,
      createdAt: string,
      updatedAt: string,
      chatRoomLastMessageId?: string | null,
    },
    user:  {
      __typename: "User",
      id: string,
      name: string,
      username: string,
      occupation?: string | null,
      image: string,
      email: string,
      FriendRequests?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserChatRoomSubscriptionVariables = {
  filter?: ModelSubscriptionUserChatRoomFilterInput | null,
};

export type OnUpdateUserChatRoomSubscription = {
  onUpdateUserChatRoom?:  {
    __typename: "UserChatRoom",
    id: string,
    chatRoomId: string,
    userId: string,
    chatRoom:  {
      __typename: "ChatRoom",
      id: string,
      createdAt: string,
      updatedAt: string,
      chatRoomLastMessageId?: string | null,
    },
    user:  {
      __typename: "User",
      id: string,
      name: string,
      username: string,
      occupation?: string | null,
      image: string,
      email: string,
      FriendRequests?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserChatRoomSubscriptionVariables = {
  filter?: ModelSubscriptionUserChatRoomFilterInput | null,
};

export type OnDeleteUserChatRoomSubscription = {
  onDeleteUserChatRoom?:  {
    __typename: "UserChatRoom",
    id: string,
    chatRoomId: string,
    userId: string,
    chatRoom:  {
      __typename: "ChatRoom",
      id: string,
      createdAt: string,
      updatedAt: string,
      chatRoomLastMessageId?: string | null,
    },
    user:  {
      __typename: "User",
      id: string,
      name: string,
      username: string,
      occupation?: string | null,
      image: string,
      email: string,
      FriendRequests?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};
