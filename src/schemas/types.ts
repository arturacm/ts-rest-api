import { Organization } from "./organizations"
import { Static } from "@sinclair/typebox";

export type OrganizationType = Static<typeof Organization>;
