export interface Login {
  isLoggedIn: boolean | null;
  user: string | null;
  client_id?: string;
  redirect_uri?: string;
  client_secret?: string;
  proxy_url?: string;
}
