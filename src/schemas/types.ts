import { Organization } from "./organizations/organizations"
import { Static } from "@sinclair/typebox";

export type OrganizationType = Static<typeof Organization>;
