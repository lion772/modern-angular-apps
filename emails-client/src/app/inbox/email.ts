export interface Email {
  [id: string]: string;
  subject: string;
  text: string;
  to: string;
  from: string;
  html: string;
}

export interface EmailsResponse {
  id: string;
  subject: string;
  from: string;
}
