import { Reply } from "../interfaces/AppInterfaces";

export const hasReplies = (data: Reply[]) => {
  return data.length > 0;

}