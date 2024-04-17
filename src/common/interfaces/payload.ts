export type Payload = {
  first_name: string;
  last_name: string;
  dni: string;
  birth_date: string;
  gender: string;
  city: string;
};

export type PayloadRelation = {
  customer: Payload;
  city: {
    id: number;
  };
};
