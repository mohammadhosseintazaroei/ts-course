enum EventType {
  SPORT = "sport",
  FRIENDLY = "friendly",
}
type ID = string | number;
type Events = {
  name: string;
  dateCreated: Date;
  type: EventType;
};
interface Events2  {
  name: string;
  dateCreated: Date;
  type: EventType;
};
type UserEvent_type = Events & {
  UserID: ID;
};
type UserEvent_interface = Events2 & {
  UserID: ID;
};

interface UserEvent2_type extends Events {
  UserID:ID
}
interface UserEvent2_interface extends Events2 {
  UserID:ID
}
let userevent: UserEvent2_type = {
  name: "mohammad",
  dateCreated: new Date(),
  type: EventType.SPORT,
  UserID: 1,
};