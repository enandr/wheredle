type GuessableLocation =
  | {
      answer: string;
      image: string;
      location: string;
      date: string;
    }
  | undefined;

export { GuessableLocation };
