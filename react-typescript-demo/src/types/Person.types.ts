export type PersonNameProps = {
  first: string;
  last: string;
};

export type PersonProps = {
  name: PersonNameProps;
};

export type PersonListProps = {
  names: PersonNameProps[];
};
