export const warmaneApi = {
  GET_CHARACTER: (name: string, realm: string) => `/character/${name}/${realm}/summary`,
  GET_GUILD: (name: string, realm: string) => `/guild/${name}/${realm}/summary`
};
