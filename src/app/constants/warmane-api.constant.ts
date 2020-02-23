export const warmaneApi = {
  CHARACTER: (name: string, realm: string) => `http://armory.warmane.com/api/character/${name}/${realm}/summary`,
  GUILD: (name: string, realm: string) => `http://armory.warmane.com/api/guild/${name}/${realm}/summary`
};
